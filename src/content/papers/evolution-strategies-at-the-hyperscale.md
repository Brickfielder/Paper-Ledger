---
title: Evolution Strategies at the Hyperscale
summary: >-
  This paper presents EGGROLL, a way to train large neural networks with
  evolution strategies (ES), an optimization approach that evaluates candidate
  parameter changes without using backpropagation. Ordinary ES can be expensive
  at scale because each candidate perturbs a huge weight matrix, creating heavy
  memory traffic and limiting how many candidates a GPU can evaluate. EGGROLL
  represents each candidate's perturbation as the product of two skinny,
  low-rank matrices. That reduces the work and storage needed for an individual
  candidate. The key idea is to average many such candidates: although each
  perturbation is low-rank, their combined update can capture a much richer,
  effectively high-rank direction. The authors provide an analysis relating
  this estimator to full-rank updates as the rank increases, then evaluate the
  method on language-model pretraining and reinforcement-learning tasks. They
  report much higher throughput than a straightforward ES implementation,
  competitive results against gradient-based or policy-optimization baselines
  on selected tasks, and a demonstration of training a nonlinear recurrent
  language model using integer-valued computation.
whyItMatters: >-
  Backpropagation is the standard way to train neural networks, but it requires
  storing and propagating gradients through the model. EGGROLL explores a
  different route that can use black-box evaluations and may fit workloads
  where gradient storage or communication is a bottleneck. The low-rank
  sampling strategy aims to make that route practical on modern accelerators.
limitations: >-
  The reported speedups depend on the model, hardware, population size, and
  comparison baseline; they should not be read as a general guarantee that
  evolution strategies outperform backpropagation. Evolution strategies also
  need many candidate evaluations and can have substantial sampling variance.
  The experiments cover a selected set of recurrent-language-model and
  reinforcement-learning settings, so broader performance and scaling claims
  require further testing.
authors:
  - Bidipta Sarkar
  - Mattie Fellows
  - Juan Agustin Duque
  - Alistair Letcher
  - Antonio León Villares
  - Anya Sims
  - Clarisse Wibault
  - Dmitry Samsonov
  - Dylan Cope
  - Jarek Luca Liesen
  - Kang Li
  - Lukas Seier
  - Theo Wolf
  - Uljad Berdica
  - Valentin Mohl
  - Alexander David Goldie
  - Aaron Courville
  - Karin Sevegnani
  - Shimon Whiteson
  - Jakob Nicolaus Foerster
sourceUrl: 'https://proceedings.mlr.press/v306/sarkar26a.html'
sourceHost: proceedings.mlr.press
doi: 10.48550/arXiv.2511.16652
year: 2026
journal: Proceedings of Machine Learning Research (ICML 2026)
sourceContext: fulltext
capturedAt: '2026-11-24T00:00:00.000Z'
draft: false
---
## Summary
Evolution strategies (ES) optimize a model by trying parameter changes and keeping directions that improve a score, rather than computing gradients with backpropagation. This can make training easier to distribute or apply when gradients are unavailable, but a direct implementation is costly for large neural networks: it must generate and evaluate many large perturbations, moving a great deal of data through memory.

The paper introduces **EGGROLL** (Evolution Guided General Optimization via Low-rank Learning). For a weight matrix, it builds each sampled perturbation from two skinny matrices instead of a full-sized random matrix. If the weight matrix has dimensions (m 	imes n) and the sampled rank is (r), this changes the auxiliary storage and perturbation work from roughly (O(mn)) to (O(r(m+n))). The algorithm combines information across a large population of candidates; averaging many low-rank perturbations can produce a much richer aggregate update than any one candidate alone. The authors analyze how the low-rank estimator relates to a full-rank update as rank increases.

The experiments test EGGROLL on several settings, including language-model pretraining and reinforcement learning. The paper reports that its implementation can use accelerator throughput far more effectively than a straightforward ES baseline, with results competitive with established methods on selected reasoning and reinforcement-learning tasks. It also demonstrates pretraining a nonlinear recurrent language model with integer-valued computation. These results illustrate that ES can be engineered for large-scale neural-network workloads, rather than serving only as a small-model alternative.

## Why This Matters
Backpropagation is highly effective, but it requires gradient computation and storage throughout the network. EGGROLL offers a way to reduce the cost of candidate perturbations when using gradient-free optimization. That could be useful for black-box objectives, some distributed or hardware-constrained settings, and research into training procedures that do not rely on standard gradient propagation.

## Caveats and Limitations
The paper's large throughput gains are measured against particular implementations and depend on hardware, population size, rank, and task. They do not establish that ES is generally faster or more accurate than backpropagation. ES still requires many evaluations and can be sensitive to sampling noise. The empirical results cover a limited range of model families and tasks, so claims about general-purpose large-model training need broader comparisons.

## Key Takeaways
- EGGROLL represents each sampled weight perturbation using low-rank factors, reducing per-candidate memory and compute.
- A large population can combine low-rank candidates into a richer aggregate update.
- The authors report high throughput and competitive results on selected language-model and reinforcement-learning experiments.
- The paper demonstrates integer-valued recurrent-model pretraining using this gradient-free approach.
- Reported speedups are setting-dependent and do not imply that evolution strategies replace backpropagation in general.

## Source
- Published at [ICML 2026, Proceedings of Machine Learning Research](https://proceedings.mlr.press/v306/sarkar26a.html).
- Preprint: [arXiv:2511.16652](https://arxiv.org/abs/2511.16652).
- Paper code: [weight-space-programming-autoresearch](https://github.com/csinva/weight-space-programming-autoresearch).
