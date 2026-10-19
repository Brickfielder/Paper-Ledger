---
title: "PaperBanana: Automating Academic Illustration for AI Scientists"
summary: >-
  Zhu and colleagues introduce PaperBanana, a five-agent workflow for generating academic
  methodology diagrams and statistical plots. Retriever, Planner, Stylist, Visualizer, and Critic
  agents use source text, captions, retrieved examples, and iterative review to create illustrations;
  for statistical plots, the system uses generated Python code to preserve numerical detail. On a
  292-case benchmark curated from NeurIPS 2025 papers, PaperBanana outperformed direct image
  generation and other baselines on the authors' VLM-judged measures. A blind human comparison on
  50 cases also favored PaperBanana over direct prompting. The authors report promising results
  for statistical plots, while noting that fidelity and editability remain challenges.
whyItMatters: >-
  The work treats academic figure-making as a multi-step reasoning and quality-control task rather
  than a single image-generation prompt. Its benchmark and ablations offer a way to study how
  example retrieval, planning, style guidance, and critique affect diagram quality. The paper also
  highlights why code-based rendering can be safer than image generation for plots that must
  represent data accurately.
limitations: >-
  The methodology-diagram benchmark contains 292 test cases from NeurIPS 2025 and excludes diagrams
  outside a selected aspect-ratio range, which limits the settings represented. Main evaluations
  rely on a vision-language-model judge, with human checks on subsets; judge-human correlations
  were moderate rather than perfect. PaperBanana remained below human references in faithfulness,
  and its failure cases include incorrect or redundant connections. Its outputs are raster images
  that are difficult to edit. For statistical plots, direct image generation can hallucinate
  numbers or repeat elements, so code-based rendering is important when numerical fidelity matters.
authors:
  - Dawei Zhu
  - Rui Meng
  - Yale Song
  - Xiyu Wei
  - Sujian Li
  - Tomas Pfister
  - Jinsung Yoon
theme: "Artificial Intelligence & Machine Learning"
sourceUrl: "https://arxiv.org/abs/2601.23265"
sourceHost: "arxiv.org"
doi: 10.48550/arXiv.2601.23265
year: 2026
journal: "arXiv preprint"
sourceContext: fulltext
capturedAt: '2026-10-19T06:43:00+01:00'
draft: false
---

## Summary

PaperBanana is a framework for turning a paper's methods description and figure caption into an academic illustration. It coordinates five specialized agents: a Retriever selects relevant examples; a Planner drafts the figure's content; a Stylist adapts it to an automatically summarized academic style guide; a Visualizer renders it; and a Critic checks it against the source and suggests revisions. The visualizer–critic loop runs for three rounds. For statistical plots, the workflow instead generates Python/Matplotlib code so that plotted values can be represented numerically.

The authors introduce PaperBananaBench, a test set of 292 methodology-diagram cases drawn from NeurIPS 2025 papers, alongside 292 reference examples for retrieval. Against direct prompting with Nano-Banana-Pro, PaperBanana's scores improved across faithfulness, conciseness, readability, and aesthetics, with a reported 17.0% gain in the aggregate measure. In a blind comparison of 50 cases by three researchers, PaperBanana was preferred in 72.7% of judgments, tied in 20.7%, and lost in 6.6%. It still scored below the human reference in faithfulness.

For statistical plots, the authors curated 240 test cases and 240 reference examples from ChartMimic. PaperBanana's code-based approach improved the aggregate score by 4.1% over the Gemini-3-Pro baseline. Across both tasks, the paper presents the workflow as a promising aid to figure creation, rather than a replacement for checking figures against their underlying methods or data.

## Why This Matters

The paper frames figure generation as a process that needs content planning, style guidance, rendering, and critique. Its component ablations examine the contribution of those steps, and its comparison of code-based and image-based plotting makes numerical fidelity an explicit concern. The benchmark provides a concrete testbed for future work on scientific illustration.

## Caveats and Limitations

PaperBananaBench is based on NeurIPS 2025 methodology figures, and the authors filtered diagrams by aspect ratio; other fields, figure types, and visual styles may behave differently. The primary benchmark uses a vision-language model as judge. The paper reports agreement checks with other models and human ratings on subsets, but these correlations are moderate, so automated evaluation is not interchangeable with expert review. The method remains less faithful than human-created references in some cases, and its critic can miss incorrect or redundant connections. Outputs are raster images and are difficult to edit. For plots, image generation may introduce numerical hallucinations or repeated visual elements; the authors use executable code for the more precision-sensitive plotting workflow.

## Key Takeaways

- PaperBanana combines retrieval, planning, style guidance, image rendering, and iterative critique.
- On its 292-case diagram benchmark, it outperformed direct prompting across the authors' four judged dimensions; human reviewers preferred it in a 50-case blind comparison.
- A code-based visualizer extends the framework to statistical plots and helps preserve numerical accuracy.
- Outputs still require human checking for technical fidelity, and raster format limits editing.

## Source

- Preprint: [arXiv:2601.23265](https://arxiv.org/abs/2601.23265)
- Version reviewed: [arXiv HTML v2](https://arxiv.org/html/2601.23265v2)
- Full text consulted: [arXiv HTML](https://arxiv.org/html/2601.23265v2)
