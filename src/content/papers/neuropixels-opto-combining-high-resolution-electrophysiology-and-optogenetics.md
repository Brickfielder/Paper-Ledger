---
title: "Neuropixels Opto: combining high-resolution electrophysiology and optogenetics"
summary: >-
  Lakunina, Socha, Ladd and colleagues introduce prototype Neuropixels Opto
  probes, integrating high-density extracellular electrophysiology with
  spatially addressable optogenetic light delivery on the same 70-micron-wide,
  1-cm-long shank. The probes combine Neuropixels-style CMOS recording with
  photonic waveguides and two sets of 14 red and blue light emitters. In mouse
  cortex, they delivered high-quality recordings while activating or silencing
  neural populations at distinct depths with small photoelectric artifacts. In
  striatum and other deep structures, they supported efficient optotagging,
  including dual-color identification of two cell types in parallel.
whyItMatters: >-
  The paper is a major neurotechnology step because it reduces the separation
  between recording and manipulation. Instead of placing a recording probe and a
  separate light-delivery device, Neuropixels Opto brings dense electrophysiology
  and local, addressable optogenetics onto one integrated platform.
limitations: >-
  The probes are prototypes and are substantially more complex to fabricate than
  existing Neuropixels probes. One-photon optogenetics still faces tissue
  scattering and opsin-distribution limits, so activation cannot be perfectly
  confined to tiny volumes. The authors also outline future design improvements,
  including more robust blue-light routing, integrated photodetectors, simpler
  laser coupling and more emitters.
authors:
  - Anna A. Lakunina
  - Karolina Z. Socha
  - Alexander E. Ladd
  - Anna J. Bowen
  - Susu Chen
  - Jennifer Colonell
  - Anjal Doshi
  - Bill Karsh
  - Michael Krumin
  - Pavel Kulik
  - Anna J. Li
  - Pieter Neutens
  - John O'Callaghan
  - Meghan Olsen
  - Jan Putzeys
  - Charu Bai Reddy
  - Harrie A. C. Tilmans
  - Sara Vargas
  - Marleen Welkenhuysen
  - Zhiwen Ye
  - Michael Hausser
  - Christof Koch
  - Jonathan T. Ting
  - Barundeb Dutta
  - Timothy D. Harris
  - Nicholas A. Steinmetz
  - Karel Svoboda
  - Joshua H. Siegle
  - Matteo Carandini
theme: "Neurotechnology, Intervention & Preservation"
sourceUrl: https://www.nature.com/articles/s41592-026-03076-z
sourceHost: nature.com
doi: 10.1038/s41592-026-03076-z
year: 2026
journal: Nature Methods
sourceContext: fulltext
capturedAt: '2026-06-02T21:02:31+01:00'
draft: false
---
## Summary

Neuropixels Opto is a prototype probe platform designed to combine dense neural
recording with optogenetic perturbation. Existing Neuropixels probes provide
large-scale extracellular electrophysiology, while optogenetics provides
cell-type-specific manipulation and optotagging. The problem is that combining
them usually requires separate implanted light-delivery hardware, with limits on
spatial resolution, intensity, artifacts and invasiveness.

This Nature Methods paper integrates the two capabilities into one device. The
probe shank is 70 microns wide and 1 cm long, with 960 electrical recording
sites and two sets of 14 emitters for blue and red light. Light is generated
outside the brain and routed along the probe by on-chip photonic waveguides,
while CMOS electronics provide Neuropixels-style recording. The design includes
light-blocking and stress-compensation layers to reduce recording artifacts and
probe bending.

In mouse cortex, Neuropixels Opto probes recorded high-quality neural activity
while delivering spatially addressable optogenetic stimulation at different
depths. The authors report small light artifacts compared with surface
illumination, with red sharp-onset pulses producing an artifact around 30
microvolts. The probes could activate or silence local neural populations and
map responses by depth.

In subcortical structures, including striatum, the probes enabled optotagging.
The dual-color setup allowed experiments in which blue-sensitive and
red-sensitive opsins were used to identify two cell types in parallel, linking
extracellular units to genetic classes while preserving dense electrophysiology.

## Why This Matters

Neuropixels Opto matters because it tightens the loop between observation and
causal perturbation. A neuroscientist can record from hundreds of units while
delivering local light through the same shank, making it easier to connect cell
type, circuit position and causal effect.

That is especially valuable for layered and deep brain structures, where placing
separate optical hardware can distort the experiment or limit precision. The
platform points toward a more integrated future for systems neuroscience: dense
measurement, spatially structured manipulation and cell-type identification in
one implant.

## Caveats and Limitations

The probes are prototypes. The paper emphasizes that they are more complex to
fabricate than Neuropixels 1.0 and 2.0, and the authors describe planned design
changes before broader distribution: stronger blue-light waveguides, integrated
photodetectors for emitter power monitoring, simpler laser coupling, a smaller
form factor and more red and blue emitters.

Spatial precision is also physically limited. One-photon light scatters in brain
tissue, and opsin expression can extend through neuronal processes. Even with
integrated emitters, activation cannot be perfectly confined to a tiny volume.
Future experiments may improve localization with opsins targeted to specific
cellular compartments.

## Key Takeaways

- Neuropixels Opto integrates CMOS neural recording and photonic light delivery
  on one probe.
- The prototype has 960 recording sites and 28 addressable light emitters.
- It supports blue and red optogenetic stimulation, including dual-color
  optotagging.
- In mouse cortex, it delivered local activation or silencing with high-quality
  recordings and small artifacts.
- The system remains a prototype, with fabrication complexity and one-photon
  scattering as central constraints.

## Source

- DOI: [10.1038/s41592-026-03076-z](https://doi.org/10.1038/s41592-026-03076-z)
- URL: [https://www.nature.com/articles/s41592-026-03076-z](https://www.nature.com/articles/s41592-026-03076-z)
