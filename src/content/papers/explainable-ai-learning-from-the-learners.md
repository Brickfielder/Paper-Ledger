---
title: "Explainable AI: learning from the learners"
summary: >-
  Vinuesa, Brunton and Mengaldo argue that explainable AI (XAI), used alongside causal reasoning and domain validation, can help scientists learn from high-performing but opaque models. Their Perspective frames explainability as a workflow across discovery, optimisation and certification: expose model-internal structure, generate testable hypotheses, guide robust design or control, and make high-stakes systems auditable.
whyItMatters: >-
  The paper gives a disciplined account of how AI can contribute to science without mistaking a persuasive explanation of a model for an explanation of the world. It treats XAI as a bridge from learned representations to candidate mechanisms, but insists that causal claims require faithful models, appropriate assumptions and independent intervention or validation. That distinction is especially valuable as foundation models and agentic systems enter scientific workflows.
limitations: >-
  This is a Perspective, not a systematic review, benchmark or new empirical evaluation. Its framework brings together established methods and illustrative examples, mainly from science and engineering, but does not quantify their relative performance or show that a single end-to-end workflow works across domains. The authors stress that attribution maps, latent variables and post-hoc explanations can be unstable, unfaithful or misleading; none establishes causality in the underlying system without additional evidence.
authors:
  - Ricardo Vinuesa
  - Steven L. Brunton
  - Gianmarco Mengaldo
theme: "Cognition, Prediction & Mental Experience"
sourceUrl: "https://www.nature.com/articles/s41467-026-76359-w"
sourceHost: "nature.com"
year: 2026
journal: "Nature Communications"
sourceContext: fulltext
capturedAt: '2026-08-08T16:40:22+01:00'
draft: false
---

## Summary

Modern machine-learning systems can outperform human-designed models while remaining difficult to inspect. The authors ask whether scientists can nevertheless *learn from the learners*: extract useful, human-understandable knowledge from the internal representations and decisions of AI models.

Their answer is qualified optimism. They use **explainable AI (XAI)** broadly to include post-hoc tools such as feature attribution, counterfactuals and mechanistic interpretability, alongside interpretable scientific-ML methods such as symbolic regression, operator learning and constrained representation learning. These methods can reveal what features, regions, frequencies or latent variables a model uses—and thereby generate candidate mechanisms.

The paper separates three connected applications:

- **Discovery:** use explanations, sparse symbolic models and interpretable latent representations to formulate mechanistic hypotheses and candidate governing laws.
- **Optimisation:** identify influential parameters or physical structures, then use that insight to improve design and control rather than merely optimise a black-box output.
- **Certification:** audit model behaviour, limitations and alignment in higher-risk applications where performance alone is not enough for trust.

A central safeguard runs throughout the Perspective: an XAI result describes the *model*, not automatically the physical or biological system represented in its data. Turning a model-level explanation into a system-level causal claim requires representative data, appropriate physical constraints or governing knowledge, robustness beyond the training distribution, and ideally targeted numerical or real-world interventions.

The authors describe a future workflow in which foundation models learn rich representations, causal analysis probes them in latent space, attributions map important variables back to physical space, and AI agents help select the next informative simulations or experiments. They emphasise that these outputs remain hypothesis-generating until independently validated.

## Why This Matters

The paper is a useful antidote to two opposite errors: treating black-box predictive success as scientific understanding, and treating visually intuitive explanation tools as proof of causation. It provides a practical middle ground in which AI helps discover candidate mechanisms, while experimental and theoretical checks decide whether those mechanisms are real.

It also links explainability to generalisation. A model that has captured stable, causal structure should transfer more reliably to new conditions than one that has learned environment-specific correlations. Explainability therefore becomes part of model diagnosis, not just a retrospective communication layer.

For researchers using complex AI systems, the clearest practical message is that interpretability should be designed into the workflow—through parsimony, constraints, symmetries, suitable coordinates and validation—not added only after a model is deployed.

## Caveats and Limitations

- This is a Perspective: it synthesises and proposes a framework rather than testing it in a new controlled study.
- “XAI” covers a wide family of methods with different guarantees, failure modes and intended uses; conclusions about one method do not transfer automatically to another.
- Feature attributions and saliency maps can be unfaithful, unstable or artefactual. They require their own validation before being treated as descriptions of model computation.
- A faithful description of a model’s internal logic is still not evidence that the highlighted feature is causal in the system itself.
- The worked examples are weighted toward science and engineering. Translation to clinical, social or other high-stakes domains needs domain-specific evidence, governance and validation.

## Key Takeaways

- XAI can turn opaque model behaviour into candidate scientific hypotheses, but it cannot by itself establish real-world causation.
- Discovery, optimisation and certification have different risks and require different levels of explanatory and validation evidence.
- Parsimonious symbolic models, constrained latent spaces and physics-informed architectures can make explanations more interpretable and more likely to generalise.
- Robust explanations need tests of faithfulness and stability; robust causal claims need interventions or independent domain validation.
- The most productive role for AI is a human–machine scientific collaboration in which models propose patterns and people test, refine and govern the resulting explanations.

## Source

- Open-access Perspective, published 6 August 2026.
- DOI: [10.1038/s41467-026-76359-w](https://doi.org/10.1038/s41467-026-76359-w)
- [Read the full article](https://www.nature.com/articles/s41467-026-76359-w)
