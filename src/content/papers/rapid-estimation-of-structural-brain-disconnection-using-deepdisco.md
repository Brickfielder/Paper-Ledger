---
title: "Rapid estimation of structural brain disconnection from binary lesion masks using DeepDisco"
summary: >-
  Matsulevits, Tourdias and Thiebaut de Schotten introduce DeepDisco, an open-source tool that estimates brain disconnectomes from binary lesion masks, without requiring diffusion MRI or running tractography for each new case. A 3D U-Net was trained on simulated lesion-connectome examples and evaluated against conventional tractography-based maps for 1,333 previously unseen real lesions. The whole-brain model showed strong voxelwise correspondence with reference maps (mean Pearson r = 0.823) and generated a map in under one second on the tested GPU, roughly 720 times faster than the comparison pipeline. The tool also predicts separate association, projection and commissural fiber maps. These class-specific maps had lower exact voxelwise correlations but retained broader spatial similarity. In a separate stroke-outcome application, the authors compared whole-brain maps with concatenated fiber-class maps in 237 Brain Before Stroke cohort participants, reserving 50 for independent testing. Fiber-class maps improved prediction of one-year Fugl–Meyer motor score (mean R² 0.39 versus 0.07 across hemispheres; adjusted p = 0.013), with the clearest gain for right-hemisphere lesions. Benefits were not consistent across cognitive and language outcomes. The tool is therefore a rapid, interpretable proxy for estimating disconnection, with its strongest tested downstream advantage in motor prediction.
whyItMatters: >-
  DeepDisco could make lesion-based disconnection analysis practical for larger datasets and settings where diffusion imaging or specialist tractography pipelines are unavailable. By separating association, commissural and projection pathways, it can also help researchers formulate more anatomically specific hypotheses about how lesions relate to behaviour. Its independent held-out outcome test and explicit comparison with tractography make this more than a software description, while the mixed outcome results show that added anatomical detail does not automatically improve every prediction.
limitations: >-
  DeepDisco reproduces disconnectomes derived from an average tractography reference; those maps are an approximation, not an individual's measured anatomy. The application used a single stroke cohort and only 50 independent test participants, including 18 with right-hemisphere lesions, so some hemisphere-specific estimates may be unstable. The clearest predictive gain was for motor outcome; cognitive prediction benefits were mixed and did not survive correction for multiple comparisons. The paper does not establish improved patient care or validate the suggested use of disconnectome profiles to select rehabilitation or brain-stimulation strategies.
authors:
  - Anna Matsulevits
  - Thomas Tourdias
  - Michel Thiebaut de Schotten
sourceUrl: "https://www.nature.com/articles/s41598-026-73385-y"
sourceHost: "nature.com"
doi: "10.1038/s41598-026-73385-y"
year: 2026
journal: "Scientific Reports"
sourceContext: fulltext
capturedAt: "2026-11-01T16:00:00+00:00"
draft: false
---

## Summary

Estimating which white-matter pathways a brain lesion disrupts can help researchers link lesion location with cognition, behaviour and recovery. Standard disconnectome pipelines often rely on diffusion MRI and tractography, which take time and require specialist processing. DeepDisco is designed to estimate these maps directly from a binary lesion or region mask.

The authors built an open-source, cross-platform application based on a 3D U-Net. The model was trained using simulated lesion locations and corresponding disconnectome maps. It can produce a whole-brain estimate as well as separate estimates for association, commissural and projection fibers. The input is a lesion mask in standard brain space; the software does not take raw diffusion MRI as input.

For validation, the trained model was applied to 1,333 previously unseen real lesions. Its estimates were compared with conventional disconnectomes generated from tractography. The whole-brain model showed strong voxelwise correspondence with those reference maps (mean Pearson correlation 0.823; mean Spearman correlation 0.648). The fiber-class models had lower voxel-by-voxel correspondence, but their broader spatial structure remained similar to the reference maps (structural similarity indices of 0.780–0.829, depending on fiber class). On the tested NVIDIA Quadro P4000 GPU, each map was generated in under one second, about 720 times faster than the conventional pipeline used for comparison, with less than 1 GB memory required during inference.

The authors then tested whether fiber-class-specific maps could improve outcome prediction after stroke. They applied DeepDisco to a Brain Before Stroke cohort of 237 participants, split into 187 training cases and 50 held-out test cases. Lesion masks had been delineated from acute clinical MRI, while outcomes were assessed one year after stroke. The models compared a whole-brain disconnectome with a representation combining association, commissural and projection maps; prediction models also included age and recorded sex.

The clearest benefit of separating fiber classes was for motor outcome. Across the two lesion hemispheres, the concatenated fiber-class representation predicted Fugl–Meyer motor scores better than the whole-brain representation (mean R² 0.39 versus 0.07; adjusted p = 0.013). For right-hemisphere lesions, the reported R² was 0.64 with the concatenated representation versus 0.14 with the whole-brain model. Results for language and cognitive measures were less consistent: some comparisons favoured the fiber-specific representation, others favoured the whole-brain map, and the cognitive differences did not remain significant after correction for multiple comparisons.

The paper's central contribution is thus twofold: it offers a fast way to approximate conventional whole-brain disconnectomes from simple lesion masks, and it suggests that separating major fiber classes can help predict some outcomes, particularly motor recovery. It does not show a uniform advantage for every behavioural domain.

## Why This Matters

The tool may make disconnection mapping more accessible in retrospective clinical datasets and research settings where diffusion MRI is absent or tractography is impractical. It can also generate separate pathway-class estimates from the same lesion mask, supporting more specific lesion-symptom questions.

The results give a concrete example of when that detail may matter: motor outcome, which is closely linked to projection pathways such as the corticospinal tract, showed the clearest predictive gain. The mixed results for cognitive outcomes are equally useful, because they caution against assuming that a more detailed anatomical representation always produces better prediction.

## Caveats and Limitations

- The reference maps come from average tractography and are not ground-truth measurements of each participant's individual pathways.
- Fiber-specific reconstructions were less accurate than whole-brain reconstructions at exact voxel locations, even though their broader spatial patterns were similar.
- The stroke application used one cohort with 50 held-out test cases; only 18 test cases had right-hemisphere lesions.
- The motor prediction advantage was the clearest result. Cognitive and language results were mixed, and cognitive comparisons did not survive correction for multiple testing.
- The predicted maps and outcome associations do not establish a causal mechanism or show that use of the software improves clinical decisions or outcomes.
- The proposed role in selecting patients for rehabilitation or brain stimulation is speculative and needs prospective, intervention-specific validation.

## Key Takeaways

- DeepDisco estimates brain disconnection from a binary lesion mask, without requiring a new tractography run for each case.
- Whole-brain estimates closely matched tractography-derived reference maps and were generated in under one second on the tested GPU.
- Fiber-class maps add anatomical detail but have lower exact voxelwise agreement than the whole-brain model.
- In a held-out stroke cohort, fiber-class maps improved one-year motor-score prediction; advantages were not consistent for cognition or language.
- The reference maps approximate average anatomy, so DeepDisco should be treated as a research proxy and hypothesis-generating tool.

## Source

- Article in press, *Scientific Reports* (2026).
- DOI: [10.1038/s41598-026-73385-y](https://doi.org/10.1038/s41598-026-73385-y)
- [Read the full article](https://www.nature.com/articles/s41598-026-73385-y)
