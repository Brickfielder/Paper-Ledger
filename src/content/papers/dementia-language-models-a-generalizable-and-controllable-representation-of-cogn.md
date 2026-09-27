---
title: >-
  Dementia Language Models: a generalizable and controllable representation of
  cognitive impairment
summary: >-
  The authors fine-tuned three compact instruction-tuned language models on 217
  Cookie Theft descriptions from 141 people with probable Alzheimer’s disease,
  and built matched models from 232 healthy-control descriptions. Across 19
  linguistic measures, the dementia-tuned models reproduced the direction of
  patient–control differences and generalized to three unseen narrative tasks;
  two controls for generic speech adaptation and weight-change magnitude did not
  show the same pattern. A severity regressor trained on real patient speech
  assigned the dementia-model generations a lower mean MMSE estimate than the
  healthy-model generations (21.9 versus 25.1). Five neurologists identified the
  dementia text in synthetic pairs at a rate similar to real pairs (75.3% versus
  70.7%). In a separate cohort of 907 people, model-derived representations
  improved classification of mild cognitive impairment (MCI); adding synthetic
  dementia descriptions raised MCI recall from 0.33 to 0.72 in one evaluation.
  The signal also appeared in models’ choices on the Iowa Gambling Task, with
  classifiers reaching ROC–AUC up to 0.72 on a cohort of 45 people with MCI and
  45 controls. Interpolating model weights between healthy- and dementia-tuned
  versions changed several dementia-associated outputs progressively. These
  results support the models as research tools for studying language and
  behavior patterns associated with impairment, not as clinical diagnostic
  systems or biological models of dementia.
whyItMatters: >-
  The study tests whether compact language models can represent impairment-
  associated patterns across language, internal features, and task behavior. If
  validated further, such models could support controlled experiments and
  hypothesis generation where access to patient data is limited.
limitations: >-
  This is a bioRxiv preprint and has not been certified by peer review. Training
  used a small English-language sample from one picture-description task and
  one diagnostic process. Behavioral generalization was tested on only one
  non-linguistic task, and MCI classification performance was modest in absolute
  terms. The authors do not claim the models reproduce dementia biology or
  reveal disease mechanisms. Any clinical use would require validation in the
  target population; synthetic patient-like text also needs clear labeling and
  careful handling to avoid contaminating datasets or being mistaken for real
  patient records.
authors:
  - Lotem Peled-Cohen
  - Amit Shmidov
  - Netaniel Rein
  - Eilam Shapira
  - Nitay Calderon
  - Refael Tikochinski
  - Ehud Zeltzer
  - Talya Nathan
  - Benjamin Uliel
  - Kimberly D Mueller
  - Ithamar Ganmore
  - Ben Reis
  - Roi Reichart
sourceUrl: 'https://doi.org/10.64898/2026.09.16.752129'
sourceHost: doi.org
doi: 10.64898/2026.09.16.752129
year: 2026
journal: bioRxiv (Cold Spring Harbor Laboratory)
sourceContext: full-text PDF
capturedAt: '2026-09-27T12:41:17.209Z'
draft: false
---
## Summary
The authors propose Dementia Language Models (DLMs): compact language models fine-tuned to express patterns associated with cognitive impairment. They trained Llama, Gemma, and Qwen models on 217 Cookie Theft picture descriptions from 141 people with probable Alzheimer’s disease, with matched healthy models trained on 232 control descriptions. Two additional controls tested whether effects came from generic conversational speech adaptation or simply the size of a weight update.

Across 19 linguistic measures, the dementia-tuned models reproduced patient–control differences and generalized to Cinderella retelling, sandwich preparation, and autobiographical narration. A severity regressor trained only on real patient speech assigned generated dementia-model narratives a mean predicted MMSE of 21.9, compared with 25.1 for healthy-model narratives. Five neurologists distinguished dementia from healthy text in synthetic pairs at a rate similar to real transcript pairs (75.3% versus 70.7%). In a separate cohort of 907 participants, model internal representations improved MCI classification; adding synthetic examples increased MCI recall from 0.33 to 0.72 in one setup. The models also showed impairment-associated decision patterns on the Iowa Gambling Task, with classification ROC–AUC up to 0.72 in 45 participants with MCI and 45 controls. Interpolating weights between healthy- and dementia-tuned models progressively changed linguistic scores, predicted MMSE, and dementia probability.

The authors frame DLMs as tools for controlled research and hypothesis generation. They do not claim the models have dementia, reproduce its biology, or are ready for clinical diagnosis.

## Why This Matters
The study tests a framework for evaluating whether compact language models can represent impairment-associated patterns across language, internal features, and task behavior. If validated further, such models could support controlled experiments and hypothesis generation where access to patient data is limited.
## Caveats and Limitations
This is a bioRxiv preprint that has not been certified by peer review. The models were trained on a small, English-language dataset from one elicitation task and diagnostic process. Behavioral generalization used one non-linguistic task, and MCI classification remained modest in absolute terms. The authors describe computational models of observed language and behavior patterns, not models of dementia biology. Clinical use would require validation in the intended population. They also note that synthetic patient-like outputs must be clearly labeled and managed carefully to avoid contaminating datasets or being mistaken for genuine patient records.

## Key Takeaways
- DLMs are proposed as a controllable language-based representation of cognitive impairment.
- Fine-tuned LLMs produced patient-like narratives on tasks they had not seen during training.
- The generated outputs were judged by neurologists to resemble real clinical transcripts.
- Internal representations also supported detection of cognitive state in unseen cohorts.
- The approach may be useful for training, hypothesis generation, and scalable experimentation.
## Source
- DOI: [10.64898/2026.09.16.752129](https://doi.org/10.64898/2026.09.16.752129)
- URL: [https://doi.org/10.64898/2026.09.16.752129](https://doi.org/10.64898/2026.09.16.752129)
