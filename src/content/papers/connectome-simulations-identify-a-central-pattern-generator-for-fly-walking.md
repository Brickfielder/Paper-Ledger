---
title: "Connectome simulations identify a central pattern generator for fly walking"
summary: >-
  Pugliese and colleagues used dynamic simulations of four Drosophila ventral nerve cord connectomes to identify a candidate central pattern generator (CPG) for walking. They screened descending neurons and found that activating DNg100, a known walking command neuron, reliably produced rhythmic leg motor-neuron activity. A computational pruning procedure isolated a minimal recurrent circuit with two excitatory interneurons (E1 and E2) and inhibitory feedback; the motif was sufficient to generate rhythms and replicated across all six legs and four connectome datasets. A second pathway, DNb08, also produced rhythmic leg movements in simulations and in optogenetic experiments, through a larger circuit sharing E1 and E2. The experiments further confirmed a simulation-derived prediction that stronger DNg100 stimulation increases walking speed and stepping frequency. The findings support a putative network oscillator for fly walking, while showing how connectome dynamics can reveal recurrent circuits that conventional feedforward graph tracing may miss.
whyItMatters: >-
  This study links a detailed wiring diagram to testable motor behaviour. Rather than inferring function from connection paths alone, the authors simulate network dynamics, simplify the circuit while preserving its output, and test selected predictions in living flies. It offers a concrete example of connectome-based modelling generating experimentally useful hypotheses about how rhythmic movements arise.
limitations: >-
  The proposed CPG is supported by simulations and selected optogenetic tests, but the identified core interneurons have not yet been selectively silenced or recorded to establish their causal role in vivo. The model derives synaptic signs from transmitter predictions and weights from synapse counts, and it does not fully represent synaptic conductances, neuromodulation, proprioceptive feedback, body mechanics or the physical environment. Simulated activity did not reproduce the tripod coordination of natural walking, and some muscles were inactive or non-rhythmic. DNb08-driven rhythms were absent in one of the four connectome datasets and produced searching-like movements rather than coordinated walking. The proposed circuit should therefore be treated as a strong, testable model of rhythm generation, not a complete account of locomotion.
authors:
  - Sarah M. Pugliese
  - Grant M. Chou
  - Elliott T. T. Abe
  - Denis Turcu
  - Jackson K. Lancaster
  - John C. Tuthill
  - Bingni W. Brunton
sourceUrl: "https://www.nature.com/articles/s41586-026-11195-y"
sourceHost: "nature.com"
doi: "10.1038/s41586-026-11195-y"
year: 2026
journal: "Nature"
sourceContext: fulltext
capturedAt: "2026-11-01T16:00:00+00:00"
draft: false
---

## Summary

Walking depends on repeated leg movements, but the neural circuit that generates this rhythm has been difficult to identify. Central pattern generators (CPGs) are neural circuits that can produce rhythmic output without needing rhythmic input. Pugliese and colleagues asked whether the connectome of the fly's ventral nerve cord (VNC), together with dynamic simulations, could reveal the cells and synapses that generate leg-motor rhythms.

The team built network models from four Drosophila connectome datasets: male and female adult nerve cords, and male and female central nervous systems. The simulations used the observed synapse counts as connection weights and assigned excitatory or inhibitory signs using neurotransmitter predictions or annotations. They then screened descending neurons that carry signals from the brain into the VNC, activating candidate cells in the simulated network and measuring the rhythmicity of leg motor-neuron activity.

DNg100, already known as a command neuron for walking, emerged as the strongest driver of rhythmic motor activity. Activating it produced rhythms in front-leg motor neurons in all four datasets. The model also predicted that stronger DNg100 input would make the rhythms faster. In optogenetic experiments, increasing stimulation intensity in headless flies increased both forward walking speed and stepping frequency, supporting that prediction.

