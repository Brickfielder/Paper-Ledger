---
title: 'Leave No Context Behind: Efficient Infinite Context Transformers with Infini-attention'
summary: >-
  This arXiv paper introduces Infini-attention, a Transformer attention
  mechanism that combines local masked attention with a compressive long-term
  memory. The design aims to support effectively unbounded context with bounded
  memory and computation, and is evaluated on long-context language modelling,
  passkey retrieval, and book summarization.
whyItMatters: >-
  The paper is important because it treats long context as a streaming memory
  problem rather than simply extending quadratic attention to ever longer
  windows.
limitations: >-
  The results are from controlled model sizes and benchmarks, so real-world
  gains depend on implementation details, training recipe, retrieval needs, and
  how much information can be safely compressed into memory.
authors:
  - Tsendsuren Munkhdalai
  - Manaal Faruqui
  - Siddharth Gopal
theme: "AI Agents, Reasoning & Machine Cognition"
sourceUrl: https://arxiv.org/html/2404.07143v2
sourceHost: arxiv.org
doi: 10.48550/arXiv.2404.07143
year: 2024
journal: arXiv
sourceContext: fulltext
capturedAt: '2026-04-25T20:50:00.000Z'
draft: false
---
## Summary

Infini-attention is a proposal for making Transformer language models handle very long, even effectively infinite, input streams without letting memory and compute grow without bound. The mechanism adds a compressive memory to standard attention and combines two modes inside one block: masked local attention for recent tokens and long-term linear attention over compressed past context.

The paper evaluates the approach on long-context language modelling, passkey retrieval at million-token scale, and book summarization with 1B and 8B parameter models. The headline claim is that the method adds only a small bounded memory component while enabling fast streaming inference.

Conceptually, the paper sits between finite-window context extension and retrieval-augmented systems. It keeps memory inside the model architecture, but the memory is compressed rather than a full replay of the past. That makes it attractive for tasks where the model needs continuity over long streams but cannot afford full attention over everything.

## Why This Matters

Long context is often treated as a bigger-window engineering race. Infini-attention points toward a different route: maintain a compact, trainable memory that can carry information across segments. For repo readers interested in LLM architecture, it is a useful example of how local attention, linear attention, and recurrent memory can be hybridized.

## Caveats and Limitations

Compression is the central tradeoff. A bounded memory cannot preserve all details, so performance will depend on what information the model learns to keep and what tasks require exact retrieval. Benchmark success does not guarantee robust handling of messy documents, multi-source evidence, or adversarially placed details.

## Key Takeaways

- Infini-attention combines local masked attention with compressive long-term memory.
- It targets unbounded streaming context while keeping compute and memory bounded.
- The paper reports strong results on passkey retrieval and long-document summarization tasks.
- The architecture is a memory-compression approach, not a full replacement for all retrieval systems.
- The key open question is what information survives compression under realistic use.

## Source

- DOI: [10.48550/arXiv.2404.07143](https://doi.org/10.48550/arXiv.2404.07143)
- URL: [https://arxiv.org/html/2404.07143v2](https://arxiv.org/html/2404.07143v2)
