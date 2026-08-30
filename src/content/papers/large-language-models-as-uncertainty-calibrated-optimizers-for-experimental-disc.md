---
title: >-
  Large language models as uncertainty-calibrated optimizers for experimental
  discovery
summary: >-
  The paper addresses a common problem in experimental science: how to choose
  the next candidate to test when experiments are expensive and the search space
  is large. The authors argue that Bayesian optimization is reliable but often
  depends on domain-specific descriptors that do not transfer well across
  scientific areas. They also note that large language models are attractive
  because they can use natural language and general scientific knowledge, but
  their uncertainty is usually not trustworthy enough for high-stakes
  experimental decisions. To bridge these gaps, they introduce GOLLuM, a
  framework that trains language models through the same Gaussian-process
  marginal-likelihood objective used in Bayesian optimization. In this setup,
  the language model is not used as a direct generator of experimental choices,
  but as a learned representation module inside a probabilistic optimizer. The
  key idea is that uncertainty from the Gaussian process provides a learning
  signal that reshapes the language model embeddings toward outcome-relevant
  structure. The authors report that this changes the latent space so that
  experiments with similar outcomes cluster together, which they present as an
  interpretable organization of the design space. They evaluate the approach
  across 23 tasks spanning organic synthesis, materials science, process
  chemistry, and molecular design. Across these benchmarks, they say the method
  ranks first on average and performs strongly from a cold-start setting with
  only ten initially low-performing experiments. The most striking gains appear
  in settings where specialized descriptors are weak or unavailable, especially
  mixed-variable and numerical-only tasks. They also report that the method can
  match traditional Bayesian optimization with fewer experiments and that it
  improves discovery in Buchwald–Hartwig reaction optimization compared with
  expert descriptors and other LLM-based baselines. A central methodological
  detail is that the same hyperparameters are used across tasks, which supports
  the cross-domain claim, but also means the comparison relies on a fixed
  experimental protocol rather than task-specific tuning.
whyItMatters: >-
  This work suggests that language models may become more useful in lab and
  discovery settings if they are trained to respect uncertainty instead of just
  to predict answers. If that holds up, researchers could use
  natural-language-based optimization tools across many kinds of experiments
  without rebuilding domain-specific feature pipelines each time.
limitations: >-
  The evidence is benchmark-based, so the results may not fully reflect messy
  real-world laboratory constraints, changing objectives, or unmodeled
  experimental noise. The approach also still depends on the quality of the
  underlying benchmark representations and Gaussian-process assumptions, which
  may not hold equally well across all problem types. Some of the strongest
  gains appear in settings where conventional descriptors are weakest, so the
  advantage may be smaller in domains with already strong hand-crafted features.
authors:
  - Bojana Ranković
  - Ryan-Rhys Griffiths
  - Philippe Schwaller
sourceUrl: 'https://www.nature.com/articles/s42256-026-01283-z.pdf'
sourceHost: nature.com
doi: 10.1038/s42256-026-01283-z
year: 2026
journal: Nature Machine Intelligence
sourceContext: fulltext
capturedAt: '2026-08-30T10:40:42.075Z'
draft: false
---
## Summary
The paper addresses a common problem in experimental science: how to choose the next candidate to test when experiments are expensive and the search space is large. The authors argue that Bayesian optimization is reliable but often depends on domain-specific descriptors that do not transfer well across scientific areas. They also note that large language models are attractive because they can use natural language and general scientific knowledge, but their uncertainty is usually not trustworthy enough for high-stakes experimental decisions. To bridge these gaps, they introduce GOLLuM, a framework that trains language models through the same Gaussian-process marginal-likelihood objective used in Bayesian optimization. In this setup, the language model is not used as a direct generator of experimental choices, but as a learned representation module inside a probabilistic optimizer. The key idea is that uncertainty from the Gaussian process provides a learning signal that reshapes the language model embeddings toward outcome-relevant structure. The authors report that this changes the latent space so that experiments with similar outcomes cluster together, which they present as an interpretable organization of the design space. They evaluate the approach across 23 tasks spanning organic synthesis, materials science, process chemistry, and molecular design. Across these benchmarks, they say the method ranks first on average and performs strongly from a cold-start setting with only ten initially low-performing experiments. The most striking gains appear in settings where specialized descriptors are weak or unavailable, especially mixed-variable and numerical-only tasks. They also report that the method can match traditional Bayesian optimization with fewer experiments and that it improves discovery in Buchwald–Hartwig reaction optimization compared with expert descriptors and other LLM-based baselines. A central methodological detail is that the same hyperparameters are used across tasks, which supports the cross-domain claim, but also means the comparison relies on a fixed experimental protocol rather than task-specific tuning.
## Why This Matters
This work suggests that language models may become more useful in lab and discovery settings if they are trained to respect uncertainty instead of just to predict answers. If that holds up, researchers could use natural-language-based optimization tools across many kinds of experiments without rebuilding domain-specific feature pipelines each time.
## Caveats and Limitations
The evidence is benchmark-based, so the results may not fully reflect messy real-world laboratory constraints, changing objectives, or unmodeled experimental noise. The approach also still depends on the quality of the underlying benchmark representations and Gaussian-process assumptions, which may not hold equally well across all problem types. Some of the strongest gains appear in settings where conventional descriptors are weakest, so the advantage may be smaller in domains with already strong hand-crafted features.
## Key Takeaways
- GOLLuM trains language models with a Bayesian optimization objective rather than using them as standalone optimizers.
- The method is designed to make LLM representations uncertainty-calibrated and more suitable for sequential experimental decision-making.
- It was evaluated across 23 tasks in synthesis, materials, process chemistry, and molecular design.
- The strongest benefits were reported in mixed-variable and numerical-only settings where specialized descriptors are limited.
- The paper emphasizes interpretability, with learned embeddings clustering experiments by outcome rather than by text similarity.
## Source
- DOI: [10.1038/s42256-026-01283-z](https://doi.org/10.1038/s42256-026-01283-z)
- URL: [https://www.nature.com/articles/s42256-026-01283-z.pdf](https://www.nature.com/articles/s42256-026-01283-z.pdf)
