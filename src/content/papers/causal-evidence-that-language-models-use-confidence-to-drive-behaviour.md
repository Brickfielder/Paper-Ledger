---
title: Causal evidence that language models use confidence to drive behaviour
summary: >-
  This paper asks whether large language models use an internal sense of
  confidence to decide when to answer and when to abstain. The authors frame
  abstention as a metacognitive decision: the model first forms a confidence
  estimate, then uses that estimate to choose whether to respond. To test this,
  they built a four-phase paradigm using multiple-choice factual questions. In
  Phase 1, models answered questions without any abstention option, allowing the
  authors to measure pre-decisional confidence from calibrated log probabilities
  and from separate verbal self-reports. In Phase 2, the same questions were
  shown again with abstention available, and the authors asked whether the
  earlier confidence measures predicted refusal behavior. They found that higher
  calibrated confidence strongly predicted a lower likelihood of abstaining.
  They also compared confidence with alternative explanations such as question
  difficulty, retrieval-augmented generation scores, and surface-level semantic
  features. Confidence was the dominant predictor in the logistic models, and
  adding the other variables did little to improve prediction once confidence
  was included. The authors then recovered an implicit abstention threshold,
  finding that GPT-4o required fairly high confidence before answering.
  Importantly, the transition from answering to abstaining was gradual rather
  than perfectly sharp. To move from correlation to causation, they used
  activation steering in Gemma 3 27B by constructing vectors from high- versus
  low-confidence trials and injecting them at inference time. This intervention
  changed abstention behavior substantially: pushing the model toward higher
  confidence reduced refusals, while pushing it toward lower confidence
  increased refusals. The authors also report that similar patterns appeared in
  other tested models and with verbal confidence, suggesting that the effect is
  not limited to one architecture or one confidence readout.
whyItMatters: >-
  This study gives direct evidence that at least some language models do more
  than merely output confidence-like scores; they can use confidence to regulate
  their own behavior. That matters for safer deployment, because abstaining when
  uncertain is often preferable to giving a low-confidence answer in high-stakes
  settings.
limitations: >-
  The strongest causal test relies on activation steering in one model family,
  so the intervention evidence is not yet broad across architectures or tasks.
  The abstention setup is also a controlled multiple-choice factuality paradigm,
  which may not capture how models behave in open-ended or real-world
  interactions. More generally, the work shows a confidence-to-abstention link,
  but it does not fully identify what internal representation of confidence is
  being manipulated or how it is computed.
authors:
  - Dharshan Kumaran
  - Nathaniel Daw
  - Simon Osindero
  - Petar Veličković
  - Viorica Patraucean
sourceUrl: 'https://www.nature.com/articles/s42256-026-01293-x'
sourceHost: nature.com
doi: 10.1038/s42256-026-01293-x
year: 2026
journal: Nature Machine Intelligence
sourceContext: fulltext
capturedAt: '2026-09-07T21:25:22.703Z'
draft: false
---
## Summary
This paper asks whether large language models use an internal sense of confidence to decide when to answer and when to abstain. The authors frame abstention as a metacognitive decision: the model first forms a confidence estimate, then uses that estimate to choose whether to respond. To test this, they built a four-phase paradigm using multiple-choice factual questions. In Phase 1, models answered questions without any abstention option, allowing the authors to measure pre-decisional confidence from calibrated log probabilities and from separate verbal self-reports. In Phase 2, the same questions were shown again with abstention available, and the authors asked whether the earlier confidence measures predicted refusal behavior. They found that higher calibrated confidence strongly predicted a lower likelihood of abstaining. They also compared confidence with alternative explanations such as question difficulty, retrieval-augmented generation scores, and surface-level semantic features. Confidence was the dominant predictor in the logistic models, and adding the other variables did little to improve prediction once confidence was included. The authors then recovered an implicit abstention threshold, finding that GPT-4o required fairly high confidence before answering. Importantly, the transition from answering to abstaining was gradual rather than perfectly sharp. To move from correlation to causation, they used activation steering in Gemma 3 27B by constructing vectors from high- versus low-confidence trials and injecting them at inference time. This intervention changed abstention behavior substantially: pushing the model toward higher confidence reduced refusals, while pushing it toward lower confidence increased refusals. The authors also report that similar patterns appeared in other tested models and with verbal confidence, suggesting that the effect is not limited to one architecture or one confidence readout.
## Why This Matters
This study gives direct evidence that at least some language models do more than merely output confidence-like scores; they can use confidence to regulate their own behavior. That matters for safer deployment, because abstaining when uncertain is often preferable to giving a low-confidence answer in high-stakes settings.
## Caveats and Limitations
The strongest causal test relies on activation steering in one model family, so the intervention evidence is not yet broad across architectures or tasks. The abstention setup is also a controlled multiple-choice factuality paradigm, which may not capture how models behave in open-ended or real-world interactions. More generally, the work shows a confidence-to-abstention link, but it does not fully identify what internal representation of confidence is being manipulated or how it is computed.
## Key Takeaways
- Confidence predicted abstention better than difficulty, retrieval scores, or semantic similarity features.
- The authors treated abstention as a metacognitive decision and separated confidence formation from confidence-based policy.
- GPT-4o showed an implicit abstention threshold, with a soft transition rather than a hard rule.
- Activation steering in Gemma 3 27B causally shifted abstention up or down by changing internal confidence signals.
- The findings support the idea that some LLMs can use native confidence representations to guide behavior.
## Source
- DOI: [10.1038/s42256-026-01293-x](https://doi.org/10.1038/s42256-026-01293-x)
- URL: [https://www.nature.com/articles/s42256-026-01293-x](https://www.nature.com/articles/s42256-026-01293-x)
