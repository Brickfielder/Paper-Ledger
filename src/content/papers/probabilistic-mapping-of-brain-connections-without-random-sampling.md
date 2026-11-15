---
title: Probabilistic mapping of brain connections without random sampling
summary: >-
  This paper addresses a long-standing feature of diffusion MRI tractography:
  most probabilistic methods generate connectivity by sampling huge numbers of
  streamlines, which makes results non-deterministic and storage-heavy. The
  authors argue that sampling is not necessary if tractography is modeled
  directly as an absorbing Markov chain. In that framing, the method returns the
  expected result of infinitely many streamlines instead of a single random
  draw. The paper presents this approach as MPAT, an open-source implementation
  of the idea. The central claim is that MPAT produces tract maps that are more
  reliable than streamline-based tractography across test-retest scans. The
  authors evaluate the method on public datasets spanning adult brain scans,
  neonates, and clinical cases. They report that MPAT can recover major tracts
  in standard adult data and neonatal data. They also show that it can map
  pathways in more challenging settings, including around tumors where anatomy
  is displaced. Another demonstrated use case is a small pathway, the
  retinogeniculate visual pathway, which is often difficult to trace robustly. A
  key methodological point is that the method is deterministic and does not
  depend on random streamline subsampling. This makes the output easier to
  reproduce and avoids the variability that comes from finite sampling. The
  paper also notes that some of the apparent gap between conventional
  tractography and MPAT can be explained by the number of sampled streamlines,
  although not all of it. Overall, the work reframes tractography as a
  closed-form probabilistic computation rather than a Monte Carlo sampling
  problem.
whyItMatters: >-
  If this approach holds up broadly, it could make brain tractography faster,
  more reproducible, and easier to store and share. That matters for both
  research workflows and clinical settings where consistent white-matter maps
  are important.
limitations: >-
  The evidence is still based on a preprint and the abstract does not describe
  full external validation across many acquisition protocols or disease types.
  The method is evaluated on selected public datasets, so its performance may
  not generalize equally well to all scanners, preprocessing pipelines, or
  anatomical edge cases. The comparison also appears focused on agreement and
  test-retest reliability rather than downstream clinical accuracy.
authors:
  - John Kruper
  - Matthew Cieslak
  - Ariel Rokem
sourceUrl: 'https://www.biorxiv.org/content/10.64898/2026.11.12.766276v1'
sourceHost: biorxiv.org
doi: 10.64898/2026.11.12.766276
year: 2026
journal: bioRxiv (Cold Spring Harbor Laboratory)
sourceContext: fulltext
capturedAt: '2026-11-15T18:46:32.374Z'
draft: false
---
## Summary
This paper addresses a long-standing feature of diffusion MRI tractography: most probabilistic methods generate connectivity by sampling huge numbers of streamlines, which makes results non-deterministic and storage-heavy. The authors argue that sampling is not necessary if tractography is modeled directly as an absorbing Markov chain. In that framing, the method returns the expected result of infinitely many streamlines instead of a single random draw. The paper presents this approach as MPAT, an open-source implementation of the idea. The central claim is that MPAT produces tract maps that are more reliable than streamline-based tractography across test-retest scans. The authors evaluate the method on public datasets spanning adult brain scans, neonates, and clinical cases. They report that MPAT can recover major tracts in standard adult data and neonatal data. They also show that it can map pathways in more challenging settings, including around tumors where anatomy is displaced. Another demonstrated use case is a small pathway, the retinogeniculate visual pathway, which is often difficult to trace robustly. A key methodological point is that the method is deterministic and does not depend on random streamline subsampling. This makes the output easier to reproduce and avoids the variability that comes from finite sampling. The paper also notes that some of the apparent gap between conventional tractography and MPAT can be explained by the number of sampled streamlines, although not all of it. Overall, the work reframes tractography as a closed-form probabilistic computation rather than a Monte Carlo sampling problem.
## Why This Matters
If this approach holds up broadly, it could make brain tractography faster, more reproducible, and easier to store and share. That matters for both research workflows and clinical settings where consistent white-matter maps are important.
## Caveats and Limitations
The evidence is still based on a preprint and the abstract does not describe full external validation across many acquisition protocols or disease types. The method is evaluated on selected public datasets, so its performance may not generalize equally well to all scanners, preprocessing pipelines, or anatomical edge cases. The comparison also appears focused on agreement and test-retest reliability rather than downstream clinical accuracy.
## Key Takeaways
- Tractography can be formulated as an absorbing Markov chain instead of a random streamline-sampling process.
- MPAT is deterministic, so it avoids run-to-run variation from finite probabilistic sampling.
- The method is reported to be more reliable than conventional streamline-based tractography on test-retest scans.
- It can map major tracts in adult data, neonatal data, and challenging clinical cases such as tumors.
- The software is open source and publicly available.
## Source
- DOI: [10.64898/2026.11.12.766276](https://doi.org/10.64898/2026.11.12.766276)
- URL: [https://www.biorxiv.org/content/10.64898/2026.11.12.766276v1](https://www.biorxiv.org/content/10.64898/2026.11.12.766276v1)
