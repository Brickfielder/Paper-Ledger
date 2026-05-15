---
title: 'The Memory Curse: How Expanded Recall Erodes Cooperative Intent in LLM Agents'
summary: >-
  This arXiv paper challenges the assumption that longer memory always improves
  LLM-agent behavior. The authors study seven LLMs across four repeated social
  dilemma games over 500 rounds, varying the amount of past interaction history
  visible to the agents. In many model-game settings, a small memory window
  improves cooperation, but longer recall erodes it, producing what the authors
  call the memory curse. They connect the effect to shifts in chain-of-thought
  reasoning: expanded histories push some agents away from forward-looking,
  cooperative language and toward history-following, risk-averse, retaliatory
  reasoning. Memory sanitization and no-reasoning ablations suggest that the
  problem is driven by remembered content and deliberative interpretation, not
  just prompt length.
whyItMatters: >-
  The paper is a useful corrective to naive agent-memory optimism. It suggests
  that giving agents perfect recall can make them less forgiving, less
  cooperative and more path-dependent in social settings, so memory design
  needs compression, forgetting and intent-shaping rather than simply larger
  context windows.
limitations: >-
  The experiments use stylized repeated games and model self-play, so the
  conclusions may not transfer directly to richer real-world agent societies.
  The cognitive analysis relies on lexical and semantic proxies over reasoning
  traces, and the targeted fine-tuning intervention is a probe rather than a
  fully general mitigation strategy. The results are also a preprint snapshot
  and should be treated as provisional.
authors:
  - Jiayuan Liu
  - Tianqin Li
  - Shiyi Du
  - Xin Luo
  - Haoxuan Zeng
  - Emanuel Tewolde
  - Tai Sing Lee
  - Tonghan Wang
  - Carl Kingsford
  - Vincent Conitzer
theme: "AI Agents, Reasoning & Machine Cognition"
sourceUrl: 'https://arxiv.org/html/2605.08060v1'
sourceHost: arxiv.org
doi: 10.48550/arXiv.2605.08060
year: 2026
sourceContext: fulltext
capturedAt: '2026-05-15T00:00:00+01:00'
draft: false
---
## Summary
This paper asks whether longer memory helps LLM agents cooperate. The authors study repeated social dilemmas, including Prisoner's Dilemma, Traveler's Dilemma, Public Goods Game and Trust Game. Seven LLMs play these games for 500 rounds while seeing different amounts of prior interaction history.

The headline result is counterintuitive. Moving from no memory to a short history window often improves cooperation because agents can respond to recent behavior and repair trust. But expanding the visible history further frequently reduces cooperation. Across 28 model-game settings, the authors report cooperation degradation in 18. They call this pattern the memory curse.

The mechanism is not just that the prompt is longer. The authors use lexical analysis of 378,000 reasoning traces to track whether agents are using forward-looking cooperative language or history-following defensive language. In memory-cursed settings, expanded history reduces forward-looking intent and increases risk-averse or retaliatory reasoning. The agent becomes more likely to overfit to remembered defections, hold grudges and choose defensive actions that then poison later interaction.

Several controls sharpen the claim. Memory sanitization keeps history length fixed but replaces visible history with synthetic cooperative records; cooperation recovers substantially, suggesting that the content of remembered interaction history, not length alone, triggers the collapse. A no-reasoning ablation often reduces the cooperative crash, suggesting that explicit deliberation can amplify the problem by turning old defections into justifications for further retaliation. The authors also test asymmetric memory settings, where long-memory agents can behave less cooperatively than short-memory partners.

The paper does not argue that memory is always harmful. Some model-game settings are "memory immune" and sustain cooperation even with longer recall. The more precise claim is that memory interacts with model capability, game structure and reasoning style. More recall can support stable cooperation when agents retain forward-looking intent, but it can also harden distrust when they over-index on historical negative evidence.

## Why This Matters
Agent memory is often framed as a capability upgrade: more remembered context should mean better continuity, personalization and coordination. This paper shows why that is too simple. In multi-agent settings, memory is also an affective and strategic substrate. It changes what the agent attends to, how it reasons about trust and whether it can forgive.

For the Paper Ledger, this sits neatly beside the growing cluster on agent memory. It complements systems papers that try to make memory more efficient by asking a different question: what kind of behavior does expanded memory produce?

## Caveats
- The environments are stylized games, not open-ended real-world institutions or social systems.
- The cooperation metric is game-specific and may not capture richer forms of coordination.
- The semantic analysis uses lexical dictionaries and reasoning traces, which are informative but imperfect proxies for agent cognition.
- The fine-tuning intervention is best read as causal evidence for the forward-looking hypothesis, not as a complete deployment-ready fix.
- The paper is an arXiv preprint and the results should be revisited as models and agent scaffolds change.

## Bottom Line
The study argues that longer recall can make LLM agents less cooperative by preserving and amplifying negative interaction history. The design lesson is that agent memory needs selection, compression and forgetting, not just expansion.

## Source
- DOI: [10.48550/arXiv.2605.08060](https://doi.org/10.48550/arXiv.2605.08060)
- URL: [https://arxiv.org/html/2605.08060v1](https://arxiv.org/html/2605.08060v1)
- Full text used: arXiv HTML full text
