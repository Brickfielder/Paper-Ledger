---
title: A population code for semantics in human hippocampus
summary: >-
  This bioRxiv study examined how hippocampal neurons represent word meaning
  during continuous speech. The authors recorded activity from 356 single
  neurons in 10 epilepsy patients as they listened to 47 minutes of narrative
  speech containing 7,346 words. Cross-validated models found that semantic
  embeddings improved prediction of firing beyond word duration, and semantic
  models outperformed phonetic-only models. Individual neurons showed mixed
  selectivity across words, while population response patterns carried
  relationships between meanings. Neural distances tracked semantic distances
  for contextual BERT and GPT-2 embeddings, but not static Word2Vec; population
  activity predicted GPT-2 semantic structure best, though the absolute
  variance explained in population decoding was modest. Repeated occurrences
  of more polysemous words had more variable neural patterns, and common words
  showed distinct population geometry from rarer words. At the finest semantic
  distances, the relationship reversed: highly similar words were more
  separated in neural space, which the authors interpret as possible
  contrastive coding. Responses to past and upcoming words were also
  detectable, but the paper notes these effects could reflect overlapping
  responses or correlations in natural speech rather than prediction.
whyItMatters: >-
  The findings support a distributed, context-sensitive account of semantic
  representation in the human hippocampus: meaning is reflected in population
  activity patterns rather than in a dedicated neuron for each word or
  category. Comparing neural geometry with language-model embeddings offers a
  quantitative way to study this population code while showing that contextual
  meaning matters.
limitations: >-
  The recordings came from only 10 patients undergoing epilepsy monitoring,
  and the evidence is observational. Most narrative words appeared only once,
  limiting direct repetition-based comparisons; the Jabberwocky control was
  tested in four patients and may have changed attention. Correlations with
  contextual language-model embeddings do not establish that the brain uses
  the same computations. Absolute population-level prediction was modest, and
  the authors note that apparent encoding of upcoming words may arise from
  overlapping neural responses or local word correlations. This is a
  bioRxiv preprint and is not peer reviewed.
authors:
  - Melissa Franch
  - Elizabeth A. Mickiewicz
  - James L. Belanger
  - Brad Joiner
  - Kalman A. Katlowitz
  - Hanlin Zhu
  - Ana G. Chavez
  - Assia Chericoni
  - Danika Paulo
  - Eleonora Bartoli
  - Suzanne Kemmer
  - Steven T. Piantadosi
  - Nicole R. Provenza
  - Jay A. Hennig
  - Benjamin Y. Hayden
  - Sameer A. Sheth
theme: "Cognition, Prediction & Mental Experience"
sourceUrl: "https://www.biorxiv.org/content/10.1101/2025.02.21.639601v4"
sourceHost: biorxiv.org
doi: "10.1101/2025.02.21.639601"
year: 2026
journal: "bioRxiv (Cold Spring Harbor Laboratory)"
sourceContext: fulltext
capturedAt: "2026-10-01T00:00:00Z"
draft: false
---
## Summary

The study asks whether meaning during natural speech is represented by dedicated word-selective cells or by patterns distributed across hippocampal populations. Ten native English-speaking patients undergoing intracranial seizure monitoring listened to six narrative monologues (47 minutes; 7,346 words, 1,351 unique). The authors recorded 356 hippocampal single neurons. Four patients also heard Jabberwocky narratives with altered nonsense words.

The authors fit cross-validated models of neuronal firing using word embeddings, word duration, and their interactions. Semantic models fit responses from 62% of neurons with Word2Vec, 62% with BERT, and 54% with GPT-2 layer 37; semantic predictors improved fit beyond duration. Phonetic models fit fewer neurons (42%), and adding phonetic features to semantic models did not improve prediction. In a four-patient Jabberwocky subset, hippocampal activity distinguished real words from nonsense words, although the authors caution that attention may have waned during the nonsense narratives.

The coding was distributed and mixed-selective. Among 283 words repeated at least four times, every word was represented by at least three neurons; one word was associated with 67 neurons. Most neurons responded to multiple words spanning semantic categories. Neural population distances aligned with contextual BERT and GPT-2 distances (reported correlations approximately 0.06 and 0.09), but not with static Word2Vec distances. In regression and reduced-rank decoding analyses, GPT-2 captured the richest shared structure: its patient-averaged population decoding score was 0.06, compared with 0.01 for BERT and 0.003 for Word2Vec.

The geometry varied with frequency and context. Common words tended to occupy central, overlapping regions of a low-dimensional projection and were harder to classify by category, while neural variability across repeated instances of a word increased with its contextual polysemy. For very similar word pairs, neural and contextual semantic distances became inversely related, a pattern the authors propose may reflect contrastive coding that helps distinguish confusable meanings.

## Why This Matters

The results support a view in which hippocampal word meaning emerges from activity across many neurons and changes with linguistic context. The comparison with contextual language models provides a concrete way to measure semantic structure in neural population responses, while the findings on polysemy and fine-grained contrast suggest that the code may preserve both broad similarity and distinctions between close meanings.

## Caveats and Limitations

The study is observational and draws on 10 patients receiving clinical monitoring for epilepsy. Naturalistic speech improves ecological context but most word instances are not repeated in identical conditions. The Jabberwocky comparison involved only four patients and does not fully isolate semantics, since listeners may have paid less attention to meaningless narratives. Neural-to-model correlations do not show that the hippocampus implements language-model computations, and the absolute population decoding variance explained was modest. Finally, apparent sensitivity to upcoming words could reflect overlapping responses or correlations between adjacent words, rather than true prediction. The paper is a preprint that has not been peer reviewed.

## Source

- DOI: [10.1101/2025.02.21.639601](https://doi.org/10.1101/2025.02.21.639601)
- Full text: [bioRxiv version 4](https://www.biorxiv.org/content/10.1101/2025.02.21.639601v4)
