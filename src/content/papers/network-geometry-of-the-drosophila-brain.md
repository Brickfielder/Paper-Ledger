---
title: "Network geometry of the Drosophila brain"
summary: >-
  Sulyok, Balogh and Palla study the latent geometry of the adult Drosophila
  connectome using network embeddings derived from synaptic connectivity rather
  than physical neuron positions. They compare a two-dimensional hyperbolic
  embedding produced with CLOVE, Euclidean Node2vec embeddings from two to 512
  dimensions, and the neurons' original three-dimensional anatomical
  coordinates. Across multiple measures of structural preservation, link
  prediction and greedy routing, the two-dimensional hyperbolic map outperforms
  low-dimensional Euclidean representations and the physical coordinates.
  Higher-dimensional Euclidean embeddings eventually surpass it on many metrics,
  generally peaking around tens of dimensions.
whyItMatters: >-
  The paper suggests that the fly brain's wiring has a compact latent geometry
  better described by hyperbolic than ordinary low-dimensional Euclidean space.
  Hyperbolic coordinates naturally accommodate hierarchical, modular and
  hub-dominated networks, and may provide useful representations for navigation,
  missing-link prediction, neuron classification and other connectome analyses.
limitations: >-
  The conclusions depend on one reconstructed adult female Drosophila connectome,
  selected embedding algorithms and quality metrics. A good geometric embedding
  describes graph structure but does not by itself establish neural computation
  or signaling dynamics. Comparisons with high-dimensional Euclidean embeddings
  are also intrinsically uneven because additional dimensions provide more
  representational freedom.
authors:
  - Bendeguz Sulyok
  - Samuel G. Balogh
  - Gergely Palla
theme: "Brain Maps & Connectomes"
sourceUrl: https://arxiv.org/abs/2602.16417
sourceHost: arxiv.org
year: 2026
journal: arXiv preprint
sourceContext: fulltext
capturedAt: '2026-06-06T23:28:42+01:00'
draft: false
---
## Summary

The reconstruction of the adult female Drosophila brain provides a graph of
139,255 neurons connected by roughly 50 million chemical synapses. This paper
asks what kind of geometric space best represents that wiring diagram when
coordinates are inferred from connectivity rather than taken from physical
anatomy.

The authors first use CLOVE, a scalable network-embedding method, to place the
connectome in a two-dimensional hyperbolic disk. Hyperbolic space expands
exponentially with distance, making it well suited to scale-free, small-world
and hierarchical networks. Hubs occupy more central positions in the disk,
while lower-degree neurons lie nearer its edge. Major neuronal superclasses
retain distinct angular regions, suggesting that the embedding preserves
biologically meaningful organization.

They compare this map with the neurons' original three-dimensional physical
coordinates and with Euclidean Node2vec embeddings ranging from two to 512
dimensions. Evaluation includes correlations between graph and geometric
distance, reconstruction and link-prediction metrics, and greedy-routing
performance.

The two-dimensional hyperbolic embedding scores better than the physical
three-dimensional arrangement and the two- or three-dimensional Node2vec maps
across the reported metrics. It is especially effective for greedy navigation.
Euclidean embeddings improve as dimensions are added and surpass the hyperbolic
baseline on many metrics at moderate dimensionality, with their strongest
performance generally between 32 and 128 dimensions before declining at very
high dimensions.

The result is therefore not that hyperbolic geometry beats every possible
Euclidean representation. Rather, hyperbolic space captures much of the
connectome's hierarchical and modular structure in only two dimensions, whereas
Euclidean methods need substantially more dimensions to achieve comparable or
better fidelity.

## Why This Matters

Connectomes are often displayed in anatomical space, but physical proximity is
not the same thing as network proximity. A compact latent map can reveal which
neurons occupy similar structural roles even when their bodies are not adjacent.

Hyperbolic geometry is particularly attractive because trees, hierarchies,
communities and hubs fit naturally within it. A useful two-dimensional map could
support exploratory visualization and become an input to downstream tasks such
as missing-link prediction, community detection, neuron classification or
network navigation.

## Caveats and Limitations

This is a structural embedding analysis of one adult female fly connectome. It
does not test neural activity, synaptic dynamics or behavior, and geometric
congruence should not be interpreted as proof that the fly brain literally
computes in hyperbolic coordinates.

Results also depend on the algorithms, parameters and evaluation metrics chosen.
CLOVE currently provides a two-dimensional hyperbolic embedding, while
Node2vec can use hundreds of Euclidean dimensions. The authors appropriately
note that high-dimensional comparisons are nuanced because extra dimensions
give Euclidean models more freedom. Future work will need to test whether these
coordinates improve specific biological prediction tasks and replicate across
other connectomes.

## Key Takeaways

- The study embeds the full adult female Drosophila connectome from synaptic
  connectivity.
- A two-dimensional hyperbolic map preserves network structure better than
  low-dimensional Euclidean maps and physical neuron coordinates.
- Neuronal superclasses remain spatially organized in the inferred embeddings.
- Higher-dimensional Euclidean embeddings eventually match or exceed many
  hyperbolic quality scores.
- Hyperbolic geometry offers a compact representation of the connectome's
  hierarchical and modular organization.

## Source

- arXiv: [2602.16417](https://arxiv.org/abs/2602.16417)
- PDF: [https://arxiv.org/pdf/2602.16417](https://arxiv.org/pdf/2602.16417)
