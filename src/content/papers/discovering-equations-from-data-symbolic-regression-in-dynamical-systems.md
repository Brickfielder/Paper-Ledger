---
title: "Discovering equations from data: symbolic regression in dynamical systems"
summary: >-
  Brum, Lober, Previdelli and Rodrigues review symbolic regression methods for
  discovering governing equations from data and benchmark five open-source
  approaches on nine dynamical systems. The tested systems include Lorenz
  dynamics, a nonlinear pendulum, Lotka-Volterra predator-prey dynamics and six
  epidemiological compartment models. The comparison covers GPLearn,
  AI-Feynman, PySINDy, PySR and PyKAN, evaluating both recovery of structural
  equation form and integrated trajectory accuracy. PySR was the strongest
  overall performer, recovering the structural form of all systems and matching
  several original dynamics without statistically significant differences.
whyItMatters: >-
  The paper is useful because it treats symbolic regression as a practical tool
  for scientific model discovery, not just a benchmark curiosity. It gives a
  compact comparison of current methods on systems where interpretability and
  correct equation structure matter.
limitations: >-
  The benchmark uses synthetic data from known ordinary differential equations,
  with tuned algorithm parameters and limited noise or measurement complications.
  Real-world dynamical data may be sparse, biased, partially observed or
  nonstationary, and symbolic regression remains computationally expensive as
  the expression search space grows.
authors:
  - Beatriz R. Brum
  - Luiza Lober
  - Isolde Previdelli
  - Francisco A. Rodrigues
theme: "AI Agents, Reasoning & Machine Cognition"
sourceUrl: https://arxiv.org/abs/2508.20257
sourceHost: arxiv.org
doi: 10.48550/arXiv.2508.20257
year: 2025
journal: arXiv
sourceContext: fulltext
capturedAt: '2026-06-28T10:10:05+01:00'
draft: false
---
## Summary

This arXiv paper reviews symbolic regression as a way to recover governing
equations directly from data. Unlike ordinary regression, symbolic regression
searches over both equation structure and parameters, producing interpretable
mathematical expressions rather than only fitted predictions.

The authors compare five symbolic regression methods: GPLearn, AI-Feynman,
PySINDy, PySR and PyKAN. The benchmark covers nine dynamical systems: the Lorenz
attractor, a nonlinear pendulum, Lotka-Volterra predator-prey dynamics, and six
epidemiological compartment models including SIR, SIS, SEIR, SEIRD, SIRV and
SIRS.

The evaluation has two parts. First, the authors check whether a method recovers
the structural form of the original governing equations. Second, they integrate
the inferred equations over time and compare the resulting trajectories against
the original dynamics using error and goodness-of-fit measures, including MAE,
R-squared and Wilcoxon tests.

PySR performs best overall. It identifies the structural form of all tested
systems and gives several trajectories that are statistically indistinguishable
from the original dynamics. PyKAN also recovers all system structures, but with
fewer cases matching the original dynamics as closely. AI-Feynman performs well
on several systems but misses some chaotic and epidemiological cases. PySINDy
and GPLearn are more limited, especially on more complex compartmental epidemic
models.

## Why This Matters

Symbolic regression matters when the goal is understanding, not just
prediction. In physics, ecology and epidemiology, a compact equation can be more
useful than a black-box model because it can be inspected, simulated and related
to theory.

This paper is a useful practical comparison because it includes newer methods
such as PySR and PyKAN and tests them on epidemiological dynamics, where
interpretable mechanistic equations are especially valuable.

## Caveats and Limitations

The study uses synthetic data generated from known equations. That is the right
starting point for a benchmark, but it avoids many real-data problems: missing
variables, noisy measurements, irregular sampling, changing parameters and
unmodeled external interventions.

The results also depend on parameter tuning and on the chosen search spaces for
each method. Symbolic regression is still computationally hard, so performance
can change quickly as the allowed operators, expression complexity and number
of variables increase.

## Key Takeaways

- Symbolic regression searches for equation structure and parameters from data.
- Five methods were compared: GPLearn, AI-Feynman, PySINDy, PySR and PyKAN.
- The benchmark covered physical, ecological and epidemiological ODE systems.
- PySR was the strongest overall performer in this comparison.
- Synthetic recovery is promising, but real-world dynamical data will be harder.

## Source

- DOI: [10.48550/arXiv.2508.20257](https://doi.org/10.48550/arXiv.2508.20257)
- URL: [https://arxiv.org/abs/2508.20257](https://arxiv.org/abs/2508.20257)
- Full text used: [https://arxiv.org/html/2508.20257v1](https://arxiv.org/html/2508.20257v1)

