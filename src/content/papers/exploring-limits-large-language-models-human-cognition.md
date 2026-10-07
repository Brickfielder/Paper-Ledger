---
title: "Exploring the Limits of Large Language Models as a Reflection of Human Cognition"
summary: >-
  Sarah Schröder, Thekla Morgenroth, Ulrike Kuhl, Valerie Vaquet, and Benjamin
  Paaßen argue that matching people’s average answers on familiar prompts does
  not establish that large language models will track human judgments on new
  stimuli. In an empirical illustration, 374 U.S. participants and eight
  language models rated 30 moral scenarios and meaning-changing rewordings.
  Similarity between human and model ratings generally fell for the reworded
  items, though the size and pattern of the change varied by model.
whyItMatters: >-
  The study tests a practical boundary on using language models as stand-ins for
  human participants: response agreement may depend on the exact wording and
  meaning of the stimuli. It supports validating model-human alignment on the
  actual materials and population of each proposed study, rather than assuming
  that alignment on an earlier benchmark will transfer.
limitations: >-
  This is a focused illustration using 30 moral scenarios and a U.S. online
  sample, not a comprehensive test of psychological domains, populations, or
  tasks. Rewordings intentionally changed the scenarios' meaning, so results do
  not isolate sensitivity to purely cosmetic paraphrases. The study compares
  average ratings and does not establish whether models reproduce the range of
  individual human responses or the cognitive processes behind them. Findings
  are specific to the model versions and prompting procedure tested.
authors:
  - Sarah Schröder
  - Thekla Morgenroth
  - Ulrike Kuhl
  - Valerie Vaquet
  - Benjamin Paaßen
sourceUrl: "https://psycnet.apa.org/fulltext/2028-36492-001.html"
sourceHost: "psycnet.apa.org"
doi: "10.1037/tmb0000210"
year: 2026
journal: "Technology, Mind, and Behavior"
theme: "AI, Cognition & Psychology"
sourceContext: fulltext
capturedAt: "2026-10-07T07:24:45+01:00"
draft: false
---

## Summary

This feature article combines a theoretical argument about machine learning generalization with an empirical demonstration. The authors ask whether language models that resemble human participants on familiar psychological questions will continue to do so when the stimuli are changed.

They recruited 400 U.S.-based participants online; 374 remained after attention-check exclusions. Participants rated 30 moral scenarios on a scale from −4 (extremely unethical) to 4 (extremely ethical). The authors created revised versions that were similar in wording but different in meaning. They compared the human ratings with responses from eight models: GPT-3.5, GPT-4, GPT-4-mini, GPT-5, GPT-o1, GPT-o3, Llama 3.1 70B, and Centaur. Each model query was repeated 10 times to account for variation in outputs.

The central result is that alignment on the original scenarios did not reliably carry over to the revised scenarios. Human and model ratings became less similar overall, and the size of the change differed across models. Some models tended to retain similar ratings across the paired items even when their meaning had changed; other models showed different patterns. The authors use this as an illustration that surface wording and model behavior can obscure whether a system is tracking the semantic change that matters to people.

## Why This Matters

Researchers sometimes use language models to simulate participant responses, particularly when comparing average responses to text prompts. This study shows why a high match on one set of items is not enough to establish that a model will behave like people on a new study. Changes in sample, stimuli, or wording can shift the relationship.

The practical recommendation is to validate human-model agreement for the specific population, materials, and task under study. Even agreement in average ratings would be a limited criterion: it does not show that a model captures individual differences or uses the same cognitive processes as human participants.

## Caveats and Limitations

- The empirical illustration covers 30 moral scenarios, not the full range of psychological questions or language-based tasks.
- Participants were recruited from a U.S. online panel; results may differ with other populations and contexts.
- The revised scenarios changed meaning, sometimes substantially. This tests transfer across semantically altered items rather than ordinary paraphrase invariance.
- The analyses focus mainly on average ratings and correlations. They do not demonstrate that models reproduce human response distributions or individual-level variability.
- The comparison reflects the tested model versions and prompting setup; it should not be generalized to every current or future model.
- The authors describe the experiment as an illustration of a possible failure mode, not a proof that every model-human comparison will break down.

## Key Takeaways

- Similar average responses to familiar prompts do not guarantee that a language model will track human judgments on changed stimuli.
- In this example, rewording 30 moral scenarios so that their meanings changed reduced similarity between human and model ratings, with variation across models.
- Validate model-human alignment on the actual study materials and target population before treating model responses as a proxy for participant data.
- Matching average outputs is distinct from matching individual human variation or underlying cognition.

## Source

- Schröder, S., Morgenroth, T., Kuhl, U., Vaquet, V., & Paaßen, B. (2026). *Exploring the limits of large language models as a reflection of human cognition: An illustration in the context of moral judgment*. *Technology, Mind, and Behavior*. Advance online publication.
- DOI: [10.1037/tmb0000210](https://doi.org/10.1037/tmb0000210)
- [APA PsycNet full text](https://psycnet.apa.org/fulltext/2028-36492-001.html)
- [OSF materials and data](https://osf.io/qcuh4/overview)
