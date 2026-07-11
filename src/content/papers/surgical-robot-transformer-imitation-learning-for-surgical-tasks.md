---
title: "Surgical Robot Transformer (SRT): Imitation Learning for Surgical Tasks"
summary: >-
  This paper shows that imitation-learning policies can perform tissue lifting,
  needle handover and knot tying on the da Vinci Research Kit despite unreliable
  forward kinematics. The key is to predict relative rather than absolute tool
  motions from endoscopic and wrist-camera views, allowing the robot to use
  approximate kinematic demonstration data without correction.
whyItMatters: >-
  Surgical robots have accumulated large stores of recorded demonstrations, but
  imperfect kinematics make them difficult to use for learning. Relative action
  representations offer a practical route from these existing data to more
  capable semi-autonomous surgical manipulation.
limitations: >-
  The study is a laboratory demonstration on a research-platform da Vinci robot,
  with a limited set of tasks, datasets and largely simulated surgical settings.
  Wrist cameras improve performance but are not yet clinically practical, and
  the policies do not respond to surgeon instructions or establish clinical
  safety.
authors:
  - Ji Woong Kim
  - Tony Z. Zhao
  - Samuel Schmidgall
  - Anton Deguet
  - Marin Kobilarov
  - Chelsea Finn
  - Axel Krieger
theme: "Neurotechnology, Intervention & Preservation"
sourceUrl: "https://arxiv.org/html/2407.12998v1"
sourceHost: arxiv.org
doi: "10.48550/arXiv.2407.12998"
year: 2024
journal: arXiv
sourceContext: fulltext
capturedAt: "2026-07-11T10:17:31+01:00"
draft: false
---
## Summary

The da Vinci Research Kit has noisy and inconsistent forward kinematics, caused
by imprecise joint measurements, mechanical flexibility and hysteresis. This
makes a standard policy that predicts absolute end-effector poses unreliable:
small kinematic errors can stop it from reaching the intended target.

Kim and colleagues instead formulate actions as relative motion. Their
best-performing hybrid representation describes translation relative to the
fixed endoscope-tip frame and rotation relative to each tool frame. This reduces
the effect of kinematic error while avoiding the need to infer all translations
from a moving tool orientation.

Using transformer action chunking and image-only inputs from endoscopic and
wrist cameras, the authors test tissue lifting, needle pickup and handover, and
knot tying. Relative-action policies succeeded where camera-centric,
absolute-pose policies failed. Wrist cameras further improved performance on
tasks requiring precise depth perception, and the system showed limited
generalization to altered workspace settings and animal-tissue backgrounds.

## Why This Matters

Rather than waiting for perfectly calibrated kinematics, the paper adapts the
learning problem to the data that surgical systems already produce. It is a
useful example of a robust action representation turning an engineering
limitation into a tractable learning problem.

## Caveats and Limitations

- The work remains preclinical and does not demonstrate safe autonomous surgery.
- Training and evaluation cover a small number of tasks with a single research platform.
- Generalization beyond the tested backgrounds and configurations is limited.
- Clinically deployable wrist cameras, human oversight and instruction following remain open problems.

## Key Takeaways

- Approximate da Vinci kinematics can support imitation learning when actions are relative.
- Hybrid relative actions outperformed absolute, camera-centric pose prediction.
- Wrist-camera views improve fine manipulation and out-of-distribution performance.
- The approach could make large stores of recorded surgical demonstrations more useful for robot learning.

## Source

- DOI: [10.48550/arXiv.2407.12998](https://doi.org/10.48550/arXiv.2407.12998)
- URL: [https://arxiv.org/html/2407.12998v1](https://arxiv.org/html/2407.12998v1)
