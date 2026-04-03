import fs from "node:fs/promises";
import path from "node:path";
import zlib from "node:zlib";
import matter from "gray-matter";
import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";
import OpenAI from "openai";
import slugify from "slugify";
import { z } from "zod";
import { canonicalTagPrompt, normalizePaperTags } from "../src/lib/tag-taxonomy.mjs";

const ROOT = process.cwd();
const INBOX_DIR = path.join(ROOT, "inbox");
const ARCHIVE_DIR = path.join(INBOX_DIR, "archive");
const REVIEW_DIR = path.join(INBOX_DIR, "review");
const PAPERS_DIR = path.join(ROOT, "src", "content", "papers");
const MODEL = process.env.OPENAI_MODEL || "gpt-5.4-mini";
const AUTO_PUBLISH = process.env.AUTO_PUBLISH !== "false";
const ALLOW_METADATA_ONLY = process.env.ALLOW_METADATA_ONLY === "true";
const FORCE_REPROCESS = process.env.FORCE_REPROCESS === "true";
const MAX_INPUT_CHARS = Number(process.env.MAX_INPUT_CHARS || 16000);
const MAX_ITEMS = Number(process.env.MAX_INBOX_ITEMS || 20);

const summarySchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  whyItMatters: z.string().min(1),
  limitations: z.string().min(1),
  tags: z.array(z.string()).min(1).max(8),
  keyTakeaways: z.array(z.string()).min(2).max(5),
  authors: z.array(z.string()).optional(),
  year: z.number().int().optional(),
  doi: z.string().nullable().optional(),
  sourceUrl: z.string().url(),
  journal: z.string().nullable().optional(),
});

const client = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;

await fs.mkdir(ARCHIVE_DIR, { recursive: true });
await fs.mkdir(REVIEW_DIR, { recursive: true });
await fs.mkdir(PAPERS_DIR, { recursive: true });
const inboxFiles = (await fs.readdir(INBOX_DIR, { withFileTypes: true }))
  .filter((entry) => entry.isFile())
  .filter((entry) => !entry.name.startsWith("."))
  .filter((entry) => !/^readme\./i.test(entry.name))
  .filter((entry) => [".txt", ".md", ".url"].includes(path.extname(entry.name).toLowerCase()))
  .slice(0, MAX_ITEMS);

if (inboxFiles.length === 0) {
  console.log("Inbox is empty.");
  process.exit(0);
}

if (!client) {
  console.error("OPENAI_API_KEY is not set. Cannot process inbox items.");
  process.exit(1);
}

const existingEntries = await readExistingEntries();
const failures = [];
const deferred = [];

