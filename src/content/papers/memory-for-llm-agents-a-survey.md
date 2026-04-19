---
title: 'Memory for LLM Agents: A Survey'
summary: >-
  This survey argues that memory is becoming the central systems bottleneck for
  LLM agents. Instead of treating memory as simple retrieval-augmented generation,
  it frames memory as a write-manage-read loop embedded directly in agent policy,
  with failures in earlier writes propagating into later behavior. The paper
  connects agent memory to a POMDP belief-state perspective and proposes a
  taxonomy along three axes: temporal scope, representational substrate, and
  control policy for writing, retrieval, and forgetting. A key contribution is
  its update of prior reviews with newer 2025-2026 systems and benchmarks,
  including Agentic Memory, MemBench, MemoryAgentBench, and MemoryArena. The
  article also maps mechanism families across prompt-resident memory,
  retrieval-based external memory, reflective/self-improving memory,
  hierarchical/virtual memory, and learned memory management. Across these
  categories, it emphasizes that larger context windows help but are not a full
  replacement for persistent memory architectures because they do not inherently
  solve selective retention, contradiction handling, deletion, or governance.
whyItMatters: >-
  The paper makes a strong case that adaptive agent performance increasingly
  depends on memory design decisions, not only backbone model scale. It shifts
  attention from isolated recall quality toward multi-session, long-horizon,
  agentic outcomes where memory must improve action quality over time.
limitations: >-
  This is a survey preprint rather than a primary empirical paper, so many
  conclusions depend on heterogeneous and still-maturing source studies,
  including recent arXiv work. Its POMDP framing and taxonomy are conceptually
  clarifying but can appear cleaner than real-world memory stacks, which often
  remain heuristic hybrids. Several highlighted directions such as learned
  forgetting, trustworthy reflection, and causally grounded retrieval remain open
  research problems rather than settled solutions.
authors: []
sourceUrl: 'https://arxiv.org/abs/2603.07670'
sourceHost: arxiv.org
doi: 10.48550/arXiv.2603.07670
year: 2026
sourceContext: fulltext
capturedAt: '2026-04-19T00:00:00.000Z'
draft: false
---
## Summary
This survey argues that memory is becoming the central systems bottleneck for LLM agents. Instead of treating memory as simple retrieval-augmented generation, it frames memory as a write-manage-read loop embedded directly in agent policy, with failures in earlier writes propagating into later behavior. The paper connects agent memory to a POMDP belief-state perspective and proposes a taxonomy along three axes: temporal scope, representational substrate, and control policy for writing, retrieval, and forgetting. A key contribution is its update of prior reviews with newer 2025-2026 systems and benchmarks, including Agentic Memory, MemBench, MemoryAgentBench, and MemoryArena. The article also maps mechanism families across prompt-resident memory, retrieval-based external memory, reflective/self-improving memory, hierarchical/virtual memory, and learned memory management. Across these categories, it emphasizes that larger context windows help but are not a full replacement for persistent memory architectures because they do not inherently solve selective retention, contradiction handling, deletion, or governance.

## Why This Matters
The paper makes a strong case that adaptive agent performance increasingly depends on memory design decisions, not only backbone model scale. It shifts attention from isolated recall quality toward multi-session, long-horizon, agentic outcomes where memory must improve action quality over time.

## Caveats and Limitations
This is a survey preprint rather than a primary empirical paper, so many conclusions depend on heterogeneous and still-maturing source studies, including recent arXiv work. Its POMDP framing and taxonomy are conceptually clarifying but can appear cleaner than real-world memory stacks, which often remain heuristic hybrids. Several highlighted directions such as learned forgetting, trustworthy reflection, and causally grounded retrieval remain open research problems rather than settled solutions.

## Key Takeaways
- Memory is increasingly a first-class systems problem for LLM agents.
- The write-manage-read loop is a more complete framing than memory-as-RAG.
- Bigger context windows are useful but do not eliminate memory architecture needs.
- Agentic benchmarks matter because they test action quality over time, not just recall.
- Core open problems include consolidation, causal retrieval, safe forgetting, and privacy-aware deletion.

## Source
- DOI: [10.48550/arXiv.2603.07670](https://doi.org/10.48550/arXiv.2603.07670)
- URL: [https://arxiv.org/abs/2603.07670](https://arxiv.org/abs/2603.07670)
