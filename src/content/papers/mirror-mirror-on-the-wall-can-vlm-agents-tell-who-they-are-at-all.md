---
title: "Mirror, Mirror on the Wall: Can VLM Agents Tell Who They Are at All?"
summary: >-
  Ziliotto and colleagues introduce a simulated benchmark for testing whether
  embodied vision-language model (VLM) agents can use a reflection to infer a
  hidden attribute of their own body and act on it. Eight VLMs navigated a
  first-person 3D environment in five conditions: a standard mirror task, no
  mirror, misleading language about the agent’s body, multiple similar-looking
  agents, and a cluttered scene with an occluded reflection. The evaluation
  tracked correct target selection alongside mirror consultation, whether
  mirror viewing came before action, correct verbal self-attribution, and
  unsupported claims. Claude Sonnet 4.6 had the highest accuracy in the basic
  mirror condition (0.905), but its performance fell to 0.143 when a false
  linguistic cue conflicted with the reflection and to 0.476 with partial
  occlusion. Across models, looking at the mirror did not guarantee that its
  information was understood or used. Some agents continued to make correct
  choices when no mirror was available, indicating guessing or shortcut
  behaviour; fluent or correct self-descriptions could also occur without
  grounded perception. The results suggest that mirror-guided self-identification
  is possible for some tested agents in this setting, but fragile and strongly
  model-dependent. The authors frame this as a functional test of visual
  self-grounding, not evidence of philosophical self-awareness.
whyItMatters: >-
  The benchmark separates what an embodied agent says about itself from whether
  its actions are actually grounded in visual evidence. Its combination of
  task accuracy, evidence-seeking measures, and counterfactual conditions is a
  useful design for evaluating multimodal agents that act in partially
  observable environments.
limitations: >-
  This is a preprint evaluating eight VLMs in a designed 3D simulation, with
  self-identification operationalized through a hidden body colour and target
  selection. Success in this task cannot establish human-like or philosophical
  self-awareness. The authors note that models may use learned priors about
  mirrors and reflections; the environment reduces but cannot eliminate this
  possibility. The results may also depend on the particular simulated task,
  prompts, and model/API versions tested.
authors:
  - Filippo Ziliotto
  - Ciro Beneduce
  - Bruno Lepri
  - Luciano Serafini
  - Massimiliano Luca
  - Tommaso Campari
sourceUrl: "https://arxiv.org/abs/2605.08816"
sourceHost: "arxiv.org"
year: 2026
journal: "arXiv preprint arXiv:2605.08816"
sourceContext: fulltext
capturedAt: '2026-09-28T20:24:00+01:00'
draft: false
---
## Summary

This paper asks a bounded, functional question: can an embodied vision-language model (VLM) infer a hidden attribute of its own body from a reflection and use that information to guide an action? It does not treat success as proof of self-awareness. Instead, the authors test whether model behaviour is causally grounded in visual evidence rather than prompt compliance, priors, guessing, or post-hoc explanation.

The benchmark places a first-person agent in a simulated 3D room. Its body colour is not directly visible, so it must find a reflective surface, identify its own reflection, and navigate to a cube of the same colour. Four additional conditions test the basis and robustness of that behaviour: the mirror is removed; a false textual cue conflicts with the reflection; other agents create self–other ambiguity; or the reflection is partly occluded in a cluttered room. The authors tested eight VLMs, including Claude Sonnet 4.6, Gemini 2.5 Flash and Pro, GPT-5.1, Qwen 3.6 Plus, two Gemma 4 models, and Ministral 3 14B.

They measure more than final accuracy: whether an agent looks at the mirror, whether it does so before acting, whether it correctly identifies itself in language, and whether it claims to know its body colour before seeing evidence. In the basic mirror task, Claude Sonnet 4.6 achieved the highest target-selection accuracy (0.905); Qwen 3.6 Plus reached 0.714. Yet mirror use alone was not enough: some agents looked at the reflection but still chose incorrectly. Accuracy also fell under misleading language and occlusion. When the mirror was removed, some models still chose correctly at rates above chance, which the authors interpret as evidence of shortcuts or guessing rather than mirror-based identification. Self-referential explanations likewise did not reliably track grounded action.

The authors conclude that some tested agents can use reflections for self-identification in a controlled setting, but the ability is fragile and model-dependent. Their benchmark is a diagnostic for embodied visual grounding, not a demonstration that VLMs possess human-like self-awareness.

## Why This Matters

The study distinguishes verbal self-description from visually grounded behaviour. Testing whether an agent seeks evidence, uses it before acting, and changes its behaviour when evidence is removed or contradicted gives a more informative picture than judging its explanation or final answer alone.

## Caveats and Limitations

This is a preprint about a designed simulation, not a study of human or animal self-recognition. The task operationalizes self-identification through a hidden body colour and choosing a matching cube, so it cannot establish philosophical self-awareness. The authors also acknowledge that learned priors about mirrors and reflections may influence performance; their design reduces but cannot eliminate that possibility. Findings are specific to the simulated environment, prompts, and eight model/API versions tested.

## Key Takeaways

- The benchmark tests whether an embodied VLM uses reflected visual evidence to identify a hidden property of itself.
- Mirror consultation, correct verbal attribution, and correct action can come apart.
- Removing or degrading mirror evidence reveals shortcut behaviour and fragile grounding.
- The authors treat this as functional self-grounding, not evidence of human-like self-awareness.

## Source

- Version 1 posted 9 May 2026.
- [arXiv abstract and PDF](https://arxiv.org/abs/2605.08816)