for (const entry of inboxFiles) {
  const absolutePath = path.join(INBOX_DIR, entry.name);
  console.log(`Processing ${entry.name}...`);

  try {
    const capture = await parseCaptureFile(absolutePath);
    const sourceProfile = await buildSourceProfile(capture);

    if (sourceProfile.sourceContext === "metadata-only" && !ALLOW_METADATA_ONLY) {
      const reviewPath = await moveToReview(absolutePath, "metadata-only");
      const message =
        "Skipped publishing because no abstract or readable full text could be retrieved. Capture moved to review.";
      deferred.push({
        name: entry.name,
        message,
        reviewPath,
      });
      console.warn(`${message} (${path.relative(ROOT, reviewPath)})`);
      continue;
    }

    const duplicate = findDuplicateEntry(existingEntries, sourceProfile);
    if (duplicate) {
      if (!FORCE_REPROCESS) {
        console.log(`Skipping duplicate source for ${entry.name}.`);
        await archiveFile(absolutePath);
        continue;
      }

      if (duplicate.filePath) {
        await fs.unlink(duplicate.filePath);
        console.log(`Removed existing entry ${path.relative(ROOT, duplicate.filePath)} before reprocessing.`);
      }
      removeEntry(existingEntries, duplicate);
    }

    const generated = await generateSummary({
      capture,
      sourceProfile,
    });
    if (sourceProfile.sourceContext !== "fulltext") {
      console.warn(
        `Limited source context for ${entry.name}: ${sourceProfile.sourceContext}. Summary may rely heavily on metadata.`,
      );
    }

    const slug = await buildUniqueSlug(generated.title);
    const frontmatter = omitUndefined({
      title: generated.title,
      summary: generated.summary,
      whyItMatters: generated.whyItMatters,
      limitations: generated.limitations,
      authors: dedupeTextArray(generated.authors || sourceProfile.authors),
      tags: normalizePaperTags([...(capture.tags || []), ...generated.tags]).slice(0, 8),
      sourceUrl: generated.sourceUrl,
      sourceHost: new URL(generated.sourceUrl).hostname.replace(/^www\./, ""),
      doi: generated.doi || sourceProfile.doi || undefined,
      year: generated.year || sourceProfile.year || undefined,
      journal: generated.journal || sourceProfile.journal || undefined,
      sourceContext: sourceProfile.sourceContext,
      capturedAt: new Date().toISOString(),
      draft: !AUTO_PUBLISH,
    });

    const body = buildMarkdownBody({
      summary: generated.summary,
      whyItMatters: generated.whyItMatters,
      limitations: generated.limitations,
      keyTakeaways: generated.keyTakeaways,
      sourceUrl: generated.sourceUrl,
      doi: frontmatter.doi,
      notes: capture.notes,
      sourceContext: sourceProfile.sourceContext,
    });

    const fileContent = matter.stringify(body, frontmatter);
    const outputPath = path.join(PAPERS_DIR, `${slug}.md`);

    await fs.writeFile(outputPath, fileContent, "utf8");
    existingEntries.push({
      doi: frontmatter.doi,
      sourceUrl: frontmatter.sourceUrl,
      filePath: outputPath,
    });
    await archiveFile(absolutePath);

    console.log(`Created ${path.relative(ROOT, outputPath)}.`);
  } catch (error) {
    const message = formatError(error);
    failures.push({ name: entry.name, message });
    console.error(`Failed to process ${entry.name}:`, message);
  }
}

if (failures.length > 0) {
  console.error(`Inbox processing failed for ${failures.length} item(s).`);

  for (const failure of failures) {
    console.error(`- ${failure.name}: ${failure.message}`);
  }

  process.exit(1);
}

if (deferred.length > 0) {
  console.warn(`Deferred ${deferred.length} item(s) to inbox/review for manual follow-up.`);

  for (const item of deferred) {
    console.warn(`- ${item.name}: ${item.message}`);
  }
}

async function readExistingEntries() {
  try {
    const entries = await fs.readdir(PAPERS_DIR);
    const results = [];

    for (const entry of entries) {
      if (!entry.endsWith(".md")) {
        continue;
      }

      const absolutePath = path.join(PAPERS_DIR, entry);
      const raw = await fs.readFile(absolutePath, "utf8");
      const parsed = matter(raw);

      results.push({
        doi: typeof parsed.data.doi === "string" ? normalizeDoi(parsed.data.doi) : null,
        sourceUrl: typeof parsed.data.sourceUrl === "string" ? normalizeUrl(parsed.data.sourceUrl) : null,
        filePath: absolutePath,
      });
    }

    return results;
  } catch {
    return [];
  }
}

async function parseCaptureFile(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  const ext = path.extname(filePath).toLowerCase();

  if (ext === ".url") {
    const urlMatch = raw.match(/^URL=(.+)$/im);
    if (!urlMatch) {
      throw new Error("URL shortcut file does not contain a URL= line.");
    }

    return {
      source: urlMatch[1].trim(),
      tags: [],
      notes: "",
    };
  }

  const parsed = matter(raw);
  const explicitSource =
    parsed.data.source || parsed.data.url || parsed.data.doi || extractFirstSource(parsed.content) || raw.trim();

  const tags = Array.isArray(parsed.data.tags)
    ? parsed.data.tags.map((tag) => String(tag))
    : typeof parsed.data.tags === "string"
      ? parsed.data.tags.split(",").map((tag) => tag.trim())
      : [];

  const notes =
    typeof parsed.data.notes === "string"
      ? parsed.data.notes.trim()
      : parsed.content
          .split("\n")
          .filter((line) => !line.includes(explicitSource))
          .join("\n")
          .trim();

  return {
    source: String(explicitSource).trim(),
    tags: dedupeTextArray(tags),
    notes,
  };
}

