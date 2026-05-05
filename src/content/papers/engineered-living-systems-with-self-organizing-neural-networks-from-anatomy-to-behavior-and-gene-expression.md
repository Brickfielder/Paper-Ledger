---
title: "Engineered Living Systems With Self-Organizing Neural Networks: From Anatomy to Behavior and Gene Expression"
summary: >-
  This paper creates "neurobots": self-motile Xenopus-derived living constructs
  made by implanting neural precursor cells into biobot bodies formed from
  ectodermal tissue. The implanted cells differentiated into neurons, extended
  processes through the body, showed markers consistent with axons, dendrites,
  and putative synapses, and produced calcium activity during free movement.
  Neurobots differed from non-neuronal biobots in morphology, movement
  complexity, multiciliated-cell distribution, response to the GABAA antagonist
  pentylenetetrazole, and bulk transcriptomic profile. The transcriptomics were
  especially striking: neurobots upregulated genes related to nervous-system
  development, synapses, neuronal projections, neurotransmitter receptors,
  extracellular matrix components, ancient gene strata, and visual-perception
  pathways, including eye-associated opsin genes.
whyItMatters: >-
  The study asks what nervous tissue can do when placed into a body plan it was
  not evolved to control. It gives a concrete experimental model for studying
  developmental plasticity, embodied neural self-organization, and synthetic
  living machines without relying on electronic scaffolds or engineered genetic
  circuits.
limitations: >-
  Neurobot construction is still manually variable, the link between neural
  activity and movement is suggestive rather than causally established, calcium
  imaging is constrained by motion and focal-plane limits, and the visual-gene
  finding is transcriptomic rather than proof of light-driven behaviour. The
  authors identify automation, defined cell inputs, optogenetic tests, proteomic
  confirmation, and single-cell RNA-seq as important next steps.
authors:
  - Haleh Fotowat
  - Laurie O'Neill
  - Leo Pio-Lopez
  - Megan M. Sperry
  - Patrick Erickson
  - Tiffany Lin
  - Michael Levin
theme: "Neurotechnology, Intervention & Preservation"
sourceUrl: 'https://advanced.onlinelibrary.wiley.com/doi/10.1002/advs.202508967'
sourceHost: advanced.onlinelibrary.wiley.com
doi: 10.1002/advs.202508967
year: 2026
journal: Advanced Science
sourceContext: fulltext
capturedAt: '2026-05-05T18:45:00+01:00'
draft: false
---
## Summary
This paper asks a strange and serious question: if neurons are given a new living body that evolution did not design them for, can they still self-organize into something functional?

The authors work with **biobots**, which are small self-motile constructs made from Xenopus embryonic ectodermal tissue. These bodies are not robots in the metal-and-code sense. They are living multicellular structures whose outer surface includes multiciliated cells that can drive motion through aqueous media.

The new construct is a **neurobot**. To make one, the team implants neural precursor cells into a forming biobot. Those cells are not given a prebuilt nervous-system blueprint, electronic control system, synthetic scaffold, or engineered genetic circuit. They are allowed to develop inside an evolutionarily novel body.

The implanted cells differentiated into neurons, extended processes within the neurobot and toward the outer surface, expressed markers associated with axons, dendrites, and putative synapses, and showed calcium activity during free movement. Neurobots also moved differently from non-neuronal biobots and had a distinct transcriptomic profile.

## What They Made
The team used Xenopus laevis embryos. Biobots were formed from ectodermal tissue excised from the animal hemisphere of embryos. For neurobots, neural precursor clumps were generated and implanted into the animal-cap tissue while the construct was still closing.

The resulting living bodies developed over days. By day 3, like biobots, neurobots were motile. Compared with biobots, neurobots tended to be larger and less rounded. Sham neurobots, made by implanting cells not given the same neural-induction interval, helped separate the effects of adding extra tissue from the effects of neural differentiation.

## Evidence For A Self-Organizing Nervous System
The anatomical evidence is layered rather than single-assay. Acetylated alpha-tubulin staining showed implanted neural precursor cells differentiating into neurons and projecting through the body. MAP2 and acetylated alpha-tubulin labelling suggested dendritic and axonal compartments. Synapsin-1-positive puncta were distributed through neurobots, consistent with putative presynaptic specializations.

