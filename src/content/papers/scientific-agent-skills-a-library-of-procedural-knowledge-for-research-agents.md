---
title: 'Scientific Agent Skills: A Library of Procedural Knowledge for Research Agents'
summary: >-
  This paper introduces Scientific Agent Skills, an open library of 163
  procedural skills for research agents across 16 areas of practice. The authors
  frame the problem as a procedural one: language-model agents can often produce
  working code for scientific analysis, but that code may still violate
  field-specific conventions and produce indefensible results. To address this,
  they package each skill as a directory centered on a human-readable SKILL.md
  file with a constrained YAML header and optional references, scripts, and
  assets. The design uses progressive disclosure, so an agent sees only brief
  names and descriptions at startup and reads the full instructions only when a
  task appears relevant. The library is intended to be portable and reviewable
  as text rather than tied to a specific runtime or API. The paper describes the
  repository structure and the kinds of scientific workflows covered, including
  biology, chemistry, medicine, physical sciences, and scientific communication.
  It also explains that the skills were largely authored by the team, often
  beginning with language-model drafts that were then manually reviewed and
  tested for basic functionality. A key methodological choice is that the paper
  is a resource description, not a task-level evaluation of whether installing
  the skills improves scientific analysis. Instead, the authors measure
  properties of the documentation corpus itself. One measurement looks at how
  lexically distinct the short skill descriptions are when they remain in
  context. Another checks whether the skills referenced by example workflows fit
  within a context window. The paper also reports repository-level validation
  and security scanning results, showing that the library is actively checked
  for structural issues and potential risks. The authors are careful to note
  that these checks do not establish scientific correctness, only that the files
  conform to the library's rules and that certain code and path properties hold.
  Overall, the work is best understood as an infrastructure and curation paper
  for procedural scientific knowledge rather than evidence that the library
  improves downstream analysis on its own.
whyItMatters: >-
  This matters because many agent failures in science come from missing
  procedural conventions rather than broken code. A structured skill library
  could make it easier for agents to follow field-specific rules without
  rediscovering them each time.
limitations: >-
  The paper does not provide a task-level evaluation of whether the skills
  actually improve scientific reasoning or research outcomes. Most skills were
  authored by the same team, so the collection has not yet been independently
  audited for completeness, balance, or correctness. The reported checks and
  scans are useful for repository quality, but they are not a substitute for
  domain validation or real-world benchmark evidence.
authors:
  - Timothy Kassis
  - Vinayak Agarwal
  - Yuhuan He
  - Darshil Patel
  - Aubrey M. Brueckner
sourceUrl: 'https://arxiv.org/pdf/2609.00065'
sourceHost: arxiv.org
year: 2026
sourceContext: fulltext
capturedAt: '2026-09-03T06:34:40.292Z'
draft: false
---
## Summary
This paper introduces Scientific Agent Skills, an open library of 163 procedural skills for research agents across 16 areas of practice. The authors frame the problem as a procedural one: language-model agents can often produce working code for scientific analysis, but that code may still violate field-specific conventions and produce indefensible results. To address this, they package each skill as a directory centered on a human-readable SKILL.md file with a constrained YAML header and optional references, scripts, and assets. The design uses progressive disclosure, so an agent sees only brief names and descriptions at startup and reads the full instructions only when a task appears relevant. The library is intended to be portable and reviewable as text rather than tied to a specific runtime or API. The paper describes the repository structure and the kinds of scientific workflows covered, including biology, chemistry, medicine, physical sciences, and scientific communication. It also explains that the skills were largely authored by the team, often beginning with language-model drafts that were then manually reviewed and tested for basic functionality. A key methodological choice is that the paper is a resource description, not a task-level evaluation of whether installing the skills improves scientific analysis. Instead, the authors measure properties of the documentation corpus itself. One measurement looks at how lexically distinct the short skill descriptions are when they remain in context. Another checks whether the skills referenced by example workflows fit within a context window. The paper also reports repository-level validation and security scanning results, showing that the library is actively checked for structural issues and potential risks. The authors are careful to note that these checks do not establish scientific correctness, only that the files conform to the library's rules and that certain code and path properties hold. Overall, the work is best understood as an infrastructure and curation paper for procedural scientific knowledge rather than evidence that the library improves downstream analysis on its own.
## Why This Matters
This matters because many agent failures in science come from missing procedural conventions rather than broken code. A structured skill library could make it easier for agents to follow field-specific rules without rediscovering them each time.
## Caveats and Limitations
The paper does not provide a task-level evaluation of whether the skills actually improve scientific reasoning or research outcomes. Most skills were authored by the same team, so the collection has not yet been independently audited for completeness, balance, or correctness. The reported checks and scans are useful for repository quality, but they are not a substitute for domain validation or real-world benchmark evidence.
## Key Takeaways
- Proposes a file-based “skill” format for storing procedural knowledge for research agents.
- Releases an open library of 163 skills spanning 16 scientific and communication areas.
- Uses progressive disclosure so agents load detailed instructions only when needed.
- Measures documentation properties, not downstream scientific task performance.
- Includes repository validation and security scanning, but these do not prove scientific correctness.
## Source
- URL: [https://arxiv.org/pdf/2609.00065](https://arxiv.org/pdf/2609.00065)
