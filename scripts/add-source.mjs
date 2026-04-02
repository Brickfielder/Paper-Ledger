import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const INBOX_DIR = path.join(ROOT, "inbox");
const rawInputs = process.argv.slice(2);
const sources = rawInputs.flatMap((value) => value.split(/\r?\n/)).map((value) => value.trim()).filter(Boolean);

if (sources.length === 0) {
  console.error("Usage: npm run queue:source -- <doi-or-url> [more-dois-or-urls]");
  process.exit(1);
}

await fs.mkdir(INBOX_DIR, { recursive: true });

const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const created = [];

for (const [index, source] of sources.entries()) {
  const outputPath = path.join(INBOX_DIR, `capture-${timestamp}-${String(index + 1).padStart(2, "0")}.txt`);
  await fs.writeFile(outputPath, `${source}\n`, "utf8");
  created.push(path.relative(ROOT, outputPath));
}

console.log(`Queued ${created.length} source(s):`);
for (const filePath of created) {
  console.log(`- ${filePath}`);
}