async function buildSourceProfile(capture) {
  const initialDoi = extractDoi(capture.source);
  const initialSourceUrl = looksLikeUrl(capture.source)
    ? capture.source.trim()
    : initialDoi
      ? `https://doi.org/${initialDoi}`
      : null;

  if (!initialSourceUrl && !initialDoi) {
    throw new Error("Capture file needs a DOI or a URL.");
  }

  const crossref = initialDoi ? await fetchCrossref(initialDoi) : null;
  const page = initialSourceUrl ? await fetchReadablePage(initialSourceUrl) : null;
  const pageDoi = page?.doi ? normalizeDoi(page.doi) : null;
  const doi = crossref?.doi || pageDoi || initialDoi || null;
  const enrichedCrossref = !crossref && doi ? await fetchCrossref(doi) : crossref;
  const openAlex = doi ? await fetchOpenAlex(doi) : null;
  const fallbackPage =
    needsFallbackFullText(page?.bodyText) && openAlex
      ? await fetchOpenAccessFallbackPage(openAlex, [initialSourceUrl, page?.sourceUrl].filter(Boolean))
      : null;
  const bestPage = chooseBestPage(page, fallbackPage);
  const sourceUrl =
    page?.sourceUrl || initialSourceUrl || openAlex?.landingPageUrl || fallbackPage?.sourceUrl || (doi ? `https://doi.org/${doi}` : null);
  const abstract = cleanAbstract(enrichedCrossref?.abstract || openAlex?.abstract || "");
  const bodyText = collapseWhitespace(bestPage?.bodyText || "").slice(0, MAX_INPUT_CHARS);

  if (!sourceUrl) {
    throw new Error("Could not determine a source URL.");
  }

  return {
    title: enrichedCrossref?.title || openAlex?.title || bestPage?.title || "Untitled paper",
    authors: dedupeTextArray(enrichedCrossref?.authors || openAlex?.authors || []),
    year: enrichedCrossref?.year || openAlex?.year || undefined,
    journal: enrichedCrossref?.journal || openAlex?.journal || undefined,
    abstract,
    bodyText,
    sourceContext: classifySourceContext({ abstract, bodyText }),
    sourceUrl,
    doi,
  };
}

async function fetchCrossref(doi) {
  try {
    const response = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`, {
      headers: {
        "user-agent": "Paper Ledger Bot/1.0 (mailto:no-reply@example.com)",
      },
    });

    if (!response.ok) {
      return null;
    }

    const payload = await response.json();
    const message = payload.message;

    return {
      title: Array.isArray(message.title) ? message.title[0] : null,
      abstract: message.abstract || "",
      journal: Array.isArray(message["container-title"]) ? message["container-title"][0] : null,
      year: Array.isArray(message.issued?.["date-parts"]) ? message.issued["date-parts"][0][0] : null,
      doi: message.DOI ? normalizeDoi(message.DOI) : null,
      authors: Array.isArray(message.author)
        ? message.author
            .map((author) => [author.given, author.family].filter(Boolean).join(" ").trim())
            .filter(Boolean)
        : [],
    };
  } catch {
    return null;
  }
}

async function fetchOpenAlex(doi) {
  try {
    const response = await fetch(`https://api.openalex.org/works/https://doi.org/${encodeURIComponent(doi)}`, {
      headers: {
        "user-agent": "Paper Ledger Bot/1.0 (mailto:no-reply@example.com)",
      },
    });

    if (!response.ok) {
      return null;
    }

    const work = await response.json();

    return {
      title: work.title || null,
      abstract: reconstructOpenAlexAbstract(work.abstract_inverted_index || null),
      journal: work.primary_location?.source?.display_name || null,
      year: typeof work.publication_year === "number" ? work.publication_year : null,
      authors: Array.isArray(work.authorships)
        ? work.authorships.map((entry) => entry.author?.display_name).filter(Boolean)
        : [],
      landingPageUrl: work.best_oa_location?.landing_page_url || work.primary_location?.landing_page_url || null,
      locations: dedupeLocations(
        [work.best_oa_location, work.primary_location, ...(Array.isArray(work.locations) ? work.locations : [])]
          .filter(Boolean)
          .flatMap((location) => [location.pdf_url, location.landing_page_url].filter(Boolean)),
      ),
    };
  } catch {
    return null;
  }
}

