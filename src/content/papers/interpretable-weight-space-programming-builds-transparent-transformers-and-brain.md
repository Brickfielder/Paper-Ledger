---
title: >-
  Interpretable weight-space programming builds transparent transformers and
  brain encoding models
summary: >-
  This paper introduces interpretable weight-space programming (iWSP), a
  workflow in which a large language model agent writes neural network weights
  and code directly, rather than fitting them with backpropagation. The goal is
  to make models that are both effective and human-understandable, especially in
  scientific settings where interpretation matters. In iWSP, an agent gets a
  task description, a starting codebase, and a fixed evaluator, then iteratively
  revises the model based on performance feedback. The setup explicitly forbids
  training loops, optimizers, and backpropagation, so the agent must rely on
  prior knowledge and reason about changes in code. The authors also add an
  interpretability audit, using another LLM to check whether the model edits are
  understandable and whether the rules were followed. They further test whether
  a short text description of the final model is enough for a fresh LLM session
  to rebuild it with similar behavior. As a first validation, the paper applies
  iWSP to 13 algorithmic tasks and 4 NLP tasks, including classification and
  inference benchmarks. On the algorithmic tasks, the agent can often construct
  compact transformer models that solve the problems exactly and generalize well
  to hidden test data. On the NLP tasks, the method still produces competitive
  interpretable models on most datasets, although paraphrase detection remains
  difficult. The paper then applies iWSP to brain encoding problems in vision,
  language, and audition. For visual cortex data, the resulting models
  outperform interpretable baselines and suggest different computations for
  early versus higher visual areas. For language fMRI, the transparent modeling
  process helps reveal a confound in the dataset. For auditory ECoG, the method
  discovers interpretable acoustic features that predict neural responses and
  can even improve a black-box model. Overall, the main message is that frontier
  LLM agents can be used not just to optimize performance, but to search for
  models whose internal structure is easier to inspect and discuss.
whyItMatters: >-
  This work is interesting because it tries to bridge a common gap in science:
  models that predict well but are hard to explain. If the approach holds up, it
  could make neural network models more useful for hypothesis generation in
  neuroscience and other fields where interpretability is part of the goal.
limitations: >-
  The evidence comes from a limited set of benchmarks and datasets, so it is not
  yet clear how broadly the approach will work in other domains or under harder
  real-world constraints. Some of the interpretability claims depend on
  LLM-based audits and reconstruction tests, which are useful but still indirect
  measures of whether humans would truly understand the models. The strongest
  results are on algorithmic tasks, while the scientific datasets show more
  mixed behavior and may be sensitive to dataset-specific confounds or
  evaluation choices.
authors:
  - Yash Mehta
  - Chandan Singh
  - Weijia Xu
  - Richard J. Antonello
  - Adeen Flinker
  - Nima Mesgarani
  - Michael F. Bonner
  - Nebojsa Jojic
  - Jianfeng Gao
sourceUrl: 'https://arxiv.org/html/2611.18114'
sourceHost: arxiv.org
year: 2026
sourceContext: fulltext
capturedAt: '2026-11-22T13:07:05.929Z'
draft: false
---
## Summary
This paper introduces interpretable weight-space programming (iWSP), a workflow in which a large language model agent writes neural network weights and code directly, rather than fitting them with backpropagation. The goal is to make models that are both effective and human-understandable, especially in scientific settings where interpretation matters. In iWSP, an agent gets a task description, a starting codebase, and a fixed evaluator, then iteratively revises the model based on performance feedback. The setup explicitly forbids training loops, optimizers, and backpropagation, so the agent must rely on prior knowledge and reason about changes in code. The authors also add an interpretability audit, using another LLM to check whether the model edits are understandable and whether the rules were followed. They further test whether a short text description of the final model is enough for a fresh LLM session to rebuild it with similar behavior. As a first validation, the paper applies iWSP to 13 algorithmic tasks and 4 NLP tasks, including classification and inference benchmarks. On the algorithmic tasks, the agent can often construct compact transformer models that solve the problems exactly and generalize well to hidden test data. On the NLP tasks, the method still produces competitive interpretable models on most datasets, although paraphrase detection remains difficult. The paper then applies iWSP to brain encoding problems in vision, language, and audition. For visual cortex data, the resulting models outperform interpretable baselines and suggest different computations for early versus higher visual areas. For language fMRI, the transparent modeling process helps reveal a confound in the dataset. For auditory ECoG, the method discovers interpretable acoustic features that predict neural responses and can even improve a black-box model. Overall, the main message is that frontier LLM agents can be used not just to optimize performance, but to search for models whose internal structure is easier to inspect and discuss.
## Why This Matters
This work is interesting because it tries to bridge a common gap in science: models that predict well but are hard to explain. If the approach holds up, it could make neural network models more useful for hypothesis generation in neuroscience and other fields where interpretability is part of the goal.
## Caveats and Limitations
The evidence comes from a limited set of benchmarks and datasets, so it is not yet clear how broadly the approach will work in other domains or under harder real-world constraints. Some of the interpretability claims depend on LLM-based audits and reconstruction tests, which are useful but still indirect measures of whether humans would truly understand the models. The strongest results are on algorithmic tasks, while the scientific datasets show more mixed behavior and may be sensitive to dataset-specific confounds or evaluation choices.
## Key Takeaways
- iWSP asks an LLM agent to build models by writing weights directly, with no gradient-based training.
- The method includes audits to check for interpretability and rule violations, not just prediction accuracy.
- It works well on algorithmic tasks and some NLP benchmarks, especially with compact transformer-style models.
- In brain encoding settings, it can uncover distinct computations, surface confounds, and find interpretable predictive features.
- The main contribution is a workflow for trading off predictive performance against transparency in a controlled way.
## Source
- URL: [https://arxiv.org/html/2611.18114](https://arxiv.org/html/2611.18114)
