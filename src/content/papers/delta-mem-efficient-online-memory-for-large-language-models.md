---
title: 'delta-mem: Efficient Online Memory for Large Language Models'
summary: >-
  This arXiv paper proposes delta-mem, a lightweight memory mechanism for large
  language models. Instead of extending the prompt with more history or adding a
  heavy retrieval system, delta-mem attaches a compact online associative-memory
  state to a frozen full-attention Transformer. The state is updated by a
  delta-rule learning procedure and read back during generation to create
  low-rank corrections to attention computation. In experiments on HotpotQA,
  LoCoMo, MemoryAgentBench, GPQA-Diamond and IFEval, very small memory states
  improve memory-heavy performance while largely preserving general ability. An
  8 x 8 online state improves the reported average score over the frozen
  backbone, with especially large gains on MemoryAgentBench and LoCoMo.
whyItMatters: >-
  The paper is useful because it treats memory as a compact dynamic state inside
  model computation, not simply as longer context, retrieved text or static
  adapter parameters. It points toward agent memory systems that can be updated
  online and used at inference time without replaying all history.
limitations: >-
  The work is a preprint and the evidence is benchmark-based rather than a
  deployed agent study. The method still requires training additional memory
  components and evaluating insertion choices, write strategies and state
  organization. The no-context recovery experiments show partial recovery of
  missing information, not full replacement of explicit context or external
  knowledge retrieval.
authors:
  - Jingdi Lei
  - Di Zhang
  - Junxian Li
  - Weida Wang
  - Kaixuan Fan
  - Xiang Liu
  - Qihan Liu
  - Xiaoteng Ma
  - Baian Chen
  - Soujanya Poria
theme: "AI Agents, Reasoning & Machine Cognition"
sourceUrl: 'https://arxiv.org/abs/2605.12357'
sourceHost: arxiv.org
doi: 10.48550/arXiv.2605.12357
year: 2026
sourceContext: fulltext
capturedAt: '2026-05-15T00:00:00+01:00'
draft: false
---
## Summary
This paper proposes delta-mem, a mechanism for giving a frozen Transformer a compact, continuously updated memory state. The motivation is straightforward: longer context windows are expensive and do not guarantee that a model will use the added context well. Retrieval-augmented text memories can be noisy or lossy, and static parametric memories do not adapt naturally to evolving interactions.

Delta-mem instead maintains an online state of associative memory. As tokens or message segments arrive, the state stores key-value associations using a gated delta-rule update. At generation time, the current hidden state queries this memory state. The resulting readout is not inserted as text. It is transformed into low-rank corrections to the backbone's attention computation, so memory influences the forward pass while the underlying backbone remains frozen.

The authors evaluate several writing strategies. Token-state writing updates memory at every token, segment-state writing updates once per segment, and multi-state writing maintains several parallel sub-states to reduce interference. The experiments compare delta-mem against textual memory, outside-channel memory and parametric-memory baselines across general and memory-heavy benchmarks.

On Qwen3-4B-Instruct, delta-mem variants outperform the tested baselines on the average score. The paper reports gains on MemoryAgentBench and LoCoMo, while keeping HotpotQA, GPQA-Diamond and IFEval performance competitive. Across backbone models, the benefits vary by model capacity: larger backbones show steadier gains, while the smaller SmolLM3-3B benefits strongly from multi-state organization.

A useful diagnostic experiment removes explicit historical context and asks whether the compact state can recover information. Delta-mem improves over a no-context baseline on both HotpotQA and LoCoMo, suggesting that the online state retains usable historical signals. The recovery is partial rather than complete, but it supports the claim that a tiny state can carry information that remains computationally useful later.

## Why This Matters
This is part of the broader move from memory-as-retrieval toward memory-as-computation. Instead of appending memories to the prompt, delta-mem makes memory part of the attention pathway. That is interesting for long-running agents because it could reduce dependence on ever-growing transcripts and could allow memory to evolve continuously across interaction turns.

The paper also gives a clean comparison vocabulary: memory state, which stores historical information, and memory steering, which determines how that stored information affects the backbone. That distinction is helpful for thinking about agent architectures beyond this specific method.

## Caveats
- The method is benchmark-validated but not tested as a full production agent memory stack.
- The paper depends on implementation choices such as insertion depth, write strategy and number of memory states.
- The memory state recovers only part of removed context in no-context tests.
- It is not a governance solution for memory deletion, privacy, contradiction handling or user-level memory policy.
- The results are from an arXiv preprint and should be treated as provisional until independently reproduced.

## Bottom Line
Delta-mem shows that a very small online associative-memory state can steer a frozen Transformer through attention corrections and improve memory-heavy tasks. It is a compact-memory architecture paper, not just another longer-context or retrieval paper.

## Source
- DOI: [10.48550/arXiv.2605.12357](https://doi.org/10.48550/arXiv.2605.12357)
- URL: [https://arxiv.org/abs/2605.12357](https://arxiv.org/abs/2605.12357)
- Full text used: local PDF `/home/marco/Downloads/document.pdf`
