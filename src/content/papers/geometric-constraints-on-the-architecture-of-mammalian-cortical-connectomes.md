---
title: "Geometric constraints on the architecture of mammalian cortical connectomes"
summary: >-
  Normand and colleagues propose a geometric eigenmode model of cortical
  connectivity derived from neural field theory. The model assumes that cortical
  connections are preferentially retained between locations that help excite the
  cortex's resonant geometric modes. Using only cortical geometry and two fitted
  parameters, it reproduces topological and topographical features of empirical
  connectomes in humans, chimpanzees, macaques, marmosets and mice, across
  diffusion MRI and invasive tract-tracing datasets.
whyItMatters: >-
  The paper gives a compact physical explanation for why mammalian cortical
  wiring is neither random nor fully regular. It links connectome architecture
  to the geometry of the cortical sheet and suggests that conserved wave-like
  dynamics may have shaped brain wiring across roughly 90 million years of
  mammalian evolution.
limitations: >-
  The model is intentionally simplified. It focuses on intra-hemispheric
  cortico-cortical connectivity, omits inter-hemispheric and subcortical
  connections, uses a steady-state approximation, and struggles with some rare
  long-range connections. Individual diffusion-MRI connectomes are also noisy,
  which limits interpretation of person-level parameter differences.
authors:
  - Francis Normand
  - Mehul Gajwani
  - Trang Cao
  - Jace Cruddas
  - Arshiya Sangchooli
  - Stuart Oldham
  - Alexander Holmes
  - Peter A. Robinson
  - James C. Pang
  - Alex Fornito
theme: "Brain Maps & Connectomes"
sourceUrl: https://doi.org/10.1016/j.cell.2026.05.048
sourceHost: doi.org
doi: 10.1016/j.cell.2026.05.048
year: 2026
journal: Cell
sourceContext: fulltext
capturedAt: '2026-06-30T21:31:47+01:00'
draft: false
---

## Summary

This Cell paper asks why mammalian cortical connectomes have the structure they
do. Cortical wiring is not random, but it is also not a simple lattice. It has
both topology, meaning which regions connect to which, and topography, meaning
where those connected regions sit in physical cortical space.

Normand and colleagues propose a geometric eigenmode model, or GEM, derived
from neural field theory. The intuition is that the cortex can be treated as a
continuous sheet that supports resonant standing-wave patterns. Connections
should be favored when they link cortical locations that help excite those
geometric modes, especially long-wavelength modes that are easier to excite.

The model is deliberately sparse. It uses cortical geometry, a set of geometric
eigenmodes and two fitted parameters: the number of modes and the spatial
length scale of wave propagation. Despite that simplicity, it reproduced
multiple properties of empirical connectomes. In high-resolution human
diffusion-MRI connectomes, the optimized model captured edge-weight ranking,
degree maps, average connection distance and a large fraction of empirical
edges. It also outperformed benchmark models based on distance rules, random
wiring, permuted eigenvalues and geometry-only alternatives.

The model generalized beyond humans. The authors tested it in chimpanzee,
macaque, marmoset and mouse connectomes, using both diffusion MRI and invasive
tract-tracing data. Across species, the model again captured important
topological and topographical properties and performed better than benchmark
models. The fitted spatial length scale also scaled with cortical surface area,
suggesting that wave-propagation constraints adapt with brain size.

## Why This Matters

The paper offers a physical principle for connectome architecture: cortical
wiring may be shaped by the geometry of the cortical sheet because that
geometry constrains the wave patterns the cortex can naturally express.

That matters because many connectome models can explain wiring cost or local
distance effects, but struggle to explain why network hubs and other features
appear in specific cortical locations. GEM connects those spatial patterns to
resonant anatomical modes and shows that the same idea travels across mammals
with very different brain sizes and measurement methods.

## Caveats and Limitations

This is a model of constraints, not a full developmental account of cortical
wiring. It does not include all molecular guidance, axon pruning, plasticity or
activity-dependent mechanisms directly. It also focuses on within-hemisphere
cortico-cortical connectivity, leaving inter-hemispheric and subcortical
connectivity outside the main model.

The authors note that thalamocortical connectivity may explain some of the
connections GEM misses. Rare long-range connections remain difficult for GEM
and the benchmark models, even though such connections can be important for
brain dynamics. Finally, individual-level diffusion-MRI connectomes are noisy,
so fitted person-specific parameters should be interpreted cautiously.

## Key Takeaways

- A simple geometric eigenmode model links cortical wiring to resonant modes of
  cortical anatomy.
- The model captures both topology and spatial topography in human
  connectomes.
- The same approach generalizes to chimpanzee, macaque, marmoset and mouse
  connectomes.
- Geometry appears to impose a conserved constraint on cortical wiring, but it
  is not the only biological mechanism shaping connectivity.

## Source

[DOI: 10.1016/j.cell.2026.05.048](https://doi.org/10.1016/j.cell.2026.05.048)
