---
title: 'RRSI: Regularized Recursive Self-Improvement of Agent Harnesses'
summary: >-
  This paper studies how to improve LLM agents by changing the harness around a
  frozen backbone model rather than the model itself. The harness includes
  prompts, control flow, tools, memory, and context management, which together
  can strongly affect agent performance. The authors note that recent methods
  can iteratively propose and select harness edits, creating a form of recursive
  self-improvement at the system level. They argue that this process can overfit
  to the tasks used during evolution, producing gains that do not transfer well
  to new benchmarks. To address this, they introduce Regularized Recursive
  Self-Improvement of Agent Harnesses, or RRSI. RRSI adds constraints to both
  proposal and selection of edits so that the search is less likely to memorize
  benchmark-specific quirks. On the proposal side, the method uses a temporally
  annealed budget that limits how many edits a candidate can bundle at once. It
  also biases the search toward unexplored trajectories based on the history of
  prior evolution. On the selection side, RRSI uses a critic to screen proposals
  that look too tied to the benchmark. It also uses a pruner to remove changes
  that are too small, too costly, or no longer useful. The overall goal is to
  encourage reusable agent mechanisms instead of brittle or noisy changes.
  Across eight benchmarks covering coding, agentic workspace tasks, and
  engineering design tasks, the method improves performance on the split it
  evolves against and also on out-of-distribution benchmarks. The paper also
  reports that the resulting harness uses fewer policy tokens than the
  unregularized evolution. The main takeaway is that regularizing harness
  evolution can make agent self-improvement more transferable and more
  efficient.
whyItMatters: >-
  This work matters because many agent systems are improved by editing the
  surrounding system, not the base model, and that process can easily overfit.
  RRSI offers a practical way to make those edits more reusable, which is
  important if agent builders want gains that survive outside the training
  setup.
limitations: >-
  The evidence is based on benchmark evaluations, so it is not yet clear how
  well the approach generalizes to real-world deployments with different tools,
  workflows, or failure modes. The abstract also suggests better transfer, but
  it does not by itself show whether the learned harnesses remain robust over
  longer evolution cycles or under stronger distribution shifts. As with most
  system-level optimization methods, some of the gains may depend on the chosen
  benchmarks and search procedure.
authors:
  - Peng Xia
  - Rujun Han
  - Zifeng Wang
  - Yanfei Chen
  - Yufan Zhang
  - Yoonho Lee
  - Chengsong Huang
  - Han Yu
  - Zhongying CuiZhu
  - Yifei Ming
  - Huaxiu Yao
  - Burak Gokturk
  - Tomas Pfister
  - Chen-Yu Lee
sourceUrl: 'https://arxiv.org/abs/2609.24972'
sourceHost: arxiv.org
doi: 10.48550/arXiv.2609.24972
year: 2026
sourceContext: fulltext
capturedAt: '2026-09-24T18:39:11.534Z'
draft: false
---
## Summary
This paper studies how to improve LLM agents by changing the harness around a frozen backbone model rather than the model itself. The harness includes prompts, control flow, tools, memory, and context management, which together can strongly affect agent performance. The authors note that recent methods can iteratively propose and select harness edits, creating a form of recursive self-improvement at the system level. They argue that this process can overfit to the tasks used during evolution, producing gains that do not transfer well to new benchmarks. To address this, they introduce Regularized Recursive Self-Improvement of Agent Harnesses, or RRSI. RRSI adds constraints to both proposal and selection of edits so that the search is less likely to memorize benchmark-specific quirks. On the proposal side, the method uses a temporally annealed budget that limits how many edits a candidate can bundle at once. It also biases the search toward unexplored trajectories based on the history of prior evolution. On the selection side, RRSI uses a critic to screen proposals that look too tied to the benchmark. It also uses a pruner to remove changes that are too small, too costly, or no longer useful. The overall goal is to encourage reusable agent mechanisms instead of brittle or noisy changes. Across eight benchmarks covering coding, agentic workspace tasks, and engineering design tasks, the method improves performance on the split it evolves against and also on out-of-distribution benchmarks. The paper also reports that the resulting harness uses fewer policy tokens than the unregularized evolution. The main takeaway is that regularizing harness evolution can make agent self-improvement more transferable and more efficient.
## Why This Matters
This work matters because many agent systems are improved by editing the surrounding system, not the base model, and that process can easily overfit. RRSI offers a practical way to make those edits more reusable, which is important if agent builders want gains that survive outside the training setup.
## Caveats and Limitations
The evidence is based on benchmark evaluations, so it is not yet clear how well the approach generalizes to real-world deployments with different tools, workflows, or failure modes. The abstract also suggests better transfer, but it does not by itself show whether the learned harnesses remain robust over longer evolution cycles or under stronger distribution shifts. As with most system-level optimization methods, some of the gains may depend on the chosen benchmarks and search procedure.
## Key Takeaways
- Agent performance can be improved by evolving the harness around the model, not just the model itself.
- Unconstrained harness evolution may overfit to the tasks used during search.
- RRSI regularizes both proposal and selection of harness edits to favor reusable changes.
- The method is evaluated across coding, workspace, and engineering design benchmarks.
- The paper reports better out-of-distribution transfer and lower policy-token use than unregularized evolution.
## Source
- DOI: [10.48550/arXiv.2609.24972](https://doi.org/10.48550/arXiv.2609.24972)
- URL: [https://arxiv.org/abs/2609.24972](https://arxiv.org/abs/2609.24972)
