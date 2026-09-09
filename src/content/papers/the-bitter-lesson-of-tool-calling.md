---
title: The Bitter Lesson of Tool Calling
summary: >-
  This paper compares two ways of letting language models use external tools:
  native JSON tool calls and programmatic tool calling, where tools are exposed
  as typed Python stubs and the model writes code to invoke them. The authors
  frame programmatic tool calling as a more flexible alternative because it can
  naturally chain calls and parallelize work instead of forcing every action
  into rigid JSON messages. They evaluate both approaches across 14 language
  models on BFCL v4, an established benchmark for tool use. The study is
  designed to test whether the code-based approach remains competitive across
  current and earlier model generations under realistic task conditions. Across
  the benchmark, programmatic tool calling matches or exceeds native JSON tool
  calling in 11 of 14 models. The paper reports that the GPT-5.6 family shows a
  10.6% improvement over the JSON baseline. Under parallel fan-out conditions,
  programmatic tool calling matches or outperforms the baseline in 13 of 14
  models. The authors also test a context-rot setting, where the baseline
  degrades while programmatic tool calling remains stable. They report that the
  baseline loses 2.3% on average in that condition. The main conclusion is that
  code-based tool use is a viable and robust alternative to JSON-based tool
  calling. The results also suggest that performance tracks model capability
  across release generations, rather than depending on a single model family or
  benchmark quirk. The key methodological point is that the comparison is
  empirical and benchmark-based, not a proposal for a new training method or a
  purely qualitative argument. Because the abstract does not describe the full
  benchmark protocol, the strongest claims here are those directly supported by
  BFCL v4 evaluation outcomes.
whyItMatters: >-
  This matters because tool use is a core part of how modern LLMs become agents
  that can do useful work outside their training data. If programmatic tool
  calling is more robust in practice, it could simplify agent design and make
  multi-step tool use easier to build and maintain.
limitations: >-
  The evidence is limited to one benchmark, BFCL v4, so the results may not
  fully generalize to other tool-use tasks, APIs, or interaction styles. The
  abstract does not provide enough detail about the exact evaluation setup,
  error analysis, or statistical testing, which makes it harder to judge how
  broad or stable the advantage is. It also focuses on model-level comparisons
  rather than explaining why code-based calling helps, so the mechanism remains
  somewhat underspecified.
authors:
  - Unknown
sourceUrl: 'https://arxiv.org/abs/2608.06370'
sourceHost: arxiv.org
doi: 10.48550/arXiv.2608.06370
year: 2026
sourceContext: fulltext
capturedAt: '2026-09-09T09:04:58.758Z'
draft: false
---
## Summary
This paper compares two ways of letting language models use external tools: native JSON tool calls and programmatic tool calling, where tools are exposed as typed Python stubs and the model writes code to invoke them. The authors frame programmatic tool calling as a more flexible alternative because it can naturally chain calls and parallelize work instead of forcing every action into rigid JSON messages. They evaluate both approaches across 14 language models on BFCL v4, an established benchmark for tool use. The study is designed to test whether the code-based approach remains competitive across current and earlier model generations under realistic task conditions. Across the benchmark, programmatic tool calling matches or exceeds native JSON tool calling in 11 of 14 models. The paper reports that the GPT-5.6 family shows a 10.6% improvement over the JSON baseline. Under parallel fan-out conditions, programmatic tool calling matches or outperforms the baseline in 13 of 14 models. The authors also test a context-rot setting, where the baseline degrades while programmatic tool calling remains stable. They report that the baseline loses 2.3% on average in that condition. The main conclusion is that code-based tool use is a viable and robust alternative to JSON-based tool calling. The results also suggest that performance tracks model capability across release generations, rather than depending on a single model family or benchmark quirk. The key methodological point is that the comparison is empirical and benchmark-based, not a proposal for a new training method or a purely qualitative argument. Because the abstract does not describe the full benchmark protocol, the strongest claims here are those directly supported by BFCL v4 evaluation outcomes.
## Why This Matters
This matters because tool use is a core part of how modern LLMs become agents that can do useful work outside their training data. If programmatic tool calling is more robust in practice, it could simplify agent design and make multi-step tool use easier to build and maintain.
## Caveats and Limitations
The evidence is limited to one benchmark, BFCL v4, so the results may not fully generalize to other tool-use tasks, APIs, or interaction styles. The abstract does not provide enough detail about the exact evaluation setup, error analysis, or statistical testing, which makes it harder to judge how broad or stable the advantage is. It also focuses on model-level comparisons rather than explaining why code-based calling helps, so the mechanism remains somewhat underspecified.
## Key Takeaways
- Programmatic tool calling uses typed Python stubs instead of rigid JSON messages.
- It matched or beat native JSON tool calling in 11 of 14 models overall.
- It performed especially well under parallel fan-out and stayed more stable under context rot.
- The study suggests tool-call performance tracks model generation and capability.
- The main evidence comes from BFCL v4 benchmarking rather than a new training method.
## Source
- DOI: [10.48550/arXiv.2608.06370](https://doi.org/10.48550/arXiv.2608.06370)
- URL: [https://arxiv.org/abs/2608.06370](https://arxiv.org/abs/2608.06370)
