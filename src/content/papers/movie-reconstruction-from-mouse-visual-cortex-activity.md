---
title: "Movie reconstruction from mouse visual cortex activity"
summary: >-
  Bauer, Margrie and Clopath reconstruct natural movies from mouse visual cortex
  activity recorded with two-photon calcium imaging. Instead of training a
  direct decoder, they optimize video inputs through a state-of-the-art dynamic
  neural encoding model so that model-predicted neural responses match recorded
  activity. The method reconstructs 10-second movies at 30 Hz and reaches a
  reported pixel-level correlation of 0.57 for single-trial reconstructions,
  substantially above prior static-image reconstructions from awake mouse V1.
  Performance depends strongly on the number of recorded neurons and on model
  ensembling.
whyItMatters: >-
  The paper pushes visual reconstruction from population activity toward
  dynamic natural vision in mice. It gives researchers a way to inspect what
  information about a movie is present in visual cortex activity at single-cell
  resolution.
limitations: >-
  Reconstructions are constrained by the encoding model and by the training
  distribution of natural movies. The method reconstructs stimulus information
  represented in recorded visual cortex activity, not subjective visual
  experience, and performance depends on large neural populations and strong
  encoding models.
authors:
  - Joel Bauer
  - Troy W Margrie
  - Claudia Clopath
theme: "Biological Learning & Neural Computation"
sourceUrl: https://elifesciences.org/reviewed-preprints/105081
sourceHost: elifesciences.org
doi: 10.7554/eLife.105081
year: 2026
journal: eLife
sourceContext: fulltext
capturedAt: '2026-06-29T07:31:17+01:00'
draft: false
---
## Summary

This eLife reviewed preprint asks whether natural movies can be reconstructed
from mouse visual cortex activity. Human fMRI studies have made visual
reconstruction familiar, but fMRI is indirect and coarse. Here the authors use
single-cell-level two-photon calcium imaging from mouse visual cortex, aiming to
recover dynamic visual input from neural population responses.

The method inverts a dynamic neural encoding model. The authors start from
recorded visual-cortex activity and optimize candidate movie frames so that the
encoding model's predicted neural responses match the measured responses. In
effect, the encoding model supplies a differentiable bridge from video input to
neural activity, and reconstruction is performed by backpropagating through that
model.

The reconstructions are 10-second natural movies at 30 Hz. The reported
single-trial reconstructions reach a pixel-level correlation of 0.57 with the
ground-truth movies. The authors compare this with earlier awake-mouse V1
reconstructions from static images, which reached a pixel-level correlation of
0.24 over a similar retinotopic area.

Two ingredients are especially important. More recorded neurons improve
reconstruction quality, and model ensembling helps produce higher-quality
movies. The result is not just a decoder benchmark: it provides a tool for
asking what aspects of dynamic visual scenes are present in population activity.

## Why This Matters

Movie reconstruction makes neural population coding easier to inspect. Instead
of only asking which features a model predicts, researchers can look at the
visual content recoverable from recorded activity and compare it with the actual
stimulus.

The work is also useful because it brings this approach to mouse visual cortex,
where genetic tools, circuit perturbations and large-scale cellular recordings
can be combined in ways that are not possible in human fMRI studies.

## Caveats and Limitations

The reconstruction is mediated by an encoding model, so its failures and priors
shape the output. A good reconstruction shows that the recorded activity plus
model contain stimulus information; it does not mean the animal experienced the
reconstructed movie in a human-like way.

Performance also depends on dense recordings and model ensembling. Smaller
neural populations, different visual areas, different movie statistics or
behavioral state changes may reduce reconstruction quality.

## Key Takeaways

- Natural movies were reconstructed from mouse visual cortex calcium imaging.
- The method optimizes video through a dynamic neural encoding model.
- Reconstructions covered 10-second movies at 30 Hz.
- Single-trial reconstructions reached a reported pixel-level correlation of
  0.57.
- More neurons and model ensembling were critical for high-quality
  reconstruction.

## Source

- DOI: [10.7554/eLife.105081](https://doi.org/10.7554/eLife.105081)
- URL: [https://elifesciences.org/reviewed-preprints/105081](https://elifesciences.org/reviewed-preprints/105081)
- Full text used: eLife XML `https://cdn.elifesciences.org/articles/105081/elife-105081-v1.xml`

