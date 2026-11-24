---
title: Multilingual Computational Models Capture a Shared Meaning Component in Brain Responses across 21 Languages
summary: >-
  This study tested whether multilingual language models can predict how the
  human language network responds to many different languages, and whether a
  model trained on brain data from one language can generalize to another. The
  authors combined existing fMRI data from 12 languages with new recordings
  from nine additional languages, covering multiple language families. In
  Study I, models trained on 11 languages predicted responses in a held-out
  language without further fitting: across-model encoding performance was
  about r = 0.22, close to the within-language result of r = 0.23. Prediction
  was strongest in the left-hemisphere language network, especially posterior
  temporal regions, and weaker in right-hemisphere and general-demand control
  regions. Larger autoregressive models tended to perform best. In Study II,
  models also generalized to the nine newly collected languages despite
  differences in the language materials and whether participants listened to
  passages or read sentences. Study III tested what information supported this
  transfer. Cross-language prediction remained relatively strong when
  sentences were paraphrased, function words were removed, or word order was
  changed locally, but dropped when most meaning-bearing words were removed
  or word order was fully reversed. Together, the results suggest that
  language-general meaning, especially compositional semantic content, is an
  important part of what multilingual models and the human language network
  have in common across languages. The findings do not show that brains and
  models represent meaning identically, or that meaning is the only basis of
  neural responses.
whyItMatters: >-
  Most language neuroscience has focused on a few well-studied languages.
  Testing 21 languages broadens the evidence that the core language network
  responds to shared linguistic computations across diverse languages. The
  cross-language and cross-modality tests also suggest that multilingual
  models can help investigate which aspects of language are common across
  speakers, rather than merely fitting one language's data.
limitations: >-
  fMRI encoding correlations show that model features predict patterns of
  brain activity; they do not establish that the brain uses the same
  representations or mechanism as the model. The work is also constrained by
  available language and participant samples, the specific stimuli and
  multilingual models tested, and differences in reliability across datasets.
  The perturbation results support a role for compositional meaning, but do
  not isolate semantics from every correlated linguistic feature. The authors
  also caution that the association between next-word prediction and
  within-language brain prediction does not mean the brain is optimized for
  next-word prediction.
authors:
  - Andrea Gregor de Varda
  - Saima Malik-Moraleda
  - Greta Tuckute
  - Evelina Fedorenko
sourceUrl: 'https://www.biorxiv.org/content/10.1101/2025.02.01.636044v2.full'
sourceHost: biorxiv.org
doi: 10.1101/2025.02.01.636044
year: 2025
journal: bioRxiv
sourceContext: fulltext
capturedAt: '2026-11-24T09:15:00.000Z'
draft: false
---
## Summary

The paper asks whether the brain's language network responds to a shared, language-general layer of meaning, despite the very different forms used by the world's languages. The authors use multilingual neural network language models (MNNLMs) as a way to represent words and sentences in a space that can be compared across languages. They fit encoding models that map those representations onto fMRI activity in functionally localized language areas.

### Study I: prediction within and across 12 languages

The first analysis used existing fMRI data from people listening to a passage from *Alice's Adventures in Wonderland* in 12 languages from four language families. The researchers compared 20 multilingual models with different architectures and training objectives. Within a language, they trained an encoding model on one participant and tested it on another. They also tested a zero-shot condition: train on all but one language and predict the held-out language, with no brain data from that language used for fitting.

The models predicted responses above a circular-shift baseline in nearly all cases. Average performance across models was about *r* = 0.23 within language and *r* = 0.22 in the held-out-language test. The best results came from larger autoregressive models, which learn to predict the next word. The signal was strongest in the left-hemisphere language network, particularly posterior temporal cortex; it was lower in right-hemisphere homologues and in the multiple-demand network. This spatial pattern suggests the predictions captured language-selective responses rather than generic brain activity.

### Study II: transfer to nine new languages and different tasks

The authors then collected new fMRI data from native speakers of Italian, Portuguese, German, Russian, Polish, Hindi, Arabic, Mandarin, and Korean. These data were not used in Study I. Models trained on existing datasets could predict responses to the new languages. Transfer also worked across changes in material and presentation: models trained on English reading tasks predicted responses during listening, while models trained on story listening generalized to the new passage-listening data. Performance varied across training datasets, with more reliable and larger listening datasets generally transferring better.

### Study III: what transfers across languages?

To test whether transfer depended mainly on surface form or sentence meaning, the authors changed English training sentences in several ways, then measured how well the resulting models predicted brain responses to the other languages. Paraphrasing, removing function words, and making small local word-order changes left much of the transfer intact. Transfer weakened when meaning-bearing words were removed, and was lowest when only function words remained or when word order was fully reversed. These results point to compositional semantic content as an important driver of cross-lingual transfer, while suggesting that syntax and surface form alone are insufficient.

The authors also found that language models' next-word prediction ability correlated with their ability to predict brain activity within a language. That relationship did not reach significance in the across-language analysis, and the authors caution against interpreting it as evidence that the brain itself is optimized for next-word prediction.

## Why This Matters

The study extends language neuroscience beyond a small set of well-studied languages. It suggests that multilingual models capture some features of linguistic input that are reflected in the human language network across languages, and that meaning-bearing content contributes substantially to this shared component. The cross-task results also suggest that these encoding models can generalize beyond the exact sentences or listening-versus-reading setup on which they were trained.

## Caveats and Limitations

The results are predictive, not causal: a model's ability to predict fMRI responses does not show that the brain uses the same representations or computations. Samples and data reliability varied across languages and datasets, and the tests cover a limited set of languages, models, and experimental materials. The sentence perturbations help distinguish meaning-related information from some surface features, but cannot fully separate semantics from every correlated feature. Finally, the link between next-word prediction and within-language encoding should not be taken to mean that the brain is performing next-word prediction.

## Key Takeaways

- Multilingual model features predicted language-network responses across 21 languages.
- Encoding models transferred to held-out languages without retraining on their brain data.
- Transfer generalized across some differences in language materials and listening versus reading.
- Removing meaning-bearing words or radically changing word order reduced transfer more than several meaning-preserving changes.
- The findings support a shared semantic component, but do not establish that brains and language models represent meaning in the same way.

## Source

- DOI: [10.1101/2025.02.01.636044](https://doi.org/10.1101/2025.02.01.636044)
- Full-text version: [bioRxiv v2](https://www.biorxiv.org/content/10.1101/2025.02.01.636044v2.full)
