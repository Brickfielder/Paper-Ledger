---
title: "Neural sampling from cognitive maps enables goal-directed imagination and planning"
summary: >-
  Lin and colleagues present a transparent neural-network model for flexible
  planning based on three ideas drawn from brain function: cognitive maps,
  stochastic sampling and compositional coding. The model learns forward and
  inverse relations between states and actions using local, self-supervised
  plasticity rules, then generates internally simulated, goal-directed
  trajectories. It is tested in spatial navigation, shortest-path-like planning
  on abstract graphs and the decomposition of novel visual silhouettes. Across
  these settings, the generative cognitive map learner (GCML) can produce
  multiple plausible solutions, reroute around obstacles and generalize to
  states not encountered during training without deep learning or
  backpropagation.
whyItMatters: >-
  The paper offers an unusually concrete bridge between hippocampal-inspired
  cognitive maps and efficient machine planning. Its central claim is that
  flexible imagination does not necessarily require large, energy-intensive
  models: a learned map plus a simple inverse model can provide a useful sense
  of direction toward a goal, while stochasticity produces alternative plans.
  The local-learning formulation also makes the approach potentially suitable
  for neuromorphic and edge hardware.
limitations: >-
  The demonstrations are simulations and deliberately simplified tasks, rather
  than tests in complex real-world environments or direct implementations on
  neuromorphic hardware. The biological links are computationally motivated and
  reproduce selected qualitative features of hippocampal replay, but they do
  not establish that the brain uses this exact mechanism. Comparisons with
  modern model-based reinforcement learning and large-scale learned planning
  systems are also limited.
authors:
  - Hui Lin
  - Yukun Yang
  - Rong Zhao
  - Giovanni Pezzulo
  - Wolfgang Maass
theme: "Biological Learning & Neural Computation"
sourceUrl: https://www.nature.com/articles/s42256-026-01254-4
sourceHost: nature.com
doi: 10.1038/s42256-026-01254-4
year: 2026
journal: Nature Machine Intelligence
sourceContext: fulltext
capturedAt: '2026-07-29T16:00:00+01:00'
draft: false
---

## Summary

This paper asks how brains can plan efficiently, learn online and adapt quickly
when goals or contingencies change. Its answer is a model that combines a
cognitive map—an internal representation of relations between states and
actions—with an inverse model that converts the difference between the present
state and a goal into an action direction. When the action-selection process is
noisy and its predicted next states are fed back into the model, it can sample
multiple imagined trajectories toward the same goal.

The authors first apply the approach to 2D navigation. A grid-cell-inspired map
and learned inverse model generate varied paths to a target, including paths
that cross parts of the environment not visited during learning and paths that
reroute around newly introduced obstacles. The resulting simulations resemble
key qualitative properties of goal-directed hippocampal replay.

They then generalize the idea to non-spatial domains through a generative
cognitive map learner (GCML). In a graph-planning task, it finds short or
near-short paths and can sample a diverse set of alternatives when noise is
increased. In a compositional visual task, it learns from decompositions of
five building blocks and generalizes to previously unseen silhouettes made from
eight blocks. The model relies on local, self-supervised learning rules rather
than backpropagation through time.

## Why This Matters

The interesting contribution here is less a claim that this replaces all of
modern planning, and more a compact computational proposal for how a system can
turn a learned relational representation into prospective action sequences.
The combination of an inverse model and controlled sampling gives it both a
goal direction and a way to explore alternatives.

For neuroscience, it provides a candidate mechanistic account of how cognitive
maps could support imagination beyond literal spatial navigation. For AI and
hardware, it suggests a potentially energy-efficient route to flexible planning
that uses transparent components and local learning rules.

## Caveats and Limitations

The evidence is based on simulations in bounded tasks. Strong performance in
2D navigation, small graphs and a visual-composition benchmark does not show
that the method scales to noisy, high-dimensional, partially observed or
continually changing real-world problems.

The correspondence with hippocampal replay is also a model-based explanation,
not direct biological confirmation. The paper shows qualitative consistency
with selected experimental patterns, but alternative neural mechanisms could
produce similar behaviour. Finally, the promise for in-memory and neuromorphic
hardware remains prospective rather than a demonstrated deployment.

## Key Takeaways

- Uses cognitive maps, stochastic sampling and compositional coding for
  goal-directed planning.
- Learns forward and inverse state-action relations through local,
  self-supervised plasticity rules.
- Generates multiple possible trajectories to the same goal, with diversity
  controlled by noise.
- Reproduces qualitative features of flexible hippocampal-style replay in
  navigation simulations.
- Generalizes from spatial navigation to abstract graph planning and novel
  compositional visual problems.
- Is designed as a transparent, potentially energy-efficient alternative to
  backpropagation-heavy planning models.

## Source

- DOI: [10.1038/s42256-026-01254-4](https://doi.org/10.1038/s42256-026-01254-4)
- URL: [https://www.nature.com/articles/s42256-026-01254-4](https://www.nature.com/articles/s42256-026-01254-4)
