---
title: "What The F*ck Is Artificial General Intelligence?"
summary: >-
  Bennett offers a short, deliberately provocative survey of artificial general
  intelligence. The paper treats AGI not as a single benchmark or branding term
  but as the problem of building an artificial scientist: a system that can
  prioritize, plan and perform useful experiments while adapting with limited
  resources. It compares search, approximation and hybrid architectures, then
  groups broader research strategies into scale-maxing, simp-maxing and
  w-maxing. The central argument is that recent AI progress has been dominated by
  scale-maxed approximation, but future AGI will need a fusion of tools and
  meta-approaches, especially as sample efficiency and energy efficiency become
  limiting constraints.
whyItMatters: >-
  The paper is useful as a compact map of the AGI debate because it refuses to
  let "AGI" float as either hype or despair. By contrasting search,
  approximation, embodiment, simplicity and scale, it gives a vocabulary for
  asking what kind of adaptivity a system actually has, and what bottleneck it is
  trying to escape.
limitations: >-
  This is a conceptual survey rather than an empirical benchmark paper. Its
  categories are intentionally broad and argumentative, and the tone is more
  polemical than neutral. The "artificial scientist" framing is useful, but it
  does not settle how to measure generality, agency or useful experimentation in
  deployed systems.
authors:
  - Michael Timothy Bennett
theme: "AI Agents, Reasoning & Machine Cognition"
sourceUrl: https://arxiv.org/abs/2503.23923
sourceHost: arxiv.org
year: 2025
journal: arXiv preprint
sourceContext: fulltext
capturedAt: '2026-05-26T19:42:47+01:00'
draft: false
---
## Summary

Michael Timothy Bennett's paper is a deliberately sharp, accessible survey of
what artificial general intelligence could mean after years of hype have made
the phrase slippery. The paper begins by comparing definitions of intelligence,
including human-level task breadth, skill acquisition and Legg-Hutter-style
goal satisfaction across environments. Bennett argues for intelligence as
adaptation with limited resources, then frames AGI as an artificial scientist:
a system able to prioritize, plan and conduct useful experiments while balancing
exploration and action.

The survey then reorganizes AI methods into tools rather than familiar machine
learning buckets. Search constructs solutions within explicit structure and can
give precise, interpretable answers, but becomes expensive over large state
spaces. Approximation, the dominant mode of modern deep learning, handles messy
high-dimensional data and parallelizes well, but is approximate, opaque and
sample-hungry. Hybrid systems such as AlphaGo, neuro-symbolic models and
reasoning-oriented architectures combine these strengths by letting search and
approximation support each other.

Bennett's most distinctive move is to classify broader AGI strategies as
meta-approaches. Scale-maxing follows the Bitter Lesson: increase compute, data
and model size, and general methods eventually win. Simp-maxing follows
Ockham-style pressure toward simpler models and compressed descriptions.
W-maxing, drawn from Bennett's own enactive and embodiment-oriented work,
focuses on weakening constraints on function and delegating control to lower
levels of abstraction, closer to how biological systems distribute adaptation
across body, environment and development.

The conclusion is not that one camp wins. Recent progress has been dominated by
scale-maxed approximation, which Bennett calls "The Embiggening", but diminishing
returns, cost, novelty and energy constraints make pure scaling an incomplete
answer. The paper argues that AGI will require a fusion of search,
approximation, hybrid architectures and meta-approaches that improve sample and
energy efficiency.

## Why This Matters

This is useful for the archive because it separates the AGI conversation into
movable parts. Instead of asking whether a system is or is not AGI, Bennett asks
what kind of adaptation it can perform, what resource constraints it faces, and
which design philosophy it embodies.

That makes the paper a compact companion to work on agents, reasoning systems
and AI memory. It reminds us that an impressive model can still be brittle if it
requires enormous examples and energy, and that generality may come from
architecture, embodiment and delegation as much as from scale.

## Caveats and Limitations

The paper is a survey and position piece, not a direct empirical comparison. Its
categories are useful because they are vivid, but they compress a lot of
different research traditions into a few buckets. The artificial-scientist
definition is also demanding and still leaves measurement questions open: what
counts as a useful experiment, and who decides whether a system has adapted well
enough?

The style is intentionally provocative. That makes it readable and memorable,
but readers should separate the framing from the evidential status of each
claim.

## Key Takeaways

- Bennett defines intelligence as adaptation under limited resources.
- AGI is framed as an artificial scientist rather than merely a human-level task
  performer.
- Search, approximation and hybrids are treated as core tools for adaptive
  systems.
- Scale-maxing has dominated recent progress, but sample and energy efficiency
  are becoming central bottlenecks.
- The paper argues that AGI will require a fusion of tools and meta-approaches,
  not just larger approximators.

## Source

- URL: [https://arxiv.org/abs/2503.23923](https://arxiv.org/abs/2503.23923)
- Local full text: `/home/marco/Downloads/2503.23923v2.pdf`
