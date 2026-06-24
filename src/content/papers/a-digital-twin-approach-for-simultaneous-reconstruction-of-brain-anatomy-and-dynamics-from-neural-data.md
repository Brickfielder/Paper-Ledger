---
title: "A digital twin approach for simultaneous reconstruction of brain anatomy and dynamics from neural data"
summary: >-
  Fabbrizzi, Amato and colleagues introduce FEDE, a high-fidelity digital brain
  model pipeline that combines MRI-derived anatomical reconstruction with
  biophysical simulation of neural dynamics. The system integrates tractography,
  voxel-wise myelination and conduction-velocity estimates, tissue-aware finite
  element head modeling, high-density cortical simulation and EEG fitting. As a
  proof of concept, FEDE generated a digital twin of a toddler with autism
  spectrum disorder, reproducing resting EEG power spectra and functional
  connectivity more closely than a standard simplified model and identifying
  candidate patient-specific parameters linked to excitation-inhibition balance
  and background noise.
whyItMatters: >-
  The paper shows how brain digital twins can be made more anatomically and
  dynamically specific. Instead of treating connectivity, conduction, source
  projection and neural mass parameters as separate modeling problems, FEDE
  puts them into one patient-specific pipeline that can be fitted against real
  neural recordings.
limitations: >-
  The clinical demonstration is a single toddler with ASD, so it proves
  feasibility rather than diagnostic or therapeutic validity. Parameter fits in
  complex brain models can be non-unique, and the inferred synaptic anomalies
  should be treated as model-generated hypotheses rather than direct biomarkers.
authors:
  - Michelangelo Fabbrizzi
  - Lorenzo Gaetano Amato
  - Leonardo Martinelli
  - Jacopo Carpaneto
  - Emanuele Bartolini
  - Sara Calderoni
  - Alessandra Retico
  - Alberto Arturo Vergani
  - Alberto Mazzoni
theme: "Brain Maps & Connectomes"
sourceUrl: https://journals.plos.org/digitalhealth/article?id=10.1371/journal.pdig.0001445
sourceHost: journals.plos.org
doi: 10.1371/journal.pdig.0001445
year: 2026
journal: PLOS Digital Health
sourceContext: fulltext
capturedAt: '2026-06-24T07:17:04+01:00'
draft: false
---
## Summary

This PLOS Digital Health paper presents FEDE, a pipeline for building
patient-specific digital brain twins that jointly reconstruct anatomy and neural
dynamics. The aim is to move beyond fragmented workflows where structural MRI,
connectivity, head modeling and neural simulation are handled as separate,
loosely coupled steps.

FEDE starts from multimodal MRI, including T1-weighted, T2-weighted and
diffusion-weighted imaging. It reconstructs brain parcellation, structural
connectivity, tract lengths, local cortical connectivity, voxel-wise myelination
and conduction-velocity maps. It then builds an anatomically detailed finite
element head model so simulated cortical activity can be projected to virtual
EEG electrodes through a patient-specific lead-field matrix.

The authors applied the pipeline to a 2-year-4-month-old toddler with autism
spectrum disorder. Neural activity was simulated on a high-density cortical mesh
using a Jansen-Rit neural mass model, then optimized against resting-state EEG.
FEDE reproduced the patient's EEG power spectrum and functional connectivity
with high fidelity, including power-spectrum structure and functional
connectivity patterns that simplified models captured less well.

The paper also compares FEDE with a standard digital twin approach using a
simpler lead-field model, homogeneous conduction velocity and lower-density
regional simulation. FEDE improved both spectral and functional-connectivity
fits. Its parameter-analysis module then highlighted excitation-inhibition ratio
and background noise as the parameters most relevant to reproducing the
patient's EEG, yielding hypotheses consistent with existing ASD
pathophysiology.

## Why This Matters

Digital twins are only useful clinically if they preserve enough individual
structure to make patient-specific predictions. FEDE is interesting because it
tries to keep the anatomical chain intact: myelination affects conduction,
anatomy affects source projection, and local cortical structure affects the
simulated dynamics.

The result is not a ready clinical decision tool, but it is a serious step
toward models that can connect imaging, electrophysiology and mechanistic
hypotheses in one reproducible workflow.

## Caveats and Limitations

The demonstration is a single-patient proof of concept. It shows that FEDE can
fit one child's EEG and recover plausible parameters, not that it can diagnose
ASD, predict treatment response or generalize across patients.

The model is also complex. Many parameter combinations can produce similar
outputs in neural mass models, and fitted parameters such as
excitation-inhibition ratio or background noise are indirect inferences. They
should be read as hypotheses to test, not direct measurements of synaptic
biology.

## Key Takeaways

- FEDE integrates MRI-derived anatomy with biophysical simulation and EEG
  fitting.
- The pipeline estimates structural connectivity, myelination, conduction
  velocity and tissue-aware lead fields.
- In one toddler with ASD, FEDE reproduced resting EEG power spectra and
  functional connectivity.
- It outperformed a simplified standard digital twin model in the reported
  comparisons.
- The fitted model suggested patient-specific excitation-inhibition and noise
  abnormalities, but these remain model-based hypotheses.

## Source

- DOI: [10.1371/journal.pdig.0001445](https://doi.org/10.1371/journal.pdig.0001445)
- URL: [https://journals.plos.org/digitalhealth/article?id=10.1371/journal.pdig.0001445](https://journals.plos.org/digitalhealth/article?id=10.1371/journal.pdig.0001445)