async function fetchReadablePage(url) {
  try {
    const response = await fetch(url, {
      redirect: "follow",
      headers: {
        "user-agent": "Mozilla/5.0 (compatible; PaperLedgerBot/1.0)",
      },
    });

    if (!response.ok) {
      return null;
    }

    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/pdf") || response.url.toLowerCase().includes(".pdf")) {
      const pdfBuffer = Buffer.from(await response.arrayBuffer());
      const pdfText = collapseWhitespace(extractTextFromPdfBuffer(pdfBuffer)).slice(0, MAX_INPUT_CHARS);

      return {
        sourceUrl: response.url,
        title: path.basename(new URL(response.url).pathname) || null,
        bodyText: pdfText,
        doi: null,
      };
    }

    if (!contentType.includes("text/html")) {
      return {
        sourceUrl: response.url,
        title: null,
        bodyText: "",
        doi: null,
      };
    }

    const html = await response.text();
    const dom = new JSDOM(html, { url: response.url });
    const readability = new Readability(dom.window.document);
    const article = readability.parse();
    const readableText = collapseWhitespace(article?.textContent || "");
    const pdfUrl = resolvePdfUrl(dom.window.document, response.url);
    let pdfText = "";

    if (pdfUrl && readableText.length < 1200) {
      pdfText = await fetchPdfText(pdfUrl);
    }
    const metaDoi =
      dom.window.document.querySelector('meta[name="citation_doi"]')?.getAttribute("content") ||
      dom.window.document.querySelector('meta[property="og:doi"]')?.getAttribute("content") ||
      extractDoi(dom.window.document.documentElement.textContent || "");

    return {
      sourceUrl:
        dom.window.document.querySelector('link[rel="canonical"]')?.getAttribute("href") || response.url,
      title:
        dom.window.document.querySelector('meta[property="og:title"]')?.getAttribute("content") ||
        article?.title ||
        dom.window.document.title ||
        null,
      bodyText: (pdfText || readableText).slice(0, MAX_INPUT_CHARS),
      doi: metaDoi || null,
    };
  } catch {
    return null;
  }
}

async function fetchOpenAccessFallbackPage(openAlex, ignoreUrls = []) {
  const ignored = new Set(
    ignoreUrls
      .filter(Boolean)
      .flatMap((url) => {
        try {
          return [normalizeUrl(url)];
        } catch {
          return [];
        }
      }),
  );
  let bestCandidate = null;

  for (const candidateUrl of openAlex.locations || []) {
    let normalized = null;

    try {
      normalized = normalizeUrl(candidateUrl);
    } catch {
      continue;
    }

    if (ignored.has(normalized)) {
      continue;
    }

    const candidate = await fetchReadablePage(candidateUrl);

    if (!candidate) {
      continue;
    }

    if (!bestCandidate || scorePage(candidate) > scorePage(bestCandidate)) {
      bestCandidate = candidate;
    }

    if (hasFullText(candidate.bodyText)) {
      return candidate;
    }
  }

  return bestCandidate;
}

function resolvePdfUrl(document, baseUrl) {
  const candidates = [
    document.querySelector('meta[name="citation_pdf_url"]')?.getAttribute("content"),
    document.querySelector('meta[name="dc.identifier"][content$=".pdf"]')?.getAttribute("content"),
    document.querySelector('link[type="application/pdf"]')?.getAttribute("href"),
    ...Array.from(document.querySelectorAll('a[href*=".pdf"]'))
      .slice(0, 5)
      .map((node) => node.getAttribute("href")),
  ].filter(Boolean);

  for (const candidate of candidates) {
    try {
      return new URL(candidate, baseUrl).toString();
    } catch {
      continue;
    }
  }

  return null;
}

