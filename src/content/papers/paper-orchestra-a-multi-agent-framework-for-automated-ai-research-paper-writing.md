---
title: >-
  Paper Orchestra: A Multi-Agent Framework for Automated AI Research Paper
  Writing
summary: >-
  This paper presents Paper Orchestra, a multi-agent system designed to turn
  unstructured research materials into a submission-ready LaTeX manuscript. The
  authors frame the problem as going beyond simple text polishing or literature
  review generation to full end-to-end paper writing. Their system is intended
  to work from pre-writing inputs such as an idea summary, experimental logs, a
  target LaTeX template, conference guidelines, and optionally figures. A
  central claim is that existing autonomous writing systems are often tightly
  coupled to their own experiment loops and therefore are not flexible
  stand-alone writing tools. Paper Orchestra separates the writing process into
  specialized agents that handle outlining, plot generation, literature review,
  drafting, and iterative refinement. The outline agent produces a structured
  JSON plan that includes a visualization plan, a literature search strategy,
  and section-level writing guidance. The plotting agent then creates conceptual
  diagrams and statistical plots, using a closed-loop visual refinement process
  to improve the generated figures. The literature review agent searches for and
  synthesizes relevant prior work to support the introduction and related work
  sections. The pipeline is designed to reconstruct a manuscript narrative from
  decontextualized inputs rather than rely on a prewritten draft. To evaluate
  the system, the authors introduce PaperWritingBench, a benchmark built from
  reverse-engineered raw materials derived from 200 accepted papers in top-tier
  AI conferences. The benchmark is meant to isolate the writing task and test
  adaptation to different conference formats. The paper reports that human
  side-by-side evaluations favor Paper Orchestra over autonomous baselines in
  literature review quality and overall manuscript quality. A key methodological
  detail is that the evaluation inputs are anonymized and stripped of citations,
  URLs, and explicit figure or table references to reduce leakage and better
  test reconstruction from raw materials.
whyItMatters: >-
  This work matters because it targets a practical bottleneck in AI-assisted
  science: turning messy early-stage materials into a coherent paper that
  follows conference conventions. If the approach is robust, it could reduce the
  amount of manual work needed to assemble drafts, related work sections, and
  figures from scratch.
limitations: >-
  The evidence is based on a benchmark built from accepted AI papers, so it may
  not reflect the diversity of real-world research writing across fields,
  venues, or weaker drafts. The system is also evaluated through human
  preference comparisons, which are useful but do not fully establish factual
  correctness, citation accuracy, or reproducibility of the generated
  manuscripts. Because the benchmark is reverse-engineered from finished papers,
  the task may be easier or more structured than open-ended authoring from
  genuinely incomplete notes.
authors:
  - Yiwen Song
  - Yale Song
  - Tomas Pfister
  - Jinsung Yoon
sourceUrl: 'https://arxiv.org/pdf/2604.05018'
sourceHost: arxiv.org
doi: 10.48550/arXiv.2604.05018
year: 2026
journal: arXiv preprint
sourceContext: fulltext
capturedAt: '2026-11-17T10:51:50.958Z'
draft: false
---
## Summary
This paper presents Paper Orchestra, a multi-agent system designed to turn unstructured research materials into a submission-ready LaTeX manuscript. The authors frame the problem as going beyond simple text polishing or literature review generation to full end-to-end paper writing. Their system is intended to work from pre-writing inputs such as an idea summary, experimental logs, a target LaTeX template, conference guidelines, and optionally figures. A central claim is that existing autonomous writing systems are often tightly coupled to their own experiment loops and therefore are not flexible stand-alone writing tools. Paper Orchestra separates the writing process into specialized agents that handle outlining, plot generation, literature review, drafting, and iterative refinement. The outline agent produces a structured JSON plan that includes a visualization plan, a literature search strategy, and section-level writing guidance. The plotting agent then creates conceptual diagrams and statistical plots, using a closed-loop visual refinement process to improve the generated figures. The literature review agent searches for and synthesizes relevant prior work to support the introduction and related work sections. The pipeline is designed to reconstruct a manuscript narrative from decontextualized inputs rather than rely on a prewritten draft. To evaluate the system, the authors introduce PaperWritingBench, a benchmark built from reverse-engineered raw materials derived from 200 accepted papers in top-tier AI conferences. The benchmark is meant to isolate the writing task and test adaptation to different conference formats. The paper reports that human side-by-side evaluations favor Paper Orchestra over autonomous baselines in literature review quality and overall manuscript quality. A key methodological detail is that the evaluation inputs are anonymized and stripped of citations, URLs, and explicit figure or table references to reduce leakage and better test reconstruction from raw materials.
## Why This Matters
This work matters because it targets a practical bottleneck in AI-assisted science: turning messy early-stage materials into a coherent paper that follows conference conventions. If the approach is robust, it could reduce the amount of manual work needed to assemble drafts, related work sections, and figures from scratch.
## Caveats and Limitations
The evidence is based on a benchmark built from accepted AI papers, so it may not reflect the diversity of real-world research writing across fields, venues, or weaker drafts. The system is also evaluated through human preference comparisons, which are useful but do not fully establish factual correctness, citation accuracy, or reproducibility of the generated manuscripts. Because the benchmark is reverse-engineered from finished papers, the task may be easier or more structured than open-ended authoring from genuinely incomplete notes.
## Key Takeaways
- Paper Orchestra is a stand-alone multi-agent framework for automated research paper writing.
- It focuses on transforming raw pre-writing materials into a full LaTeX manuscript, not just polishing text.
- The pipeline includes separate agents for outlining, plotting, literature review, drafting, and refinement.
- PaperWritingBench is introduced as a benchmark built from 200 accepted AI conference papers.
- Human evaluations reportedly prefer Paper Orchestra over autonomous baselines on review quality and overall manuscript quality.
## Source
- DOI: [10.48550/arXiv.2604.05018](https://doi.org/10.48550/arXiv.2604.05018)
- URL: [https://arxiv.org/pdf/2604.05018](https://arxiv.org/pdf/2604.05018)
