---
title: A human subcortical connectome at 400 um resolution
summary: >-
  This bioRxiv preprint presents an ultra-high-resolution ex vivo diffusion MRI
  atlas of human subcortical pathways, focused on basal-ganglia,
  thalamo-cortical, limbic, sensory, and brainstem circuits relevant to deep
  brain stimulation. Using whole human hemisphere scans from the LINC project on
  the Connectome 2.0 scanner at 400 um isotropic resolution, the authors
  reconstruct 44 white-matter pathways and manually label 10 subcortical nuclei.
  The atlas captures direct, indirect, and hyperdirect basal ganglia loops,
  reconstructs small pallidal and limbic pathways that conventional HCP-quality
  diffusion MRI misses, and maps pathway overlap with published DBS therapeutic
  and side-effect hotspots.
whyItMatters: >-
  The work gives neuromodulation research a much higher-fidelity normative
  subcortical connectome than can be built from standard in vivo diffusion MRI or
  synthetic tract models. It is especially valuable for DBS targeting,
  retrospective symptom mapping, and training future models that try to recover
  these pathways from patient-level in vivo scans.
limitations: >-
  The atlas is built from the first two ex vivo specimens, so it is an initial
  normative resource rather than a full account of population variability.
  Tractography remains an indirect reconstruction method, and translation to
  individual in vivo patients will require further model training and validation.
authors:
  - Chiara Maffei
  - Ting Gong
  - Clemens Neudorfer
  - Dongsuk Sung
  - Dey Mihir
  - Kabilar Gunalan
  - Satrajit Ghosh
  - Jean C. Augustinack
  - Susie Y. Huang
  - Robert M. Richardson
  - Suzanne N. Haber
  - Anastasia Yendiki
theme: "Brain Maps & Connectomes"
sourceUrl: https://www.biorxiv.org/content/10.64898/2026.03.31.715699v1.full
sourceHost: www.biorxiv.org
doi: 10.64898/2026.03.31.715699
year: 2026
journal: bioRxiv
sourceContext: fulltext
capturedAt: '2026-05-01T09:42:41.000Z'
draft: false
---
## Summary

Maffei and colleagues tackle a practical problem in human connectomics: many pathways that matter for neuromodulation are small, deep, densely interwoven, and poorly resolved by conventional diffusion MRI. The paper uses ex vivo whole-hemisphere diffusion MRI from the BRAIN CONNECTS LINC project, acquired on the Connectome 2.0 scanner at 400 um isotropic resolution, to reconstruct human subcortical fiber systems in much greater detail.

The atlas includes 44 white-matter pathways in the basal forebrain, mesencephalon, and diencephalon, plus 10 manually labeled subcortical nuclei. It reconstructs the direct, indirect, and hyperdirect basal ganglia circuits, including components such as the ansa lenticularis, lenticular fasciculus, subthalamic fasciculus, ansa subthalamica, pallidal projections to the parafascicular nucleus, habenula, and pedunculopontine nucleus, and surrounding pathways such as the fornix, stria medullaris, anterior commissure, mammillothalamic tract, fasciculus retroflexus, medial lemniscus, medial forebrain bundle, optic tract, and dentatothalamic tract.

The authors validate the atlas in three main ways. First, they show that reconstructed cortico-striatal, cortico-thalamic, cortico-subthalamic, and striato-nigral projections reproduce topographic gradients previously described in invasive non-human primate studies. Second, they compare the LINC reconstructions with state-of-the-art public HCP diffusion MRI and show that several small pathways, including the fasciculus retroflexus, ansa lenticularis, ansa subthalamica, and mammillothalamic tract, cannot be reconstructed from the HCP data at 1.5 mm resolution, while larger pathways show less accurate terminations. Third, they align the atlas with 18 published probabilistic DBS stimulation maps and identify pathway fingerprints associated with therapeutic effects and stimulation-induced side effects.

The DBS analysis is a useful demonstration rather than the sole point of the paper. Motor improvement hotspots involve broad basal-ganglia-thalamo-cortical motor networks, essential tremor improvement is more focused on dentatothalamic and premotor thalamic connections, OCD-related hotspots vary by stimulation target, and autonomic or sensory side effects map more selectively onto limbic, hypothalamic, optic, and habenular circuitry.

## Why This Matters

This paper is important because it provides a real ex vivo diffusion MRI atlas for circuits that are often approximated using lower-resolution normative connectomes or synthetic streamlines. For DBS and lesion therapies, that distinction matters: small shifts in stimulation location can change whether motor, associative, limbic, or sensory pathways are engaged.

The atlas is also positioned as training material for future "quality transfer" approaches: high-quality ex vivo pathway annotations could help algorithms reconstruct the same circuits from lower-resolution in vivo diffusion MRI in individual patients.

## Caveats and Limitations

The atlas is an initial release from the first two specimens and will need expansion to capture inter-individual variability. Ex vivo tractography has far better resolution and signal-to-noise than clinical scans, but it is still an indirect model of fiber architecture. The paper's clinical mapping uses published DBS hotspot maps, so it demonstrates plausibility and utility rather than prospectively validating patient outcomes.

The authors also emphasize that the long-term translational step is not finished: using these annotations to reconstruct patient-specific pathways from in vivo diffusion MRI remains future work.

## Key Takeaways

- Reconstructs 44 subcortical white-matter pathways and 10 nuclei from 400 um ex vivo diffusion MRI.
- Captures direct, indirect, and hyperdirect basal ganglia circuits in 3D.
- Recovers small pathways that HCP-quality in vivo diffusion MRI misses or mislocalizes.
- Replicates known cortico-subcortical topographic gradients from invasive studies.
- Maps pathway involvement for DBS therapeutic and side-effect hotspots.
- Public atlas data are available through the LINC Gallery and DANDI.

## Source

- DOI: [10.64898/2026.03.31.715699](https://doi.org/10.64898/2026.03.31.715699)
- URL: [https://www.biorxiv.org/content/10.64898/2026.03.31.715699v1.full](https://www.biorxiv.org/content/10.64898/2026.03.31.715699v1.full)