async function fetchPdfText(url) {
  try {
    const response = await fetch(url, {
      redirect: "follow",
      headers: {
        "user-agent": "Mozilla/5.0 (compatible; PaperLedgerBot/1.0)",
      },
    });

    if (!response.ok) {
      return "";
    }

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/pdf") && !response.url.toLowerCase().includes(".pdf")) {
      return "";
    }

    const pdfBuffer = Buffer.from(await response.arrayBuffer());
    return collapseWhitespace(extractTextFromPdfBuffer(pdfBuffer));
  } catch {
    return "";
  }
}

function extractTextFromPdfBuffer(pdfBuffer) {
  const source = pdfBuffer.toString("latin1");
  const chunks = [];
  const streamRegex = /stream\r?\n([\s\S]*?)\r?\nendstream/g;

  for (const match of source.matchAll(streamRegex)) {
    const raw = Buffer.from(match[1], "latin1");
    const decoded = tryInflate(raw) || raw;
    const text = extractPdfTextOperators(decoded.toString("latin1"));
    if (text) {
      chunks.push(text);
    }
  }

  if (chunks.length === 0) {
    return "";
  }

  return chunks.join(" ");
}

function tryInflate(buffer) {
  try {
    return zlib.inflateSync(buffer);
  } catch {
    return null;
  }
}

function extractPdfTextOperators(content) {
  const textBlocks = [];
  const blockRegex = /BT[\s\S]*?ET/g;

  for (const block of content.match(blockRegex) || []) {
    const fragments = [];
    const literalRegex = /\((?:\\.|[^\\)])*\)\s*Tj/g;
    for (const token of block.match(literalRegex) || []) {
      const literal = token.replace(/\s*Tj$/, "").trim();
      const decoded = decodePdfStringLiteral(literal);
      if (decoded) {
        fragments.push(decoded);
      }
    }

    const arrayRegex = /\[(.*?)\]\s*TJ/g;
    for (const arrayMatch of block.matchAll(arrayRegex)) {
      const pieces = arrayMatch[1].match(/\((?:\\.|[^\\)])*\)/g) || [];
      for (const piece of pieces) {
        const decoded = decodePdfStringLiteral(piece);
        if (decoded) {
          fragments.push(decoded);
        }
      }
    }

    if (fragments.length > 0) {
      textBlocks.push(fragments.join(" "));
    }
  }

  return collapseWhitespace(textBlocks.join(" "));
}

function decodePdfStringLiteral(value) {
  if (!value.startsWith("(") || !value.endsWith(")")) {
    return "";
  }

  const inner = value.slice(1, -1);
  return inner
    .replace(/\\\(/g, "(")
    .replace(/\\\)/g, ")")
    .replace(/\\\\/g, "\\")
    .replace(/\\n/g, " ")
    .replace(/\\r/g, " ")
    .replace(/\\t/g, " ")
    .replace(/\\[0-7]{1,3}/g, " ");
}

