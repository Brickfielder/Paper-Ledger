---
title: Convolutional architectures are cortex-aligned de novo
summary: >-
  This paper asks why deep visual networks become aligned with cortical visual
  representations and shows that architecture alone can already matter before
  pretraining. Wide convolutional networks with spatial compression through
  pooling and feature expansion through more channels predict monkey and human
  visual cortex representations better than several non-convolutional controls.
whyItMatters: >-
  The study suggests that part of the match between CNNs and biological vision
  comes from architectural inductive bias, not only from learning on large image
  datasets.
limitations: >-
  The accessible full text is the bioRxiv/PMC version, with a peer-reviewed
  version noted separately. The findings focus on representational alignment,
  not on a complete account of visual cortical computation or development.
authors:
  - Atlas Kazemian
  - Eric Elmoznino
  - Michael F. Bonner
sourceUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC12324244/
sourceHost: pmc.ncbi.nlm.nih.gov
doi: 10.1101/2024.05.10.593623
year: 2025
journal: bioRxiv
sourceContext: fulltext
capturedAt: '2026-04-25T20:51:00.000Z'
draft: false
---
## Summary

Kazemian, Elmoznino, and Bonner investigate whether cortex-aligned visual representations require extensive pretraining or whether they can arise from architecture alone. The paper compares untrained or minimally trained networks with different architectural constraints and tests how well their representations predict visual cortical responses in monkeys and humans.

The main result is that wide convolutional architectures can be cortex-aligned de novo. Two design features are especially important: spatial compression through pooling and feature expansion through increasing channel count. Together, these manipulations let convolutional models produce representations that align with biological visual cortex even before large-scale experience tunes the weights.

The authors also test whether these dimensionality manipulations work outside the convolutional setting. They report that the gains are much weaker in other architectures and in convolutional models with targeted lesions, supporting the claim that the convolutional inductive bias itself is doing important work.

## Why This Matters

The paper helps separate two explanations for why artificial visual networks resemble the brain: training history and architecture. It does not deny the importance of learning, but it shows that the starting structure of a model can already place it close to cortical representational geometry. That is useful for neuroscience models and for thinking about why some AI architectures are more biologically plausible than others.

## Caveats and Limitations

The work measures representational alignment, not full biological equivalence. CNNs may share useful constraints with visual cortex while still differing substantially in development, recurrence, embodiment, attention, and behavior. The archive source is the PMC-hosted bioRxiv version; the page notes that a peer-reviewed version has also been published.

## Key Takeaways

- Some visual cortex alignment emerges before large-scale pretraining.
- Spatial pooling and channel expansion are the crucial architectural ingredients tested here.
- The effects are strongest in convolutional architectures.
- Architecture and learning should be treated as separable contributors to brain-model alignment.
- The result supports CNNs as constrained models of visual representation, not complete models of vision.

## Source

- DOI: [10.1101/2024.05.10.593623](https://doi.org/10.1101/2024.05.10.593623)
- URL: [https://pmc.ncbi.nlm.nih.gov/articles/PMC12324244/](https://pmc.ncbi.nlm.nih.gov/articles/PMC12324244/)
