---
title: "How AI Agents Reshape Knowledge Work: Autonomy, Efficiency, and Scope"
summary: >-
  This arXiv paper uses three months of production data from Perplexity Search
  and Perplexity Computer to examine how autonomous agents change knowledge
  work. In 10,000 matched session pairs with near-identical opening queries,
  Computer carried out about 26 minutes of autonomous execution per session,
  compared with 33 seconds for Search. Follow-up interactions shifted away from
  detailed execution instructions and toward verification, refinement, and
  extension. The authors estimate that matched tasks took 36 minutes in a
  Computer-plus-human workflow versus 269 minutes with a Search-assisted human,
  although these estimates depend on assumptions about human-equivalent tool
  time. Computer queries also crossed occupational boundaries more often and
  bundled more interdependent subtasks.
whyItMatters: >-
  The study suggests that the important change from chat assistants to agents is
  not only faster completion of existing tasks. Autonomous execution may alter
  which tasks people attempt, how they divide work with AI, and whether work
  previously requiring several specialist roles can be coordinated by one
  person. It provides unusually large-scale field evidence, while also showing
  why product telemetry should not be mistaken for a general estimate of
  economy-wide productivity.
limitations: >-
  The analysis covers an early three-month adoption period among Perplexity
  users, including many paying subscribers and power users. Matched-query
  estimates apply only where Computer tasks had close Search equivalents.
  Sessions are imperfect proxies for tasks, dissatisfaction and task categories
  are inferred partly with language models, and the absolute time and cost
  estimates rely on assumed human-equivalent execution times. The authors are
  affiliated with Perplexity, and activity outside its products is not observed.
authors:
  - Jeremy Yang
  - Kate Zyskowski
  - Noah Yonack
  - Jerry Ma
theme: "AI Agents, Reasoning & Machine Cognition"
sourceUrl: https://arxiv.org/abs/2606.07489
sourceHost: arxiv.org
doi: 10.48550/arXiv.2606.07489
year: 2026
journal: arXiv
sourceContext: fulltext
capturedAt: '2026-06-15T07:38:23+01:00'
draft: false
---
## Summary

This paper studies the transition from conversational AI to autonomous agents
using production data from Perplexity. It compares Perplexity Search, which
mainly returns synthesized answers, with Perplexity Computer, which can plan and
execute longer tasks across tools and produce finished artifacts.

The authors frame agents as having a higher initial delegation and verification
cost but a lower marginal cost for each additional execution step. This predicts
that agents should make longer and more valuable tasks affordable, potentially
expanding the range of work people choose to attempt.

The central empirical comparison uses 10,000 pairs of sessions from the same
users whose initial queries were almost identical. Computer spent an average of
about 26 minutes autonomously planning and executing each task, whereas Search
spent about 33 seconds producing its response. In multi-turn sessions, Search
users more often supplied further implementation instructions. Computer users
more often checked, refined, or extended an already executed result.

The next user message was also used as an indirect dissatisfaction signal.
Medium-to-high dissatisfaction occurred in 1.3% of matched Computer queries and
2.9% of Search queries. This is compatible with better perceived output quality,
although it is not a direct blinded assessment of the completed work.

To estimate efficiency, the authors map Computer tool calls to estimated
human-equivalent task times and add supervision time. Under this model, matched
tasks required an average of 36 minutes with Computer plus human oversight,
compared with 269 minutes for a human using Search. Estimated time and monetary
cost fell by 87% and 94%, respectively. Sensitivity analyses and interviews
supported the broad direction of the result, but the exact magnitudes remain
model-dependent.

The scope analysis may be the more consequential finding. Compared with Search,
Computer queries were more likely to cross occupational domains, draw on wider
expertise, require higher-order cognition, and combine several dependent
subtasks. Some work activities appeared in Computer usage but were essentially
absent from Search sessions by the same users.

## Why This Matters

The study moves beyond benchmark performance to examine agents operating in
real workflows. Its main proposition is that autonomy changes the user's role
from step-by-step operator to supervisor. The benefit may therefore include not
only productivity gains but also a change in task selection and job scope.

This matters for research on AI and work because faster performance on a fixed
task is only one possible effect. If agents reduce execution and coordination
costs, individuals may attempt projects outside their usual expertise or combine
work that previously required several roles.

## Caveats and Limitations

The study observes an early, selected user population during the first three
months of Computer availability. Results may change as the product and user base
mature. The close-query matching strategy improves comparability but necessarily
excludes many novel or unusually complex Computer tasks.

Sessions do not map perfectly onto distinct jobs, and several important measures
depend on language-model classification. Most importantly, the estimated
completion times and costs are not directly timed human-control experiments.
They depend on assumptions about how long people would take to reproduce tool
actions, so the absolute savings should be treated as approximate.

The evidence comes from one company's ecosystem and several authors are
Perplexity employees. The analysis does not observe work performed outside the
products or establish how these task-level patterns translate into employment,
organizational structure, or economy-wide productivity.

## Key Takeaways

- Autonomous execution replaced much of the step-by-step implementation loop.
- Matched Computer sessions involved substantially more machine working time.
- Users shifted toward checking, refining, and extending completed work.
- Estimated completion time and cost fell sharply, but depend on modelling assumptions.
- Agents appeared to expand the occupational breadth and complexity of attempted tasks.

## Source

- DOI: [10.48550/arXiv.2606.07489](https://doi.org/10.48550/arXiv.2606.07489)
- URL: [https://arxiv.org/abs/2606.07489](https://arxiv.org/abs/2606.07489)
