---
title: >-
  Feature interference as a neuronal basis for the behavioural cost of task
  uncertainty
summary: >-
  This study asked why performance often gets worse when humans and animals are
  uncertain about which task rule to use. The authors combined human
  psychophysics, rhesus monkey electrophysiology, and recurrent neural network
  modeling to study a two-feature visual discrimination task. In the task,
  participants had to judge one feature of a Gabor stimulus while ignoring
  another feature, and the relevant feature could switch without warning.
  Because feedback on an error did not specify whether the mistake came from the
  task rule or the perceptual judgment, uncertainty about the correct task
  varied across trials. Both humans and monkeys performed less accurately, more
  slowly, and with lower confidence after unrewarded trials than after rewarded
  trials. In other words, task uncertainty carried a clear behavioral cost
  across species. The same cost did not appear in a neural network trained to
  make the correct choices, which suggests the effect is not an unavoidable
  property of the task structure itself. Instead, a network trained to mimic the
  animals’ choices did reproduce the uncertainty-related performance drop. By
  comparing these two networks, the authors generated a mechanistic hypothesis
  about how uncertainty affects behavior. They found that under low certainty,
  irrelevant stimulus features were represented more strongly. They also found
  that neural representations of relevant and irrelevant features were less
  orthogonal, meaning they were more entangled. The proposed mechanism is that
  this stronger, entangled representation creates feature interference, which
  then degrades perceptual decisions when task rules are uncertain. The paper
  further supports this idea with additional behavioral, physiological, and
  causal experiments in monkeys. Overall, the main claim is that the cost of
  task flexibility arises not just from holding extra information, but from
  interference between neural codes for different features.
whyItMatters: >-
  This work gives a concrete neural explanation for a common everyday problem:
  why we make more mistakes when we are unsure what exactly we are supposed to
  do. It suggests that flexibility has a cost because the brain can mix together
  competing task-relevant and task-irrelevant information, rather than simply
  because it is “overloaded.”
limitations: >-
  The evidence is strongest for the specific two-feature perceptual task used
  here, so it is not yet clear how broadly the same mechanism applies to other
  kinds of decisions, working memory, or more naturalistic behavior. The
  recurrent network results are informative, but they still depend on how the
  models were trained and how the task was formalized. The paper also draws
  mechanistic conclusions from a mixture of behavioral, recording, and causal
  data, but the abstract does not fully specify how directly each experiment
  isolates interference from other explanations such as attentional shifts or
  feedback processing.
authors:
  - Cheng Xue
  - Sol K. Markman
  - Ruoyi Chen
  - Lily E. Kramer
  - Marlene R. Cohen
sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10942291/'
sourceHost: pmc.ncbi.nlm.nih.gov
doi: 10.1101/2024.03.04.583375
year: 2024
journal: bioRxiv (Cold Spring Harbor Laboratory)
sourceContext: fulltext
capturedAt: '2026-09-13T17:33:16.745Z'
draft: false
---
## Summary
This study asked why performance often gets worse when humans and animals are uncertain about which task rule to use. The authors combined human psychophysics, rhesus monkey electrophysiology, and recurrent neural network modeling to study a two-feature visual discrimination task. In the task, participants had to judge one feature of a Gabor stimulus while ignoring another feature, and the relevant feature could switch without warning. Because feedback on an error did not specify whether the mistake came from the task rule or the perceptual judgment, uncertainty about the correct task varied across trials. Both humans and monkeys performed less accurately, more slowly, and with lower confidence after unrewarded trials than after rewarded trials. In other words, task uncertainty carried a clear behavioral cost across species. The same cost did not appear in a neural network trained to make the correct choices, which suggests the effect is not an unavoidable property of the task structure itself. Instead, a network trained to mimic the animals’ choices did reproduce the uncertainty-related performance drop. By comparing these two networks, the authors generated a mechanistic hypothesis about how uncertainty affects behavior. They found that under low certainty, irrelevant stimulus features were represented more strongly. They also found that neural representations of relevant and irrelevant features were less orthogonal, meaning they were more entangled. The proposed mechanism is that this stronger, entangled representation creates feature interference, which then degrades perceptual decisions when task rules are uncertain. The paper further supports this idea with additional behavioral, physiological, and causal experiments in monkeys. Overall, the main claim is that the cost of task flexibility arises not just from holding extra information, but from interference between neural codes for different features.
## Why This Matters
This work gives a concrete neural explanation for a common everyday problem: why we make more mistakes when we are unsure what exactly we are supposed to do. It suggests that flexibility has a cost because the brain can mix together competing task-relevant and task-irrelevant information, rather than simply because it is “overloaded.”
## Caveats and Limitations
The evidence is strongest for the specific two-feature perceptual task used here, so it is not yet clear how broadly the same mechanism applies to other kinds of decisions, working memory, or more naturalistic behavior. The recurrent network results are informative, but they still depend on how the models were trained and how the task was formalized. The paper also draws mechanistic conclusions from a mixture of behavioral, recording, and causal data, but the abstract does not fully specify how directly each experiment isolates interference from other explanations such as attentional shifts or feedback processing.
## Key Takeaways
- Task uncertainty reliably worsened accuracy, reaction time, and confidence in both humans and monkeys.
- A network trained to predict correct choices did not show the behavioral cost, but a network trained on animal choices did.
- The authors propose that uncertainty boosts encoding of irrelevant features.
- Behavior worsens when relevant and irrelevant neural codes become more entangled, creating feature interference.
- The study links cognitive flexibility costs to a neural representation problem rather than only to limited capacity.
## Source
- DOI: [10.1101/2024.03.04.583375](https://doi.org/10.1101/2024.03.04.583375)
- URL: [https://pmc.ncbi.nlm.nih.gov/articles/PMC10942291/](https://pmc.ncbi.nlm.nih.gov/articles/PMC10942291/)
