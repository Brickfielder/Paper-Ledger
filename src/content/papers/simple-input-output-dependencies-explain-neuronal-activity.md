---
title: "Simple input-output dependencies explain neuronal activity"
summary: >-
  This Nature Physics article argues that much of neuronal activity can be
  explained by direct dependencies between an output neuron and its individual
  inputs, without needing explicit interaction terms between combinations of
  inputs. Lynn builds maximum-entropy models that match each measured
  input-output dependency separately and are equivalent to logistic artificial
  neurons. Across mouse hippocampus, mouse visual cortex and C. elegans
  recordings, relatively sparse sets of direct inputs explain most of the
  variability in neuronal activity, predict many higher-order and time-delayed
  correlations, and recover network features such as sparse, heavy-tailed,
  balanced and directed weights.
whyItMatters: >-
  The paper gives a compact bridge between biological neurons and artificial
  neurons: simple logistic input-output models can explain a surprisingly large
  fraction of activity in real neural populations. That matters for theories of
  neural computation because it suggests that complex-looking higher-order
  structure may often emerge from simpler direct dependencies, rather than
  requiring strongly nonlinear interactions at every neuron.
limitations: >-
  The inferred dependencies are functional and statistical, not direct proof of
  causal synaptic mechanisms. The analysis relies on binarized population
  recordings and on selecting optimal inputs from observed neural activity, so
  latent variables, unobserved inputs, calcium-imaging limits and recurrent
  network effects can still shape the results. The framework explains most, but
  not all, variability, leaving room for dendritic nonlinearities, temporal
  dynamics and other biological mechanisms.
authors:
  - Christopher W. Lynn
theme: "Biological Learning & Neural Computation"
sourceUrl: "https://www.nature.com/articles/s41567-026-03306-3"
sourceHost: www.nature.com
doi: "10.1038/s41567-026-03306-3"
year: 2026
journal: "Nature Physics"
sourceContext: fulltext
capturedAt: "2026-05-18T00:00:00+01:00"
draft: false
---
## Summary
This article asks whether neuronal activity needs complex interactions between
inputs to be explained, or whether the simplest direct input-output
dependencies can already account for most of what is observed. The starting
point is a binary view of a neuron: inputs are active or silent, and the output
neuron either spikes or does not. Lynn then asks what follows if a model is
constrained only to match how the output depends on each input individually,
while remaining maximally random about combinations of inputs.

The resulting maximum-entropy model is equivalent to a logistic artificial
neuron with a bias, linear input weights and a logistic activation. The paper
then applies this framework to large recordings from mouse hippocampus, mouse
visual cortex and C. elegans. For each output neuron, an efficient greedy
algorithm selects a compact set of inputs that best reduces uncertainty about
the output.

Across systems, the direct-dependency models explain a large fraction of
neuronal variability with relatively sparse input sets. In the hippocampal
recording, the paper reports that complete models explain over 90% of a
neuron's entropy, leaving less than 10% for higher-order dependencies,
time-delayed dependencies and latent stochasticity combined. The models also
predict most higher-order co-activity patterns and many time-delayed
correlations, even though those structures were not directly fitted.

The inferred weights have features associated with biological synaptic
connectivity: sparsity, heavy tails, a balance between positive and negative
weights, and strong directionality. The paper therefore argues that simple
direct dependencies can capture both activity patterns and some network-level
structure in real neuronal populations.

## Why This Matters
The paper is interesting because it turns a familiar artificial-neuron model
back toward biology. Instead of using neural networks only as inspiration from
brains to machines, it asks whether real neurons often behave like simple
logistic units once the right inputs are chosen.

That does not make neurons biologically simple. It does suggest that much of the
observable complexity in population activity may be explainable from sparse
direct dependencies. This is useful for computational neuroscience because it
sets a strong baseline: before invoking richer dendritic interactions,
higher-order logic or latent dynamics, one can ask how far direct dependencies
already go.

## Caveats and Limitations
- The inferred weights are functional associations, not direct causal synapses.
- Calcium-imaging recordings and binarization simplify the underlying spike
  dynamics.
- Unobserved inputs and latent variables may contribute to the apparent direct
  dependencies.
- The framework leaves a residual fraction of variability for nonlinear,
  delayed and stochastic mechanisms.
- The results should be tested against electrophysiological recordings and
  increasingly complete connectomic data.

## Key Takeaways
- Direct input-output dependencies explain most neuronal activity variability
  across the systems tested.
- The fitted maximum-entropy models are equivalent to logistic artificial
  neurons.
- Sparse optimal input sets can predict higher-order and time-delayed
  correlations that were not explicitly fitted.
- The inferred networks recover biologically familiar features such as sparse,
  heavy-tailed, balanced and directed weights.
- The paper provides a strong simple-model baseline for theories of neural
  computation.

## Source
- DOI: [10.1038/s41567-026-03306-3](https://doi.org/10.1038/s41567-026-03306-3)
- URL: [https://www.nature.com/articles/s41567-026-03306-3](https://www.nature.com/articles/s41567-026-03306-3)
- Full text used: Nature open-access article page.
