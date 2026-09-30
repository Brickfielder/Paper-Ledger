---
title: "Propofol anesthesia destabilizes neural dynamics across cortex"
summary: >-
  Eisen and colleagues introduce Delayed Linear Analysis for Stability
  Estimation (DeLASE), a method for estimating the stability of evolving
  population-level neural activity from high-dimensional recordings. They
  applied it to local field potentials from two rhesus macaques during awake,
  propofol-induced unconscious, and recovery periods, using recordings from
  ventrolateral prefrontal cortex, frontal eye fields, posterior parietal
  cortex, and auditory cortex. Across both animals and all four regions,
  propofol-associated unconsciousness coincided with greater dynamic
  instability: neural activity was estimated to recover more slowly from
  perturbations. Instability tracked anesthetic state and dose, rising during
  the loading phase and moving toward awake levels during recovery. Sensory
  responses during unconsciousness also showed longer response timescales,
  consistent with the predictions of less stable systems. In simulations,
  increasing inhibitory connectivity in recurrent neural networks—intended to
  model propofol’s action through GABA-A receptors—also destabilized activity.
  The authors propose that anesthesia may disrupt the balance of stability and
  excitability needed for reliable cortical processing. The findings support
  dynamic stability as a candidate marker and explanatory framework for
  propofol-induced unconsciousness; the two-animal study and network
  simulations do not by themselves establish this as the general or causal
  mechanism of consciousness loss.
whyItMatters: >-
  The paper connects a systems-level property—how reliably neural activity
  responds to perturbations—with changes in consciousness under anesthesia.
  Its DeLASE method offers a way to quantify stability in complex,
  time-varying neural recordings, while the cross-region results frame
  anesthesia as more than simple suppression of activity.
limitations: >-
  Neural recordings came from two non-human primates and the experiment studied
  propofol, so generalization to humans, other anesthetics, and other causes of
  unconsciousness needs further testing. DeLASE estimates stability from
  fitted dynamical models rather than directly perturbing the whole cortical
  system; the recurrent-network simulations provide mechanistic support but
  are not direct evidence that increased inhibition causes the observed
  destabilization in vivo or that destabilization alone causes unconsciousness.
authors:
  - Adam J. Eisen
  - Leo Kozachkov
  - André M. Bastos
  - Jacob A. Donoghue
  - Meredith K. Mahnke
  - Scott L. Brincat
  - Sarthak Chandra
  - John Tauber
  - Emery N. Brown
  - Ila R. Fiete
  - Earl K. Miller
sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11923585/"
sourceHost: "pmc.ncbi.nlm.nih.gov"
doi: 10.1016/j.neuron.2024.06.011
year: 2024
journal: "Neuron"
theme: "Cognition, Prediction & Mental Experience"
sourceContext: fulltext
capturedAt: '2026-09-30T20:44:00+01:00'
draft: false
---
## Summary

Conscious brain activity must be responsive enough to process information but stable enough to support reliable computation. Eisen and colleagues test the hypothesis that propofol-induced unconsciousness disrupts this dynamic balance. They develop **Delayed Linear Analysis for Stability Estimation (DeLASE)**, a method for estimating the stability of complex, time-varying neural systems from high-dimensional recordings.

They apply DeLASE to local field potentials recorded from two rhesus macaques during awake, propofol-induced unconscious, and recovery states. Electrodes sampled four cortical regions: ventrolateral prefrontal cortex, frontal eye fields, posterior parietal cortex, and auditory cortex. In both animals and all four regions, propofol-associated unconsciousness was accompanied by increased estimated instability. The change tracked anesthetic state and dose: instability rose during the loading dose and declined through maintenance and recovery. The data also showed slower responses to sensory perturbations during unconsciousness, as expected if the underlying dynamics were less stable.

To examine one possible mechanism, the authors increased inhibitory connectivity in simulated recurrent neural networks, reflecting propofol’s action at GABA-A receptors. This manipulation also destabilized network activity. They propose that excessive inhibition may disturb the balance supporting stable, controllable cortical dynamics, and that this disruption may contribute to loss of consciousness.

The authors present dynamic instability as a candidate marker and mechanistic framework for propofol anesthesia. The work does not establish that destabilization is the sole or general mechanism of unconsciousness.

## Why This Matters

The study shifts attention from whether anesthesia simply suppresses brain activity to how reliably cortical activity evolves and responds to perturbations. DeLASE offers a quantitative way to study this question in high-dimensional neural data, and its use across several cortical regions suggests a broad systems-level effect.

## Caveats and Limitations

The neural data came from two non-human primates and the study focused on propofol, so the findings need testing in larger samples, in humans, and with other anesthetics and states of unconsciousness. DeLASE estimates stability from fitted models rather than directly perturbing the complete cortical system. The recurrent-network simulation supports the proposed role of increased inhibition but does not prove that this mechanism causes destabilization in the living brain, or that destabilization alone causes unconsciousness.

## Key Takeaways

- DeLASE estimates dynamic stability in high-dimensional neural recordings.
- Propofol-induced unconsciousness was associated with increased estimated instability across four cortical regions in two macaques.
- The instability measure tracked anesthetic depth and moved toward awake levels during recovery.
- Sensory responses were slower under anesthesia, consistent with less stable dynamics.
- Increasing inhibitory connectivity destabilized simulated recurrent networks, supporting—but not proving—a possible mechanism.

## Source

- Published in *Neuron*, 2024; 112(16):2799–2813.e9.
- DOI: [10.1016/j.neuron.2024.06.011](https://doi.org/10.1016/j.neuron.2024.06.011)
- [Open full text in PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC11923585/)
- [DeLASE analysis code](https://github.com/adamjeisen/ChaoticConsciousness)
