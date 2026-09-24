---
title: >-
  Drop the Hierarchy and Roles: How Self-Organizing LLM Agents Outperform
  Designed Structures
summary: >-
  This paper reports a large computational study of coordination designs for
  multi-agent LLM systems. The authors compare 8 LLMs, up to 256 agents, and 8
  coordination protocols across more than 20,000 unique configurations and
  25,000 task runs. The central question is whether externally designed
  structures or self-organizing agent behavior produces better group
  performance. The main finding is what the paper calls the endogeneity paradox:
  neither fully centralized control nor fully decentralized autonomy is best.
  Instead, a hybrid Sequential protocol, where agent order is fixed but each
  agent autonomously chooses its role and whether to participate, performs best
  in the reported comparisons. The authors report that this hybrid design
  outperforms centralized coordination and fully autonomous coordination in
  their main experiments. The paper also argues that self-organization is not
  automatic and depends on both a capable foundation model and an appropriate
  coordination protocol. In weaker models, the result reverses and more rigid
  structure can work better than autonomy. The study further claims that
  performance scales sub-linearly as the number of agents increases from 4 to
  256, without a clear loss in quality. The system is reported to show emergent
  behaviors such as new role invention, voluntary self-abstention, and
  spontaneous hierarchy formation. Evaluation is based on an LLM-as-judge setup
  using an independent judge model and several quality-related criteria, along
  with time, cost, and risk measures. The authors note that judge models
  differed across experimental series, so comparisons across series should be
  interpreted cautiously. Additional limitations are that the work is
  computational and benchmark-driven rather than a deployment study, and the
  results may depend on the specific tasks, protocols, and judge-based
  evaluation used here.
whyItMatters: >-
  The paper suggests that the best team structure for LLM agents may be neither
  rigid hierarchy nor total freedom, but a middle ground that gives agents some
  structure while preserving local autonomy. That matters because it points to a
  practical design principle for building multi-agent AI systems that are more
  capable, cheaper, and more adaptable.
limitations: >-
  The evidence comes from simulated task runs with LLM judges, so the findings
  may not transfer cleanly to real-world settings with messier goals, human
  oversight, or safety constraints. The paper also uses different judge models
  across series, which limits how strongly one can compare results across the
  full study. Finally, the reported advantage of the Sequential protocol may
  depend on the particular tasks, models, and protocol definitions tested here.
authors:
  - Victoria Dochkina
sourceUrl: 'https://arxiv.org/pdf/2603.28990'
sourceHost: arxiv.org
year: 2026
sourceContext: fulltext
capturedAt: '2026-09-24T15:08:39.625Z'
draft: false
---
## Summary
This paper reports a large computational study of coordination designs for multi-agent LLM systems. The authors compare 8 LLMs, up to 256 agents, and 8 coordination protocols across more than 20,000 unique configurations and 25,000 task runs. The central question is whether externally designed structures or self-organizing agent behavior produces better group performance. The main finding is what the paper calls the endogeneity paradox: neither fully centralized control nor fully decentralized autonomy is best. Instead, a hybrid Sequential protocol, where agent order is fixed but each agent autonomously chooses its role and whether to participate, performs best in the reported comparisons. The authors report that this hybrid design outperforms centralized coordination and fully autonomous coordination in their main experiments. The paper also argues that self-organization is not automatic and depends on both a capable foundation model and an appropriate coordination protocol. In weaker models, the result reverses and more rigid structure can work better than autonomy. The study further claims that performance scales sub-linearly as the number of agents increases from 4 to 256, without a clear loss in quality. The system is reported to show emergent behaviors such as new role invention, voluntary self-abstention, and spontaneous hierarchy formation. Evaluation is based on an LLM-as-judge setup using an independent judge model and several quality-related criteria, along with time, cost, and risk measures. The authors note that judge models differed across experimental series, so comparisons across series should be interpreted cautiously. Additional limitations are that the work is computational and benchmark-driven rather than a deployment study, and the results may depend on the specific tasks, protocols, and judge-based evaluation used here.
## Why This Matters
The paper suggests that the best team structure for LLM agents may be neither rigid hierarchy nor total freedom, but a middle ground that gives agents some structure while preserving local autonomy. That matters because it points to a practical design principle for building multi-agent AI systems that are more capable, cheaper, and more adaptable.
## Caveats and Limitations
The evidence comes from simulated task runs with LLM judges, so the findings may not transfer cleanly to real-world settings with messier goals, human oversight, or safety constraints. The paper also uses different judge models across series, which limits how strongly one can compare results across the full study. Finally, the reported advantage of the Sequential protocol may depend on the particular tasks, models, and protocol definitions tested here.
## Key Takeaways
- A hybrid coordination design beat both centralized control and fully autonomous coordination.
- Self-organization appeared to require both a strong model and the right protocol.
- Weaker models did not benefit as much from autonomy; rigid structure could be better.
- The system reportedly scaled to 256 agents without obvious quality collapse.
- The evaluation relied on an LLM-as-judge framework, which is useful but not definitive.
## Source
- URL: [https://arxiv.org/pdf/2603.28990](https://arxiv.org/pdf/2603.28990)
