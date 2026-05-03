---
title: Connectome-based spatial statistics enabling large-scale population analyses of human connectome across cohorts
summary: >-
  This preprint introduces connectome-based spatial statistics (CBSS), a
  scalable diffusion MRI framework for measuring white-matter microstructure in
  an anatomically aligned, connectome-like reference space. The method projects
  diffusion-derived measures onto a brain function-aware structural connectome
  atlas built from 1,042 HCP Young Adult participants, retaining 5,723
  representative pathways organized into 13 functional networks and 68
  network-pair classes. The authors evaluate CBSS across 64,551 diffusion scans,
  including 56,510 UK Biobank participants and five independent lifespan
  cohorts, testing reliability, heritability, structure-function coupling,
  cognitive and behavioral prediction, brain-aging signatures, and lifespan
  trajectories.
whyItMatters: >-
  CBSS aims to make structural connectome analysis more practical at population
  scale by combining the interpretability of pathway- and network-level
  connectomics with the efficiency of registration-and-projection workflows.
  That matters for large neuroimaging cohorts, imaging genetics, lifespan
  studies, and systematic comparison of diffusion MRI processing pipelines.
limitations: >-
  Atlas-referenced measures still depend on registration quality and are
  affected by streamline reconstruction biases, especially for short-range or
  anatomically complex pathways. The predictive gains reported are generally
  modest, so the main value is the combination of scalability, reproducibility,
  and interpretability rather than a large leap in behavioral prediction.
authors:
  - Tengfei Li
  - Xifeng Wang
  - Martin Cole
  - Zehui Sun
  - Zhiwen Jiang
  - Xinjie Qian
  - Shan Gao
  - Tianyou Luo
  - Maxime Descoteaux
  - Jason L. Stein
  - Xiao Wang
  - Thomas E. Nichols
  - Heping Zhang
  - Zhengwu Zhang
  - Hongtu Zhu
theme: "Brain Maps & Connectomes"
sourceUrl: https://www.biorxiv.org/content/10.64898/2026.04.09.717492v1.full
sourceHost: www.biorxiv.org
doi: 10.64898/2026.04.09.717492
year: 2026
journal: bioRxiv
sourceContext: fulltext
capturedAt: '2026-05-01T09:31:59.000Z'
draft: false
---
## Summary

Large-scale studies of structural connectomes run into a recurring set of problems: aligning white-matter anatomy across people, keeping pathways interpretable, and doing the computation at the scale required by population cohorts. Li and colleagues propose connectome-based spatial statistics (CBSS) as a common reference framework for these problems. CBSS projects diffusion MRI measures into atlas-defined white-matter pathways, then organizes those pathways into 13 functional networks so that analyses can be performed at fiber, voxel, and network levels without running full subject-level tractography in every downstream cohort.

The underlying brain function-aware structural connectome atlas is built from 1,042 high-quality Human Connectome Project Young Adult participants. The authors start with a 359-region parcellation, aggregate large-scale tractography into a population reference, and use functional-network-aware clustering to define 6,090 pathway clusters, of which 5,723 representative white-matter pathways are retained after quality control. These pathways span 2,231 within-network and 3,492 between-network connections across 68 network pairs.

The evaluation is deliberately broad. The authors use 64,551 diffusion scans, including 56,510 UK Biobank participants and five additional lifespan cohorts, comparing CBSS-derived measures with TBSS and other population white-matter representations across reliability, heritability, structure-function coupling, cognitive and behavioral prediction, brain-aging patterns, and lifespan trajectories. Network-pair test-retest reliability is high on average, with mean ICC around 0.81, and SNP-based heritability estimates for FA-weighted network edges are moderate to high.

CBSS also improves structural-to-functional connectivity prediction compared with TBSS in the UK Biobank hold-out set. In the paper's matched comparison, TBSS reaches avgcorr 0.139 and avgrank 0.871, while CBSS reaches avgcorr 0.164 at the network level and 0.173 at the voxel level, with avgrank 0.922 and 0.937. For behavioral and cognitive prediction, the gains are more uneven and generally modest, but CBSS and CBSS+TBSS often improve performance, especially when voxel- and network-level CBSS features are used. The lifespan analyses show coherent developmental and aging trajectories across systems, with sensory pathways maturing earlier and association circuitry changing over a longer period.

## Why This Matters

CBSS is useful because it treats the structural connectome as something that can be standardized across very large imaging datasets. That gives researchers a way to compare diffusion MRI processing choices, spatial scales, network embeddings, and downstream tasks within a single evaluation framework.

For neuroimaging genetics and lifespan neuroscience, the appeal is practical: a scalable reference representation could make pathway- and network-level white-matter traits easier to analyze across cohorts without losing anatomical interpretability.

## Caveats and Limitations

The framework still inherits hard problems from diffusion MRI. Registration quality, tractography biases, scan quality, and anatomy near the gray-white boundary can all affect the measures, especially for short-range or anatomically complex pathways. The authors give the visual network as an example where weak structural connectivity can coexist with strong functional coupling because tractography near the gray-white boundary is difficult to recover robustly. The paper also notes that prediction improvements are modest; CBSS should be read as a scalable and interpretable population framework, not as a dramatic behavioral prediction breakthrough.

Code availability is also limited in the preprint: the authors state that code is available upon request rather than providing an open repository.

## Key Takeaways

- Introduces CBSS as an atlas-referenced framework for population structural connectome analysis.
- Builds a BFSC atlas from 1,042 HCP Young Adult participants and retains 5,723 representative pathways.
- Evaluates the method across 64,551 diffusion scans, including 56,510 UK Biobank participants plus five independent lifespan cohorts.
- Organizes atlas-defined pathways into 13 functional networks and 68 network-pair classes.
- Tests reliability, heritability, structure-function coupling, prediction, aging, and lifespan trajectories.
- Positions CBSS as a bridge between scalable voxel/skeleton methods and interpretable tractography-based connectomics.
- Limitations include registration quality, tractography bias, modest predictive gains, and code only available upon request.

## Source

- DOI: [10.64898/2026.04.09.717492](https://doi.org/10.64898/2026.04.09.717492)
- URL: [https://www.biorxiv.org/content/10.64898/2026.04.09.717492v1.full](https://www.biorxiv.org/content/10.64898/2026.04.09.717492v1.full)
