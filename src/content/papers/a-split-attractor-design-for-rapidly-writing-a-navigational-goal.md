---
title: "A split attractor design for rapidly writing a navigational goal"
summary: >-
  Lanz and colleagues study how a fly navigation circuit can switch between following current heading and retaining a goal heading. In Drosophila, hΔK and PFG neuron populations form a recurrent ring network in the fan-shaped body. PFG activity receives compass input; hΔK activity is recurrent and persistent. Whole-cell recordings showed that persistent hΔK activity depends on recurrent signalling, with slow excitation and fast inhibition from synaptic partners. During goal-directed runs, odour suppresses inhibitory input to hΔK; during turns, inhibition rises and hΔK becomes uncoupled from PFG. A connectome-informed model shows how this disinhibition can gate recurrent coupling: when hΔK is inhibited, PFG tracks changing compass input; when inhibition is reduced, recurrence locks in the current heading as a persistent bump. The model also predicts that slow recurrent excitation makes persistence more stable and tuneable across a wider range of excitation and inhibition strengths than fast excitation. Imaging of inhibitory tangential neurons FB5V and FB6M during navigation showed activity patterns consistent with the proposed gate. The authors present disinhibition of a split recurrent network as a circuit mechanism for rapidly storing an ongoing sensory estimate.
whyItMatters: >-
  The paper connects attractor-network theory to identified cell populations and sensory behaviour. It offers a possible solution to a common circuit problem: recurrent activity can keep a goal representation stable, but the circuit must also be able to update or release it quickly. Separating the source of heading information (PFG) from inhibitory control over recurrent persistence (hΔK) provides a simple way to switch between tracking and storing a signal.
limitations: >-
  The proposed gating mechanism is supported by physiology, behavioural imaging and modelling, but the full causal sequence has not been demonstrated by selectively manipulating the identified inhibitory inputs while measuring goal-memory switching. The computational model is a simplified representation of the circuit, with fitted ring connectivity and a small number of populations and parameters; it does not capture the full fly navigation network or all sources of feedback. The findings concern a specific Drosophila navigation circuit and do not establish that the same mechanism underlies human working memory. The paper demonstrates a plausible circuit design and testable mechanism, rather than a general account of memory.
authors:
  - Aaron J. Lanz
  - Nicholas D. Kathman
  - Emily Hao
  - Bard Ermentrout
  - Katherine I. Nagel
sourceUrl: "https://www.nature.com/articles/s41586-026-11144-9"
sourceHost: "nature.com"
doi: "10.1038/s41586-026-11144-9"
year: 2026
journal: "Nature"
sourceContext: fulltext
capturedAt: "2026-11-03T08:00:00+00:00"
draft: false
---

## Summary

Working memory needs both stability and flexibility: a neural pattern must persist long enough to guide behaviour, yet be updated or switched off when circumstances change. This paper investigates that problem in the navigation circuit of *Drosophila*. The authors focus on two populations in the fan-shaped body, hΔK and PFG neurons, which form a recurrent ring-like network. PFG neurons receive input from the fly's compass system, while hΔK participates in recurrent activity that can sustain a heading-related signal.

The researchers combined whole-cell recordings, connectome analysis, calcium imaging during olfactory navigation, and computational modelling. They found that hΔK neurons can maintain persistent activity after stimulation, and that this persistence depends on recurrent signalling: blocking transmission from hΔK neurons abolished the persistent response. Recordings also showed that hΔK receives slow recurrent excitation and fast inhibition from tangential partners.

The different time courses matter. In the model, slow recurrent excitation allowed persistent activity across a broad range of excitation and inhibition strengths, and small changes in those strengths could tune how long the activity lasted. With fast excitation, persistent responses occurred only within a much narrower range of parameter settings. Thus slower excitation may help make a recurrent memory state both robust and adjustable.

The activity of hΔK and PFG also changes with behaviour. During odour-guided runs, both populations show similar persistent activity. During turns and rest, their activity diverges: PFG can follow the compass signal, while hΔK activity is suppressed. The authors propose that inhibition controls whether the two populations operate as a coupled attractor or become functionally separated.

Their model illustrates the proposed switch. When hΔK is strongly inhibited, recurrent coupling is weakened and PFG follows changing compass input. When hΔK is disinhibited, recurrent interactions couple the populations and stabilize the current compass direction as a persistent activity “bump”—a stored heading. In this way, reducing inhibition can rapidly write an ongoing measurement into a recurrent circuit.

The authors tested whether inhibitory inputs show the activity expected under this account. Imaging of FB5V and FB6M tangential neurons during olfactory navigation showed patterns consistent with a gate: FB5V activity was suppressed during odour and goal-directed runs and increased when the fly deviated from its goal. This supports the idea that inhibitory input helps control when the hΔK–PFG network stores a heading and when it remains free to track changing input.

The paper's central proposal is a “split attractor”: one circuit component carries information about heading, while inhibition onto another component controls when recurrent interactions lock that information into a persistent state. The result is a model for how a navigation circuit could switch rapidly between following a signal and remembering it.

## Why This Matters

Attractor networks are often used to explain persistent activity, but persistence alone does not explain how a circuit can rapidly start, stop or update a memory. This study proposes a circuit-level mechanism for that flexibility: disinhibition lets a recurrent network move from a decoupled, input-following state into a coupled, memory-like state.

The work is particularly useful because it links the model to specific neuron populations, measured synaptic dynamics and activity during behaviour. It suggests how slow excitation may support stable yet tuneable persistence, while inhibition controls the timing of memory formation.

## Caveats and Limitations

- The gating account is supported by recordings, activity imaging and modelling, but a selective causal test of the inhibitory inputs during goal-memory switching remains needed.
- The model simplifies the circuit into hΔK and PFG populations plus inhibitory input. Its connectivity and parameters are derived from anatomical data and fitted descriptions, not a complete simulation of the entire navigation system.
- Neural activity patterns provide evidence for a stored heading signal, but they do not by themselves establish that every aspect of the fly's navigational goal is represented by this circuit.
- This is a study of a specific fruit-fly navigation circuit. It provides a candidate mechanism relevant to attractor theories of working memory, but does not demonstrate that human working memory uses the same circuit design.
- Slow recurrent excitation and inhibitory gating are proposed as contributors to the dynamics; other inputs and network interactions may also affect persistence and switching.

## Key Takeaways

- hΔK and PFG neurons form a recurrent circuit associated with persistent heading-related activity during goal-directed navigation.
- Persistent hΔK activity depends on recurrent signalling and combines slow excitation with fast inhibition.
- In the model, slow excitation makes persistent activity more robust and its duration easier to tune.
- Inhibiting hΔK can leave PFG free to track the compass signal; disinhibiting hΔK can couple the recurrent network and preserve the current heading.
- The observed activity of inhibitory tangential inputs is consistent with this proposed gate, which remains a mechanistic model requiring further causal tests.

## Source

- Published in *Nature* on 7 October 2026.
- DOI: [10.1038/s41586-026-11144-9](https://doi.org/10.1038/s41586-026-11144-9)
- [Read the full article](https://www.nature.com/articles/s41586-026-11144-9)
