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
tags:
  - llms
  - evaluation
notes: Revisit the benchmark framing.
---
```

Processed files are moved into `inbox/archive/`.

## GitHub Actions setup

1. Push this repository to GitHub.
2. Rename the default branch to `main` if needed.
3. In GitHub repository settings, add:
   - secret: `OPENAI_API_KEY`
4. Enable GitHub Pages with the workflow-based deployment option.

The `process-inbox` workflow runs on manual dispatch and whenever files in `inbox/` change on `main`.
The deploy workflow derives the correct GitHub Pages URL and base path automatically for either a project page or a `username.github.io` site.

## Notes on quality

- Best results come from article pages with accessible abstracts or readable HTML.
- Paywalled papers may be summarized from metadata and abstract only.
- Imported papers are published automatically by default.
