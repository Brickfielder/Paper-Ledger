---
title: "Artificial Aphasias in Lesioned Language Models"
summary: >-
  Roll, Kries, Gwilliams and Shain adapt the Text Aphasia Battery (TAB), a
  text-based assessment of language symptoms, to map how targeted parameter
  damage changes language-model behaviour. They zeroed weights in seven
  Transformer matrices (query, key, value, output, gate, up and down) across
  layers and severities in five roughly 1-billion-parameter Llama, Gemma and
  OLMo variants. The study analysed 112,426 scored model outputs and compared
  their symptom profiles with 6,000 productions from AphasiaBank. Feed-forward
  network lesions tended to produce vague, short, repetitive or off-topic
  outputs, while attention lesions showed a different profile, with relatively
  more phonological and fluency symptoms. Symptom patterns also varied with
  layer depth: semantic and syntactic problems were more prominent after
  earlier-layer lesions, while phonological and fluency effects peaked later.
  The broad attention-versus-feed-forward distinction recurred across model
  families. However, the model-generated “aphasias” differed substantially
  from human aphasia in symptom burden, composition and co-occurrence.
  The authors argue that aphasia research offers a useful measurement
  framework for studying model failures, while cautioning against treating
  these patterns as clinical aphasia or equating Transformer components with
  brain regions.
whyItMatters: >-
  This work brings a clinically grounded neuropsychological assessment
  framework into mechanistic interpretability. Profiling the kinds of language
  breakdown caused by targeted model interventions can reveal functional
  differences between model components that aggregate benchmark scores may
  miss. Its comparison with human aphasia also shows why shared symptom labels
  should not be mistaken for shared underlying mechanisms.
limitations: >-
  This is an arXiv preprint (version 1, 15 May 2026), not a clinical study.
  Lesioning weights with random masks is a blunt intervention that can create
  model states unlike those encountered during training; the authors note that
  scorer reliability varies by symptom and that individual symptom details
  depend on the scoring model. The primary analysis uses a limited TAB prompt
  subset and greedy decoding, which can amplify repetition; some symptom and
  co-occurrence results are decoder-sensitive. The human comparison uses
  AphasiaBank productions scored under a shared rubric rather than task-matched
  experiments. The results cover a small set of dense, English decoder-only
  models and do not establish equivalence between model lesions and human
  aphasia.
authors:
  - Nathan Roll
  - Jill Kries
  - Laura Gwilliams
  - Cory Shain
sourceUrl: "https://arxiv.org/abs/2605.16222"
sourceHost: "arxiv.org"
year: 2026
journal: "arXiv preprint arXiv:2605.16222"
sourceContext: fulltext
capturedAt: '2026-09-28T15:32:00+01:00'
draft: false
---
## Summary

The authors introduce an aphasia-inspired way to study functional organization in language models. They “lesion” a model by zeroing portions of its parameters, then use the Text Aphasia Battery (TAB) to describe the language symptoms in its outputs. TAB provides 21 text-based symptoms across semantic, syntactic, fluency, phonological and other categories; the human-versus-model analyses use the 19 symptoms that can be compared reliably in text.

The experiment covers five roughly 1-billion-parameter decoder-only models: Llama 3.2-1B and its instruction-tuned version, Gemma 3-1B-Instruct, and OLMo-2-1B and its instruction-tuned version. The authors ablated seven attention and feed-forward matrices (Q, K, V, O, Gate, Up and Down) at different layers and five severities. Across 112,426 scored model outputs, they compared lesion-induced profiles with 6,000 AphasiaBank productions, including five aphasia groups and controls.

Feed-forward lesions more often produced unclear, short or formulaic, perseverative and off-topic output. Attention lesions produced a different pattern, with relatively more phonological and fluency symptoms. The distinction appeared across model families. Lesion depth also mattered: semantic and syntactic symptoms tended to peak in earlier layers, while phonological and fluency symptoms tended to peak later.

The human comparison is a central caution. Even where some lesion profiles resembled certain aphasia groups on selected measures, human and model outputs differed substantially in overall symptom burden, symptom mixtures and co-occurrence patterns. The authors therefore use “artificial aphasia” as a descriptive analogy for model behaviour, not as a clinical diagnosis or claim that model components correspond to brain regions.

## Why This Matters

The study shows how methods from neuropsychology can help characterize model failures at a finer level than overall accuracy. It also demonstrates the importance of comparing detailed symptom profiles: two systems can share symptom names while differing in how those symptoms arise and combine.

## Caveats and Limitations

This is an arXiv preprint, not a clinical study. Weight masking is a blunt intervention and can push models into states unlike their normal operating conditions. Results for individual symptoms depend partly on the automated scorer; the authors report that some details vary across scoring methods. The main analyses use a 19-prompt subset and greedy decoding, which can increase repetitive outputs, and some findings are sensitive to decoding choices. The human reference comparison uses the same rubric across AphasiaBank and model text, but is not based on matched tasks. The study focuses on a small set of dense, English decoder-only models and does not show that model lesions reproduce human aphasia.

## Key Takeaways

- The Text Aphasia Battery can be used to profile language failures after targeted model interventions.
- Feed-forward and attention lesions produce distinguishable symptom profiles across the tested model families.
- The kinds of symptoms induced by lesions vary with Transformer layer depth.
- Model-generated symptom profiles differ substantially from human aphasia profiles.
- The authors argue for using aphasia as a measurement lens, not as a literal model of brain damage.

## Source

- Version 1 posted 15 May 2026.
- [arXiv abstract and PDF](https://arxiv.org/abs/2605.16222)
