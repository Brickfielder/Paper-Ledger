---
title: >-
  Cognitive Heuristics are Necessary for Human-Like Multi-Agent Dynamics in
  Large Language Models
summary: >-
  This study tests whether large language models can reproduce the boundedly
  rational behaviour people show in the Beer Distribution Game, a supply-chain
  simulation with delayed feedback. The authors compared nine open-source LLMs
  with a cognitive model calibrated to 11 human game sessions. In the baseline
  condition, models received the game rules and their role but no account of
  human decision strategies; across all nine models, their play fit the human
  benchmark poorly. The authors then added a qualitative prompt describing
  demand smoothing, gradual inventory correction, and accounting for orders
  already in the supply pipeline, without specifying numerical parameters.
  This improved fit for some models: Kimi K2 was statistically indistinguishable
  from the human benchmark, and Llama-2 7B improved, especially in upstream
  roles. Other models did not improve and sometimes performed worse. The team
  checked whether the closer trajectories reflected more human-like decision
  rules by training an invertible neural network to infer the parameters of a
  Sterman heuristic from game trajectories. For better-performing models,
  heuristic prompting generally moved inferred parameters toward the human
  reference. The results suggest that LLMs do not automatically enact human
  cognitive biases simply because they can describe them; behavioural
  simulations need explicit cognitive assumptions and empirical validation.
whyItMatters: >-
  Researchers increasingly use LLMs as simulated people or as agents in
  multi-agent models. This paper shows why plausible language or reasonable
  actions are not enough to establish that an LLM behaves like people: in a
  delayed-feedback task, unprompted models did not reproduce the systematic
  errors that shape human group behaviour. Its two-level validation approach
  offers a useful example of checking both observed behaviour and inferred
  decision rules.
limitations: >-
  The human reference consisted of only 11 sessions from MIT Sloan students in
  1989, so it may not represent contemporary or more diverse participants. In
  each game the same LLM played all four supply-chain roles, unlike real teams
  of heterogeneous decision-makers. The authors tested one qualitative
  heuristic prompt, and prompt wording may affect results. The inferred
  demand-smoothing parameter was less reliably recovered than the other
  parameters, which limits confidence in that part of the mechanistic
  comparison. The findings concern one well-studied supply-chain game and do
  not establish that heuristic prompting generalizes to other tasks.
authors:
  - Hongan Zhu
  - Babak Heydari
sourceUrl: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6277139'
sourceHost: papers.ssrn.com
doi: 10.2139/ssrn.6277139
year: 2026
journal: SSRN preprint
sourceContext: fulltext
capturedAt: '2026-11-17T12:52:00.000Z'
draft: false
---
## Summary
This study asks whether off-the-shelf LLMs reproduce the systematic decision errors people show in dynamic, multi-agent settings, or whether they only produce human-like behaviour when explicitly guided by a cognitive theory. The authors use the Beer Distribution Game, where four roles manage a supply chain with delayed orders and shipments. People playing the game tend to overreact to recent demand and underweight the goods already in the supply pipeline, creating oscillations and the bullwhip effect: changes in customer demand become larger fluctuations in orders upstream.

The authors compare nine open-source LLMs with a benchmark generated from a Sterman heuristic model calibrated to 11 human sessions. Each game has 24 rounds, with customer demand rising from 4 to 8 units after round four. In the baseline condition, each model receives the game rules, its role, and its local information. In the heuristic-aware condition, the prompt also describes human-like demand smoothing, gradual stock correction, and accounting for incoming supply, but gives no numerical parameter values. The authors measure how well the resulting order trajectories fit a leave-one-human-session-out benchmark. They also train an invertible neural network to infer the underlying decision parameters from the order, inventory, and backlog trajectories, allowing a second check of whether a closer match reflects a shift in decision policy.

All nine models fit the human benchmark poorly in the baseline condition. Heuristic prompting improved average fit, but the effect depended strongly on the model. Kimi K2 came closest: its heuristic-aware results were statistically indistinguishable from the benchmark overall and across the four roles. Llama-2 7B also improved, particularly for the distributor and factory, while several other models showed no improvement or became less human-like. The prompting intervention also moved inferred decision parameters toward the human reference for models whose trajectory fit improved. The authors therefore argue that LLMs can sometimes serve as behavioural surrogates when supplied with explicit cognitive priors, but their performance must be validated for each model and task.

## Why This Matters
LLMs can sound as if they understand human decision-making without actually reproducing the processes that generate it. This paper tests that distinction in a setting where human errors have clear, measurable effects on a multi-agent system. It also illustrates a stronger validation strategy: assess both the visible behaviour and whether the inferred decision rules resemble those estimated from people.

## Caveats and Limitations
The benchmark was based on 11 historical sessions involving MIT Sloan students, so its population and age limit generalisability. The same LLM played all four roles within a session, and the study did not test mixed-model or human-LLM teams. Only one wording of the heuristic prompt was tested. The parameter inference method recovered most parameters reasonably well, but demand smoothing was less identifiable. Finally, the results come from the Beer Game; whether the approach transfers to other behavioural tasks remains an open question.

## Key Takeaways
- Without cognitive guidance, all nine tested LLMs fit the human Beer Game benchmark poorly.
- Qualitative descriptions of human heuristics improved fit for some models, especially Kimi K2 and Llama-2 7B, but the effect varied across models.
- The study checked both order trajectories and inferred decision parameters, finding evidence that prompting changed underlying policies in better-performing models.
- LLM behaviour should be validated against human data before using models as behavioural surrogates.
- The evidence is limited by a small, historical human benchmark and a single task and prompt design.

## Source
- DOI: [10.2139/ssrn.6277139](https://doi.org/10.2139/ssrn.6277139)
- URL: [SSRN abstract and full-text PDF](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6277139)
