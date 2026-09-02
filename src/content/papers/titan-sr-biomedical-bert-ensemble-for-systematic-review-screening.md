---
title: "TITAN-SR: development and validation of a biomedical BERT ensemble for systematic-review screening"
summary: >-
  TITAN-SR is a purpose-built biomedical BERT ensemble for prioritising
  citations in systematic-review screening. Trained on 762,934 labelled
  citations from 19,787 completed reviews, it uses review eligibility criteria
  together with titles and abstracts to estimate inclusion probability. In
  internal and temporally independent Cochrane validation, it outperformed
  ASReview and several general-purpose large language models.
whyItMatters: >-
  Systematic-review screening is laborious, and existing active-learning
  systems need substantial reviewer input before ranking becomes useful. TITAN-SR
  presents a task-specific alternative designed to retain near-complete recall
  while excluding a large proportion of irrelevant records from manual review.
limitations: >-
  This is an unreviewed preprint. Performance was assessed primarily against
  completed reviews and Cochrane datasets, so it may differ for other review
  types, databases, reporting standards, languages and eligibility criteria.
  High benchmark performance does not remove the need for human oversight,
  transparent stopping rules, prospective implementation studies and safeguards
  against missing eligible studies.
authors:
  - Tyler Pitre
  - Dena Zeraatkar
  - John Granton
  - Jason Busse
  - Bram Rochwerg
  - Gordon Guyatt
sourceUrl: "https://ssrn.com/abstract=6732292"
sourceHost: "ssrn.com"
year: 2026
journal: "SSRN preprint"
theme: "AI Agents, Reasoning & Machine Cognition"
sourceContext: "fulltext"
capturedAt: "2026-09-02T22:00:00Z"
draft: false
---

## Summary

TITAN-SR is a citation-screening system designed specifically for biomedical systematic reviews. It combines two biomedical BERT models, PubMedBERT and BioLinkBERT, and evaluates each citation alongside the review's eligibility criteria. The model outputs an inclusion score, and the training objective penalises missed relevant studies more heavily than retained irrelevant ones.

The authors trained the system using 762,934 citation-label pairs from 19,787 completed reviews. Across 3,434 internal test reviews, TITAN-SR achieved a median area under the curve of 0.974 and a median specificity of 0.902 at 99% recall. At thresholds selected to retain 99% recall within each review, it excluded a median 90.2% of irrelevant citations.

The paper compares TITAN-SR with four commercial language-model chatbots and GPT-4o-mini. On the reported benchmarks, TITAN-SR outperformed them, while the chatbots' self-reported confidence was poorly calibrated. In temporally independent validation on 22 held-out Cochrane reviews (142,504 records), performance was similar to internal testing. The system also outperformed ASReview in 18 of the 22 head-to-head reviews after ASReview received a defined warm-up period.

## Why This Matters

Screening is one of the most resource-intensive parts of a systematic review. A specialised, eligibility-aware model may reduce manual workload more reliably than repurposing a general conversational model, particularly where recall must remain extremely high.

The comparison with ASReview is useful because it distinguishes a fully trained prioritisation system from an active-learning workflow that improves after reviewers have supplied labels. The practical question is not only which model ranks citations well, but how much safe workload reduction can be achieved in a real review process.

## Caveats and Limitations

- This is a preprint and has not yet undergone peer review.
- The reported metrics are based on completed-review datasets; prospective studies are needed to assess reviewer behaviour, time savings and missed-study risk in live reviews.
- Performance may vary outside the training distribution, including non-biomedical topics, poorly described eligibility criteria, non-English records and unusual study designs.
- A recall target of 99% still allows missed eligible records; stopping decisions require human governance.
- Comparisons with general-purpose chatbots depend on the particular prompts, models and task setup used.

## Key Takeaways

- TITAN-SR is an ensemble of biomedical BERT models trained for systematic-review screening.
- It combines eligibility criteria with citation titles and abstracts.
- In the reported evaluation, it excluded roughly 90% of irrelevant citations while retaining 99% recall.
- It outperformed the tested general-purpose chatbots and ASReview on the stated benchmarks.
- Human oversight remains essential, particularly for prospective deployment and stopping decisions.

## Source

- [Read the SSRN preprint](https://ssrn.com/abstract=6732292)
- Full text was extracted from the PDF supplied with this request.