The cells were not arranged in a tidy canonical nervous system. Neural architecture varied substantially across neurobots. Many processes emerged from one or more nuclear regions corresponding to the implanted cell clumps, and some processes projected toward the outer epithelial surface. The authors found a central region that was largely acellular by nuclear and phalloidin staining, with sparse collagen signal and possible extracellular-matrix-like material.

The functional evidence comes partly from calcium imaging. Neurobots built with GCaMP6s-expressing neural cells showed calcium activity while moving freely. Some nearby and distant regions of interest showed synchronized activity, although imaging was technically constrained because moving and rotating neurobots can leave the focal plane.

## Behaviour And Drug Response
The authors quantified movement using a trajectory complexity index based on peaks in the power spectral density of movement time series. Neurobots showed significantly more complex trajectories than biobots. This was not simply explained by roundness or size, though the authors are careful that sham neurobots also showed some non-significant increase, so not all complexity can be assigned cleanly to neural signalling.

They then treated neurobots and biobots with pentylenetetrazole, a GABAA receptor antagonist often used to induce seizure-like activity in animal studies. The response differed between groups: most neurobots increased movement complexity after PTZ, whereas biobots showed a different pattern. The authors interpret this as consistent with neural contributions to movement, but not conclusive, because PTZ can affect non-neuronal targets and other ion channels at higher concentrations.

## Gene Expression
The bulk RNA-seq results make the paper especially interesting. Neurobots separated clearly from biobots and sham neurobots in normalized gene-expression profiles. Neurobots also showed higher variability in gene counts across samples.

Differentially expressed genes were enriched for nervous-system development, synapse organization, neuron projection, trans-synaptic signalling, neurotransmitter receptors, extracellular matrix components, and voltage-gated ion channels. The authors also found upregulation of several neurotransmitter receptor classes, including glutamatergic, GABAergic, cholinergic, dopaminergic, serotonergic, and glycinergic receptors.

The most speculative but fascinating result is the enrichment of visual-perception genes. A network cluster contained genes normally associated with Xenopus eyes, including opsin-family genes and other visual-processing genes. The authors do not claim that neurobots can see. Their point is more careful: the transcriptomic result raises the possibility of visually evoked behaviour, which remains to be tested.

## Why This Matters
This paper is about embodied plasticity. The nervous system is usually studied in bodies that evolution has already shaped. Here, neurons are placed in a novel motile body and asked, developmentally, to make sense of it.

That gives the study two kinds of significance. For basic biology, it probes how neural tissue self-organizes outside its usual body plan. For bioengineering, it sketches a path toward living machines whose control architecture arises from biological development rather than external electronics.

The paper is careful in its strongest claims. Neurobots are not shown to have designed cognition, learned goals, or reliable controllability. What they do show is that wild-type neural tissue can survive, differentiate, become active, alter body morphology and behaviour, and shift gene-expression landscapes inside a novel living construct.

## Caveats
- Neurobot construction is manually variable, so neural architecture differs substantially from one neurobot to another.
- The behavioural results are compatible with neural influence, but causal control of ciliary beating or movement is not yet proven.
- Calcium imaging is constrained by free movement and rotation, so activity is sampled from limited planes.
- PTZ effects are not neuron-specific and may involve non-neuronal targets.
- The visual-gene result is transcriptomic. Light-responsive behaviour and corresponding protein expression still need direct tests.
- The authors note that future automated construction, defined cell numbers, optogenetic perturbation, proteomics, and single-cell RNA-seq would sharpen the mechanism.

## Bottom Line
This is a provocative but carefully bounded study of neural self-organization in a novel living body. Its best reading is not "tiny animals with brains," but "a tractable model for asking how nervous tissue, body morphology, movement, and gene expression co-organize when evolution has not already supplied the wiring diagram."

## Source
- DOI: [10.1002/advs.202508967](https://doi.org/10.1002/advs.202508967)
- URL: [https://advanced.onlinelibrary.wiley.com/doi/10.1002/advs.202508967](https://advanced.onlinelibrary.wiley.com/doi/10.1002/advs.202508967)
- Full text used: [ResearchGate full-text rendering provided from Advanced Science](https://www.researchgate.net/publication/400985122_Engineered_Living_Systems_With_Self-Organizing_Neural_Networks_From_Anatomy_to_Behavior_and_Gene_Expression)
