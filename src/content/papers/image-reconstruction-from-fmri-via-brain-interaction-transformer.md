---
title: Brain-IT: Image Reconstruction from fMRI via Brain-Interaction Transformer
summary: >-
  This paper studies how to reconstruct images that people viewed from their
  fMRI brain activity. The authors argue that recent diffusion-based
  reconstruction methods can produce realistic images but may still drift away
  from the actual stimulus in structure and content. To address this, they
  introduce Brain-IT, a brain-inspired pipeline centered on a Brain Interaction
  Transformer (BIT). BIT does not collapse the whole scan into one global
  representation; instead, it groups functionally similar voxels into shared
  clusters and uses those clusters to predict localized image features. The
  model is designed to share most parameters across clusters and across
  subjects, which is intended to make training more data-efficient and better
  suited to multi-subject data. Brain-IT predicts two different kinds of
  features from fMRI: semantic features and lower-level visual features. The
  semantic branch provides conditioning for a diffusion model so that the
  generated image matches the high-level content suggested by the brain signal.
  The low-level branch predicts VGG-based features and reconstructs a coarse
  image layout through a Deep Image Prior framework. The coarse image is then
  used to initialize the diffusion process, which is refined under semantic
  guidance. The authors present this two-branch design as a way to combine
  structural fidelity with the generative power of diffusion models. They report
  that the method yields reconstructions that are more faithful to the viewed
  images than prior approaches, both visually and on standard objective
  measures. They also emphasize that the cluster-based, shared-weights setup
  allows transfer to new subjects with much less subject-specific fMRI data than
  is usually required. The most important methodological idea is the
  voxel-to-cluster mapping, which aims to respect distributed visual processing
  in the brain while still producing localized image cues for reconstruction.
whyItMatters: >-
  This work is important because it moves fMRI-to-image reconstruction toward
  outputs that better match what a person actually saw, rather than just
  producing plausible-looking images. It also suggests a practical path for
  working with limited brain-imaging data by reusing shared functional structure
  across subjects.
limitations: >-
  The evidence is limited by the fact that this is a reconstruction benchmark,
  so strong visual or metric gains do not necessarily mean the method has solved
  faithful decoding in a general sense. The approach also depends on learned
  mappings, diffusion priors, and a specific fMRI setup, so it is unclear how
  well it would transfer to other datasets, scanning protocols, or more diverse
  stimuli. As with many reconstruction papers, evaluation may still favor images
  that are perceptually plausible over those that are strictly faithful to the
  stimulus.
authors:
  - Roman Beliy
  - Amit Zalcher
  - Jonathan Kogman
  - Navve Wasserman
  - Michal Irani
sourceUrl: 'https://arxiv.org/html/2510.25976'
sourceHost: arxiv.org
year: 2025
sourceContext: fulltext
capturedAt: '2026-11-19T12:37:36.984Z'
draft: false
---
## Summary
This paper studies how to reconstruct images that people viewed from their fMRI brain activity. The authors argue that recent diffusion-based reconstruction methods can produce realistic images but may still drift away from the actual stimulus in structure and content. To address this, they introduce Brain-IT, a brain-inspired pipeline centered on a Brain Interaction Transformer (BIT). BIT does not collapse the whole scan into one global representation; instead, it groups functionally similar voxels into shared clusters and uses those clusters to predict localized image features. The model is designed to share most parameters across clusters and across subjects, which is intended to make training more data-efficient and better suited to multi-subject data. Brain-IT predicts two different kinds of features from fMRI: semantic features and lower-level visual features. The semantic branch provides conditioning for a diffusion model so that the generated image matches the high-level content suggested by the brain signal. The low-level branch predicts VGG-based features and reconstructs a coarse image layout through a Deep Image Prior framework. The coarse image is then used to initialize the diffusion process, which is refined under semantic guidance. The authors present this two-branch design as a way to combine structural fidelity with the generative power of diffusion models. They report that the method yields reconstructions that are more faithful to the viewed images than prior approaches, both visually and on standard objective measures. They also emphasize that the cluster-based, shared-weights setup allows transfer to new subjects with much less subject-specific fMRI data than is usually required. The most important methodological idea is the voxel-to-cluster mapping, which aims to respect distributed visual processing in the brain while still producing localized image cues for reconstruction.
## Why This Matters
This work is important because it moves fMRI-to-image reconstruction toward outputs that better match what a person actually saw, rather than just producing plausible-looking images. It also suggests a practical path for working with limited brain-imaging data by reusing shared functional structure across subjects.
## Caveats and Limitations
The evidence is limited by the fact that this is a reconstruction benchmark, so strong visual or metric gains do not necessarily mean the method has solved faithful decoding in a general sense. The approach also depends on learned mappings, diffusion priors, and a specific fMRI setup, so it is unclear how well it would transfer to other datasets, scanning protocols, or more diverse stimuli. As with many reconstruction papers, evaluation may still favor images that are perceptually plausible over those that are strictly faithful to the stimulus.
## Key Takeaways
- Uses a Brain Interaction Transformer to map fMRI voxels into shared functional clusters.
- Predicts both semantic and low-level visual features from brain activity.
- Combines a coarse Deep Image Prior reconstruction with diffusion-based refinement.
- Aims to improve faithfulness by avoiding a single global fMRI embedding.
- Designed for multi-subject training and faster adaptation to new subjects.
## Source
- URL: [https://arxiv.org/html/2510.25976](https://arxiv.org/html/2510.25976)