async function generateSummary({ capture, sourceProfile }) {
  const prompt = [
    "Summarize the following scientific article for a personal research blog.",
    "Return strict JSON only with these keys:",
    '{"title":"string","summary":"string","whyItMatters":"string","limitations":"string","tags":["string"],"keyTakeaways":["string"],"authors":["string"],"year":2024,"doi":"string|null","sourceUrl":"https://...","journal":"string|null"}',
    "Rules:",
    "- Summary should be 12-14 sentences, clear and non-hypey.",
    "- Summary should explain the setup, the main finding, and the most important methodological detail or limitation when available.",
    "- whyItMatters should be 2-3 sentences in plain language.",
    "- limitations should be 2-3 sentences with a brief critical evaluation of the paper's caveats, such as generalization, validation, confounds, or evidence strength.",
    "- tags should be short, lowercase, and specific.",
    `- Prefer these canonical tags when they fit: ${canonicalTagPrompt}.`,
    "- keyTakeaways should be 4-5 bullet-sized lines.",
    "- Preserve the DOI if one is available.",
    "- Preserve the original source URL.",
    "- Prefer the supplied metadata over guessing.",
    "- Do not invent quantitative results, datasets, or implementation details that are not supported by the supplied abstract or article text.",
    "",
    `Capture notes: ${capture.notes || "none"}`,
    `Known title: ${sourceProfile.title}`,
    `Known authors: ${sourceProfile.authors.join(", ") || "unknown"}`,
    `Known year: ${sourceProfile.year || "unknown"}`,
    `Known journal: ${sourceProfile.journal || "unknown"}`,
    `Known DOI: ${sourceProfile.doi || "none"}`,
    `Source context: ${sourceProfile.sourceContext}`,
    `Source URL: ${sourceProfile.sourceUrl}`,
    "",
    "Abstract:",
    sourceProfile.abstract || "No abstract available.",
    "",
    "Readable article text excerpt:",
    sourceProfile.bodyText || "No readable body text available.",
  ].join("\n");

  const response = await client.responses.create({
    model: MODEL,
    reasoning: { effort: "low" },
    max_output_tokens: 2400,
    input: prompt,
  });

  const parsed = summarySchema.parse(extractJson(response.output_text));

  return {
    ...parsed,
    doi: parsed.doi ? normalizeDoi(parsed.doi) : sourceProfile.doi || null,
    sourceUrl: normalizeUrl(parsed.sourceUrl || sourceProfile.sourceUrl),
    authors: dedupeTextArray(parsed.authors || sourceProfile.authors),
    tags: normalizePaperTags(parsed.tags || []),
  };
}

function buildMarkdownBody({ summary, whyItMatters, limitations, keyTakeaways, sourceUrl, doi, notes, sourceContext }) {
  const contextNote =
    sourceContext === "metadata-only"
      ? "Note: this summary was generated from title-level metadata only because no abstract or readable full text could be retrieved."
      : sourceContext === "abstract-only"
        ? "Note: this summary was generated using metadata plus abstract text; readable full text was not available."
        : null;

  const lines = [
    "## Summary",
    "",
    summary,
    contextNote ? "" : null,
    contextNote,
    "",
    "## Why This Matters",
    "",
    whyItMatters,
    "",
    "## Caveats and Limitations",
    "",
    limitations,
    "",
    "## Key Takeaways",
    "",
    ...keyTakeaways.map((item) => `- ${normalizeTakeaway(item)}`),
    "",
    "## Source",
    "",
    doi ? `- DOI: [${doi}](https://doi.org/${doi})` : null,
    `- URL: [${sourceUrl}](${sourceUrl})`,
  ].filter(Boolean);

  if (notes) {
    lines.push("", "## Capture Notes", "", notes);
  }

  return lines.join("\n");
}

function classifySourceContext({ abstract, bodyText }) {
  if (hasFullText(bodyText)) {
    return "fulltext";
  }

  if (abstract) {
    return "abstract-only";
  }

  return "metadata-only";
}

function needsFallbackFullText(bodyText) {
  return !hasFullText(bodyText);
}

function hasFullText(bodyText) {
  if (!bodyText) {
    return false;
  }

  return collapseWhitespace(bodyText).length >= 1500;
}

function chooseBestPage(...pages) {
  return pages.filter(Boolean).sort((left, right) => scorePage(right) - scorePage(left))[0] || null;
}

function scorePage(page) {
  return (collapseWhitespace(page?.bodyText || "").length || 0) + (page?.title ? 100 : 0);
}

function findDuplicateEntry(existingEntries, sourceProfile) {
  const normalizedUrl = normalizeUrl(sourceProfile.sourceUrl);
  const normalizedDoi = sourceProfile.doi ? normalizeDoi(sourceProfile.doi) : null;

  return (
    existingEntries.find(
      (entry) =>
        (normalizedDoi && entry.doi === normalizedDoi) ||
        (normalizedUrl && entry.sourceUrl === normalizedUrl),
    ) || null
  );
}

