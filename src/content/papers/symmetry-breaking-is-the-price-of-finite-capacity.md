---
title: 'Symmetry Breaking Is the Price of Finite Capacity'
summary: >-
  This paper studies why a model can break a symmetry even when the task and
  data respect it. The authors show that, in structured low-rank model classes,
  a finite rank budget may cut through a group-theoretic block of equally
  strong directions. A symmetric solution must use a whole block, while an
  unconstrained optimum can select only part of it; in the Gaussian bilinear
  regression setting, the excess log loss is exactly the signal captured by
  the best k directions minus that captured by the best whole blocks, scaled
  by the observation variance. The authors extend this result to pairwise
  attention similarities, whose rank is bounded by head dimension. Synthetic
  experiments on directions in three dimensions reproduce the predicted
  symmetry and rotation-sensitivity pattern for squared-error logit fitting.
  With softmax attention, flatter distributions restore the predicted
  symmetric head at tested capacities, while peaked attention can favor
  symmetry-breaking heads: these beat the best whole-shell alternatives at
  16 of 20 tested head dimensions, although a broken head also loses to a
  symmetric alternative at one tested dimension. The paper proposes a
  practical diagnostic based on checking data symmetry, identifying the
  narrowest pairwise rank bottleneck, measuring output change under shared
  transformations, sweeping capacity, and comparing against the best
  whole-block symmetric model. Its central qualification is that the result
  concerns structured rank bottlenecks in the representation carrying the
  symmetry; generic hidden width alone does not imply symmetry breaking.
whyItMatters: >-
  The work gives a concrete way to tell when inconsistent predictions on
  equivalent inputs may come from a capacity bottleneck rather than asymmetric
  data or optimization alone. It also identifies design choices—completing
  representation blocks, using invariant inputs, or averaging with enough
  capacity—that can restore consistency when it matters.
limitations: >-
  The exact Gaussian result assumes an isotropic design, a correctly specified
  fixed-variance Gaussian conditional, positive semidefinite coefficients, and
  specific block-structure conditions. The attention theorem studies a single
  head fitted to squared-error logits with independently sampled symmetric
  queries and keys; the authors do not treat complex-type irreducible blocks.
  Softmax evidence is synthetic and limited to one family of similarities on
  the sphere, two temperature multipliers, small networks, and three random
  seeds. Earlier layers in a deep model may route information around a
  single-head bottleneck, so the paper does not establish that full deep
  networks generally must break symmetry.
authors:
  - Maggie Chlon
  - Leon Chlon
sourceUrl: 'https://arxiv.org/abs/2610.36138'
sourceHost: arxiv.org
doi: 10.48550/arXiv.2610.36138
year: 2026
journal: arXiv preprint
sourceContext: fulltext
capturedAt: '2026-10-28T10:17:21.861Z'
draft: false
---
## Summary
The paper asks when a symmetry-respecting task can nevertheless have only symmetry-breaking optima inside a capacity-limited model class. It formalizes a “block” as an irreducible group representation whose directions share a signal strength. In the Gaussian bilinear-regression result, an unrestricted rank-k predictor can keep the k strongest individual directions, whereas a symmetric predictor must allocate capacity to complete blocks. If k cuts through a block, every unrestricted optimum breaks the symmetry, and the exact excess log loss is the difference between the signal retained by the best k directions and the signal retained by the best whole blocks, divided by twice the noise variance.

The authors apply the same rank-allocation idea to pairwise similarities represented by an attention head. The query-key interface has rank at most the head dimension, regardless of how much per-token computation precedes it. For rotation-invariant similarities on the sphere, squared-error logit fitting predicts symmetric heads at dimensions that complete spherical-harmonic shells. Experiments on synthetic three-dimensional directions match the predicted sensitivity pattern closely (RMSE 0.0041); trained heads are nearly symmetric at the predicted dimensions and break symmetry between them.

Softmax changes the picture because its KL loss is not generally quadratic in the logits. In the synthetic experiments, flatter attention restores the predicted symmetric head at the tested eight-dimensional capacity. With peaked attention, heads break symmetry at that capacity and outperform the best whole-shell head; across the sweep, broken heads beat all whole-shell alternatives at 16 of 20 dimensions, tie at one, and lose at another. Thus a rank cut can explain symmetry breaking, but the paper explicitly tests whether that breaking actually improves loss rather than assuming it always does.

The paper also gives a diagnostic procedure: establish the symmetry action and check the data; identify the narrowest pairwise rank bottleneck; estimate the representation blocks from the target or a larger model; measure output sensitivity under a common random transformation (centring softmax logits over keys); sweep the capacity; and compare the trained model’s loss with the best whole-block symmetric model. If the bottleneck is responsible, options include raising capacity to complete blocks, using invariant inputs or equivariant layers, or averaging and distilling with enough room.

## Why This Matters
The analysis helps distinguish capacity-driven inconsistency from asymmetrical data and other causes. It gives practitioners a measurable test and clarifies where symmetry constraints can cost predictive performance: at a structured low-rank interface, not simply because a network has finite generic hidden width.

## Caveats and Limitations
The exact result relies on assumptions including isotropic Gaussian inputs, a correctly specified fixed-variance Gaussian conditional, positive-semidefinite coefficients, and a suitable decomposition into inequivalent absolutely irreducible blocks. The attention theorem focuses on one head fitted to squared-error logits with independently sampled queries and keys from a symmetric distribution. The authors do not treat complex-type blocks, such as planar rotations without reflections.

The softmax experiments are synthetic: one family of rotation-invariant similarities on the sphere, two temperature multipliers, small networks, and three seeds. In a deep architecture, earlier layers can move information between tokens and route around the comparison head. The results therefore support a diagnostic for a particular structured bottleneck, not a general claim that finite-width models must violate symmetry.

## Key Takeaways
- A rank budget that ends partway through an equal-strength representation block can make every optimal low-rank predictor break the task’s symmetry.
- In the Gaussian bilinear setting, the excess log loss has an exact spectral expression.
- An attention head’s query-key rank is bounded by its head dimension, creating a possible structured bottleneck even when per-token computation is expressive.
- Squared-error logit experiments match the predicted rotation-sensitivity pattern; peaked softmax sometimes favors broken heads, but not at every tested capacity.
- The proposed diagnostic compares measured symmetry sensitivity and loss against the best model built from complete representation blocks.

## Source
- arXiv: [2610.36138](https://arxiv.org/abs/2610.36138)
- DOI: [10.48550/arXiv.2610.36138](https://doi.org/10.48550/arXiv.2610.36138)
- Full text: [PDF](https://arxiv.org/pdf/2610.36138)
