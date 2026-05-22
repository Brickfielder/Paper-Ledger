---
title: "A critical initialization for biological neural networks"
summary: >-
  This Nature article links large-scale spontaneous neural activity in mice to
  the dynamics of critically normalized random networks. Pachitariu and
  colleagues show that cortical and brainwide recordings have high-dimensional
  power-law covariance spectra and slow macroscopic modes that resemble linear
  dynamics governed by random symmetric matrices normalized close to the edge of
  stability. The authors contrast this with hippocampal CA1, whose spontaneous
  activity looks more like an efficient, decorrelated code. In simulations,
  critically normalized symmetric dynamics persist under sparse, clustered and
  spatial connectivity and support time-dependent tasks, including zero-shot
  working memory, better than chaotic echo-state networks.
whyItMatters: >-
  The paper gives a concrete mechanistic bridge between spontaneous brainwide
  activity, random-matrix theory and neural-network initialization. It suggests
  that the brain may maintain a critically tuned dynamical scaffold that is
  useful before task-specific learning, rather than spontaneous activity being
  only background noise.
limitations: >-
  The model deliberately simplifies biological circuitry into approximately
  linear stochastic dynamics around a stationary point. The neural evidence is
  from mouse recordings and mostly spontaneous activity, so the proposed role in
  memory-guided tasks remains partly inferential. The authors also note that
  longitudinal recordings during learning and task execution will be needed to
  distinguish whether the same dynamical scaffold is actually recruited during
  behaviour.
authors:
  - Marius Pachitariu
  - Lin Zhong
  - Alexa Gracias
  - Amanda Minisi
  - Crystall Lopez
  - Carsen Stringer
theme: "Biological Learning & Neural Computation"
sourceUrl: "https://www.nature.com/articles/s41586-026-10528-1"
sourceHost: www.nature.com
doi: "10.1038/s41586-026-10528-1"
year: 2026
journal: "Nature"
sourceContext: fulltext
capturedAt: "2026-05-22T00:00:00+01:00"
draft: false
---
## Summary
This article asks how large populations of neurons can show slow, coordinated,
brainwide activity even though individual neuronal interactions are fast and
local. The authors model spontaneous activity as approximately linear dynamics
around a stationary point, driven by independent stochastic inputs and governed
by a random interaction matrix.

The key modelling result is that random symmetric matrices, when critically
normalized so that the largest eigenvalue is close to one, naturally generate
high-dimensional covariance spectra with power-law scaling. This gives a
mathematical account of macroscopic neural activity patterns without requiring a
small number of hand-designed latent variables.

The empirical comparison uses large mouse recordings: fast two-photon calcium
imaging from cortex and hippocampal CA1, plus brainwide Neuropixels recordings.
Cortical and brainwide recordings show power-law covariance spectra and
macroscopic coordination close to the model's critically normalized symmetric
dynamics. CA1 looks different: its spontaneous activity is less globally
coordinated and resembles a more decorrelated code, consistent with a role in
information storage.

The paper then tests whether the model survives more realistic connectivity.
Sparse, clustered and spatially biased networks still generate global activity
modes if there is enough broad connectivity. Finally, the authors show that
these dynamics can support time-dependent computations, including a zero-shot
working memory task, whereas chaotic echo-state networks lose useful memory more
quickly under noise.

## Why This Matters
This is a useful reframing of spontaneous activity. Instead of treating it as
noise or as a low-dimensional latent process, the paper proposes that
spontaneous activity may reflect a critical initialization of a large biological
network: a starting dynamical regime that preserves high-dimensional structure
and long timescales before learning tunes readouts or task-specific pathways.

It also creates a clean bridge to machine learning. Initialization is not just a
technical trick for artificial networks; it may be a biological design principle
for maintaining a dynamical reservoir that can support memory, flexible
computation and rapid task engagement.

## Caveats and Limitations
- The model is intentionally abstract and does not include detailed cell types,
  dendrites, plasticity, neuromodulation or task-specific circuit structure.
- The core empirical comparison is based on mouse recordings, not human neural
  activity.
- The paper studies spontaneous activity most directly; the proposed role in
  memory-guided behaviour is plausible but not fully demonstrated.
- CA1 is treated as an exception, which is informative but also shows that one
  initialization-like account will not describe all brain systems.
- Longitudinal recordings during learning are needed to test whether task
  training modifies, recruits or leaves intact this putative initialization.

## Key Takeaways
- Critically normalized symmetric random matrices can generate the power-law
  covariance structure seen in large-scale neural recordings.
- Cortical and brainwide mouse activity resemble these critically normalized
  dynamics, while CA1 appears more decorrelated.
- Macroscopic activity modes persist even with sparse, clustered or spatially
  biased connectivity.
- Symmetric dynamics support stable time-dependent computation better than more
  chaotic echo-state-style dynamics in the tested tasks.
- The paper proposes spontaneous activity as a biologically useful
  initialization for large neural networks.

## Source
- DOI: [10.1038/s41586-026-10528-1](https://doi.org/10.1038/s41586-026-10528-1)
- URL: [https://www.nature.com/articles/s41586-026-10528-1](https://www.nature.com/articles/s41586-026-10528-1)
- Full text used: Nature open-access article page.
