---
title: "Health system learning enables generalist neuroimaging models"
summary: >-
  This study introduces NeuroVFM, a generalist neuroimaging foundation model
  trained with a self-supervised volumetric predictive objective on 5.24 million
  clinical MRI and CT volumes from routine care. The model learns a shared
  neuroanatomical representation across modalities and achieves strong results
  on diagnosis, cross-cohort transfer, radiology report generation and
  prospective triage, supporting health system learning as a route to clinical
  AI models grounded in real-world imaging.
whyItMatters: >-
  The paper argues that clinical foundation models need the diversity and
  operational context of health system data, not only public internet-scale
  pretraining. NeuroVFM links large-scale self-supervised neuroimaging with
  grounded diagnostic representations and a practical path toward multimodal
  clinical decision support.
limitations: >-
  The model is a research tool and is not FDA approved. The raw patient imaging
  data are not publicly available, performance may reflect the Michigan Medicine
  training distribution, and the prospective triage evaluation still missed
  critical findings. External validation, uncertainty quantification, bias
  assessment and clinical impact studies remain necessary.
authors:
  - Akhil Kondepudi
  - Akshay Rao
  - Chenhui Zhao
  - Yiwei Lyu
  - Samir Harake
  - Soumyanil Banerjee
  - Jacob Ogle
  - Rushikesh Joshi
  - Anna-Katharina Meissner
  - Xinhai Hou
  - Cheng Jiang
  - Asadur Chowdury
  - Ashok Srinivasan
  - Brian Athey
  - Vikas Gulani
  - Aditya Pandey
  - Honglak Lee
  - Todd Hollon
theme: "Brain Maps & Connectomes"
sourceUrl: "https://www.nature.com/articles/s41591-026-04497-1"
sourceHost: nature.com
doi: "10.1038/s41591-026-04497-1"
year: 2026
journal: Nature Medicine
sourceContext: fulltext
capturedAt: "2026-07-12T09:16:26+01:00"
draft: false
---
## Summary

The authors propose health system learning: training medical foundation models
directly on the uncurated data generated during routine clinical care. Their
demonstration model, NeuroVFM, uses Vol-JEPA, a self-supervised volumetric
joint-embedding predictive architecture, to learn from 5.24 million three-
dimensional MRI and CT volumes across 566,915 studies collected at Michigan
Medicine over more than two decades.

NeuroVFM learns a shared latent space for CT and MRI that captures brain
anatomy, pathology and imaging variation without requiring voxel-level
reconstruction or paired radiology reports during pretraining. On 156
diagnostic tasks, it outperformed several health-system and internet-scale
baselines and required fewer labelled positive examples to reach equivalent
performance. The representation also transferred to external cohorts and
cross-modality tasks, including Alzheimer disease classification and pathology
retrieval.

The model was then paired with an open-source language model to generate
structured radiology findings. In blinded expert evaluation, NeuroVFM-generated
reports had fewer key-finding errors, hallucinations and laterality errors than
the tested frontier-model comparator. In a silent one-week prospective study of
1,155 routine head, brain, face and neck scans, the NeuroVFM arm achieved higher
balanced triage accuracy, although it still missed 21 of 155 patients with a
critical finding.

## Why This Matters

Public web data contain little authentic clinical imaging, while real health
systems hold large, heterogeneous streams of scans that reflect the full long
tail of clinical practice. This work offers a concrete model for learning
neuroanatomy and pathology from that environment and combining the resulting
visual representations with general-purpose reasoning systems.

## Caveats and Limitations

- NeuroVFM is not FDA approved and should be treated as a research tool.
- Raw patient MRI and CT data are restricted by institutional and privacy agreements.
- The model may inherit biases from the training health system, cohort and objectives.
- The prospective triage system had 86.5% sensitivity for critical findings and is not an autonomous safety layer.
- Multicentre clinical validation, uncertainty estimation and impact on patient care remain open.

## Key Takeaways

- Health system learning uses routine clinical imaging as foundation-model training data.
- NeuroVFM learns a shared, modality-agnostic neuroanatomical representation from MRI and CT.
- Large-scale self-supervised pretraining improved diagnosis, transfer and report-generation performance.
- Grounded visual modules may complement general-purpose language-model reasoning in clinical workflows.

## Source

- DOI: [10.1038/s41591-026-04497-1](https://doi.org/10.1038/s41591-026-04497-1)
- URL: [https://www.nature.com/articles/s41591-026-04497-1](https://www.nature.com/articles/s41591-026-04497-1)
