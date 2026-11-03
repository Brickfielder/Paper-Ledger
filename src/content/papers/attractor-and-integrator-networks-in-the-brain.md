---
title: "Attractor and integrator networks in the brain"
summary: >-
  Khona and Fiete review how recurrent neural circuits can create stable activity patterns and integrate noisy or changing inputs over time. An attractor is a set of neural states that the system tends to return to; an integrator is a circuit whose state accumulates input, such as movement or evidence. The authors explain how recurrent excitation, inhibition and network symmetry can generate discrete or continuous attractors, and how these dynamics could support working memory, error correction, sensory integration, decisions and sequences. They assess evidence across brain systems, emphasizing especially strong tests in the oculomotor integrator, mammalian head-direction circuit and grid-cell modules. In these systems, population activity occupies low-dimensional manifolds, recovers after perturbations, and remains structured across changes in cues, environments or behavioural state. Other candidate systems—including some cortical and hippocampal examples—have less complete evidence or may combine intrinsic dynamics with distributed inputs. The review also describes how modular attractors could be reused and recombined to balance robust representations with flexibility and high capacity.
whyItMatters: >-
  This review offers a useful framework for thinking about cognition as population-level dynamics rather than isolated neurons or fixed cognitive boxes. It explains how simple, individually forgetful units can collectively sustain memories, correct noise and accumulate information, and it sets out concrete tests that distinguish an attractor from activity that merely looks persistent. Its account of modular reuse also links circuit dynamics to flexible computation and learning.
limitations: >-
  This is a conceptual review, not a new experiment or a single unified model. The strength of evidence varies across circuits: some satisfy multiple independent predictions of attractor models, while other examples remain hypotheses requiring stronger perturbation, invariance or connectivity tests. Neural systems are open and interact with the body and environment, so simplified autonomous, firing-rate models can omit important inputs, cell states and distributed circuitry. Attractor dynamics are one explanatory framework; their presence in a population does not by itself establish a particular cognitive function, and the review leaves key biological questions open, including how continuous symmetries are learned and maintained.
authors:
  - Mikail Khona
  - Ila R. Fiete
sourceUrl: "https://mcgovern.mit.edu/wp-content/uploads/2024/05/s41583-022-00642-0.pdf"
sourceHost: "mcgovern.mit.edu"
doi: "10.1038/s41583-022-00642-0"
year: 2022
journal: "Nature Reviews Neuroscience"
sourceContext: fulltext
capturedAt: "2026-11-03T09:00:00+00:00"
draft: false
---

## Summary

This review asks how brains build useful, long-lasting activity patterns from neurons whose own activity would otherwise fade quickly. Its answer is that neurons can work together in recurrent networks: feedback from one part of the circuit to another can stabilize a population pattern or make the network’s state accumulate incoming signals.

An **attractor** is a state, or connected family of states, that the system tends to approach and remain near. Imagine a ball rolling into a valley: small pushes move it around, but it tends to roll back down. In a neural circuit, the “valley” is a pattern of population activity. A discrete attractor could represent one of a set of alternatives or memories. A continuous attractor can represent a variable such as heading direction, eye position or location: different points along the attractor correspond to different values of that variable.

An **integrator** is a circuit that accumulates input over time. If a movement signal briefly changes the system’s state, the new state can persist after the signal ends; further movement signals then shift it again. Integrators are often modelled as line or ring attractors, though the concepts are not identical: an attractor describes the stable state space, while integration describes how inputs move the system through it.

The review describes several ways recurrent circuits can create these dynamics. Excitation can reinforce activity among selected neurons, while inhibition limits activity or competition between groups. In a Hopfield-style network, learned patterns become stable states that can be recovered from incomplete or noisy cues. In continuous attractors, similar connectivity across a ring or sheet of neurons allows a stable activity “bump” to occupy many possible positions. Integrators can also arise when network feedback counteracts the natural decay of neural activity, although that balance may require fine tuning.

These dynamics can support multiple computations. Stable attractors can preserve information for working memory, restore a pattern after noise or perturbation, and make decisions by drawing activity toward one option. Continuous attractors can integrate sensory or movement cues. Low-dimensional limit cycles can help generate reliable sequences. Attractor networks can correct disturbances perpendicular to the represented manifold, but noise along the manifold can still cause gradual drift—for example, timing variability in a generated sequence.

