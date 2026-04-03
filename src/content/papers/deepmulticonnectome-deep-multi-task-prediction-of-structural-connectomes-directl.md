---
title: >-
  DeepMultiConnectome: Deep multi-task prediction of structural connectomes
  directly from diffusion MRI tractography
summary: >-
  Diffusion MRI tractography can map brain white-matter pathways in vivo, but
  converting tractography into structural connectomes is usually slow and
  depends on gray-matter parcellation. This study introduces
  DeepMultiConnectome, a deep-learning approach that predicts structural
  connectomes directly from tractography. The method is designed to bypass the
  traditional step of labeling streamlines with gray-matter regions before
  connectome construction. To do this, the authors use a point-cloud-based
  neural network with multi-task learning. The network classifies individual
  streamlines according to the regions they connect under two different
  parcellation schemes. By sharing one learned representation across both tasks,
  the model can support multiple connectome definitions from the same
  tractogram. The system was trained and validated on Human Connectome Project
  Young Adult data from 1,000 participants. The labels came from 84-region and
  164-region gray-matter parcellations. Once trained, the model could predict
  multiple structural connectomes from a 3-million-streamline tractogram in
  about 40 seconds. The predicted connectomes were compared with conventional
  connectomes built by standard streamline labeling and showed high agreement
  across both parcellation schemes and several weighting strategies. Agreement
  was especially strong for streamline-count and SIFT2 weighting, while mean-FA
  weighting was less strongly correlated. The method also largely preserved
  network properties, and test-retest and downstream age and cognitive-function
  analyses were comparable to those from traditional connectomes. A key
  limitation is that the reported evaluation is tied to the specific
  parcellation schemes and dataset used for training and validation, so broader
  generalization will need further testing.
whyItMatters: >-
  This work points to a faster way to build brain connectomes without running
  the full conventional labeling pipeline. That could make structural
  connectivity analysis more practical for large studies and for settings where
  many parcellations or weighting schemes are needed.
limitations: >-
  The strongest results are reported for specific HCP Young Adult data,
  parcellation schemes, and weighting choices, so performance may not transfer
  unchanged to other cohorts, scanners, or atlas definitions. Mean-FA agreement
  is weaker than streamline-count or SIFT2 agreement, which suggests some
  connectome features remain harder to approximate.
authors:
  - Marcus J. Vroemen
  - Yuqian Chen
  - Yui Lo
  - Tengfei Xue
  - Weidong Cai
  - Fan Zhang
  - Josien P.W. Pluim
  - Lauren J. O'Donnell
tags:
  - diffusion mri
  - tractography
  - connectome
  - deep learning
  - brain network
  - multi-task learning
sourceUrl: 'https://doi.org/10.1016/j.neuroimage.2026.121765'
sourceHost: doi.org
doi: 10.1016/j.neuroimage.2026.121765
year: 2026
journal: NeuroImage
sourceContext: fulltext
capturedAt: '2026-04-02T16:09:56.973Z'
draft: false
---
## Summary
Diffusion MRI tractography can map brain white-matter pathways in vivo, but converting tractography into structural connectomes is usually slow and depends on gray-matter parcellation. This study introduces DeepMultiConnectome, a deep-learning approach that predicts structural connectomes directly from tractography. The method is designed to bypass the traditional step of labeling streamlines with gray-matter regions before connectome construction. To do this, the authors use a point-cloud-based neural network with multi-task learning. The network classifies individual streamlines according to the regions they connect under two different parcellation schemes. By sharing one learned representation across both tasks, the model can support multiple connectome definitions from the same tractogram. The system was trained and validated on Human Connectome Project Young Adult data from 1,000 participants. The labels came from 84-region and 164-region gray-matter parcellations. Once trained, the model could predict multiple structural connectomes from a 3-million-streamline tractogram in about 40 seconds. The predicted connectomes were compared with conventional connectomes built by standard streamline labeling and showed high agreement across both parcellation schemes and several weighting strategies. Agreement was especially strong for streamline-count and SIFT2 weighting, while mean-FA weighting was less strongly correlated. The method also largely preserved network properties, and test-retest and downstream age and cognitive-function analyses were comparable to those from traditional connectomes. A key limitation is that the reported evaluation is tied to the specific parcellation schemes and dataset used for training and validation, so broader generalization will need further testing.
## Why This Matters
This work points to a faster way to build brain connectomes without running the full conventional labeling pipeline. That could make structural connectivity analysis more practical for large studies and for settings where many parcellations or weighting schemes are needed.
## Caveats and Limitations
The strongest results are reported for specific HCP Young Adult data, parcellation schemes, and weighting choices, so performance may not transfer unchanged to other cohorts, scanners, or atlas definitions. Mean-FA agreement is weaker than streamline-count or SIFT2 agreement, which suggests some connectome features remain harder to approximate.
## Key Takeaways
- Predicts structural connectomes directly from tractography, skipping gray-matter parcellation at inference time.
- Uses a point-cloud neural network with multi-task learning across 84-region and 164-region parcellations.
- Produces multiple connectomes from a large tractogram in roughly 40 seconds.
- Matches traditional connectomes closely for streamline-count and SIFT2 weighting, with weaker agreement for mean-FA weighting.
- Preserves network properties and shows comparable test-retest and downstream predictive performance.
## Source
- DOI: [10.1016/j.neuroimage.2026.121765](https://doi.org/10.1016/j.neuroimage.2026.121765)
- URL: [https://doi.org/10.1016/j.neuroimage.2026.121765](https://doi.org/10.1016/j.neuroimage.2026.121765)
