# Paper Ledger

Paper Ledger is a small, portable research blog that turns DOI or URL captures into published paper summaries.

## What it does

- watches `inbox/` for tiny capture files
- fetches DOI metadata when available
- extracts readable page text when possible
- asks OpenAI for a concise summary, tags, and takeaways
- writes a Markdown paper note to `src/content/papers/`
- deploys the site automatically through GitHub Pages

Each paper note includes the DOI when one exists, or the source URL otherwise.

## Conference summaries from Thread

Thread uploads reviewed summaries to `src/data/thread-conferences/<slug>.json` through GitHub's Contents API. The existing Pages workflow publishes them at `conference-notes/from-thread/<slug>/` and adds them to the Conference Notes index. Existing manually authored conference pages remain available.

Version 1 files contain the conference name, dates, location, introduction, programme URL and a list of notes with stable IDs, title, summary, speaker, day, time, session and any attribution uncertainty. The build validates the format and rejects extra fields, duplicate IDs and mismatched filenames. Summary text is escaped before display. Audio and transcripts are not accepted. `public/thread-conference-upload.json` advertises support to the app.

## Local setup

1. Install dependencies:

```bash
npm install --no-bin-links
```

`--no-bin-links` matters on this USB drive because the filesystem does not support the symlinks npm normally creates.

2. Copy `.env.example` to `.env` and add your OpenAI API key.

3. Start the site locally:

```bash
npm run dev
```

4. Process the inbox locally whenever you want:

```bash
npm run process:inbox
```

To queue one or more DOI/URL captures locally without hand-creating inbox files:

```bash
npm run queue:source -- 10.1016/j.neuroimage.2026.121765 10.1016/j.dcn.2026.101704
```

If you need to rerun extraction/summarization for a DOI or URL that already exists in `src/content/papers/`, add it to `inbox/` again and run:

```bash
npm run process:inbox:force
```

`process:inbox:force` removes the existing matching paper entry (same DOI or source URL) and regenerates it from the new extraction pass.

## Inbox usage

Add a small text file to `inbox/`. The file can be as short as a DOI or a URL.

Example:

```text
10.48550/arXiv.2303.08774
```

Optional frontmatter is supported:

```md
---
source: https://arxiv.org/abs/2303.08774
notes: Revisit the benchmark framing.
---
```

Processed files are moved into `inbox/archive/`.
If a capture has only title-level metadata and no abstract or readable full text, it is moved to `inbox/review/` instead of being published.

## GitHub Actions setup

1. Push this repository to GitHub.
2. Rename the default branch to `main` if needed.
3. In GitHub repository settings, add:
   - secret: `OPENAI_API_KEY`
4. Enable GitHub Pages with the workflow-based deployment option.

The `process-inbox` workflow runs on manual dispatch and whenever files in `inbox/` change on `main`.
The easiest GitHub-only path is manual dispatch: open the workflow, paste one DOI or URL per line into the `sources` field, and run it. The workflow creates the inbox files for you and can optionally force reprocessing of existing entries.
The deploy workflow derives the correct GitHub Pages URL and base path automatically for either a project page or a `username.github.io` site.

## Notes on quality

- Best results come from article pages with accessible abstracts, readable HTML, or open-access PDFs discoverable from DOI metadata.
- Open-access fallback also checks OpenAlex locations when the publisher landing page is bot-blocked.
- Metadata-only captures are not published by default; they are moved to `inbox/review/` for follow-up instead.
- Imported papers are published automatically by default once they clear the minimum source-context check.
