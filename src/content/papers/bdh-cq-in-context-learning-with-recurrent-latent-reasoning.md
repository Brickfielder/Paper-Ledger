---
title: 'BDH-CQ: In-Context Learning with Recurrent Latent Reasoning'
summary: >-
  This paper introduces BDH-CQ, a reasoning system that combines in-context
  learning with recurrent latent computation. The model processes demonstrations
  sequentially at inference time, updating a recurrent memory with each example
  rather than compressing the task into a single vector. After the
  demonstrations and query are ingested, the model performs iterative reasoning
  in a structured continuous latent space and only decodes the final answer. The
  authors frame this as a way to separate internal computation from verbalized
  chain-of-thought, which reduces reliance on generated reasoning tokens. They
  evaluate the system on ARC-AGI-1, a benchmark where tasks are defined by a few
  demonstrations and require exact visual transformations. The paper reports
  that a 150M-parameter configuration reaches 29.5% pass@2 on the public
  ARC-AGI-1 evaluation set at a computed inference cost of $0.00070 per task.
  The authors argue that this point improves the previously reported
  cost-accuracy Pareto frontier for the benchmark. Beyond the benchmark score,
  the paper uses controlled ARC-like tasks to study what the model learns from
  demonstrations and how consistently it applies inferred rules. These
  experiments suggest that the model can bind reusable visual operations from
  context, but its success varies across concept families. The analysis
  highlights differences between isolated correct outputs and consistent rule
  application across multiple test inputs. The paper also reports that some
  transformation families are much harder than others, with failure patterns
  appearing to depend on the kind of visual relation involved. A key
  methodological detail is that the model is evaluated without updating
  parameters at inference time, so all adaptation must come from recurrent
  memory and latent computation alone. The paper also notes that the generated
  analysis sets are task-specific and that some controlled results are limited
  to small hand-written puzzle families, which constrains how broadly the
  findings can be generalized.
whyItMatters: >-
  This work is interesting because it tries to get the flexibility of in-context
  learning without paying the full token-by-token cost of chain-of-thought
  reasoning. If successful, that could make certain kinds of visual or symbolic
  reasoning cheaper and faster at inference time. It also gives a more
  controlled way to study how models infer rules from examples, which is useful
  beyond this one benchmark.
limitations: >-
  The strongest result is on ARC-AGI-1, so the evidence is still benchmark-bound
  rather than a demonstration of broad reasoning ability. Several controlled
  experiments use small, hand-crafted task families, which makes the conclusions
  useful but narrow. The paper also relies on output-level evaluation, so a
  correct rule applied incompletely can look the same as an incorrect but
  locally similar rule, and the analysis cannot directly inspect the latent
  reasoning process.
authors:
  - Bjorn Engdahl
  - Adrian Kosowski
  - Jan Chorowski
  - Zuzanna Stamirowska
  - Przemyslaw Uznanski
  - Junlin Jiang
  - Rohan Phadke
  - Remigiusz Kinas
  - Richard Zhong
sourceUrl: 'https://arxiv.org/pdf/2608.09888'
sourceHost: arxiv.org
year: 2026
sourceContext: fulltext
capturedAt: '2026-09-01T10:29:42.854Z'
draft: false
---
## Summary
This paper introduces BDH-CQ, a reasoning system that combines in-context learning with recurrent latent computation. The model processes demonstrations sequentially at inference time, updating a recurrent memory with each example rather than compressing the task into a single vector. After the demonstrations and query are ingested, the model performs iterative reasoning in a structured continuous latent space and only decodes the final answer. The authors frame this as a way to separate internal computation from verbalized chain-of-thought, which reduces reliance on generated reasoning tokens. They evaluate the system on ARC-AGI-1, a benchmark where tasks are defined by a few demonstrations and require exact visual transformations. The paper reports that a 150M-parameter configuration reaches 29.5% pass@2 on the public ARC-AGI-1 evaluation set at a computed inference cost of $0.00070 per task. The authors argue that this point improves the previously reported cost-accuracy Pareto frontier for the benchmark. Beyond the benchmark score, the paper uses controlled ARC-like tasks to study what the model learns from demonstrations and how consistently it applies inferred rules. These experiments suggest that the model can bind reusable visual operations from context, but its success varies across concept families. The analysis highlights differences between isolated correct outputs and consistent rule application across multiple test inputs. The paper also reports that some transformation families are much harder than others, with failure patterns appearing to depend on the kind of visual relation involved. A key methodological detail is that the model is evaluated without updating parameters at inference time, so all adaptation must come from recurrent memory and latent computation alone. The paper also notes that the generated analysis sets are task-specific and that some controlled results are limited to small hand-written puzzle families, which constrains how broadly the findings can be generalized.
## Why This Matters
This work is interesting because it tries to get the flexibility of in-context learning without paying the full token-by-token cost of chain-of-thought reasoning. If successful, that could make certain kinds of visual or symbolic reasoning cheaper and faster at inference time. It also gives a more controlled way to study how models infer rules from examples, which is useful beyond this one benchmark.
## Caveats and Limitations
The strongest result is on ARC-AGI-1, so the evidence is still benchmark-bound rather than a demonstration of broad reasoning ability. Several controlled experiments use small, hand-crafted task families, which makes the conclusions useful but narrow. The paper also relies on output-level evaluation, so a correct rule applied incompletely can look the same as an incorrect but locally similar rule, and the analysis cannot directly inspect the latent reasoning process.
## Key Takeaways
- Combines in-context learning with recurrent latent reasoning instead of generated chain-of-thought.
- Updates memory from demonstrations sequentially at inference time, with no parameter updates.
- Reports 29.5% pass@2 on public ARC-AGI-1 at very low computed inference cost.
- Uses controlled ARC-like tasks to probe what transformations are learned and where failures occur.
- Findings suggest rule consistency varies strongly by concept family and task structure.
## Source
- URL: [https://arxiv.org/pdf/2608.09888](https://arxiv.org/pdf/2608.09888)
