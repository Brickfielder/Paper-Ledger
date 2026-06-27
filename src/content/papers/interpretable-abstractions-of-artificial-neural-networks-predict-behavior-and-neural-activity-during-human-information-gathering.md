---
title: "Interpretable abstractions of artificial neural networks predict behavior and neural activity during human information gathering"
summary: >-
  D'Ambrogio, Grohn and colleagues combine cognitive modeling, artificial neural
  networks and symbolic regression to study how people decide whether to gather
  more information before choosing. In a dot-sampling task with 20 participants
  undergoing 7T fMRI, a hybrid model used an ANN to learn the value of
  information while preserving an interpretable action-value structure.
  Symbolic regression then recovered compact equations that approximated the ANN
  and revealed an information-symmetry principle: participants balanced evidence
  across options rather than simply minimizing option-wise uncertainty. The
  ANN-derived and symbolic value-of-information signals predicted behavior and
  neural activity, including activity in anterior insula, anterior cingulate
  cortex and neuromodulatory nuclei.
whyItMatters: >-
  The paper shows a practical route from expressive machine-learning models to
  interpretable cognitive theory. It uses ANNs to discover a hidden computation,
  then compresses that computation into symbolic equations that still predict
  behavior and neural data.
limitations: >-
  The task is a controlled two-option information-sampling paradigm with a small
  fMRI sample, so the recovered equations should not be treated as a complete
  theory of curiosity or exploration. The model also inherits assumptions from
  the hand-built cognitive architecture around the ANN component.
authors:
  - Simone D'Ambrogio
  - Jan Grohn
  - Nima Khalighinejad
  - Marcelo G. Mattar
  - Laurence Hunt
  - Matthew F. S. Rushworth
theme: "Cognition, Prediction & Mental Experience"
sourceUrl: https://www.nature.com/articles/s41593-026-02342-9
sourceHost: nature.com
doi: 10.1038/s41593-026-02342-9
year: 2026
journal: Nature Neuroscience
sourceContext: fulltext
capturedAt: '2026-06-27T16:41:24+01:00'
draft: false
---
## Summary

This Nature Neuroscience technical report asks how people decide whether more
information is worth gathering before committing to a choice. Participants
sampled hidden red or black dots from two options before choosing the option
with more red dots. Sampling could improve accuracy, but it cost time and
reduced the number of trials participants could complete.

The authors compared fixed-form accounts of the value of information with a
hybrid model. The model kept an interpretable decision architecture for
selection, staying and switching, but used an artificial neural network to learn
the difficult part: how the state of sampled evidence maps onto the value of
gathering more information.

The hybrid ANN fit behavior better than linear and upper-confidence-bound
models. Symbolic regression then compressed the learned ANN function into
compact equations. Those equations retained nearly the same predictive power
while making the learned strategy interpretable. The key principle was
information symmetry: people tended to balance evidence across alternatives
rather than exhaustively sample one option until its own uncertainty was low.

The same computational variables were tested against ultrahigh-field 7T fMRI.
The ANN-derived value of information predicted neural activity better than the
fixed-form models, and the symbolic abstraction preserved most of that neural
predictive power. Anterior insula and anterior cingulate cortex tracked aspects
of the value-of-information computation, while ventral tegmental area activity
showed opposing relationships to information and selection values.

## Why This Matters

The paper is useful methodologically. It shows how to use an ANN as a discovery
tool without leaving the final account as a black box. The learned computation
is translated into symbolic equations that can be inspected, tested in another
dataset and related to neural signals.

It also sharpens the psychology of information seeking. Participants did not
simply sample whichever option was most uncertain. They appeared to manage the
relative balance of evidence between options, deciding when further information
would actually improve the decision.

## Caveats and Limitations

The task is deliberately simplified. Real information gathering often involves
changing goals, social sources, search costs, strategic uncertainty and delayed
rewards. The symbolic equations are therefore best read as a precise account of
this sampling regime, not as a universal law of exploration.

The fMRI sample is also modest, and even 7T imaging gives indirect evidence for
small neuromodulatory nuclei. The approach is powerful, but the recovered
function depends on the surrounding cognitive model and the features supplied
to the ANN.

## Key Takeaways

- A hybrid cognitive-ANN model predicted information-sampling behavior better
  than linear or UCB value-of-information models.
- Symbolic regression recovered compact equations that approximated the ANN.
- The equations suggested an information-symmetry principle across options.
- The ANN-derived and symbolic value signals predicted 7T fMRI activity.
- ACC, anterior insula and VTA were linked to different aspects of information
  gathering and choice.

## Source

- DOI: [10.1038/s41593-026-02342-9](https://doi.org/10.1038/s41593-026-02342-9)
- URL: [https://www.nature.com/articles/s41593-026-02342-9](https://www.nature.com/articles/s41593-026-02342-9)

