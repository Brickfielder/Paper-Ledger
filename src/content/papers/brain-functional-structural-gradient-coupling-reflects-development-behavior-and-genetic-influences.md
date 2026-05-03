---
title: Brain functional-structural gradient coupling reflects development, behavior and genetic influences
summary: >-
  This Nature Communications article introduces structural-functional gradient
  coupling (SFGC), a measure of how structural connectivity gradients align with
  functional connectivity gradients across cortical hierarchies. Using 5,343
  children from the ABCD study, 875 young adults from the Human Connectome
  Project, and HCP-Development as a harmonization bridge, the authors show that
  SFGC differs between childhood and adulthood, relates to cognitive and mental
  health measures, predicts sex and behavioral traits out of sample, and has a
  hierarchical genetic architecture. Imaging transcriptomics links heritable SFGC
  patterns to endothelial and microglial signatures in children and excitatory
  neuron signatures in adults.
whyItMatters: >-
  The study reframes structure-function coupling as alignment between
  large-scale brain hierarchies rather than only node-wise SC-FC similarity. That
  makes SFGC a useful phenotype for studying how cortical organization matures,
  how it relates to cognition and mental health, and how macroscale imaging
  patterns connect to genetic and cellular architecture.
limitations: >-
  The main developmental contrast compares ABCD baseline children aged roughly
  9-10 with HCP young adults aged 22-37, so it does not yet resolve continuous
  developmental trajectories. The coupling metric is based on cosine similarity
  between low-dimensional gradients and may miss nonlinear or time-varying
  relationships between structure and function.
authors:
  - Simiao Gao
  - Zhiling Gu
  - Shengxian Ding
  - Gefei Wang
  - Zhengwu Zhang
  - Hongyu Zhao
  - Yize Zhao
theme: "Brain Maps & Connectomes"
sourceUrl: https://doi.org/10.1038/s41467-026-71719-y
sourceHost: doi.org
doi: 10.1038/s41467-026-71719-y
year: 2026
journal: Nature Communications
sourceContext: fulltext
capturedAt: '2026-05-01T09:42:41.000Z'
draft: false
---
## Summary

Gao and colleagues study how the brain's structural and functional hierarchies align. Rather than asking only whether a region's structural connectivity profile resembles its functional connectivity profile, they derive structural connectivity gradients and functional connectivity gradients, then quantify structural-functional gradient coupling (SFGC): the spatial alignment between those gradient axes.

The analysis uses multimodal MRI from 5,343 children in the ABCD baseline cohort and 875 young adults in the HCP Young Adult cohort, with 93 HCP-Development participants used as a bridge for cross-cohort harmonization. The authors construct structural and functional connectivity, derive individual-level cortical gradients, and examine SFGC at both macroscale and Yeo-7 subnetwork levels.

Developmentally, children show stronger alignment between the first functional and structural gradients, especially along early sensory axes. Adults show weaker coupling for that same pair but a more differentiated and distributed pattern of alignment across gradients and networks. Primary sensory and motor systems tend to retain stronger coupling, while transmodal systems such as the default mode network are more decoupled. This supports the view that maturation involves both more stable global organization and more specialized local expression of structural-functional relationships.

SFGC is also behaviorally relevant. Out-of-sample associations with mental health are modest but present, especially at the subnetwork level. Cognitive associations are stronger in children than adults: average SFGC-cognition correlations are reported around r = 0.26/0.30 for macroscale/subnetwork SFGC in children, compared with r = 0.18/0.23 in adults. Sex classification is also robust, with AUC values of 0.77/0.83 in children and 0.79/0.87 in adults for macroscale/subnetwork SFGC.

The genetic analyses show that SFGC is heritable, especially for lower-order gradient pairs. Mean heritability is broadly similar across cohorts, with the highest individual subnetwork-level estimates reaching about 62% in adults and 60% in children. Spatially, childhood heritability is strongest in visual and default-mode regions, while adulthood heritability concentrates more in default-mode and frontoparietal hubs. Transcriptomic analyses suggest a developmental shift: pediatric heritability patterns align with endothelial and microglial gene signatures, while adult heritability aligns with excitatory neuron signatures and synaptic regulatory genes such as CPEB3 and NOVA1.

## Why This Matters

SFGC gives researchers a way to study structure-function coupling at the level of brain hierarchies. That is useful because cortical development is not just a matter of stronger or weaker connectivity; it also involves changing relationships between sensory, motor, attentional, and transmodal systems.

The paper is also interesting because it links the same imaging phenotype to behavior, heritability, and transcriptomics. That makes SFGC a candidate bridge between MRI-scale organization and lower-level biological mechanisms.

## Caveats and Limitations

The developmental inference is based mainly on two broad age groups: ABCD baseline children around 9-10 years old and HCP young adults aged 22-37. The authors note that longitudinal ABCD follow-up and broader HCP-Development analyses will be needed to trace continuous maturational trajectories.

The SFGC metric is interpretable, but it uses cosine similarity between low-dimensional gradients. Future work may need manifold-based, nonlinear, dynamic, and task-based extensions to capture structure-function relationships that do not appear as simple gradient alignment.

## Key Takeaways

- Defines SFGC as alignment between structural and functional connectivity gradients.
- Uses ABCD children, HCP young adults, and HCP-Development harmonization data.
- Finds developmental refinement from sensory-aligned childhood coupling to more differentiated adult coupling.
- Shows SFGC relates to cognition, mental health, sex, and age, with subnetwork metrics often outperforming macroscale metrics.
- Finds hierarchical heritability, strongest for lower-order gradient couplings.
- Links child SFGC heritability to endothelial/microglial signatures and adult heritability to excitatory neuron signatures.

## Source

- DOI: [10.1038/s41467-026-71719-y](https://doi.org/10.1038/s41467-026-71719-y)
- URL: [https://doi.org/10.1038/s41467-026-71719-y](https://doi.org/10.1038/s41467-026-71719-y)
