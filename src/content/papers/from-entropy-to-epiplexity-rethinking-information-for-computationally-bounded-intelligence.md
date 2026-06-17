---
title: "From Entropy to Epiplexity: Rethinking Information for Computationally Bounded Intelligence"
summary: >-
  Finzi, Qiu and colleagues argue that standard Shannon entropy and Kolmogorov
  complexity miss a key question for learning systems: what useful structure can
  a computationally bounded learner extract from data? They introduce
  epiplexity as a measure of learnable structural information under compute
  limits, separating it from time-bounded entropy, the unpredictable component
  exemplified by pseudorandomness and chaos. The paper uses theoretical examples
  and empirical estimates across cellular automata, induction, chess,
  OpenWebText and CIFAR-style settings to show that epiplexity tracks useful
  data structure and can reflect transformations or orderings that improve
  downstream learning.
whyItMatters: >-
  The paper gives a vocabulary for data value that is closer to machine
  learning practice than raw entropy. It frames information as something a
  bounded learner can exploit, which makes it relevant to data selection,
  synthetic data, curriculum design and compression-like views of intelligence.
limitations: >-
  Epiplexity is a theoretical and estimation framework, not a simple drop-in
  metric. Practical estimates depend on coding choices, model families,
  compute budgets and optimization. The empirical demonstrations are useful but
  do not yet establish a universal operational standard for dataset evaluation.
authors:
  - Marc Finzi
  - Shikai Qiu
  - Yiding Jiang
  - Pavel Izmailov
  - J. Zico Kolter
  - Andrew Gordon Wilson
theme: "AI Agents, Reasoning & Machine Cognition"
sourceUrl: https://arxiv.org/abs/2601.03220
sourceHost: arxiv.org
doi: 10.48550/arXiv.2601.03220
year: 2026
sourceContext: fulltext
capturedAt: '2026-06-17T18:22:50+01:00'
draft: false
---
## Summary

This arXiv paper asks whether conventional information measures are the right
tools for modern learning systems. Shannon information and Kolmogorov
complexity are powerful, but they treat the observer as computationally
unbounded or focus on distributional description rather than useful learnable
structure. That makes them awkward for questions such as whether a deterministic
transformation can create useful information for a learner, whether data order
matters, and whether likelihood modeling can extract structure beyond the
apparent data-generating process.

The authors introduce epiplexity to capture information available to
computationally bounded intelligence. In this framing, useful information is the
structural content a learner can exploit under a compute budget. Time-bounded
entropy is the complementary unpredictable component: content that remains hard
to learn within the available computation, such as pseudorandom or chaotic
signals.

The paper develops the idea through theory and experiments. It gives formal
arguments around deterministic transformations, pseudorandom generators,
factorization dependence and compute-bounded coding. It also describes practical
estimation procedures based on prequential and requential coding, then applies
them to elementary cellular automata, induction tasks, chess, OpenWebText and
image-data settings.

The empirical message is that epiplexity can respond to structure that matters
for learning. It can distinguish data sources, reflect order or transformation
effects, and track interventions that improve out-of-distribution
generalization. The paper therefore positions epiplexity as a foundation for
data selection rather than just model selection.

## Why This Matters

For machine learning, not all bits are equally useful. Random-looking data can
have high entropy while teaching a bounded learner very little, and a
deterministic transformation can make structure easier to exploit even if it
does not create Shannon information in the classical sense.

Epiplexity is interesting because it makes compute part of the definition. That
fits the practical reality of AI systems: what matters is not only what exists
in the data, but what a finite learner can extract from it.

## Caveats and Limitations

The framework is mathematically ambitious and its estimates are not parameter
free. Results can depend on the chosen coding scheme, model family, optimization
procedure and compute budget. The paper gives experiments across several
settings, but epiplexity is not yet a standardized metric that can be applied
uniformly across all datasets.

The concept is also best read as a foundation for evaluating data and
transformations, not as a complete recipe for building better datasets in every
domain.

## Key Takeaways

- Epiplexity measures learnable structural information for bounded learners.
- Time-bounded entropy captures content that remains unpredictable under a
  compute budget.
- The paper argues that deterministic transformations and data order can matter
  for useful information.
- Practical estimates use compute-bounded coding procedures.
- The framework is aimed at data selection and data transformation, not only
  model selection.

## Source

- DOI: [10.48550/arXiv.2601.03220](https://doi.org/10.48550/arXiv.2601.03220)
- URL: [https://arxiv.org/abs/2601.03220](https://arxiv.org/abs/2601.03220)
- Full text used: [https://arxiv.org/html/2601.03220v2](https://arxiv.org/html/2601.03220v2)

