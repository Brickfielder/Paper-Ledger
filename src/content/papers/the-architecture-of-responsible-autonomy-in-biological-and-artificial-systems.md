---
title: The Architecture of Responsible Autonomy in Biological and Artificial Systems
summary: >-
  Paul Verschure proposes Distributed Adaptive Control theory of volition and
  agency (DACva), a model of how an agent can move from reflexive responses to
  actions it can generate, evaluate, govern, sustain over time, and experience
  as its own. The framework defines six capacities: active decoupling from
  immediate input; endogenous drive based on the agent's own needs; leeway to
  generate alternatives; normative self-governance; diachronic integrity across
  time; and experiential ownership of action. The proposed controller is a
  compression-expansion-selection-projection (CESP) cascade embedded in a
  five-layer architecture from bodily regulation to reflective control. The
  paper specifies a mathematical formalism and candidate neurobiological
  substrates for these capacities, then derives ESRA, the Evaluation Suite
  for Responsible Autonomy. ESRA would test a biological or artificial system
  by perturbing its internal mechanisms and checking whether the predicted
  changes in those mechanisms cause corresponding changes in behaviour.
  Behaviour that merely looks autonomous would not count as evidence. A
  companion protocol, ESRA-S, evaluates whether AI systems remain governable.
  This is a theoretical framework and proposed assessment programme: the
  complete ESRA profile has not yet been applied to a system, and DACva has
  not yet been built to the full specification described here.
whyItMatters: >-
  The paper turns a broad debate about free will and machine agency into
  specific, testable claims about internal control. Its distinction between
  observing convincing behaviour and perturbing the mechanisms that should
  produce it is relevant to AI evaluation, cognitive neuroscience, and
  responsibility in human-AI systems.
limitations: >-
  DACva and ESRA remain a research programme rather than a validated general
  test. The full profile has not been run on any system, and the architecture
  has not been implemented to this specification. The mappings from formal
  capacities to brain systems are hypotheses, and access to internal
  mediators may be unavailable in proprietary AI. ESRA assesses whether
  capacities are present, not whether the values guiding them were acquired
  legitimately; the paper also explicitly does not settle moral desert or
  legal liability. The framework is ambitious and detailed, so its
  assumptions, measures, and falsification criteria need independent
  operationalization and testing.
authors:
  - Paul F. M. J. Verschure
sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13750414/'
sourceHost: pmc.ncbi.nlm.nih.gov
doi: 10.1098/rstb.2025.0156
year: 2026
journal: Philosophical Transactions of the Royal Society B
sourceContext: fulltext
capturedAt: '2026-11-28T00:00:00.000Z'
draft: false
---
## Summary
This article develops the **Distributed Adaptive Control theory of volition and agency (DACva)**. It treats free will as an organization of control rather than as an uncaused event: an action is more autonomous, in the paper's account, when it emerges through the agent's own mechanisms for generating, selecting, and committing to alternatives.

DACva sets out six capacities that together define what it calls **Responsible Autonomy**:

1. **Active decoupling:** the agent can interrupt an immediate stimulus-response link and act on an internal model.
2. **Endogenous drive:** choices are related to the agent's own regulated needs, rather than only to externally supplied rewards.
3. **Leeway:** the agent can generate and compare more than one possible course of action.
4. **Normative self-governance:** social norms and the agent's own standards can shape or block a candidate action.
5. **Diachronic integrity:** the agent can maintain a chosen course across time while keeping its modelling and deliberation bounded.
6. **Experiential ownership:** the system attributes an action to itself and can distinguish authorship from mere efficacy.

These capacities are placed in a five-layer control architecture—somatic, reactive, adaptive, contextual, and reflective—interacting with representations of the world, the self, and action. The layers are coordinated by the **compression-expansion-selection-projection (CESP) cascade**: the system compresses experience into an internal model, expands that model into candidate trajectories, selects one, and projects or commits to it. The paper gives a 12-equation formalization and proposes biological implementations for components of the architecture, drawing on mechanisms such as memory, predictive control, motivational regulation, and distributed error monitoring.

The paper then proposes the **Evaluation Suite for Responsible Autonomy (ESRA)**. Rather than infer agency from a system's fluent answers or successful task performance, ESRA would perturb the internal mediators that a system claims to use and test whether behaviour changes in the predicted way. A system that behaves as if it has a capacity but lacks the expected causal mechanism would be classified as mimicking it. The protocol is intended to allow both white-box tests, where internal parameters can be directly manipulated, and more limited black-box tests using behavioural interventions. The related **ESRA-S** assesses safety and governability, including whether a system can be stopped and audited.

The paper's broader claim is that this approach could connect neuroscience, artificial-agent evaluation, and AI governance. It reframes freedom as a profile across the six capacities, with both too little and too much of a capacity potentially indicating dysfunction. It does not claim that current AI systems have responsible autonomy: the author states that no system has yet undergone the full ESRA profile and that the architecture has not yet been built to this specification.

## Why This Matters
Many evaluations measure what a system does from the outside. DACva argues that claims about agency require evidence about how actions are produced: the relevant internal processes should be measurable, manipulable, and causally linked to behaviour. This is a useful challenge for AI evaluations that rely on self-reports or surface performance, and it may also help organize questions about human volition, motivation, and action ownership.

The framework also separates two questions that are often blended together: whether a system has the capacities associated with autonomy, and whether it is safe or governable. ESRA is proposed for the first question; ESRA-S addresses constraints on deployment. The distinction could make debates about machine agency more concrete, provided the proposed measures prove workable.

## Caveats and Limitations
This is a theoretical article that proposes an architecture and a testing programme; it does not report a completed validation of the full ESRA suite. The paper explicitly says no system has been assessed on the full six-capacity profile and that the architecture has not yet been implemented to the stated specification. Its proposed neural substrates and quantitative measures therefore need empirical tests, independent replication, and comparison with alternative models.

The author discusses concerns about model complexity, circularity, and falsifiability, and outlines predictions that could count against DACva. Those proposed tests remain future work. Black-box behavioural proxies would also provide weaker evidence than direct access to internal mediators, while many proprietary AI systems do not expose the required structure. Finally, the paper distinguishes its capacity-based account from questions of moral desert and legal liability, which it does not resolve; passing a capacity test would not establish that an agent's values were acquired without manipulation.

## Key Takeaways
- DACva defines Responsible Autonomy through six capacities spanning alternatives, motivation, norms, continuity, and ownership.
- The CESP cascade is the proposed mechanism that generates, compares, selects, and commits to possible actions.
- ESRA is a proposal for perturbation-based testing of internal mechanisms, intended to distinguish causal competence from behavioural imitation.
- ESRA-S separately considers whether an AI system remains safe and governable.
- The framework is ambitious and potentially testable, but its complete assessment suite has not yet been validated or applied to a system.

## Source
- Full text: [PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC13750414/).
- Published version: [Philosophical Transactions of the Royal Society B](https://doi.org/10.1098/rstb.2025.0156).
- Related Part 1: [The six capacities of responsible autonomy](https://doi.org/10.1098/rstb.2026.0001).
