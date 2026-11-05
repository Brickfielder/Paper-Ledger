---
title: "Using Grid Cells for Navigation"
summary: >-
  Bush and colleagues present a theoretical account of how grid-cell activity could support direct navigation between a current location and a remembered goal, including routes through places never visited before. Grid cells in medial entorhinal cortex fire in repeating spatial patterns at different scales; together, their phases can represent location across a much larger range than any one grid. The paper uses the Fourier shift theorem to show how phase differences between the start and goal can be combined to recover the distance and direction between them. It then describes candidate neural implementations: distance cells plus readout cells, vector cells that encode relative displacement, and a “linear look-ahead” process that simulates movement along grid axes. These are computational models and experimental proposals, not evidence that the brain uses a particular implementation. The authors highlight possible tests involving grid-cell activity during route planning and whether disrupting medial entorhinal cortex impairs vector navigation.
whyItMatters: >-
  The paper reframes grid cells as more than a mechanism for updating an estimate of one’s current position. Their repeating, multi-scale code may also provide a general metric for comparing two locations and extracting a direct route between them. The proposed computation could, in principle, extend beyond physical navigation to displacement in other spaces or dimensions.
limitations: >-
  This is a theoretical and computational paper, not an experimental demonstration that grid cells perform vector navigation in animals or humans. The proposed neural circuits require additional cell types and connectivity whose existence, learning, and operation during planning remain uncertain. The account assumes that grid-cell representations provide a sufficiently stable, globally consistent map; local distortions, fragmentation, or drift could undermine vector estimates. Sensory anchoring and conversion from allocentric vectors to actual movements also require other systems. The authors identify these issues and propose empirical predictions, but the models do not establish necessity or causality.
authors:
  - Daniel Bush
  - Caswell Barry
  - Daniel Manson
  - Neil Burgess
sourceUrl: "https://doi.org/10.1016/j.neuron.2015.07.006"
sourceHost: "doi.org"
doi: "10.1016/j.neuron.2015.07.006"
year: 2015
journal: "Neuron"
sourceContext: fulltext
capturedAt: "2026-11-05T09:00:00+00:00"
draft: false
---

## Summary

Animals can sometimes head directly to a goal without following a familiar route or visible cue. This is called **vector navigation**: the animal uses its current location and the remembered goal location to work out a direction and distance, potentially crossing terrain it has not travelled before. The hippocampal formation is implicated in spatial navigation, and grid cells—neurons with regularly repeating, hexagonal firing fields—offer a possible way to represent locations over a large area.

A single grid-cell module has a repeating spatial scale, so its activity alone is ambiguous: the same phase pattern recurs at many locations. Modules at different scales provide a kind of multi-scale code. The combination can distinguish positions over a much larger range than the largest individual grid. The paper asks a further question: if the grid-cell code represents both the current position and the goal, how might the brain subtract one from the other to recover the displacement?

The authors describe an algorithm inspired by the **Fourier shift theorem**. A translation in space produces phase shifts across spatial patterns of different scales. By comparing the grid phases for the start and goal, and combining those phase differences across modules, the displacement can be recovered. In two dimensions, the method fits a plane to phase differences across grid scales on at least two non-collinear axes. The resulting estimate can specify both direction and distance, including distances greater than any single grid scale. The proposed calculation is designed to tolerate differences in grid orientation between modules and unequal scaling along the two axes.

The paper then considers candidate neural implementations:

- **Distance-cell models** first represent locations or distances along spatial axes, then use readout cells to determine the vector. This can be computationally direct but requires substantial additional circuitry and many cells.
- **Vector-cell models** represent the relationship between current and goal locations directly. They avoid an intermediate absolute-location representation and can use fewer additional neurons, but require specific connectivity and, in some versions, biologically demanding multiplication or precise timing codes.
- **Linear look-ahead** uses existing path-integration mechanisms to simulate movement along selected axes while the animal remains still. The changing grid-cell activity could be used to compare the current location with the goal and infer their separation. It makes use of mechanisms already proposed for updating grid activity, though the required planning-related sweeps and connectivity remain to be demonstrated.

All these models are intended to explain how grid-cell representations might support navigation; the paper does not test them in a new animal experiment. Each offers distinct predictions. For example, direct-decoding accounts predict activity that represents goal locations or vectors during planning, while linear look-ahead predicts sequential grid-cell activity along particular axes. The authors suggest testing whether medial entorhinal cortex is necessary for vector navigation and whether its predicted neural signatures occur during route planning.

The models also depend on a stable spatial reference. Grid patterns can distort or fragment around boundaries, which may interfere with displacement estimates unless distortions affect modules in a coordinated way. Grid activity must also be anchored to sensory landmarks to limit drift, and a decoded allocentric direction must be translated into movements using other brain systems. The authors propose that experience linking separate environments might help grid patterns become consistent over a larger space.

## Why This Matters

Grid cells are usually discussed as supporting path integration: combining a known location with information about recent movement to update the estimate of where the animal is. This paper explores the reverse operation—using representations of two locations to calculate the movement needed to get from one to the other.

The proposal connects the repeating structure of grid-cell firing to a practical computation: a multi-scale code can resolve ambiguity and provide a direction over long distances. It also gives researchers concrete alternatives to test, rather than treating “grid cells support navigation” as a single, unspecified mechanism. The authors note that the same mathematical idea could apply to displacement between points in conceptual spaces, although that extension is a possibility rather than a result demonstrated by this paper.

## Caveats and Limitations

- This is a theoretical analysis with proposed algorithms and neural-network models. It does not demonstrate that grid cells actually calculate vectors during navigation.
- The candidate implementations require additional neural circuitry, such as distance or vector cells, whose existence and learning mechanisms were not established by the paper.
- The linear look-ahead account uses familiar path-integration mechanisms, but whether grid-cell activity is deliberately swept along axes during route planning is an open empirical question.
- Grid patterns can distort or fragment across environments. Such changes may compromise a globally consistent spatial metric, especially if they affect grid modules differently.
- Grid-cell computations would need to be anchored by sensory information to limit accumulated drift; a decoded allocentric vector would also need conversion into an egocentric movement plan.
- The models assume that the start and goal are represented in the grid system. They do not specify a complete account of how goals are remembered, selected, or integrated with landmarks and barriers.

## Key Takeaways

- Grid cells have repeating firing patterns at multiple spatial scales, which together can encode location over a large range.
- The paper proposes that comparing grid-cell phases at a current location and a goal could reveal the distance and direction between them.
- It describes three possible neural strategies: distance and readout cells, direct vector cells, and simulated “linear look-ahead.”
- These are hypotheses with distinct testable predictions, not established neural mechanisms.
- Stable grid maps, sensory anchoring, and conversion from a spatial vector into movement remain important unresolved requirements.

## Source

- Published in *Neuron*, volume 87, pages 507–520, on 5 August 2015.
- DOI: [10.1016/j.neuron.2015.07.006](https://doi.org/10.1016/j.neuron.2015.07.006)
- [Read the full article](https://www.cell.com/neuron/fulltext/S0896-6273(15)00628-5)
- Full-text PDF supplied with the request.
