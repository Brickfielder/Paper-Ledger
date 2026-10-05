---
title: "Pitfalls in using ML to predict cognitive function performance"
summary: >-
  This study demonstrates how confound handling can distort machine-learning
  estimates of cognitive prediction. In 231 healthy, monolingual German-speaking
  adults, the authors used 264 automatically extracted speech-prosody features
  to predict 66 executive-function measures. Ten-fold cross-validation initially
  suggested moderate prediction for Trail Making Test (TMT) processing times
  A and B. But across the full set, 53 targets had no positive predictive
  performance and only those two TMT measures exceeded R² of 0.1. Further
  analyses found that prediction worsened when age, sex and education were
  left unadjusted, contrary to the expected pattern if the adjusted results
  reflected prosody alone. Results also varied with the confound-removal
  algorithm, and permutation tests supported feature-specific prediction in
  only a small subset of model configurations. The authors interpret this
  counterintuitive pattern as evidence that regressing out confounds can leak
  confound-related information into features, especially when confounds
  correlate strongly with targets and many predictors are used. Their central
  methodological message is to test pipelines with and without adjustment,
  inspect confound-target relationships, and keep confound fitting strictly
  within each training fold.
whyItMatters: >-
  The paper is a practical warning for speech-based cognitive prediction and
  neuropsychological machine-learning studies: technically correct
  cross-validation does not by itself rule out confound leakage. The authors
  show why model performance should be interpreted alongside careful
  sensitivity analyses of confound adjustment, rather than taken as evidence
  that the measured features capture the target construct.
limitations: >-
  This is a methodological case example rather than a clinical validation
  study. Its sample comprised 231 healthy German-speaking adults aged 20–55,
  with no independent external test cohort, so the results do not establish
  how prosodic prediction performs in patient groups or other languages. The
  analysis was exploratory, with 264 speech features and 66 cognitive targets
  in a modest sample; the authors themselves note the increased risk of
  leakage in this setting. The implicated leakage mechanism is inferred from
  the pattern of sensitivity analyses, not isolated as a single causal source.
authors:
  - Gianna Kuhles
  - Sami Hamdan
  - Stefan Heim
  - Simon B. Eickhoff
  - Kaustubh R. Patil
  - Julia A. Camilleri
  - Susanne Weis
theme: "Cognition, Prediction & Mental Experience"
sourceUrl: "https://www.nature.com/articles/s41598-025-24325-9"
sourceHost: nature.com
doi: "10.1038/s41598-025-24325-9"
year: 2025
journal: "Scientific Reports"
sourceContext: fulltext
capturedAt: "2026-10-05T09:35:00+01:00"
draft: false
---
## Summary

The authors use an example from speech-based executive-function research to show how machine-learning pipelines can produce misleading prediction estimates when confound adjustment leaks information into the predictors. The study included 231 healthy, monolingual German-speaking adults (aged 20–55). Participants completed 14 cognitive assessments yielding 66 executive-function target variables and provided three spontaneous speech samples: a Cookie Theft picture description, a discussion of a recently watched television programme or book, and an imagined ideal holiday. OpenSMILE extracted 88 eGeMAPS prosody features from the first 90 seconds of each sample, giving 264 features per person.

The primary analysis used random-forest regression and stratified 10-fold cross-validation to predict each cognitive target from prosody while regressing age, sex and education out of the speech features. Of the 66 targets, 53 had no positive cross-validated R² and only Trail Making Test processing time A and B exceeded R² of 0.1. The spectral domain, particularly Mel-frequency cepstral coefficients, contributed prominently to feature importance for those two targets.

The authors then tested how prediction changed with and without confound removal and stratification, compared several methods for removing confounds (linear regression, ridge regression, random forest and Extra Trees), and used permutation tests to ask whether prosody added predictive information beyond the confounds. Prediction for the TMT measures fell when demographic confounds were not removed, an unexpected result because the adjustment should remove information that could otherwise help prediction. Performance also changed substantially according to the confound-removal method. The authors interpret this pattern as confound leakage: the adjustment procedure may reintroduce demographic information into features, particularly when confounds correlate strongly with targets and many features are used. Only a small subset of tested model configurations showed significant feature-specific prediction in the permutation analyses.

The paper concludes that ordinary cross-validation and seemingly good prediction scores are not sufficient safeguards. Researchers should examine the relationship between confounds and targets, compare results with and without confound adjustment, and fit confound-removal models inside each training fold before applying them to held-out data.

## Why This Matters

Speech features are increasingly explored as low-cost indicators of cognitive performance. This paper shows that estimates can look stronger after confound adjustment for the wrong reason. It gives researchers a concrete set of checks for distinguishing predictive signal in the features from information carried by demographics or introduced by the adjustment procedure.

## Caveats and Limitations

This is a methodological case study, not an externally validated cognitive prediction tool. The participants were healthy, monolingual German speakers aged 20–55, so the results cannot be assumed to generalise to clinical neuropsychology, older adults or other languages. The analysis combined a modest sample with 264 features and 66 outcomes and did not include an independent external validation cohort. The authors infer leakage from the counterintuitive sensitivity analyses; the specific mechanism is not independently isolated, and they call for tests in other datasets.

## Source

- DOI: [10.1038/s41598-025-24325-9](https://doi.org/10.1038/s41598-025-24325-9)
- Article: [Scientific Reports](https://www.nature.com/articles/s41598-025-24325-9)
- Full text PDF: [Research Centre Jülich](https://juser.fz-juelich.de/record/1047524/files/Pitfalls%20in%20using%20ML%20to%20predict%20cognitive%20function%20performance.pdf)