function removeEntry(existingEntries, target) {
  const index = existingEntries.indexOf(target);
  if (index !== -1) {
    existingEntries.splice(index, 1);
  }
}

async function archiveFile(originalPath) {
  const parsed = path.parse(originalPath);
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const archivePath = path.join(ARCHIVE_DIR, `${parsed.name}-${timestamp}${parsed.ext}`);
  await fs.rename(originalPath, archivePath);
}

async function moveToReview(originalPath, reason) {
  const parsed = path.parse(originalPath);
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const suffix = slugify(reason, { lower: true, strict: true, trim: true }) || "review";
  const reviewPath = path.join(REVIEW_DIR, `${parsed.name}-${suffix}-${timestamp}${parsed.ext}`);
  await fs.rename(originalPath, reviewPath);
  return reviewPath;
}

async function buildUniqueSlug(title) {
  const baseSlug = buildSlug(title);
  let slug = baseSlug;
  let attempt = 2;

  while (await fileExists(path.join(PAPERS_DIR, `${slug}.md`))) {
    slug = `${baseSlug}-${attempt}`;
    attempt += 1;
  }

  return slug;
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function buildSlug(title) {
  return (
    slugify(title, {
      lower: true,
      strict: true,
      trim: true,
    }).slice(0, 80) || "paper-note"
  );
}

function dedupeTextArray(values) {
  return [...new Set(values.map((value) => collapseWhitespace(String(value))).filter(Boolean))];
}

function dedupeLocations(values) {
  return [...new Set(values.map((value) => String(value).trim()).filter(Boolean))];
}

function normalizeUrl(value) {
  const url = new URL(value);
  url.hash = "";
  return url.toString();
}

function normalizeDoi(value) {
  return value
    .trim()
    .replace(/^https?:\/\/doi\.org\//i, "")
    .replace(/^doi:\s*/i, "");
}

function extractDoi(value) {
  const match = value.match(/10\.\d{4,9}\/[-._;()/:A-Z0-9]+/i);
  return match ? normalizeDoi(match[0]) : null;
}

function extractFirstSource(value) {
  const urlMatch = value.match(/https?:\/\/\S+/i);
  if (urlMatch) {
    return urlMatch[0];
  }

  return extractDoi(value);
}

function looksLikeUrl(value) {
  return /^https?:\/\//i.test(value.trim());
}

function cleanAbstract(value) {
  return collapseWhitespace(value.replace(/<[^>]+>/g, " ")).slice(0, 5000);
}

function reconstructOpenAlexAbstract(index) {
  if (!index || typeof index !== "object") {
    return "";
  }

  const words = [];

  for (const [word, positions] of Object.entries(index)) {
    if (!Array.isArray(positions)) {
      continue;
    }

    for (const position of positions) {
      words[position] = word;
    }
  }

  return collapseWhitespace(words.join(" ")).slice(0, 5000);
}

function collapseWhitespace(value) {
  return value.replace(/\s+/g, " ").trim();
}

function normalizeTakeaway(value) {
  return collapseWhitespace(String(value)).replace(/^[-*•\s]+/, "");
}

function extractJson(value) {
  const start = value.indexOf("{");
  const end = value.lastIndexOf("}");

  if (start === -1 || end === -1 || end <= start) {
    throw new Error("Model output did not contain a JSON object.");
  }

  return JSON.parse(value.slice(start, end + 1));
}

function omitUndefined(value) {
  return Object.fromEntries(Object.entries(value).filter(([, entry]) => entry !== undefined));
}

function formatError(error) {
  if (!(error instanceof Error)) {
    return String(error);
  }

  const details = [];

  if ("status" in error && typeof error.status === "number") {
    details.push(`status ${error.status}`);
  }

  if ("code" in error && typeof error.code === "string") {
    details.push(`code ${error.code}`);
  }

  if ("request_id" in error && typeof error.request_id === "string") {
    details.push(`request ${error.request_id}`);
  }

  return details.length > 0 ? `${error.message} (${details.join(", ")})` : error.message;
}