The authors describe a set of tests that help distinguish a genuine attractor from neural activity that merely persists. The population should occupy a low-dimensional set of states; after a perturbation, activity should flow back towards it; the relationships among neurons should remain stable when tuned external input is removed or conditions change; and an integrator should map equal changes in its internal state to equal changes in the represented external variable. Connectivity patterns that match the model provide additional support.

The strongest examples reviewed include the **oculomotor integrator**, which helps maintain eye position after a rapid eye movement and can also integrate head-motion signals; the mammalian **head-direction circuit**, whose population states form a ring corresponding to an internal compass; and **grid-cell modules**, whose activity is organized on a low-dimensional, torus-shaped state space. These examples are supported by combinations of population recordings, perturbation responses, invariance across conditions, and in some cases anatomical connectivity. The review also discusses cortical up/down states, perceptual bistability, olfactory circuits, fly navigation and motor-cortical activity, while noting that evidence is not equally complete in every system.

A central challenge is that attractors appear rigid: the same internal state relationships persist across time or context. How can a brain built from stable circuits remain flexible? The authors suggest that attractor modules can be reused and recombined. A small set of stable modules could support a much larger number of useful combinations, allowing robust memory and classification without requiring one enormous network to store every possible state separately.

## Why This Matters

The review provides a bridge between mathematical descriptions of neural population activity and familiar functions such as remembering, integrating evidence, tracking position and making decisions. It makes clear that persistence need not come from a single neuron acting as a permanent store: it can emerge from interactions across a population.

Its proposed tests are especially helpful. A trace that lasts is not enough to prove an attractor. Stronger evidence comes from showing that activity lies on a constrained low-dimensional manifold, returns after perturbation, and preserves its organization across changed inputs or behavioural conditions. This gives researchers a way to compare candidate mechanisms instead of relying on visual resemblance or persistence alone.

The discussion of modular reuse is also relevant to flexible cognition. Stable subcircuits could provide reliable building blocks, while combinations of their states support many different representations and actions.

## Caveats and Open Questions

- The paper is a review that synthesizes theoretical and experimental literature; it does not report a new experiment or provide a single model that explains all the circuits discussed.
- Evidence varies by brain system. The review identifies particularly strong support for certain integrator and spatial-navigation circuits, but treats several cortical, hippocampal and motor examples as incomplete or unresolved.
- Brain circuits are not truly isolated. Inputs from other brain regions, the body and the environment can shape apparent dynamics, making it difficult to identify a self-contained system or establish when it is effectively autonomous.
- Many models simplify neurons to firing rates and omit molecular, cellular and network-level variables. These models can be useful, but their assumptions limit what can be inferred about biological implementation.
- Attractor dynamics can help explain how activity is organized, but finding an attractor-like population pattern does not alone prove what the brain uses it to compute.
- The authors identify open questions about how continuous symmetry is learned and maintained, how flexible computation emerges from rigid modules, and how distributed circuits contribute to more complex behaviour.

## Key Takeaways

- Attractors are stable patterns or manifolds in population activity; integrators accumulate inputs and can move a network along such a manifold.
- Recurrent excitation and inhibition can let a population preserve, restore or update a signal even when individual neurons are transient.
- Strong tests include low-dimensional structure, recovery after perturbation, invariance across conditions and appropriate mapping to the external variable.
- The review finds particularly compelling evidence in the oculomotor integrator, head-direction circuit and grid-cell modules, while emphasizing that support is less complete in other systems.
- Stable attractor modules may be recombined to support flexible, high-capacity computation.
- Some drift, model simplification and unanswered biological implementation questions remain; attractors are a powerful framework, not a complete explanation of cognition.

## Source

- Review published in *Nature Reviews Neuroscience*, Volume 23, pages 744–766 (December 2022).
- DOI: [10.1038/s41583-022-00642-0](https://doi.org/10.1038/s41583-022-00642-0)
- [Read the linked full-text PDF](https://mcgovern.mit.edu/wp-content/uploads/2024/05/s41583-022-00642-0.pdf)
- [Publisher article](https://www.nature.com/articles/s41583-022-00642-0)
