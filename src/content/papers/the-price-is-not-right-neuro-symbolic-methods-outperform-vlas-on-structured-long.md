---
title: >-
  The Price Is Not Right: Neuro-Symbolic Methods Outperform VLAs on Structured
  Long-Horizon Manipulation Tasks with Significantly Lower Energy Consumption
summary: >-
  This paper compares two approaches for long-horizon robot manipulation: a
  fine-tuned open-weight vision-language-action (VLA) model and a neuro-symbolic
  system that combines PDDL-based symbolic planning with learned low-level
  control. The authors focus on structured versions of the Towers of Hanoi task
  in simulation, which are designed to test multi-step planning rather than
  single-step reactive control. They evaluate both task success and energy
  consumption during training and execution. On the 3-block version of the task,
  the neuro-symbolic method reaches 95% success, while the best VLA reaches 34%.
  The same neuro-symbolic system also generalizes to an unseen 4-block variant,
  where it achieves 78% success. In contrast, both VLA models fail to complete
  the 4-block task. The results suggest that explicit symbolic structure can
  help with reliability on problems that require long-horizon reasoning. The
  paper also reports a large energy gap, with VLA fine-tuning consuming nearly
  two orders of magnitude more energy than the neuro-symbolic approach. This
  makes the comparison relevant not only for accuracy but also for training cost
  and efficiency. The study is framed as a head-to-head empirical test rather
  than a broad benchmark sweep, so the conclusions are tied to the specific
  structured manipulation setup. A key methodological point is that the symbolic
  method uses a planner for high-level decisions and learned control only for
  low-level action execution. Because the evaluation is in simulation and
  centered on one family of structured tasks, the results should be interpreted
  as evidence about long-horizon planning rather than general robot capability.
whyItMatters: >-
  The paper shows that for some manipulation problems, adding explicit symbolic
  planning can outperform large end-to-end models while using much less energy.
  That matters for robotics systems that need to be dependable, data-efficient,
  and practical to train and run.
limitations: >-
  The evaluation is limited to simulated Towers of Hanoi variants, so it is
  unclear how well the result transfers to real robots or less structured tasks.
  The comparison also centers on one VLA and one neuro-symbolic design, so
  broader claims about all VLAs or all hybrid systems would need more evidence.
authors: []
tags:
  - energy efficiency
  - long-horizon tasks
  - manipulation
  - neuro-symbolic
  - planning
  - robotics
  - simulation
  - vision-language-action
sourceUrl: 'https://arxiv.org/abs/2602.19260'
sourceHost: arxiv.org
doi: 10.48550/arXiv.2602.19260
year: 2026
sourceContext: fulltext
capturedAt: '2026-04-06T08:45:19.269Z'
draft: false
---
## Summary
This paper compares two approaches for long-horizon robot manipulation: a fine-tuned open-weight vision-language-action (VLA) model and a neuro-symbolic system that combines PDDL-based symbolic planning with learned low-level control. The authors focus on structured versions of the Towers of Hanoi task in simulation, which are designed to test multi-step planning rather than single-step reactive control. They evaluate both task success and energy consumption during training and execution. On the 3-block version of the task, the neuro-symbolic method reaches 95% success, while the best VLA reaches 34%. The same neuro-symbolic system also generalizes to an unseen 4-block variant, where it achieves 78% success. In contrast, both VLA models fail to complete the 4-block task. The results suggest that explicit symbolic structure can help with reliability on problems that require long-horizon reasoning. The paper also reports a large energy gap, with VLA fine-tuning consuming nearly two orders of magnitude more energy than the neuro-symbolic approach. This makes the comparison relevant not only for accuracy but also for training cost and efficiency. The study is framed as a head-to-head empirical test rather than a broad benchmark sweep, so the conclusions are tied to the specific structured manipulation setup. A key methodological point is that the symbolic method uses a planner for high-level decisions and learned control only for low-level action execution. Because the evaluation is in simulation and centered on one family of structured tasks, the results should be interpreted as evidence about long-horizon planning rather than general robot capability.
## Why This Matters
The paper shows that for some manipulation problems, adding explicit symbolic planning can outperform large end-to-end models while using much less energy. That matters for robotics systems that need to be dependable, data-efficient, and practical to train and run.
## Caveats and Limitations
The evaluation is limited to simulated Towers of Hanoi variants, so it is unclear how well the result transfers to real robots or less structured tasks. The comparison also centers on one VLA and one neuro-symbolic design, so broader claims about all VLAs or all hybrid systems would need more evidence.
## Key Takeaways
- Neuro-symbolic planning beat a fine-tuned VLA on structured long-horizon manipulation.
- The strongest result was on a Towers of Hanoi variant in simulation.
- The symbolic method generalized to a harder unseen block-count setting.
- VLA fine-tuning required far more energy than the neuro-symbolic approach.
- The study highlights the value of explicit planning for multi-step robotic tasks.
## Source
- DOI: [10.48550/arXiv.2602.19260](https://doi.org/10.48550/arXiv.2602.19260)
- URL: [https://arxiv.org/abs/2602.19260](https://arxiv.org/abs/2602.19260)
