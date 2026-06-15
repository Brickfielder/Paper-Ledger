---
title: "SkillOpt: Executive Strategy for Self-Evolving Agent Skills"
summary: >-
  SkillOpt treats a natural-language agent skill as trainable external state
  while keeping the target model fixed. A separate optimizer model examines
  scored trajectories and proposes bounded additions, deletions, or
  replacements to a skill document. Candidate edits are accepted only when they
  improve a held-out validation split; rejected edits become feedback for later
  rounds. Across six benchmarks, seven target models, and direct-chat, Codex,
  and Claude Code harnesses, the authors report SkillOpt as best or tied-best in
  all 52 evaluated model-benchmark-harness cells. On GPT-5.5, average gains over
  no skill were 23.5 percentage points in direct chat, 24.8 in Codex, and 19.1
  in Claude Code.
whyItMatters: >-
  The paper turns reusable instruction documents into an explicit optimization
  target rather than a hand-written accessory. It offers a practical form of
  domain adaptation for closed models: optimized skills remain short,
  inspectable, portable across related models and harnesses, and add no extra
  model calls at deployment.
limitations: >-
  SkillOpt depends on reliable scored trajectories and held-out evaluation, so
  it is easiest to apply to tasks with exact-match graders, executable checks,
  or strong automatic verifiers. Optimization itself requires extra rollouts
  and a capable optimizer model. The experiments cover a selected set of
  benchmarks and model versions, and optimized procedural heuristics may not
  transfer safely to substantially different tasks or open-ended domains.
authors:
  - Yifan Yang
  - Ziyang Gong
  - Weiquan Huang
  - Qihao Yang
  - Ziwei Zhou
  - Zisu Huang
  - Yan Li
  - Xuemei Gao
  - Qi Dai
  - Bei Liu
  - Kai Qiu
  - Yuqing Yang
  - Dongdong Chen
  - Xue Yang
  - Chong Luo
theme: "AI Agents, Reasoning & Machine Cognition"
sourceUrl: https://arxiv.org/html/2605.23904v2
sourceHost: arxiv.org
doi: 10.48550/arXiv.2605.23904
year: 2026
journal: arXiv
sourceContext: fulltext
capturedAt: '2026-06-15T07:38:23+01:00'
draft: false
---
## Summary

SkillOpt is a method for improving an AI agent by optimizing a reusable
natural-language skill document rather than changing the model's weights. The
target model remains frozen. A separate optimizer model reviews successful and
failed task trajectories and proposes structured additions, deletions, or
replacements to the skill.

The method borrows controls from conventional optimization. A textual learning
rate limits the size of each revision. Rollouts are grouped into batches and
reflection minibatches. Candidate changes are evaluated on a held-out selection
split and accepted only when the score strictly improves. Rejected edits are
stored as negative feedback, while a slower epoch-level update preserves useful
directions across rounds.

The final deployed artifact is a compact `best_skill.md`, typically around
300-2,000 tokens and assembled through only one to four accepted revisions. The
optimization process uses additional model calls, but deployment does not:
the target agent simply receives the optimized skill as part of its normal
instructions.

The experiments span six benchmarks involving factual search, spreadsheets,
office documents, visual document reasoning, mathematics, and embodied
decision-making. Seven target models and three execution settings are included:
direct chat, a Codex agent loop, and Claude Code.

The authors report that SkillOpt was best or tied-best in all 52 evaluated
model-benchmark-harness combinations. For GPT-5.5, the six-benchmark direct-chat
average rose from 58.8 without a skill to 82.3 with SkillOpt. Gains were also
reported inside Codex and Claude Code. Comparisons included human-written and
one-shot generated skills, trajectory distillation, prompt optimizers, and an
evolutionary skill baseline.

Transfer tests suggest that some learned procedures remain useful across model
sizes, execution harnesses, and a related mathematics benchmark. Ablations
support the role of bounded edits, held-out gating, rejected-edit feedback, and
the slow update in preventing unstable or harmful revisions.

## Why This Matters

The paper presents skills as a lightweight domain-adaptation layer. This is
especially relevant where model fine-tuning is unavailable, costly, or
undesirable. Unlike hidden weight changes, the optimized artifact can be read,
audited, versioned, and reused.

The strongest practical idea is not simply automated prompt rewriting. It is
the use of execution evidence, constrained edits, and independent validation to
decide whether a procedural instruction should survive. That gives skill
development a more reproducible structure.

## Caveats and Limitations

SkillOpt requires trustworthy feedback. Exact-match tasks, executable outputs,
and automated verifiers fit naturally; subjective or open-ended work requires
human judgement or model-based evaluation that may itself be noisy or biased.

Training a skill consumes additional rollouts and calls to a strong optimizer
model. The cost can be amortized when a skill is reused frequently, but may be
poor value for one-off tasks. Optimizing one compact skill may also be
insufficient for domains containing many unrelated workflows.

The headline result is broad within the selected evaluation matrix but remains
a benchmark result from an arXiv preprint. Transfer was tested across related
settings, not arbitrary real-world deployments. A skill may encode assumptions
from its training distribution, so substantial changes in model, harness,
tools, or task should trigger fresh validation.

## Key Takeaways

- SkillOpt optimizes a text skill while leaving the task model unchanged.
- Bounded edits and held-out acceptance make revision more controlled.
- Rejected edits are retained as useful negative feedback.
- The reported benchmark gains were consistent across several models and harnesses.
- Final skills were compact and sometimes transferred to related settings.

## Source

- DOI: [10.48550/arXiv.2605.23904](https://doi.org/10.48550/arXiv.2605.23904)
- URL: [https://arxiv.org/html/2605.23904v2](https://arxiv.org/html/2605.23904v2)
