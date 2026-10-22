---
title: "When Thoughts Become Memory: Unifying In-Context Learning and Fine-Tuning"
summary: >-
  Chlon and Huang propose measuring how much information a model gains from data by the reduction
  in held-out query code length. They derive a decomposition that applies to information supplied
  through a model's context or written into its weights, and use it to compare in-context learning
  with fine-tuning. The paper develops capacity-based certificates and an anytime-valid test for
  choosing between the two from held-out predictions. Experiments cover GPT-2, TabPFN, vision and
  geometry models, airfoil-pressure prediction, and evidence assessment on VitaminC. The results
  show that which route performs better depends on the task, data, and context size.
whyItMatters: >-
  The framework provides a common information-theoretic measure for comparing examples supplied
  at inference time with information incorporated during training. It also turns context deletion
  into a quantitative test of how much an example or cited evidence changes a model's predictions,
  linking model selection, in-context learning curves, and evidence support to held-out predictive
  performance.
limitations: >-
  This is a newly posted preprint. The theoretical law is broad, but practical certificates require
  access to suitable information terms or defensible capacity bounds, and empirical tests depend on
  predictive probabilities and held-out query distributions. The demonstrations use selected models
  and tasks, including GPT-2, specific tabular and vision models, simulated or curated datasets,
  and one evidence dataset (VitaminC) with two verifier models. These results do not establish
  that the method will select well across contemporary large language models, other domains, or
  deployment settings.
authors:
  - Leon Chlon
  - Julie Huang
theme: "Artificial Intelligence & Machine Learning"
sourceUrl: "https://arxiv.org/abs/2610.29419"
sourceHost: "arxiv.org"
doi: 10.48550/arXiv.2610.29419
year: 2026
journal: "arXiv preprint"
sourceContext: fulltext
capturedAt: '2026-10-22T20:15:00Z'
draft: false
---

## Summary

Chlon and Huang ask when information supplied to a pretrained model as context should instead be incorporated into its weights. They propose measuring the value of either route by the code length it saves on held-out queries, using log-probability as a measure of predictive performance.

Their central result is an expected decomposition of that saving into three parts: information the memory stores about the query, a prior-repair term that can improve predictions even when the context carries no query-specific information, and a decoding loss reflecting how much the model fails to use what its memory contains. The same accounting lets the authors compare context memories, such as a transformer’s key–value cache, with memories written through fine-tuning. They derive capacity-based certificates that can settle some comparisons from one measurement, and an anytime-valid test that compares held-out code lengths while controlling the risk of a wrong call at each stopping point.

The paper also treats context ablation as a way to measure the value of an example or evidence passage. Removing a part, rebuilding the model’s context memory, and comparing predictions with and without it estimates the held-out information that part contributes. The authors demonstrate the tools on GPT-2, TabPFN, an occupancy network, a multi-view stereo network, and a kriging learner. In the model comparisons, TabPFN is selected over XGBoost on two tabular datasets, while a trained surrogate is selected over an in-context learner for airfoil pressure with larger support sets. For GPT-2, the test chooses the better of its cache and an online fine-tune in 61,948 of 64,000 query streams across 32 comparisons, with four calls to the worse option. On VitaminC evidence-verification examples, the budget-gap measure distinguishes supporting from insufficient evidence with AUROC around 0.91 for both Qwen2.5-7B and GPT-4.1-mini.

## Why This Matters

The work puts in-context learning and fine-tuning on a shared scale: how many bits each saves on future queries. This makes the comparison depend on predictive performance for a specified task, rather than assuming one learning route is generally superior. The same perspective offers a quantitative way to test which context examples matter and whether cited evidence changes a model’s confidence in a claim.

## Caveats and Limitations

The paper is a preprint, and its empirical results are demonstrations of the framework rather than broad external validation. Evaluations span selected models and datasets: for example, the language-model comparison uses GPT-2, tabular comparisons use TabPFN and XGBoost, and evidence assessment uses the VitaminC dataset with two verifier models. The authors’ broad theoretical result does not mean that every comparison is easy to certify in practice: certificates depend on available information quantities or capacity bounds, while the sequential test depends on suitable held-out queries and predictive scores. Evidence AUROC on VitaminC should not be read as validation of a general-purpose fact-checking system.

## Key Takeaways

- Held-out code-length savings provide a common measure for data placed in context and data incorporated into weights.
- The expected value decomposes into information stored, prior repair, and decoding loss.
- The paper’s tests show that context or fine-tuning can win depending on the task and amount of data.
- Removing context parts can quantify their effect on predictions, including whether evidence supports a claim.
- The mathematical framework is broad, while the empirical demonstrations cover a selected set of models and tasks.

## Source

- Preprint: [arXiv:2610.29419](https://arxiv.org/abs/2610.29419)
- Version reviewed: [v1 PDF](https://arxiv.org/pdf/2610.29419)
- Full text consulted: [arXiv PDF](https://arxiv.org/pdf/2610.29419)
