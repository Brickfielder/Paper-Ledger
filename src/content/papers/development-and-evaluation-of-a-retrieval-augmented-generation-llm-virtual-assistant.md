---
title: "The Development and Evaluation of a Retrieval-Augmented Generation Large Language Model Virtual Assistant for Postoperative Instructions"
summary: >-
  This study evaluates AIVA, a postoperative virtual assistant that combines a
  medically verified knowledge base with retrieval-augmented generation using
  Gemini 2.0 Flash. In simulated testing, the system classified 250 unique
  postoperative queries spanning 20 common recovery domains and was assessed
  for clinical relevance, completeness, consistency, groundedness and safety.
whyItMatters: >-
  Patient-facing postoperative information is often static and difficult to use
  at the point of need. This work illustrates a practical approach to making
  guidance conversational while grounding answers in verified clinical content
  and including explicit escalation and out-of-scope safeguards.
limitations: >-
  The evaluation used simulated interactions and expert review rather than
  real-world patient use or clinical outcomes. The reported performance may not
  transfer to different surgical populations, knowledge bases, workflows or
  languages. Readability was reported at approximately an eleventh-grade level,
  which could limit accessibility. Prospective studies should assess safety,
  equity, uptake, workload and patient outcomes in routine care.
authors:
  - Syed Ali Haider
  - Srinivasagam Prabha
  - Cesar Abraham Gomez Cabello
  - Ariana Genovese
  - Bernardo Collaco
  - Nadia Wood
  - James London
  - Sanjay Bagaria
  - Cui Tao
  - Antonio Jorge Forte
sourceUrl: "https://www.mdpi.com/2306-5354/12/11/1219"
sourceHost: "mdpi.com"
doi: "10.3390/bioengineering12111219"
year: 2025
journal: "Bioengineering"
theme: "AI Agents, Reasoning & Machine Cognition"
sourceContext: "abstract-only"
capturedAt: "2026-08-27T16:28:00Z"
draft: false
---

## Summary

The authors developed AIVA, a virtual assistant for postoperative instructions. Its design combines conventional, deterministic language-processing components with a retrieval-augmented large language model. Responses are intended to be grounded in a medically verified knowledge base rather than generated from an unconstrained model.

The evaluation used 750 simulated patient interactions based on 250 distinct questions across 20 frequent postoperative-recovery domains. Blinded physician reviewers rated the answers, while separate tests assessed how the system handled out-of-scope questions and emergency scenarios.

In these simulations, the reported classification accuracy was 98.4%, with high physician ratings for completeness, consistency and relevance. The safety tests identified all tested out-of-scope and escalation scenarios. Automated assessments also suggested good grounding and fluency, although the estimated readability was around an eleventh-grade level.

## Why This Matters

A conversational interface can make postoperative information easier to access, but only if it remains clinically bounded. The paper’s core contribution is the architecture: retrieve from verified material first, then generate a helpful response with explicit mechanisms for uncertainty and escalation.

## Caveats and Limitations

- The study evaluates simulations, not routine patient care.
- Performance depends on the quality and maintenance of the underlying verified knowledge base.
- Expert ratings and automated language metrics are useful proxies, but do not establish clinical effectiveness or safety in practice.
- The reported readability may exclude some users.
- The results should not be taken as evidence that a general-purpose chatbot is suitable for postoperative advice without equivalent safeguards and prospective testing.

## Key Takeaways

- AIVA combines retrieval-augmented generation with verified postoperative information.
- Simulated testing found strong classification and clinician-rated answer quality.
- Explicit out-of-scope and emergency escalation safeguards are central to the design.
- Clinical deployment requires prospective evaluation with patients and care teams.

## Source

- DOI: [10.3390/bioengineering12111219](https://doi.org/10.3390/bioengineering12111219)
- [Read the article](https://www.mdpi.com/2306-5354/12/11/1219)
