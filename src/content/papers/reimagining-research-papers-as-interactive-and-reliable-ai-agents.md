---
title: Reimagining research papers as interactive and reliable AI agents
summary: >-
  This paper argues that research papers should be treated not just as static
  documents, but as interactive systems that can be queried and executed through
  AI agents. The authors introduce Paper2Agent, a workflow that converts a
  paper’s methods, code, supplementary materials, and related resources into a
  paper-specific agent. The core technical idea is to represent each paper as a
  remote MCP server, which exposes tools, resources, and prompts that LLM-based
  agents can use. The system is designed to let users ask natural-language
  questions, run methods on new data, and reproduce analyses without manually
  installing code or managing dependencies. A central goal is to lower the
  technical barriers that often prevent researchers from using computational
  methods described in papers. To improve trustworthiness, Paper2Agent validates
  generated tools against the reference codebase and locks validated behavior to
  reduce code hallucination and random variation. The authors also include
  traceable links back to the original source code for each tool. In the
  AlphaGenome case study, the system produced 22 validated MCP tools that
  covered variant scoring, sequence-level prediction, tissue ontology
  exploration, and visualization. The paper reports that the resulting
  AlphaGenome agent could answer tutorial-like, novel, and open-ended genomics
  queries by chaining tools through natural language interaction. The agent was
  benchmarked against human-executed ground truth, Claude Code with direct
  repository access, and Biomni. Across the reported evaluations, Paper2Agent
  performed better on accuracy and runtime than the compared baselines. The
  authors present this as evidence that paper-specific agents can be both more
  usable and more reliable than prompting a general-purpose coding agent
  directly on a repository. The main methodological limitation is that the
  paper’s strongest evidence comes from a single detailed case study, so broader
  generalization across very different codebases and scientific domains remains
  to be shown.
whyItMatters: >-
  Many scientific methods are hard to use even when the paper is well written,
  because the code is complex and setup is fragile. This work points to a more
  practical way to share research: a paper could come with an agent that can
  demonstrate the method, run it on new data, and explain what it is doing in
  plain language.
limitations: >-
  The evaluation is still limited in scope, with the most detailed evidence
  coming from AlphaGenome rather than a broad set of papers across fields. The
  approach also depends on having usable code and materials to extract,
  validate, and package, so it may work better for computational papers than for
  other kinds of research. Although validation helps, the system still inherits
  any weaknesses in the original codebase, benchmarks, or test coverage used to
  define correctness.
authors:
  - Jiacheng Miao
  - Joe R. Davis
  - Yaohui Zhang
  - Jonathan K. Pritchard
  - James Zou
sourceUrl: 'https://www.nature.com/articles/s41586-026-11044-y'
sourceHost: nature.com
doi: 10.1038/s41586-026-11044-y
year: 2026
journal: Nature
sourceContext: fulltext
capturedAt: '2026-09-17T16:56:13.666Z'
draft: false
---
## Summary
This paper argues that research papers should be treated not just as static documents, but as interactive systems that can be queried and executed through AI agents. The authors introduce Paper2Agent, a workflow that converts a paper’s methods, code, supplementary materials, and related resources into a paper-specific agent. The core technical idea is to represent each paper as a remote MCP server, which exposes tools, resources, and prompts that LLM-based agents can use. The system is designed to let users ask natural-language questions, run methods on new data, and reproduce analyses without manually installing code or managing dependencies. A central goal is to lower the technical barriers that often prevent researchers from using computational methods described in papers. To improve trustworthiness, Paper2Agent validates generated tools against the reference codebase and locks validated behavior to reduce code hallucination and random variation. The authors also include traceable links back to the original source code for each tool. In the AlphaGenome case study, the system produced 22 validated MCP tools that covered variant scoring, sequence-level prediction, tissue ontology exploration, and visualization. The paper reports that the resulting AlphaGenome agent could answer tutorial-like, novel, and open-ended genomics queries by chaining tools through natural language interaction. The agent was benchmarked against human-executed ground truth, Claude Code with direct repository access, and Biomni. Across the reported evaluations, Paper2Agent performed better on accuracy and runtime than the compared baselines. The authors present this as evidence that paper-specific agents can be both more usable and more reliable than prompting a general-purpose coding agent directly on a repository. The main methodological limitation is that the paper’s strongest evidence comes from a single detailed case study, so broader generalization across very different codebases and scientific domains remains to be shown.
## Why This Matters
Many scientific methods are hard to use even when the paper is well written, because the code is complex and setup is fragile. This work points to a more practical way to share research: a paper could come with an agent that can demonstrate the method, run it on new data, and explain what it is doing in plain language.
## Caveats and Limitations
The evaluation is still limited in scope, with the most detailed evidence coming from AlphaGenome rather than a broad set of papers across fields. The approach also depends on having usable code and materials to extract, validate, and package, so it may work better for computational papers than for other kinds of research. Although validation helps, the system still inherits any weaknesses in the original codebase, benchmarks, or test coverage used to define correctness.
## Key Takeaways
- Paper2Agent turns a research paper into an interactive AI agent via MCP servers.
- The system packages methods as tools, static materials as resources, and workflows as prompts.
- Validated tools are checked against reference outputs to reduce hallucinated or unstable code.
- In the AlphaGenome case study, the generated agent handled variant-analysis and interpretation tasks.
- The main claim is improved usability and reproducibility compared with direct repository use.
## Source
- DOI: [10.1038/s41586-026-11044-y](https://doi.org/10.1038/s41586-026-11044-y)
- URL: [https://www.nature.com/articles/s41586-026-11044-y](https://www.nature.com/articles/s41586-026-11044-y)
