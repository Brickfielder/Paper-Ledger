---
title: Plasticity and language in the anaesthetized human hippocampus
summary: >-
  This Nature paper uses intraoperative Neuropixels recordings from the human
  hippocampus to test whether high-level auditory and language processing
  persists under general anaesthesia. In seven patients undergoing anterior
  temporal lobectomy, hippocampal single units and local field potentials were
  recorded while patients heard tone oddball sequences or natural speech from
  podcast episodes. Even under anaesthesia, hippocampal neurons encoded tone
  identity, oddball status and oddball-context interactions. Oddball decoding
  strengthened over roughly 10 minutes, suggesting representational plasticity
  during unconsciousness. In the natural speech condition, single units and LFP
  features carried information about lexical frequency, semantic embeddings,
  semantic categories, part of speech, word surprisal and semantic context from
  nearby words, including upcoming words. The authors interpret this as evidence
  that complex sensory integration, semantic processing and local plasticity can
  persist when conscious awareness is pharmacologically suppressed.
whyItMatters: >-
  The study challenges a clean division between unconscious low-level sensory
  processing and conscious high-level meaning. It suggests that the human
  hippocampus can continue contextual language processing and adaptive auditory
  representation during anaesthesia, with implications for theories of
  consciousness, memory and implicit postoperative recall.
limitations: >-
  The sample is small and clinically specific, involving epilepsy surgery
  patients under propofol-based anaesthesia. The findings may not generalize to
  sleep, coma, other anaesthetic agents or normal wakefulness. The hippocampus
  may also receive preprocessed categorical input from other regions, so the
  study does not show that all language processing is generated locally.
authors:
  - Kalman A. Katlowitz
  - Eric R. Cole
  - Elizabeth A. Mickiewicz
  - Shraddha Shah
  - Melissa Franch
  - Joshua A. Adkinson
  - James L. Belanger
  - Raissa K. Mathura
  - Domokos Meszena
  - Matthew McGinley
  - William Munoz
  - Garrett P. Banks
  - Sydney S. Cash
  - Chih-Wei Hsu
  - Angelique C. Paulk
  - Nicole R. Provenza
  - Andrew J. Watrous
  - Ziv Williams
  - Alica M. Goldman
  - Vaishnav Krishnan
  - Atul Maheshwari
  - Sarah R. Heilbronner
  - Robert Kim
  - Nuttida Rungratsameetaweemana
  - Benjamin Y. Hayden
  - Sameer A. Sheth
theme: "Cognition, Prediction & Mental Experience"
sourceUrl: 'https://www.nature.com/articles/s41586-026-10448-0'
sourceHost: nature.com
doi: 10.1038/s41586-026-10448-0
year: 2026
journal: Nature
sourceContext: fulltext
capturedAt: '2026-05-12T10:38:15+01:00'
draft: false
---
## Summary
This paper asks a sharp question about consciousness: how much high-level processing can the human brain still perform when conscious awareness is suppressed by general anaesthesia?

The authors recorded directly from the human hippocampus using high-density Neuropixels probes during neurosurgery. Seven patients undergoing anterior temporal lobectomy heard either tone oddball sequences or natural speech while under anaesthesia. Across recordings, the team isolated 651 hippocampal units.

The results suggest that the anaesthetized hippocampus is not simply silent or limited to low-level sensory responses. It still showed auditory discrimination, evolving oddball representation, semantic processing and contextual language responses.

## Auditory Oddball Processing
In the oddball task, three patients heard repeated pure tones with occasional deviant tones. Most recorded hippocampal units showed tone-evoked responses. A subset encoded tone identity, oddball identity or interactions between tone and oddball context. Local field potentials also carried tone and oddball information, including gamma-band effects.

The most interesting finding is that oddball representation changed over the session. In oddball-selective units, decoding of oddball status improved across roughly 10 minutes, while tone identity decoding decreased. The authors interpret this as a form of representational plasticity: the neural population gradually reshaped its response to emphasize unexpected events.

A recurrent neural network trained only to discriminate tone identity reproduced oddball-context decoding and the gradual divergence between standard and oddball population vectors. Lesioning analyses suggested that inhibitory recurrent connections were especially important for this population-level representation.

## Language Under Anaesthesia
The language experiment is the bolder part of the paper. Four patients heard 10-20 minutes of podcast audio. Neural responses were aligned to individual word onsets and offsets, with thousands of words per patient.

Hippocampal firing rates related to word frequency and semantic embeddings. Nearly all units showed some semantic category selectivity, and many units distinguished multiple semantic categories. Units also encoded part-of-speech information. Word-level classifiers could decode semantic and syntactic categories above chance.

The authors also tested whether hippocampal responses reflected temporal context. Neural activity corresponded not only to previous words, but also to semantic features of upcoming words. The paper is careful that this does not necessarily prove active prediction in the strong sense; contextualization of current language input can also make future-word information decodable. Still, it shows that language representations in the anaesthetized hippocampus extend beyond immediate acoustic features.

## Why This Matters
The paper complicates simple theories that reserve semantic interpretation, prediction and adaptive representation for conscious processing. Some high-level structure appears to survive anaesthetic-induced loss of consciousness.

It also broadens the role of the hippocampus in language. The hippocampus is usually treated as a memory and contextualization structure rather than part of the core language network. These recordings suggest that it can encode semantic and syntactic features of natural speech in real time, even without conscious report.

The result may help explain why some forms of implicit postoperative recall are possible after anaesthesia. Explicit conscious memory may be compromised, while sensory processing, semantic representation and some plasticity remain partially intact.

## Caveats
- The sample is small and comes from epilepsy surgery patients, so generalization is limited.
- The anaesthetic state studied here may not generalize to sleep, coma or other anaesthetic agents.
- The hippocampus may inherit some categorical or semantic structure from other regions, so the study does not prove that all processing is generated locally.
- The authors did not have enough participants to test language lateralization or dominance.
- Temporally unpredictable tones may have reduced sensitivity to some tone-related effects.

## Bottom Line
This is a striking single-unit human neuroscience paper showing that the anaesthetized hippocampus can still discriminate oddballs, adapt its representations over minutes and encode semantic structure in natural speech. The main takeaway is that unconsciousness under anaesthesia does not abolish all high-level hippocampal processing.

## Source
- DOI: [10.1038/s41586-026-10448-0](https://doi.org/10.1038/s41586-026-10448-0)
- URL: [https://www.nature.com/articles/s41586-026-10448-0](https://www.nature.com/articles/s41586-026-10448-0)
- Full text used: local PDF at `/home/marco/Downloads/s41586-026-10448-0.pdf`
