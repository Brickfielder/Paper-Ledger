---
title: Symmetry Breaking Is the Price of Finite Capacity
summary: >-
  This paper studies when a model trained on a symmetric task will still end up
  breaking that symmetry. The core setup is a prediction problem with exact
  group symmetry, where the target function treats whole blocks of directions
  equally. The authors analyze a capacity-limited class of predictors,
  specifically rank-constrained bilinear models under a Gaussian design. In this
  setting, the best unconstrained model can choose individual directions, while
  any symmetric model must include or exclude whole symmetry blocks at once. The
  main result is an exact expression for the performance gap between the best
  unrestricted model and the best symmetric one. That gap is the difference
  between the signal captured by the best k individual directions and the signal
  captured by the best collection of whole blocks that fits in the same budget.
  When the budget cuts through a block, the optimal model is necessarily
  symmetry-breaking, even with perfectly symmetric data and exact optimization.
  The paper shows that this phenomenon is not just qualitative but can be
  measured exactly in the Gaussian case. It also derives a matching formula for
  rotation sensitivity, which quantifies how much the model’s output changes
  under symmetry transformations. The same reasoning is then connected to
  attention heads, because a head’s similarity computation is rank-limited by
  its head dimension. The authors argue that heads trained to fit a symmetric
  similarity should therefore break symmetry whenever the head dimension falls
  inside a symmetry block. Experiments on three-dimensional directions are
  reported to match the predicted breaking points and predicted rotation
  sensitivity very closely. The paper also examines softmax and peaked
  attention, finding that the symmetric solution can reappear in some settings
  but not in others. A useful methodological contribution is a procedure for
  distinguishing symmetry breaking caused by finite capacity from symmetry
  violations caused by data, architecture, or incomplete training.
whyItMatters: >-
  This paper gives a clean explanation for why trained models can violate
  symmetries even when the task itself is perfectly symmetric. That is important
  because not every symmetry violation is a bug or a sign of bad data; sometimes
  it is the mathematically best use of limited capacity.
limitations: >-
  The strongest results are exact, but they rely on an idealized Gaussian setup
  and a very specific rank-constrained model class. Real neural networks and
  real datasets can have additional confounds, so the exact gap formula may not
  transfer directly. The experimental evidence supports the theory, but it
  appears to focus on a limited family of attention-style settings rather than
  broad downstream tasks.
authors:
  - Maggie Chlon
  - Leon Chlon
sourceUrl: 'https://arxiv.org/pdf/2610.36138'
sourceHost: arxiv.org
year: 2024
sourceContext: fulltext
capturedAt: '2026-11-15T18:46:22.543Z'
draft: false
---
## Summary
This paper studies when a model trained on a symmetric task will still end up breaking that symmetry. The core setup is a prediction problem with exact group symmetry, where the target function treats whole blocks of directions equally. The authors analyze a capacity-limited class of predictors, specifically rank-constrained bilinear models under a Gaussian design. In this setting, the best unconstrained model can choose individual directions, while any symmetric model must include or exclude whole symmetry blocks at once. The main result is an exact expression for the performance gap between the best unrestricted model and the best symmetric one. That gap is the difference between the signal captured by the best k individual directions and the signal captured by the best collection of whole blocks that fits in the same budget. When the budget cuts through a block, the optimal model is necessarily symmetry-breaking, even with perfectly symmetric data and exact optimization. The paper shows that this phenomenon is not just qualitative but can be measured exactly in the Gaussian case. It also derives a matching formula for rotation sensitivity, which quantifies how much the model’s output changes under symmetry transformations. The same reasoning is then connected to attention heads, because a head’s similarity computation is rank-limited by its head dimension. The authors argue that heads trained to fit a symmetric similarity should therefore break symmetry whenever the head dimension falls inside a symmetry block. Experiments on three-dimensional directions are reported to match the predicted breaking points and predicted rotation sensitivity very closely. The paper also examines softmax and peaked attention, finding that the symmetric solution can reappear in some settings but not in others. A useful methodological contribution is a procedure for distinguishing symmetry breaking caused by finite capacity from symmetry violations caused by data, architecture, or incomplete training.
## Why This Matters
This paper gives a clean explanation for why trained models can violate symmetries even when the task itself is perfectly symmetric. That is important because not every symmetry violation is a bug or a sign of bad data; sometimes it is the mathematically best use of limited capacity.
## Caveats and Limitations
The strongest results are exact, but they rely on an idealized Gaussian setup and a very specific rank-constrained model class. Real neural networks and real datasets can have additional confounds, so the exact gap formula may not transfer directly. The experimental evidence supports the theory, but it appears to focus on a limited family of attention-style settings rather than broad downstream tasks.
## Key Takeaways
- Finite capacity can make symmetry breaking the optimal solution, even with symmetric data and perfect optimization.
- The paper derives an exact loss gap between unrestricted and symmetry-preserving predictors in a Gaussian rank-limited model.
- When a budget falls inside a symmetry block, the best model must choose part of that block and therefore becomes asymmetric.
- The same logic applies to attention heads because their similarity computation has a rank limit set by head dimension.
- The authors provide a practical procedure for telling capacity-driven symmetry breaking apart from other causes of asymmetry.
## Source
- URL: [https://arxiv.org/pdf/2610.36138](https://arxiv.org/pdf/2610.36138)
