---
title: >-
  Multi-dimensional diffusion MRI at ultra-high gradient strength for mapping
  axonal architecture and microstructure in the primate brain
summary: >-
  This paper introduces an unusually dense post-mortem diffusion MRI resource
  for whole macaque brains and human hemispheres acquired on ultra-high-gradient
  systems, including Connectome 2.0. The authors combine around 50 diffusion
  shells with broad variation in b-value, diffusion time, and echo time, and
  push the acquisitions to very high spatial resolution over extremely long scan
  durations. The resulting data are detailed enough to recover both large-scale
  white matter organization and finer cortical and subcortical architectural
  boundaries. In practice, the paper positions the dataset as both a technical
  benchmark and a neuroscience resource for studying microstructure beyond the
  limits of conventional whole-brain diffusion MRI.
whyItMatters: >-
  The work provides a rare bridge between connectomics-scale coverage and
  microstructural detail, which is exactly the combination many diffusion MRI
  methods need but rarely get. Because the dataset spans both macaque and human
  tissue with aggressive sampling across acquisition parameters, it should be
  useful for method development, validation, and comparative neuroscience. It
  also hints at what future ultra-high-performance scanners may be able to
  recover noninvasively in living brains.
authors:
  - Ting Gong
  - Chiara Maffei
  - Dongsuk Sung
  - Elissa Bell
  - Jingjing Wu
  - Jasmine Shao
  - Emma W Rosenblum
  - Xiangrui Zeng
  - Gabriel Ramos-Llorden
  - Alina Müller
  - Mirsad Mahmutovic
  - Boris Keil
  - Kabilar Gunalan
  - Satrajit Ghosh
  - Jean C Augustinack
  - Susie Y Huang
  - Suzanne N Haber
  - Anastasia Yendiki
tags:
  - diffusion mri
  - primate brain
  - connectome 2.0
  - ultra-high gradient
  - microstructure
  - post-mortem imaging
sourceUrl: 'https://doi.org/10.64898/2026.02.18.705310'
sourceHost: doi.org
doi: 10.64898/2026.02.18.705310
year: 2026
capturedAt: '2026-04-01T20:06:07.436Z'
draft: false
---
## Summary
This paper presents a large post-mortem diffusion MRI dataset spanning whole macaque brains and human hemispheres scanned on ultra-high-gradient MRI systems. The project is part of the BRAIN CONNECTS effort and uses specialized hardware, including the Connectome 2.0 platform, to push both spatial resolution and diffusion encoding much further than standard whole-brain studies. Each specimen was scanned for roughly 250 hours, which gives the authors room to trade acquisition time for much denser and cleaner measurements. The protocols vary not just b-value, but also diffusion time and echo time, producing a genuinely multi-dimensional sampling scheme rather than a conventional single-family shell design. Across the full acquisition, the dataset covers about 50 diffusion shells and reaches b-values as high as 64,000 s/mm² while maintaining high signal-to-noise ratio. The macaque data reach whole-brain resolutions down to 0.25 mm isotropic, while the human hemisphere data go down to 0.4 mm isotropic. That combination of spatial resolution, gradient strength, and acquisition diversity is the central technical contribution of the paper.

The authors argue that these measurements do more than improve tractography-style views of white matter. They show that the data can reveal cortical and subcortical cytoarchitectonic boundaries in addition to large-scale connectional structure, which is a more ambitious claim than simply mapping fiber bundles more sharply. In other words, the dataset appears designed to support both macro-connectivity questions and finer microstructural modeling. That matters because many diffusion MRI methods promise sensitivity to tissue compartments, axon geometry, or laminar organization, but are limited by weaker acquisition protocols and poorer validation resources. A dataset of this richness can therefore act as a stress test for modeling choices, reconstruction methods, denoising pipelines, and biologically informed interpretation. The paper is most convincing as a resource-and-capability paper: it demonstrates that with enough gradient strength, scan time, and parameter diversity, whole-brain diffusion MRI can begin to access structure that usually sits outside the reach of noninvasive imaging.
## Why This Matters
The paper matters because it raises the ceiling on what diffusion MRI datasets can look like when acquisition constraints are pushed hard enough. For technical researchers, it offers a strong benchmark for testing models of tissue microstructure, axon architecture, and multi-contrast diffusion behavior. For neuroscientists, it suggests that the gap between whole-brain imaging and fine anatomical structure may be narrowing, especially when paired with next-generation scanner hardware.
## Key Takeaways
- The dataset spans both macaque brains and human hemispheres, giving it value for cross-species comparison as well as method development.
- Each sample was scanned for about 250 hours, enabling unusually high spatial resolution and dense diffusion sampling.
- The acquisition varies b-value, diffusion time, and echo time across roughly 50 shells, making it a genuinely multi-dimensional diffusion MRI resource.
- Reported b-values reach up to 64,000 s/mm², which is far beyond typical whole-brain diffusion protocols.
- The data appear rich enough to resolve both white matter organization and finer cortical or subcortical anatomical boundaries.
## Source
- DOI: [10.64898/2026.02.18.705310](https://doi.org/10.64898/2026.02.18.705310)
- URL: [https://doi.org/10.64898/2026.02.18.705310](https://doi.org/10.64898/2026.02.18.705310)
