# Inbox Format

Drop small text files into this folder. The processor reads `.txt`, `.md`, and `.url` files.

The simplest possible file is just a DOI or a URL:

```text
10.48550/arXiv.2303.08774
```

or

```text
https://arxiv.org/abs/2303.08774
```

If you want to nudge the tags or keep a private reminder, use frontmatter:

```md
---
source: https://arxiv.org/abs/2303.08774
tags:
  - llms
  - evaluation
notes: Compare this with the older benchmark paper.
---
```

Processed files are moved into `inbox/archive/` after a post is created or a duplicate is detected.

