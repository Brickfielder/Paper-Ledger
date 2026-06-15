---
title: "Accelerated learning of a noninvasive human brain-computer interface via manifold geometry"
summary: >-
  This bioRxiv preprint tests whether a brain-computer interface becomes easier
  to learn when its control mapping follows the intrinsic low-dimensional
  geometry of a person's brain activity. Eighteen healthy young adults used
  real-time fMRI activity from navigation-related regions to steer an avatar in
  virtual reality. Participants rapidly learned an intuitive mapping and more
  gradually learned a new mapping that remained within their individual neural
  manifold. They did not learn an outside-manifold mapping within the same
  training period. Successful on-manifold learning was accompanied by greater
  alignment of neural activity with the trained control dimension, and this
  realignment predicted behavioural learning for the within-manifold
  perturbation.
whyItMatters: >-
  The study translates principles previously demonstrated mainly with invasive
  motor-cortex interfaces into a noninvasive human BCI targeting distributed,
  higher-order cognitive regions. It suggests that personalized neural geometry
  could guide the selection and sequencing of neurofeedback targets, reducing
  the amount of training needed to establish useful control.
limitations: >-
  This is a non-peer-reviewed preprint involving 18 healthy adults aged 19-35,
  with no separate control group. The fMRI setup is expensive and unsuitable
  for most everyday BCI applications. Avatar control was partly assisted by a
  staircasing procedure, and failure to learn the outside-manifold mapping
  during one session does not establish that such mappings are unlearnable with
  longer training. Clinical benefit, durability, and transfer to wearable,
  invasive, rehabilitation, or communication systems remain untested.
authors:
  - Erica L. Busch
  - E. Chandra Fincke
  - Guillaume Lajoie
  - Smita Krishnaswamy
  - Nicholas B. Turk-Browne
theme: "Neurotechnology, Intervention & Preservation"
sourceUrl: https://www.biorxiv.org/content/10.1101/2025.03.29.646109v1
sourceHost: biorxiv.org
doi: 10.1101/2025.03.29.646109
year: 2025
journal: bioRxiv
sourceContext: fulltext
capturedAt: '2026-06-15T07:57:00+01:00'
draft: false
---
## Summary

Brain-computer interfaces depend not only on decoding neural activity but also
on users learning to produce activity patterns that the interface can
recognize. This study asks whether that learning can be accelerated by matching
the interface to the intrinsic manifold: the lower-dimensional geometric
structure within which a person's brain activity naturally varies.

Twenty healthy young adults were recruited, and 18 were included in the
neurofeedback analyses after one participant repeatedly fell asleep and another
experienced a scanner malfunction. Participants were aged 19-35 and completed
four or five MRI sessions over no more than seven days.

In the first session, participants navigated an avatar through a virtual arena
with a joystick. The researchers used activity from a distributed network of
navigation-related brain regions to construct an individual neural manifold
with T-PHATE, a nonlinear diffusion-based dimensionality-reduction method. A
manifold-regularized autoencoder then projected new fMRI samples into this
space during real-time neurofeedback.

Participants subsequently controlled the avatar using brain activity under
three mappings:

1. An intuitive mapping based on the strongest task-related component of the
   participant's manifold.
2. A within-manifold perturbation using a different component that still lay
   within the learned manifold.
3. An outside-manifold perturbation using a control dimension that the
   participant's existing activity explained poorly.

Control was introduced through an adaptive staircase. At lower levels, the
avatar received more assistance toward the goal; as performance improved, a
larger proportion of its movement direction came from decoded brain activity.
The resulting Brain Control measure therefore represented how much unassisted
control a participant had earned.

Participants learned the intuitive mapping quickly, with improvement emerging
after approximately four trials. They learned the within-manifold perturbation
more slowly, reaching reliable improvement at around 30 trials. Across sessions,
mean Brain Control increased by 49.3 percentage points for the intuitive
mapping and 16.4 points for the within-manifold perturbation. It did not
increase for the outside-manifold perturbation.

Successful learning was accompanied by neural realignment. The trained
component explained a greater proportion of fMRI variance after intuitive and
within-manifold training, but not after outside-manifold training. For the
within-manifold perturbation, participants showing more neural realignment also
showed greater improvement in BCI control. Exploratory whole-brain analyses
additionally suggested improved task decoding in motor and prefrontal regions
after within-manifold learning.

## Why This Matters

Previous work in nonhuman primates showed that invasive motor BCIs are easier
to learn when new control mappings respect existing neural manifolds. This
paper extends that principle to noninvasive human fMRI and to distributed brain
regions supporting navigation and goal-directed cognition.

The practical implication is that neurofeedback targets need not be selected
without regard to the user's existing neural organization. Personalized
manifold mapping could identify control dimensions that are immediately
accessible and provide incremental routes toward more difficult activity
patterns.

## Caveats and Limitations

This is an early bioRxiv preprint rather than a peer-reviewed clinical study.
The final analysis included only 18 healthy young adults from one local
community. There was no separate human control group; comparisons were
within-participant, supplemented by simulated null fMRI datasets designed to
test the processing and staircase pipeline.

The adaptive staircase intentionally assisted avatar movement, especially
early in training. Brain Control is therefore a useful internal learning
measure but not equivalent to fully independent real-world device operation.
Participants also received only one session under each perturbation. The
outside-manifold result shows that it was harder to learn within that training
window, not that outside-manifold activity can never be acquired.

Real-time fMRI offers broad spatial coverage but is costly, slow, physically
restrictive, and not a practical everyday BCI platform. Whether the approach
improves wearable or invasive interfaces, communication, rehabilitation,
assistive-device control, or clinical neurofeedback remains unknown. Longer
follow-up is also needed to establish durability and transfer.

## Key Takeaways

- Individual neural manifolds were estimated from fMRI during joystick navigation.
- Participants learned intuitive and within-manifold BCI mappings.
- They did not learn the outside-manifold mapping within the same training period.
- On-manifold learning was accompanied by selective neural realignment.
- Personalized manifold geometry may help design more learnable BCI control mappings.

## Source

- DOI: [10.1101/2025.03.29.646109](https://doi.org/10.1101/2025.03.29.646109)
- URL: [https://www.biorxiv.org/content/10.1101/2025.03.29.646109v1](https://www.biorxiv.org/content/10.1101/2025.03.29.646109v1)
