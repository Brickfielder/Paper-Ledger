---
title: >-
  SORDINO for Silent, Sensitive, Specific, and Artifact-Resisting fMRI in awake
  behaving mice
summary: >-
  This paper introduces SORDINO, a new fMRI sequence designed to reduce several
  major drawbacks of conventional gradient-echo EPI imaging. The authors frame
  the method as a response to acoustic noise, electromagnetic interference,
  motion artifacts, magnetic-field inhomogeneity, and limited sensitivity and
  specificity in standard BOLD fMRI. SORDINO is built around continuously
  changing gradient directions while keeping total gradient amplitude constant
  throughout the scan. Data are acquired during the gradient ramp rather than
  after it, which is intended to minimize noise and gradient-related artifacts.
  The authors benchmarked SORDINO against conventional GRE-EPI and
  zero-echo-time-style methods on a 9.4T preclinical MRI system. In those
  comparisons, SORDINO was reported to be silent, more sensitive, more specific,
  and more resistant to motion and susceptibility artifacts. A central
  methodological point is that the sequence relies on a steady-state acquisition
  strategy with oversampling, rather than the conventional EPI readout, and its
  contrast is not simply standard BOLD. The paper also models and experiments on
  the likely contrast sources, focusing on inflow-related cerebral blood volume
  effects and tissue oxygen–related T1 changes. The authors argue that these
  contrast mechanisms can support functional imaging even when conventional BOLD
  is problematic. They further show compatibility with simultaneous
  electrophysiology, electrochemistry, or calcium imaging, which suggests
  usefulness for multimodal experiments. In awake mice, SORDINO was used for
  brain-wide resting-state connectivity mapping and for mapping activity during
  naturalistic behavior. The paper also reports demonstrations that are
  difficult with standard fMRI, including head-fixed behaving mice and
  simultaneous imaging of two mice during social interaction. Overall, the study
  presents SORDINO as a technical advance that expands the kinds of animal fMRI
  experiments that can be done without anesthesia or heavy reliance on
  habituation.
whyItMatters: >-
  This work matters because it addresses several practical barriers that make
  rodent fMRI hard to use in realistic behavioral settings. If the sequence
  performs as described, it could make awake-animal imaging quieter, cleaner,
  and more compatible with other recording methods.
limitations: >-
  The evidence comes from a preclinical high-field system, so it is not yet
  clear how broadly the approach will generalize across scanners, species, or
  typical human imaging workflows. The contrast mechanism appears to differ from
  standard BOLD and relies on modeled contributions from blood volume and tissue
  oxygen, so interpretation may be less familiar and may need additional
  validation against independent physiological ground truth. As with many
  technical imaging papers, the strongest claims depend on the specific
  implementation and benchmarking conditions used by the authors.
authors:
  - Martin J. Mackinnon
  - Sheng Song
  - Tzu-Hao Harry Chao
  - Li-Ming Hsu
  - Scott T. Albert
  - Yuncong Ma
  - Tatiana Shnitko
  - Tzu-Wen Winnie Wang
  - Randal J. Nonneman
  - Corey D. Freeman
  - Siddhi S. Ozarkar
  - Usay E. Emir
  - Mark D. Shen
  - Benjamin D. Philpot
  - Adam W. Hantman
  - Sung-Ho Lee
  - Wei-Tang Chang
  - Yen-Yu Ian Shih
sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11952411/'
sourceHost: pmc.ncbi.nlm.nih.gov
doi: 10.1101/2025.03.10.642406
year: 2025
journal: bioRxiv (Cold Spring Harbor Laboratory)
sourceContext: fulltext
capturedAt: '2026-09-10T05:27:58.227Z'
draft: false
---
## Summary
This paper introduces SORDINO, a new fMRI sequence designed to reduce several major drawbacks of conventional gradient-echo EPI imaging. The authors frame the method as a response to acoustic noise, electromagnetic interference, motion artifacts, magnetic-field inhomogeneity, and limited sensitivity and specificity in standard BOLD fMRI. SORDINO is built around continuously changing gradient directions while keeping total gradient amplitude constant throughout the scan. Data are acquired during the gradient ramp rather than after it, which is intended to minimize noise and gradient-related artifacts. The authors benchmarked SORDINO against conventional GRE-EPI and zero-echo-time-style methods on a 9.4T preclinical MRI system. In those comparisons, SORDINO was reported to be silent, more sensitive, more specific, and more resistant to motion and susceptibility artifacts. A central methodological point is that the sequence relies on a steady-state acquisition strategy with oversampling, rather than the conventional EPI readout, and its contrast is not simply standard BOLD. The paper also models and experiments on the likely contrast sources, focusing on inflow-related cerebral blood volume effects and tissue oxygen–related T1 changes. The authors argue that these contrast mechanisms can support functional imaging even when conventional BOLD is problematic. They further show compatibility with simultaneous electrophysiology, electrochemistry, or calcium imaging, which suggests usefulness for multimodal experiments. In awake mice, SORDINO was used for brain-wide resting-state connectivity mapping and for mapping activity during naturalistic behavior. The paper also reports demonstrations that are difficult with standard fMRI, including head-fixed behaving mice and simultaneous imaging of two mice during social interaction. Overall, the study presents SORDINO as a technical advance that expands the kinds of animal fMRI experiments that can be done without anesthesia or heavy reliance on habituation.
## Why This Matters
This work matters because it addresses several practical barriers that make rodent fMRI hard to use in realistic behavioral settings. If the sequence performs as described, it could make awake-animal imaging quieter, cleaner, and more compatible with other recording methods.
## Caveats and Limitations
The evidence comes from a preclinical high-field system, so it is not yet clear how broadly the approach will generalize across scanners, species, or typical human imaging workflows. The contrast mechanism appears to differ from standard BOLD and relies on modeled contributions from blood volume and tissue oxygen, so interpretation may be less familiar and may need additional validation against independent physiological ground truth. As with many technical imaging papers, the strongest claims depend on the specific implementation and benchmarking conditions used by the authors.
## Key Takeaways
- SORDINO is a new fMRI sequence aimed at silent, low-artifact acquisition.
- It keeps gradient amplitude constant while continuously changing gradient direction.
- The method is designed to improve sensitivity and reduce motion, ghosting, and susceptibility problems.
- The authors propose non-BOLD contrast contributions, including blood-volume and tissue-oxygen effects.
- They demonstrate use in awake mice and in multimodal or socially interactive experiments.
## Source
- DOI: [10.1101/2025.03.10.642406](https://doi.org/10.1101/2025.03.10.642406)
- URL: [https://pmc.ncbi.nlm.nih.gov/articles/PMC11952411/](https://pmc.ncbi.nlm.nih.gov/articles/PMC11952411/)
