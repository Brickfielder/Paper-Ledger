---
title: Pretraining for Sample-Efficient Neural Interfaces
summary: >-
  This paper studies how to make neural decoders for brain-computer interfaces
  work with much less labeled data. The setting is intracranial EEG, where
  recordings differ substantially across people because electrode contact
  placement and neuroanatomy are not standardized. The authors argue that this
  variability makes self-supervised pretraining harder than in more uniform data
  domains. To address that problem, they propose MAPA, a masked autoencoder
  built with two spatial encodings. One encoding represents anatomical region
  information, and the other captures relative position information. The idea is
  that these signals help the model learn representations that are more
  transferable across subjects and tasks. The method is presented as otherwise
  vanilla, meaning the main contribution is the way spatial information is
  injected rather than a new decoder architecture. They evaluate MAPA on the
  Neuroprobe benchmark. In that benchmark, MAPA achieves a new state of the art
  in within-session, cross-session, and cross-subject settings without
  fine-tuning. The most striking result is in the cross-subject regime, where a
  linear probe on MAPA features needs only about 164 labeled trials to match the
  accuracy that takes 3,500 trials without pretraining. This suggests that the
  learned representation is substantially more label-efficient for new subjects.
  The paper’s main methodological point is that carefully designed spatial
  encodings can make self-supervised pretraining viable for heterogeneous iEEG
  recordings.
whyItMatters: >-
  Brain-computer interfaces are often limited by how much labeled data must be
  collected from each new person. If a pretrained model can transfer better
  across subjects, it could make neural decoders faster and cheaper to deploy.
  That matters for both research settings and future clinical systems.
limitations: >-
  The evidence comes from the Neuroprobe benchmark, so the results may not fully
  capture every real-world iEEG deployment scenario. The abstract does not
  describe external validation beyond that benchmark, so generalization to other
  recording setups, tasks, or clinical populations remains uncertain. The
  improvement is shown with a linear probe and without fine-tuning, which is
  useful, but it does not by itself prove that every downstream decoder will
  benefit equally.
authors:
  - Ben Tang
sourceUrl: 'https://arxiv.org/abs/2609.13507'
sourceHost: arxiv.org
doi: 10.48550/arXiv.2609.13507
year: 2026
sourceContext: fulltext
capturedAt: '2026-09-20T10:44:08.800Z'
draft: false
---
## Summary
This paper studies how to make neural decoders for brain-computer interfaces work with much less labeled data. The setting is intracranial EEG, where recordings differ substantially across people because electrode contact placement and neuroanatomy are not standardized. The authors argue that this variability makes self-supervised pretraining harder than in more uniform data domains. To address that problem, they propose MAPA, a masked autoencoder built with two spatial encodings. One encoding represents anatomical region information, and the other captures relative position information. The idea is that these signals help the model learn representations that are more transferable across subjects and tasks. The method is presented as otherwise vanilla, meaning the main contribution is the way spatial information is injected rather than a new decoder architecture. They evaluate MAPA on the Neuroprobe benchmark. In that benchmark, MAPA achieves a new state of the art in within-session, cross-session, and cross-subject settings without fine-tuning. The most striking result is in the cross-subject regime, where a linear probe on MAPA features needs only about 164 labeled trials to match the accuracy that takes 3,500 trials without pretraining. This suggests that the learned representation is substantially more label-efficient for new subjects. The paper’s main methodological point is that carefully designed spatial encodings can make self-supervised pretraining viable for heterogeneous iEEG recordings.
## Why This Matters
Brain-computer interfaces are often limited by how much labeled data must be collected from each new person. If a pretrained model can transfer better across subjects, it could make neural decoders faster and cheaper to deploy. That matters for both research settings and future clinical systems.
## Caveats and Limitations
The evidence comes from the Neuroprobe benchmark, so the results may not fully capture every real-world iEEG deployment scenario. The abstract does not describe external validation beyond that benchmark, so generalization to other recording setups, tasks, or clinical populations remains uncertain. The improvement is shown with a linear probe and without fine-tuning, which is useful, but it does not by itself prove that every downstream decoder will benefit equally.
## Key Takeaways
- MAPA is a masked autoencoder adapted for iEEG pretraining.
- Two spatial encodings help the model handle subject-to-subject anatomical differences.
- The method improves transfer in within-session, cross-session, and cross-subject settings.
- In cross-subject decoding, pretrained features greatly reduce labeled-trial needs.
- The main contribution is better representation learning, not a novel decoder head.
## Source
- DOI: [10.48550/arXiv.2609.13507](https://doi.org/10.48550/arXiv.2609.13507)
- URL: [https://arxiv.org/abs/2609.13507](https://arxiv.org/abs/2609.13507)
