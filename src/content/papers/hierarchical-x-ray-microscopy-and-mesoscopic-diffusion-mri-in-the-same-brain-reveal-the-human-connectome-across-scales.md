---
title: Hierarchical X-ray microscopy and mesoscopic diffusion MRI in the same brain reveal the human connectome across scales
summary: >-
  This preprint demonstrates a multimodal imaging pipeline that links ex vivo
  structural MRI, 400 um diffusion MRI, hierarchical phase-contrast tomography
  (HiP-CT), micro-CT, and electron microscopy in the same adult human brain
  hemisphere. The pipeline registers whole-hemisphere MRI and HiP-CT to
  progressively higher-resolution X-ray imaging, spanning 120 um structural MRI,
  400 um diffusion MRI, 20.07 um whole-hemisphere HiP-CT, 0.857 um HiP-CT in an
  internal-capsule block, 0.364 um osmium-stained micro-CT, and 4 nm electron
  microscopy. The result is a co-registered chain from tract-scale projections to
  fascicles and individual myelinated axons.
whyItMatters: >-
  The study provides a practical bridge between MRI-scale tractography and
  microscopic ground truth in the same human tissue. That makes it valuable for
  validating diffusion MRI models, studying deep white-matter architecture, and
  building anatomically grounded connectome resources across scales.
limitations: >-
  The pipeline is demonstrated in a single post-mortem hemisphere and involves
  difficult trade-offs between MRI quality, dehydration for HiP-CT, biopsy
  targeting, staining quality, electron microscopy coverage, and tissue
  preservation after post-mortem delay. The work establishes the registration
  framework, but voxel-level validation of diffusion MRI against segmented axons
  remains a next step.
authors:
  - Matthieu Chourrout
  - Ting Gong
  - Richard Schalek
  - Andrew Keenlyside
  - Yael Balbastre
  - Neha Karlupia
  - Ricardo A. Gonzales
  - Istvan N. Huszar
  - Eric Wanjau
  - Joseph Brunet
  - Theresa Urban
  - Hector Dejea
  - David Stansby
  - Kabilar Gunalan
  - Bess Glickman
  - Edward J. Gaibor
  - James Scherick
  - Kyriaki-Margarita Bintsi
  - Chiara Mauri
  - Cole Analoro
  - Satrajit Ghosh
  - Alexandre Bellier
  - Bruce R. Fischl
  - Jean Augustinack
  - Paul Tafforeau
  - Chiara Maffei
  - Peter D. Lee
  - Jeff W. Lichtman
  - Anastasia Yendiki
  - Claire L. Walsh
sourceUrl: https://www.biorxiv.org/content/10.64898/2026.04.02.716198v1.full
sourceHost: www.biorxiv.org
doi: 10.64898/2026.04.02.716198
year: 2026
journal: bioRxiv
sourceContext: fulltext
capturedAt: '2026-05-01T09:42:41.000Z'
draft: false
---
## Summary

Chourrout and colleagues present a cross-scale human brain imaging pipeline designed to connect whole-brain MRI with microscopic axonal anatomy. The sample is an adult ex vivo human hemisphere from a neurotypical 63-year-old male donor. The authors image it first with 7T structural MRI at 120 um per voxel and Connectome 2.0 diffusion MRI at 400 um per voxel, then with hierarchical phase-contrast tomography (HiP-CT), micro-CT, and electron microscopy.

The workflow is hierarchical. Whole-hemisphere HiP-CT is acquired at 20.07 um per voxel, with volumes of interest at 4.257 um and 2.201 um while the hemisphere remains intact. A roughly 4 cm internal-capsule block is then excised and re-imaged with HiP-CT, including a 0.857 um volume that resolves fine fiber architecture and, in some regions, individual myelinated axons. A smaller biopsy is stained with osmium tetroxide, imaged with micro-CT down to 0.364 um per voxel, and then sampled with electron microscopy at 4 nm per voxel to confirm myelin and axonal ultrastructure.

The key contribution is not a new tractography algorithm but a registration chain. The authors map MRI, HiP-CT, micro-CT, and EM into a common reference framework, allowing labels and measurements to move up and down the spatial scale. HiP-CT reveals organized white-matter bundles in deep-brain regions where diffusion MRI has low fractional anisotropy and struggles with complex fiber geometry. Micro-CT and EM then provide ground truth that the label-free HiP-CT contrast corresponds to myelinated axons.

The paper frames this as a foundation for validating diffusion MRI and tractography. Instead of comparing MRI and microscopy across different samples, it creates a within-sample bridge from whole-hemisphere tract-scale projections to submicron axonal structure.

## Why This Matters

Diffusion MRI is powerful because it can image whole human brains, but tractography is always an inference from voxel-scale water diffusion. This paper builds the sort of cross-scale anatomical scaffold needed to test those inferences against directly observed tissue architecture.

It is especially relevant for deep white matter and subcortical circuitry, where crossing, branching, fanning, low anisotropy, and dense packing make MRI-based pathway reconstruction difficult.

## Caveats and Limitations

This is a demanding pipeline demonstrated in one hemisphere, not yet a population resource. The authors describe several practical compromises: MRI had to come before HiP-CT because ethanol dehydration reduces diffusion MRI signal; reaching 0.857 um HiP-CT required physical excision of tissue, which lost global context and required registration to recover it; targeting a biopsy that overlapped the high-resolution HiP-CT volume was difficult; and the relatively long post-mortem interval affected ultrastructural preservation.

The study establishes the cross-scale framework, but future work still needs more specimens, shorter post-mortem intervals, fuller EM or intermediate nanotomography coverage, and segmentation of axonal/fascicular organization for voxel-level diffusion MRI validation.

## Key Takeaways

- Links structural MRI, diffusion MRI, HiP-CT, micro-CT, and EM in the same human hemisphere.
- Spans 120 um MRI, 400 um diffusion MRI, 20.07 um HiP-CT, 0.857 um HiP-CT, 0.364 um micro-CT, and 4 nm EM.
- Uses HiP-CT to bridge MRI-scale anatomy and single-axon microscopy.
- Shows organized deep-brain white-matter structure where diffusion MRI remains difficult.
- Registers the data into a common space that can propagate labels across scales.
- Public data and code are available through DANDI, the Human Organ Atlas, and GitHub.

## Source

- DOI: [10.64898/2026.04.02.716198](https://doi.org/10.64898/2026.04.02.716198)
- URL: [https://www.biorxiv.org/content/10.64898/2026.04.02.716198v1.full](https://www.biorxiv.org/content/10.64898/2026.04.02.716198v1.full)
