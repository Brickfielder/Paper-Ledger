---
title: "Noninvasive decoding of typed sentences from MEG recordings"
summary: >-
  Fenton, Lee and colleagues introduce Brain2Qwerty, a noninvasive brain-to-text
  system that decodes copy-typed sentences from MEG recordings. Forty-two
  healthy participants typed around 10,000 characters each while their brain
  activity was recorded with 306-channel MEG. A Transformer-based model and
  language-model decoding recovered sentence text from neural activity, with
  offline decoding reaching about 32% character error rate in a 200,000-character
  vocabulary and streaming decoding reaching about 67% character error rate in a
  1,000-character vocabulary. Motor-cortex channels carried most of the useful
  signal.
whyItMatters: >-
  The paper shows that useful sentence-level typing signals can be decoded from
  noninvasive MEG, not only from implanted electrodes. It is an early step toward
  noninvasive communication BCIs that exploit ordinary typing behavior, motor
  planning and language context together.
limitations: >-
  The study used healthy participants performing a copy-typing task in a MEG
  scanner, so it does not yet show practical communication for people with
  paralysis or natural self-generated text. Streaming error rates remain high,
  the system depends on large MEG hardware and language-model context, and
  performance may change substantially in clinical populations.
authors:
  - Sarah Fenton
  - Hugo W. Lee
  - Ruben Dratwa
  - Daphne Carthy
  - Michael Ellis
  - Jimi Bowden
  - Maryam Shanechi
  - Alex C. Leuthardt
  - Edward F. Chang
  - Nick Ramsey
  - Christopher Holdgraf
  - Jean-Remi King
theme: "Neurotechnology, Intervention & Preservation"
sourceUrl: https://www.nature.com/articles/s41593-026-02303-2
sourceHost: nature.com
doi: 10.1038/s41593-026-02303-2
year: 2026
journal: Nature Neuroscience
sourceContext: fulltext
capturedAt: '2026-06-30T07:33:07+01:00'
draft: false
---

## Summary

This paper introduces Brain2Qwerty, a noninvasive decoder that reconstructs
typed sentences from magnetoencephalography recordings. Forty-two healthy
participants copy-typed sentences on a standard keyboard while seated in a
306-channel MEG scanner, producing hundreds of thousands of keypresses for
model training and evaluation.

The system combines a neural encoder for MEG activity with language-model
decoding over sentence context. In offline decoding, where the model can use the
whole MEG recording for a sentence, it reached about 32% character error rate
with a 200,000-character vocabulary. In a more demanding streaming setting, it
emitted text every 500 ms and reached about 67% character error rate with a
1,000-character vocabulary.

## Why This Matters

Most high-performance brain-to-text demonstrations have relied on implanted
electrodes. This study shows that sentence-level typing information can also be
recovered from noninvasive MEG recordings when motor activity and language
context are modeled together. The strongest signals came from motor-cortex
channels, suggesting that the decoder is primarily exploiting neural activity
linked to typing movements and their preparation.

## Caveats and Limitations

The task was copy typing by healthy participants, not free communication by
people with paralysis. The setup also depends on MEG hardware, which is large,
specialized and not yet a practical everyday interface. Streaming performance
remains far from deployment-ready, and language-model context can help the
decoder in ways that may not transfer cleanly to open-ended communication.

## Key Takeaways

- Noninvasive MEG can support sentence-level decoding of typed text.
- Offline decoding reached about 32% character error rate; streaming decoding
  remained much harder at about 67% character error rate.
- Motor-cortex channels carried most of the useful signal.
- The work is a promising noninvasive BCI proof of concept, but not yet a
  practical clinical communication system.

## Source

[Nature Neuroscience](https://www.nature.com/articles/s41593-026-02303-2)
