---
title: >-
  Strong and localized recurrence controls the dimensionality of neural activity
  across brain areas
summary: >-
  This study asks what determines the dimensionality of population activity in
  cortex, meaning how many collective degrees of freedom neural activity
  effectively uses. The authors analyzed high-density Neuropixels recordings
  from mouse visual cortex during spontaneous behavior and found that activity
  unfolded in distinct neural states rather than one stationary regime. They
  quantified dimensionality with the participation ratio and showed that, within
  states, neural activity occupied a much lower-dimensional space than the raw
  neuron count might suggest. A key observation was that this low dimensionality
  was driven less by the average pairwise correlation and more by the variance
  of correlations across neuron pairs. The authors argue that this pattern is
  consistent with strong recurrent circuitry, which makes dimensionality highly
  sensitive to local synaptic connectivity. They derived a relationship linking
  dimensionality to covariance statistics and used it to estimate how
  dimensionality should change as more neurons are sampled. In both the
  recordings and recurrent network models, dimensionality grew sublinearly with
  population size and tended to saturate rather than scale linearly. To validate
  the extrapolation method, they also analyzed mouse frontal cortex calcium
  imaging data, where larger sample sizes allowed direct comparison between
  predicted and measured dimensionality. The extrapolated estimates agreed well
  with the larger-sample measurements, supporting the method as a reasonable
  approximation. The authors further showed that dimensionality varies across
  cortical states, indicating that circuit activity can move between regimes
  with different effective degrees of freedom. They then examined synaptic
  physiology datasets covering more than 32,000 neuronal pairs and found that
  the connectivity motifs predicted by their theory are common in both mouse and
  human brains. This suggests that specific local wiring patterns, not just
  overall synaptic strength, can help regulate dimensionality. Overall, the
  paper argues that strong, localized recurrence is a general mechanism through
  which local circuitry constrains and tunes the dimensionality of neural
  activity.
whyItMatters: >-
  This work helps explain why brain activity is not simply as high-dimensional
  as the number of neurons recorded. It connects a measurable feature of neural
  data to underlying circuit wiring, which could help researchers compare
  activity across brain areas, states, and species.
limitations: >-
  The main conclusions rely on covariance-based dimensionality estimates and an
  extrapolation from recorded samples to larger local populations, so the
  inferred saturation with population size depends on model assumptions holding
  beyond the sampled neurons. The evidence for a mechanistic role of recurrence
  is strong but still indirect, because the study mainly links statistics of
  activity and synaptic motifs rather than manipulating specific connections
  causally. The generalization from mouse cortex recordings and available
  physiology datasets to all brain areas, tasks, and species should also be
  treated cautiously.
authors:
  - David Dahmen
  - Stefano Recanatesi
  - Xiaoxuan Jia
  - Gabriel K. Ocker
  - Nilufar Lahiji
  - Simon Musall
  - Luke Campagnola
  - Stephanie Seeman
  - Tim Jarsky
  - Moritz Helias
  - Eric Shea-Brown
sourceUrl: 'https://www.nature.com/articles/s41593-026-02395-w'
sourceHost: nature.com
doi: 10.1038/s41593-026-02395-w
year: 2026
journal: Nature Neuroscience
sourceContext: fulltext
capturedAt: '2026-08-20T18:08:54.775Z'
draft: false
---
## Summary
This study asks what determines the dimensionality of population activity in cortex, meaning how many collective degrees of freedom neural activity effectively uses. The authors analyzed high-density Neuropixels recordings from mouse visual cortex during spontaneous behavior and found that activity unfolded in distinct neural states rather than one stationary regime. They quantified dimensionality with the participation ratio and showed that, within states, neural activity occupied a much lower-dimensional space than the raw neuron count might suggest. A key observation was that this low dimensionality was driven less by the average pairwise correlation and more by the variance of correlations across neuron pairs. The authors argue that this pattern is consistent with strong recurrent circuitry, which makes dimensionality highly sensitive to local synaptic connectivity. They derived a relationship linking dimensionality to covariance statistics and used it to estimate how dimensionality should change as more neurons are sampled. In both the recordings and recurrent network models, dimensionality grew sublinearly with population size and tended to saturate rather than scale linearly. To validate the extrapolation method, they also analyzed mouse frontal cortex calcium imaging data, where larger sample sizes allowed direct comparison between predicted and measured dimensionality. The extrapolated estimates agreed well with the larger-sample measurements, supporting the method as a reasonable approximation. The authors further showed that dimensionality varies across cortical states, indicating that circuit activity can move between regimes with different effective degrees of freedom. They then examined synaptic physiology datasets covering more than 32,000 neuronal pairs and found that the connectivity motifs predicted by their theory are common in both mouse and human brains. This suggests that specific local wiring patterns, not just overall synaptic strength, can help regulate dimensionality. Overall, the paper argues that strong, localized recurrence is a general mechanism through which local circuitry constrains and tunes the dimensionality of neural activity.
## Why This Matters
This work helps explain why brain activity is not simply as high-dimensional as the number of neurons recorded. It connects a measurable feature of neural data to underlying circuit wiring, which could help researchers compare activity across brain areas, states, and species.
## Caveats and Limitations
The main conclusions rely on covariance-based dimensionality estimates and an extrapolation from recorded samples to larger local populations, so the inferred saturation with population size depends on model assumptions holding beyond the sampled neurons. The evidence for a mechanistic role of recurrence is strong but still indirect, because the study mainly links statistics of activity and synaptic motifs rather than manipulating specific connections causally. The generalization from mouse cortex recordings and available physiology datasets to all brain areas, tasks, and species should also be treated cautiously.
## Key Takeaways
- Dimensionality of cortical activity is constrained well below the raw neuron count.
- Variance in pairwise correlations matters more than the mean correlation for setting dimensionality.
- Strong recurrent connectivity provides a plausible mechanism for this constraint.
- Dimensionality changes across neural states, so it is not fixed within a circuit.
- Synaptic motifs tied to dimensionality are common in both mouse and human datasets.
## Source
- DOI: [10.1038/s41593-026-02395-w](https://doi.org/10.1038/s41593-026-02395-w)
- URL: [https://www.nature.com/articles/s41593-026-02395-w](https://www.nature.com/articles/s41593-026-02395-w)
