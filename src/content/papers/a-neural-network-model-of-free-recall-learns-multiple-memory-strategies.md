---
title: A neural network model of free recall learns multiple memory strategies
summary: >-
  The paper examines how neural networks can learn to perform free recall and
  whether they rely on the same kinds of mechanisms that have been proposed for
  human memory. The authors start from the observation that people often show
  recency effects and tend to recall items in the order they were studied.
  Classic models explain these patterns with a temporal context signal that
  continuously mixes in recent experience. The study asks whether that single
  idea is enough to explain the full range of recall strategies, especially
  strategies used by memory experts. To test this, the authors optimized neural
  networks on free-recall tasks and examined the retrieval strategies that
  emerged. They found that the networks did not converge on one uniform
  solution. Some models used strategies that resembled temporal context-based
  recall. The best-performing models instead developed a stimulus-invariant
  index code that represents an item by its studied position in the list. That
  position-based code acted like a stable scaffold for forward recall. The
  authors argue that this is conceptually similar to a memory palace, where
  learned structure supports efficient retrieval. They also report that the
  index code was more likely to appear when models were encouraged to recall all
  studied items rather than only the next few, and when they were prevented from
  leaning on recency. The work suggests that human-like recall patterns can
  arise from more than one computational mechanism. It also implies that using
  item index may be an especially effective strategy for expert-level sequential
  recall. The main methodological contribution is the comparison of learned
  retrieval strategies under different training conditions, rather than a claim
  that one model captures all of human memory.
whyItMatters: >-
  This matters because it shows that there may be multiple valid computational
  routes to behavior that looks like human memory. That helps explain why simple
  temporal-context theories can capture some recall effects but may miss the
  strategies used when memory demands are higher or when people learn to use
  structured mnemonic techniques.
limitations: >-
  This is a modeling study, so the results depend on the specific task design,
  training objectives, and network architecture. The paper suggests a useful
  alternative mechanism, but it does not by itself prove that humans use the
  same index-based code in the brain. The abstract also leaves open how broadly
  the findings generalize beyond the free-recall settings tested here.
authors:
  - Moufan Li
  - Kristopher T. Jensen
  - Qiong Zhang
  - Qihong Lu
  - Marcelo G. Mattar
sourceUrl: 'https://www.biorxiv.org/content/10.1101/2025.09.25.678592v2'
sourceHost: biorxiv.org
doi: 10.1101/2025.09.25.678592
year: 2025
journal: bioRxiv (Cold Spring Harbor Laboratory)
sourceContext: fulltext
capturedAt: '2026-07-21T05:54:08.049Z'
draft: false
---
## Summary
The paper examines how neural networks can learn to perform free recall and whether they rely on the same kinds of mechanisms that have been proposed for human memory. The authors start from the observation that people often show recency effects and tend to recall items in the order they were studied. Classic models explain these patterns with a temporal context signal that continuously mixes in recent experience. The study asks whether that single idea is enough to explain the full range of recall strategies, especially strategies used by memory experts. To test this, the authors optimized neural networks on free-recall tasks and examined the retrieval strategies that emerged. They found that the networks did not converge on one uniform solution. Some models used strategies that resembled temporal context-based recall. The best-performing models instead developed a stimulus-invariant index code that represents an item by its studied position in the list. That position-based code acted like a stable scaffold for forward recall. The authors argue that this is conceptually similar to a memory palace, where learned structure supports efficient retrieval. They also report that the index code was more likely to appear when models were encouraged to recall all studied items rather than only the next few, and when they were prevented from leaning on recency. The work suggests that human-like recall patterns can arise from more than one computational mechanism. It also implies that using item index may be an especially effective strategy for expert-level sequential recall. The main methodological contribution is the comparison of learned retrieval strategies under different training conditions, rather than a claim that one model captures all of human memory.
## Why This Matters
This matters because it shows that there may be multiple valid computational routes to behavior that looks like human memory. That helps explain why simple temporal-context theories can capture some recall effects but may miss the strategies used when memory demands are higher or when people learn to use structured mnemonic techniques.
## Caveats and Limitations
This is a modeling study, so the results depend on the specific task design, training objectives, and network architecture. The paper suggests a useful alternative mechanism, but it does not by itself prove that humans use the same index-based code in the brain. The abstract also leaves open how broadly the findings generalize beyond the free-recall settings tested here.
## Key Takeaways
- Neural networks trained for free recall can discover more than one memory strategy.
- Some learned strategies resemble classic temporal-context models, but the strongest models used item position as a code.
- A stimulus-invariant index code can provide a scaffold for forward recall, similar in spirit to a memory palace.
- This strategy emerged more often when models were trained to recall all items and not just the most recent ones.
- The study argues that expert-like recall may be better explained by flexible, task-dependent mechanisms than by a single universal model.
## Source
- DOI: [10.1101/2025.09.25.678592](https://doi.org/10.1101/2025.09.25.678592)
- URL: [https://www.biorxiv.org/content/10.1101/2025.09.25.678592v2](https://www.biorxiv.org/content/10.1101/2025.09.25.678592v2)
