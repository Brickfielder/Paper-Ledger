---
title: 'Towards Reasoning Era: A Survey of Long Chain-of-Thought for Reasoning Large Language Models'
summary: >-
  This survey organizes the emerging literature on long chain-of-thought
  reasoning in large language models. It distinguishes long CoT from shorter
  prompting styles, proposes a taxonomy of reasoning paradigms, and reviews
  phenomena such as deep exploration, reflection, overthinking, and
  inference-time scaling.
whyItMatters: >-
  The paper gives a map of a fast-moving research area that connects reasoning
  models, training methods, test-time compute, evaluation, and efficiency.
limitations: >-
  As a survey in a rapidly moving field, it is useful as a snapshot and
  taxonomy rather than a stable final account. Some claims may age quickly as
  reasoning models, benchmarks, and disclosure practices change.
authors:
  - Qiguang Chen
  - Libo Qin
  - Jinhao Liu
  - Dengyun Peng
  - Jiannan Guan
  - Peng Wang
  - Mengkang Hu
  - Yuhang Zhou
  - Te Gao
  - Wanxiang Che
theme: "AI Agents, Reasoning & Machine Cognition"
sourceUrl: https://arxiv.org/html/2503.09567v5
sourceHost: arxiv.org
doi: 10.48550/arXiv.2503.09567
year: 2025
journal: arXiv
sourceContext: fulltext
capturedAt: '2026-04-25T20:48:00.000Z'
draft: false
---
## Summary

This survey reviews long chain-of-thought reasoning in large language models, motivated by the rise of reasoning-focused systems that spend more tokens and compute on difficult problems. The authors distinguish long CoT from shorter prompting patterns and organize current methods into a taxonomy of reasoning paradigms.

The survey identifies three central characteristics of long CoT: deeper reasoning, broader exploration, and more explicit reflection. These properties can help models solve harder mathematical, coding, and logical tasks, but they also raise problems such as inefficient overthinking and unclear scaling behavior.

The paper also reviews inference-time scaling, where extra compute at test time can improve results, and discusses open directions including multimodal reasoning, better efficiency, stronger knowledge integration, and improved evaluation. Its role is primarily orienting: it helps readers see how long CoT connects prompting, reinforcement learning, search, self-verification, and reasoning benchmarks.

## Why This Matters

Reasoning models are changing the practical behavior of LLM systems. This survey is helpful because it names the design space: when to allocate more inference compute, how to structure exploration and reflection, and where current long-CoT methods still waste effort or fail to generalize.

## Caveats and Limitations

The topic is moving quickly. Model providers often disclose limited training detail, benchmarks can be saturated or contaminated, and visible chain-of-thought is not always the same as the model's internal reasoning. The survey is best treated as a structured snapshot of early long-CoT research.

## Key Takeaways

- Long CoT differs from short CoT by using deeper exploration and reflection.
- Extra inference-time compute can improve reasoning but may also cause overthinking.
- The field spans prompting, training, search, verification, and evaluation.
- Efficiency and faithful assessment remain major bottlenecks.
- The survey is a useful map for current reasoning-model research rather than a settled theory.

## Source

- DOI: [10.48550/arXiv.2503.09567](https://doi.org/10.48550/arXiv.2503.09567)
- URL: [https://arxiv.org/html/2503.09567v5](https://arxiv.org/html/2503.09567v5)