The researchers next used computational pruning: they removed parts of the simulated network while checking whether rhythmic output remained. This isolated a compact recurrent core with two excitatory interneurons, E1 and E2, and inhibitory feedback. The three-neuron motif was sufficient to produce motor rhythms, and the motif recurred across all six legs and all four connectome datasets. Silencing E1 or E2 in the full simulations abolished rhythmic activity, while more than one inhibitory neuron could provide the feedback. The circuit also generated rhythms in a separate leaky integrate-and-fire spiking model, suggesting that the result was not unique to the original rate-model formulation.

This recurrent motif was unusual among the many similar motifs in the VNC: its connections were especially strong, and the model's dynamics placed its oscillation frequency in the range of fly walking. Because the rhythm depends on a loop of excitation and inhibition, it would be difficult to identify by simply tracing feedforward paths from DNg100 to motor neurons or backwards from motor neurons. The authors argue that dynamic simulation exposed a functional feature that static wiring analysis could miss.

The paper also tested a second descending neuron, DNb08. Simulations predicted that activating it would produce rhythmic leg activity, and optogenetic stimulation confirmed rhythmic movements in headless flies. These movements looked more like leg searching than coordinated forward walking and were more reliably elicited when the legs were unloaded. DNb08 recruited a larger circuit that included two additional excitatory interneurons, E4 and E5, while sharing E1 and E2 with the DNg100 pathway. This points to a shared rhythm-generating core that different descending pathways may recruit for different behaviours.

## Why This Matters

The study demonstrates a productive loop between connectomics, computation and experiment. The wiring diagram constrained a dynamic model; simulation narrowed a large network to a candidate circuit and generated behavioural predictions; optogenetics then tested selected predictions in flies.

The work also suggests that a small recurrent circuit may support more than one rhythmic behaviour, with different descending inputs and additional interneurons shaping the output. It is a useful example of the connectome becoming more than a static map, while remaining clear that the model still needs further experimental testing.

## Caveats and Limitations

- The proposed core CPG has not yet been directly confirmed by selective in-vivo silencing or recording of E1, E2 and the inhibitory neurons. Such tests require more specific genetic tools.
- Connection signs were inferred from neurotransmitter identity and weights from synapse counts. The model does not capture all features of real synaptic transmission, including conductance dynamics and neuromodulatory effects.
- The simulations did not reproduce the tripod coordination pattern across legs seen in natural walking. Proprioceptive feedback, mechanics, sensory load, additional descending pathways or their combination may be needed.
- Some muscles expected to contribute to walking were silent or non-rhythmic in the model, so the simulated motor output is not a full reconstruction of natural gait.
- DNb08-driven rhythms appeared in three of four connectome datasets and produced searching-like movements, not coordinated walking. Its natural behavioural role remains uncertain.
- The experiments validate selected predictions, including DNg100-dependent speed scaling and DNb08-driven rhythmic movement; they do not yet establish that the minimal simulated motif alone is necessary for walking in living flies.

## Key Takeaways

- Dynamic simulations identified DNg100 as a strong driver of rhythmic leg motor activity across four fly connectome datasets.
- Pruning the network revealed a recurrent two-excitatory, inhibitory-feedback motif that could generate rhythms across all six legs.
- Optogenetic experiments supported the prediction that stronger DNg100 activation increases walking speed and stepping frequency.
- DNb08 also drives rhythmic leg movements, through a larger pathway that shares part of the core rhythm-generating circuit.
- The findings support a candidate CPG and illustrate how dynamic connectome models can generate experimentally testable predictions; they do not yet provide a complete model of natural walking.

## Source

- Published in *Nature* on 28 October 2026.
- Version of record DOI: [10.1038/s41586-026-11195-y](https://doi.org/10.1038/s41586-026-11195-y)
- [Read the Nature article](https://www.nature.com/articles/s41586-026-11195-y)
- bioRxiv v2 DOI: [10.1101/2025.09.12.675944](https://doi.org/10.1101/2025.09.12.675944)
- [Read the bioRxiv version](https://www.biorxiv.org/content/10.1101/2025.09.12.675944v2.full)
