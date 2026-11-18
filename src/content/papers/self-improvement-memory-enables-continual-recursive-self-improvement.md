---
title: Self-Improvement Memory Enables Continual Recursive Self-Improvement
summary: >-
  This paper studies how to keep optimizing an agent harness after the benchmark
  or policy model changes, rather than treating harness improvement as a one-off
  process. The authors call this setting Continual Recursive Self-Improvement,
  or CRSI. In CRSI, the harness must continue to work across compatible
  benchmarks or across model versions while preserving an executable interface.
  The main idea is to attach Self-Improvement Memory, or SIM, to the harness
  optimizer instead of to the task-solving policy. SIM stores harness problems,
  the edits proposed for them, the rationale for those edits, the predicted
  outcomes, the observed outcomes, and the evaluation context. The memory groups
  repeated edits by the root cause they are meant to address, so later rounds
  can see whether a problem has already been tried, fixed, revised, or failed.
  During optimization, both the proposer and the selector read the full memory
  alongside the usual run history. The paper compares full SIM with a
  harness-transfer baseline, a problem-only memory baseline, and a cold-start
  baseline. It evaluates these settings across four domains: coding, text
  classification, agentic workspace tasks, and engineering design. The
  experiments include both cross-dataset continuation, where the policy stays
  fixed and the benchmark changes, and cross-model continuation, where the
  benchmark stays fixed and the policy changes. The authors report that full SIM
  gives higher final scores than harness-only continuation and root-cause-only
  continuation in their matched comparisons. In a coding setting with ten
  independent source runs, SIM improved final scores in most paired
  continuations and had a statistically significant average advantage over
  harness-only continuation. The most important methodological detail is that
  the source optimization history is preserved as structured memory and reused
  directly during target optimization, rather than being reduced to the harness
  code alone.
whyItMatters: >-
  Many agent systems rely on harnesses for tools, context, and execution logic,
  and those harnesses often need to survive model upgrades or task shifts. This
  work suggests that keeping a structured record of why earlier edits were made
  can make later optimization more effective and less repetitive.
limitations: >-
  The evidence is based on controlled benchmark transitions and compatible
  harness interfaces, so it is strongest for settings that resemble the paper’s
  experimental setup. The memory is read in full by the proposer and selector,
  which may not scale cleanly to much larger histories or more complex systems.
  The study also focuses on harness optimization, so it does not show that the
  same approach will help every kind of continual adaptation problem.
authors:
  - Xin Yu
  - Fei Xia
  - Jiaqi Pan
  - Youbao Tang
  - Chengzhi Liu
  - Adams Yu
  - Sicong Jiang
  - Yanfei Chen
  - Lingzhou Xue
  - Ting Yu
sourceUrl: 'https://arxiv.org/html/2611.18856v1'
sourceHost: arxiv.org
year: 2026
sourceContext: fulltext
capturedAt: '2026-11-18T07:21:23.371Z'
draft: false
---
## Summary
This paper studies how to keep optimizing an agent harness after the benchmark or policy model changes, rather than treating harness improvement as a one-off process. The authors call this setting Continual Recursive Self-Improvement, or CRSI. In CRSI, the harness must continue to work across compatible benchmarks or across model versions while preserving an executable interface. The main idea is to attach Self-Improvement Memory, or SIM, to the harness optimizer instead of to the task-solving policy. SIM stores harness problems, the edits proposed for them, the rationale for those edits, the predicted outcomes, the observed outcomes, and the evaluation context. The memory groups repeated edits by the root cause they are meant to address, so later rounds can see whether a problem has already been tried, fixed, revised, or failed. During optimization, both the proposer and the selector read the full memory alongside the usual run history. The paper compares full SIM with a harness-transfer baseline, a problem-only memory baseline, and a cold-start baseline. It evaluates these settings across four domains: coding, text classification, agentic workspace tasks, and engineering design. The experiments include both cross-dataset continuation, where the policy stays fixed and the benchmark changes, and cross-model continuation, where the benchmark stays fixed and the policy changes. The authors report that full SIM gives higher final scores than harness-only continuation and root-cause-only continuation in their matched comparisons. In a coding setting with ten independent source runs, SIM improved final scores in most paired continuations and had a statistically significant average advantage over harness-only continuation. The most important methodological detail is that the source optimization history is preserved as structured memory and reused directly during target optimization, rather than being reduced to the harness code alone.
## Why This Matters
Many agent systems rely on harnesses for tools, context, and execution logic, and those harnesses often need to survive model upgrades or task shifts. This work suggests that keeping a structured record of why earlier edits were made can make later optimization more effective and less repetitive.
## Caveats and Limitations
The evidence is based on controlled benchmark transitions and compatible harness interfaces, so it is strongest for settings that resemble the paper’s experimental setup. The memory is read in full by the proposer and selector, which may not scale cleanly to much larger histories or more complex systems. The study also focuses on harness optimization, so it does not show that the same approach will help every kind of continual adaptation problem.
## Key Takeaways
- CRSI asks whether harness optimization can continue after the benchmark or model changes.
- SIM stores edit rationale, predicted outcomes, observed outcomes, and context in a structured memory.
- Full SIM outperforms harness-only and root-cause-only continuation in the reported comparisons.
- The method is tested across cross-dataset and cross-model continuation settings.
- The main benefit comes from preserving improvement history, not just the final harness code.
## Source
- URL: [https://arxiv.org/html/2611.18856v1](https://arxiv.org/html/2611.18856v1)
