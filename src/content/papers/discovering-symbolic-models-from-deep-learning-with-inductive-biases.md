---
title: "Discovering Symbolic Models from Deep Learning with Inductive Biases"
summary: >-
  Cranmer and colleagues propose a way to extract symbolic equations from deep
  models by building in strong inductive biases before applying symbolic
  regression. They train graph neural networks on physical systems, encourage
  sparse internal representations, then fit symbolic expressions to the learned
  message, node or Hamiltonian components. The method recovers known force laws
  and Hamiltonians in particle simulations, and in a cosmology application it
  distills a graph network trained on dark-matter halo simulations into a compact
  analytic expression for predicting halo concentration from nearby mass
  structure.
whyItMatters: >-
  The paper gives a practical recipe for turning neural networks from black-box
  predictors into equation-discovery tools. Instead of asking symbolic
  regression to search an enormous raw space, it uses a structured neural model
  to factor the problem into smaller, interpretable pieces.
limitations: >-
  The approach depends on choosing the right inductive bias for the domain. The
  strongest demonstrations use interacting-particle systems where graph
  networks are naturally aligned with the physics, so success may be harder in
  domains without a clear factorization or with messy, partially observed data.
authors:
  - Miles Cranmer
  - Alvaro Sanchez-Gonzalez
  - Peter Battaglia
  - Rui Xu
  - Kyle Cranmer
  - David Spergel
  - Shirley Ho
theme: "AI Agents, Reasoning & Machine Cognition"
sourceUrl: https://arxiv.org/abs/2006.11287
sourceHost: arxiv.org
doi: 10.48550/arXiv.2006.11287
year: 2020
journal: NeurIPS
sourceContext: fulltext
capturedAt: '2026-06-29T07:31:17+01:00'
draft: false
---
## Summary

This NeurIPS paper develops a framework for extracting symbolic scientific
models from trained deep networks. The authors focus on graph neural networks
because their structure naturally matches interacting systems: edge functions
can represent pairwise interactions, node functions can represent particle
updates, and global functions can represent system-level quantities.

The workflow is simple in outline. First, choose a neural architecture whose
internal pieces line up with the structure of the problem. Second, train it
end-to-end on data. Third, encourage compact latent representations, for example
with sparsity penalties. Fourth, apply symbolic regression to the learned
internal functions rather than to the full high-dimensional raw dataset.

The paper demonstrates the approach on Newtonian dynamics. Graph-network
messages learn low-dimensional representations that are approximately rotated
versions of true force components. Symbolic regression can then recover compact
force laws for several simulated particle systems, including inverse-distance,
inverse-square, spring, charge and discontinuous interactions. A Hamiltonian
variant similarly recovers potential-energy structure.

The final case study applies the same idea to cosmology. A graph network trained
on dark-matter halo simulations learns a low-dimensional interaction summary.
Symbolic regression then distills this model into an analytic expression that
predicts halo concentration from nearby mass distribution, producing a compact
candidate formula rather than only a neural-network predictor.

## Why This Matters

The paper is a clean example of using neural networks as scaffolding for
scientific discovery. Symbolic regression alone can become intractable when the
input space is large. A well-designed neural model can compress and factor the
problem before the symbolic search begins.

That makes interpretability productive rather than decorative. The goal is not
just to explain a trained model after the fact, but to extract equations that
can be inspected, simulated and tested outside the original network.

## Caveats and Limitations

The method works best when the inductive bias is well matched to the domain.
For particle systems, graph networks are a natural choice. In domains without a
clear decomposition into interacting entities, choosing the right structure may
be much harder.

Symbolic regression also remains sensitive to the search space, allowed
operators, noise, and the quality of learned internal representations. The
cosmology example is promising, but new analytic formulas still need domain
validation beyond model fit.

## Key Takeaways

- Structured neural networks can make symbolic regression tractable on harder
  scientific datasets.
- Sparse graph-network messages can align with physical force components.
- The method recovers known force laws and Hamiltonian structure in simulations.
- It also distills a dark-matter halo graph network into an analytic expression.
- Success depends on choosing a useful inductive bias before training.

## Source

- DOI: [10.48550/arXiv.2006.11287](https://doi.org/10.48550/arXiv.2006.11287)
- URL: [https://arxiv.org/abs/2006.11287](https://arxiv.org/abs/2006.11287)
- Full text used: arXiv PDF `https://arxiv.org/pdf/2006.11287v2`

