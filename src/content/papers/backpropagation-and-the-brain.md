---
title: "Backpropagation and the Brain"
summary: >-
  This review argues that backpropagation remains a useful conceptual framework
  for understanding how the brain could solve credit assignment in deep
  multilayer systems, even if cortex does not implement textbook backprop
  literally. The authors propose focusing on functional principles: feedback
  pathways can generate activity differences that approximate gradient-like
  learning signals across layers. They group these ideas under NGRAD (Neural
  Gradient Representation by Activity Differences), reframing the core question
  from “does the brain run exact backprop?” to “which pieces of backprop are
  essential, and how might biology approximate them?”
whyItMatters: >-
  The paper clarifies why efficient credit assignment is central to intelligence,
  explains why naive perturbation and global scalar reinforcement are typically
  too slow for large deep systems, and links machine-learning theory to
  neurobiological evidence on cortical feedback, predictive mismatch signals,
  dendritic compartmentalization, and plasticity. It provides a balanced,
  testable research agenda rather than an all-or-nothing claim.
limitations: >-
  This is a theory-forward review, not a direct demonstration that cortex learns
  with backprop-like mechanisms. Representational matches between deep nets and
  ventral visual cortex are suggestive but not definitive, because similar
  representations can emerge from different learning rules. Biological
  constraints remain substantial (e.g., weight transport, sign/stability of
  error signals, and clean separation of forward vs. backward phases), and the
  NGRAD family was presented as promising but still incomplete at scale.
authors:
  - Blake A. Richards
  - Timothy P. Lillicrap
  - Philippe Beaudoin
  - Yoshua Bengio
  - Rafal Bogacz
  - Amelia Christensen
  - Claudia Clopath
  - Demis Hassabis
  - Daniel Yamins
  - Christopher J. C. Eliasmith
theme: "Biological Learning & Neural Computation"
sourceUrl: "https://doi.org/10.1038/s41583-020-0277-3"
sourceHost: doi.org
doi: "10.1038/s41583-020-0277-3"
year: 2020
journal: "Nature Reviews Neuroscience"
sourceContext: abstract-only
capturedAt: "2026-04-24T00:00:00.000Z"
draft: false
---
## Summary
The paper revisits the long-running “backprop in brains” debate and argues that the most productive framing is functional rather than literal. Instead of asking whether cortex implements textbook backpropagation exactly, the authors ask whether neural circuits can approximate the computational role that makes backprop powerful: efficient multi-layer credit assignment.

Their central proposal is the **NGRAD** view (**Neural Gradient Representation by Activity Differences**): feedback circuitry may drive differences between neural activity states that carry gradient-like information and support local synaptic updates. In this framing, the key contribution of backprop is not a rigid algorithmic recipe but a family of constraints and signals that enable deep learning efficiency.

The review is especially strong in showing why this matters. It explains that purely local perturbation or global scalar reinforcement strategies tend to scale poorly in high-dimensional deep systems, while backprop-like signal routing can dramatically improve sample and compute efficiency. It also integrates machine-learning insights with neuroscience findings on cortical feedback pathways, mismatch/prediction signals, and compartment-specific plasticity mechanisms.

Importantly, the paper is explicit about uncertainty: there is no direct proof that brains use a backprop-like algorithm. The claim is a research program backed by converging indirect evidence, not a settled conclusion.

## Why This Matters
This review reframes a binary, often stale question into a concrete experimental agenda. By isolating the functionally essential ingredients of gradient-based credit assignment and mapping them onto plausible circuit motifs, it creates shared ground between computational neuroscience and modern deep learning.

## Caveats and Limitations
- The argument is inferential: strong conceptual motivation and indirect evidence, but no direct cortical demonstration of backprop-like learning.
- Biological realism constraints remain open, including asymmetric connectivity, error-sign representation, and timing/phase separation.
- NGRAD-style proposals were promising but still incomplete in terms of full-scale, biologically detailed validation.
- Focus is mainly on cortical multilayer learning, while brain-wide learning also depends on recurrence, neuromodulation, development, embodiment, and evolution-shaped priors.

## Key Takeaways
- Backprop is most useful as a functional template for credit assignment, not as a literal cortical implementation claim.
- Activity-difference-based feedback signals (NGRAD) provide a plausible path toward gradient-like learning in biology.
- Deep learning efficiency arguments strongly motivate backprop-like mechanisms in large multilayer systems.
- Current evidence is suggestive rather than definitive; the framework is best seen as a testable roadmap.

## Source
- DOI: [10.1038/s41583-020-0277-3](https://doi.org/10.1038/s41583-020-0277-3)
- URL: [https://doi.org/10.1038/s41583-020-0277-3](https://doi.org/10.1038/s41583-020-0277-3)
