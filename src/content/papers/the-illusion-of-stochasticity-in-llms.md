---
title: 'The Illusion of Stochasticity in LLMs'
summary: >-
  This paper tests whether language models can produce samples from a
  user-specified probability distribution, as an agent may need to do when
  following a randomized policy. Across 1,024 repeated generations per setup,
  the authors find strong output biases when models are directly asked to draw
  independent samples from simple targets such as uniform choices or Gaussian
  distributions. In one security-patrol example, models told to inspect four
  servers uniformly instead favored particular servers; the attacker’s
  best-response success rate rose to 96.6% and 99.9%, compared with the
  optimal 75% under genuinely uniform randomization. Changing temperature,
  top-p, top-k, or asking for chain-of-thought did not reliably fix direct
  sampling. The paper separates generating randomness from transforming it:
  models can often convert an externally supplied uniform random number into
  a target distribution, and larger models can sometimes simulate a seeded
  pseudorandom generator, but direct independent draws remain unreliable in
  the tested setups. Sequential or batched prompting sometimes improves
  uniform-frequency estimates while introducing dependence, periodicity,
  counting errors, or poor Gaussian sampling. The practical implication is
  that an LLM’s varied-looking answers are not evidence that it is sampling
  according to the intended policy; agent systems that need calibrated
  randomness should use an external random-number generator.
whyItMatters: >-
  An agent can reason correctly about what probabilities it should use and
  still behave predictably if its generated actions do not follow those
  probabilities. This matters for randomized security policies, fair
  allocation, randomized evaluations, and other settings where an adversary
  or downstream decision depends on the intended distribution.
limitations: >-
  The evidence is empirical and based on the tested model families, prompts,
  decoding settings, sample sizes, and distributions; it does not show that
  every possible LLM or generation setup will fail identically. The paper
  studies prompted text outputs and selected tool-assisted or seeded
  alternatives, rather than every architecture for structured action sampling.
  Some proposed workarounds, such as sequential prompting, can be slow and
  still exhibit temporal bias. Converting external randomness or using a
  proper external sampler remains a different capability from generating
  independent randomness internally.
authors:
  - Xiangming Gu
  - Soham De
  - Michalis K. Titsias
  - Larisa Markeeva
  - Petar Veličković
  - Razvan Pascanu
sourceUrl: 'https://arxiv.org/abs/2604.06543'
sourceHost: arxiv.org
doi: 10.48550/arXiv.2604.06543
year: 2026
journal: Conference on Language Modeling (COLM) 2026
sourceContext: fulltext
capturedAt: '2026-10-29T21:43:04.774Z'
draft: false
---
## Summary
The paper asks a simple but important question: if you tell a language model to choose randomly, does it actually follow the probability distribution you specify? The authors’ answer is generally no for the direct, independent text-generation setups they tested. A model may understand that each of four choices should have a 25% chance, yet still favour one option because language models generate tokens using learned patterns and biases, rather than a dedicated random-number generator for the semantic choices the user asks them to make.

Across experiments, the authors prompted models to draw from simple targets, including discrete uniform choices and continuous uniform or Gaussian distributions. They repeated each setup 1,024 times and compared the observed frequencies with the target distribution using goodness-of-fit tests. Models often favoured particular numbers, ranges, or positions in the prompt. In one example, several Gemini models were asked to put the correct answer to a multiple-choice question uniformly in positions A–D; they showed a strong preference for C. In a security-patrol scenario, the intended policy was to inspect four servers uniformly. Because the models undersampled some servers, an attacker who chose the least-protected server could succeed at rates of 96.6% and 99.9% for two tested models, versus 75% under the truly uniform policy.

The authors tried common prompt and decoding adjustments. Changing temperature, top-p, or top-k did not make the tested outputs reliably match the requested distributions; asking for chain-of-thought or asking the model to answer directly also did not solve the problem. The order of the options could change which answers were favoured, suggesting positional effects as well as learned preferences.

They also tested workarounds. Asking for one sample at a time while including the full history, or asking for a large batch, could make some uniform-distribution results look closer to the target. But these approaches could create dependencies between successive answers, repetitive or periodic patterns, counting errors, and poor performance on Gaussian distributions. They are not dependable substitutes for a sampler.

The key distinction is between **creating randomness** and **using randomness**. When the model is given an external random seed or a random value from a uniform distribution, it can sometimes simulate a pseudorandom generator or transform that value into a different target distribution. This works better for some larger models and simpler transformations. The authors’ concern is that the model’s own variable text generation is not a reliable source of controlled randomness for a policy.

## Why This Matters
For an AI agent, choosing the right probabilities is not enough; its actions must actually follow them. If a security system is supposed to randomize patrols, a predictable bias can leave some targets exposed. The same principle applies to fair allocation and other uses where a system must produce samples with known statistical properties. When that matters, the random draw should come from a proper external generator, with the model used to decide what distribution is appropriate.

## Caveats and Limitations
These are empirical results for the models, prompts, decoding settings, tasks, and distributions examined in the paper. The results do not establish that every LLM or every structured-action interface will fail in exactly the same way. The paper evaluates text outputs and selected seeded, batched, sequential, and tool-based alternatives. Some alternatives improve particular tests but have their own limitations, especially temporal bias, latency, and errors in producing the requested number of samples.

A model’s ability to transform a supplied random value into a desired distribution is distinct from its ability to generate independent random values itself. The work supports using external sampling when calibrated randomness matters; it does not claim that an LLM can never participate in a randomized system.

## Key Takeaways
- LLMs can understand a request for random sampling yet produce biased frequencies.
- In the tested server-patrol example, the bias made the policy far more exploitable than true uniform randomization.
- Temperature, top-p, top-k, and chain-of-thought did not reliably correct direct sampling in the experiments.
- Sequential and batched prompts sometimes help with uniform frequencies but can introduce dependencies and other errors.
- Models can often use externally supplied randomness to transform or sample from target distributions; use a proper external sampler when correctness matters.

## Source
- arXiv: [2604.06543](https://arxiv.org/abs/2604.06543)
- DOI: [10.48550/arXiv.2604.06543](https://doi.org/10.48550/arXiv.2604.06543)
- Full text: [PDF](https://arxiv.org/pdf/2604.06543)
