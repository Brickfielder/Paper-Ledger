---
title: The multi-scale geometry of neural encoding
summary: >-
  This paper addresses a basic problem in systems neuroscience: how to describe
  what a neural population encodes, not just for tiny stimulus changes but
  across all stimulus scales. The authors argue that representational geometry
  is a useful framework because it turns stimulus differences into distances
  that reflect neural encoding. They point out that common geometries either
  ignore response variability, depend on a chosen decoder, or focus only on
  local discriminability. To overcome this, they introduce a multi-scale
  representational geometry built from first principles. The key idea is to
  imagine an observer who sees a blurred version of the stimulus and to track
  how neural sensitivity changes as stimulus resolution becomes coarser.
  Integrating this sensitivity across scales yields a metric tensor that defines
  distances in stimulus space. The authors show that this geometry is exactly
  related to mutual information, so it is not tied to any specific decoding
  rule. In this framework, stimulus differences that carry more information are
  stretched, while differences that carry little information are compressed. The
  paper first illustrates the idea with simple tuning-curve examples, showing
  that two neurons can have the same Fisher geometry but different mutual
  information when one is ambiguous across distant stimuli. It then shows that
  the multi-scale geometry captures this difference, whereas the Fisher geometry
  does not. The authors next apply the method to population codes, emphasizing
  that it can reveal how neurons combine information redundantly or
  complementarily. In illustrative visual-coding examples, the framework
  distinguishes population structures that look identical under Fisher
  information but differ in what they actually tell us about stimulus features.
  The paper further argues that the approach can be used to compare encoded
  information across brain areas and across spatial, motor, and visual settings.
whyItMatters: >-
  This work offers a single way to compare neural codes that goes beyond local
  sensitivity and ties directly to information content. For researchers studying
  large neural populations, it provides a more interpretable bridge between
  geometry and what the brain can actually represent.
limitations: >-
  The paper is primarily theoretical, with illustrative applications rather than
  broad empirical validation. Its usefulness will depend on how well the
  assumptions behind the multi-scale construction hold for real neural data,
  especially when responses are noisy, high-dimensional, or strongly dependent
  on experimental sampling. Because the method is tied to stimulus priors and
  mutual information, conclusions may also vary with the stimulus ensemble used
  in a given study.
authors:
  - Simone Azeglio
  - Steeve Laquitaine
  - Arianna di Bernardo
  - Ulisse Ferrari
  - Matthew Chalk
sourceUrl: 'https://www.biorxiv.org/content/10.64898/2026.10.22.761206v1'
sourceHost: biorxiv.org
doi: 10.64898/2026.10.22.761206
year: 2026
journal: bioRxiv (Cold Spring Harbor Laboratory)
sourceContext: fulltext
capturedAt: '2026-11-10T20:56:29.516Z'
draft: false
---
## Summary
This paper addresses a basic problem in systems neuroscience: how to describe what a neural population encodes, not just for tiny stimulus changes but across all stimulus scales. The authors argue that representational geometry is a useful framework because it turns stimulus differences into distances that reflect neural encoding. They point out that common geometries either ignore response variability, depend on a chosen decoder, or focus only on local discriminability. To overcome this, they introduce a multi-scale representational geometry built from first principles. The key idea is to imagine an observer who sees a blurred version of the stimulus and to track how neural sensitivity changes as stimulus resolution becomes coarser. Integrating this sensitivity across scales yields a metric tensor that defines distances in stimulus space. The authors show that this geometry is exactly related to mutual information, so it is not tied to any specific decoding rule. In this framework, stimulus differences that carry more information are stretched, while differences that carry little information are compressed. The paper first illustrates the idea with simple tuning-curve examples, showing that two neurons can have the same Fisher geometry but different mutual information when one is ambiguous across distant stimuli. It then shows that the multi-scale geometry captures this difference, whereas the Fisher geometry does not. The authors next apply the method to population codes, emphasizing that it can reveal how neurons combine information redundantly or complementarily. In illustrative visual-coding examples, the framework distinguishes population structures that look identical under Fisher information but differ in what they actually tell us about stimulus features. The paper further argues that the approach can be used to compare encoded information across brain areas and across spatial, motor, and visual settings.
## Why This Matters
This work offers a single way to compare neural codes that goes beyond local sensitivity and ties directly to information content. For researchers studying large neural populations, it provides a more interpretable bridge between geometry and what the brain can actually represent.
## Caveats and Limitations
The paper is primarily theoretical, with illustrative applications rather than broad empirical validation. Its usefulness will depend on how well the assumptions behind the multi-scale construction hold for real neural data, especially when responses are noisy, high-dimensional, or strongly dependent on experimental sampling. Because the method is tied to stimulus priors and mutual information, conclusions may also vary with the stimulus ensemble used in a given study.
## Key Takeaways
- Introduces a multi-scale representational geometry for neural coding.
- Links stimulus-space distances exactly to mutual information, not just local discriminability.
- Shows that Fisher geometry can miss ambiguities that matter at larger stimulus scales.
- Highlights how population structure can reveal redundant versus complementary encoding.
- Demonstrates the framework on conceptual examples spanning spatial, motor, and visual codes.
## Source
- DOI: [10.64898/2026.10.22.761206](https://doi.org/10.64898/2026.10.22.761206)
- URL: [https://www.biorxiv.org/content/10.64898/2026.10.22.761206v1](https://www.biorxiv.org/content/10.64898/2026.10.22.761206v1)
