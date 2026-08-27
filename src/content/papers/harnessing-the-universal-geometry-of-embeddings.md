---
title: Harnessing the Universal Geometry of Embeddings
summary: >-
  This paper asks whether text embeddings from different models can be
  translated into one another without any paired examples, shared encoders, or
  predefined matches. The authors frame this as a stronger version of the
  Platonic Representation Hypothesis: that separately trained language models
  may converge to a universal latent structure. To test this idea, they
  introduce vec2vec, a modular unsupervised translation method built from input
  adapters, a shared latent backbone, output adapters, adversarial training,
  reconstruction, cycle-consistency, and vector-space preservation losses. The
  method is designed to map embeddings from an unknown source space into a
  target embedding space while keeping their geometry intact. The setup assumes
  access only to a database of source embeddings plus a separate target encoder
  that can be queried, but not to the original source encoder or paired
  documents. The authors evaluate translation by asking how close translated
  vectors are to the true target embeddings of the same texts, using cosine
  similarity, top-1 alignment, and mean rank. They report that vec2vec can
  produce translations that align very closely with target embeddings across
  different model architectures, parameter counts, and training data. The paper
  also emphasizes that this is not just geometric alignment: translated
  embeddings can be used for downstream information extraction tasks such as
  zero-shot attribute inference and embedding inversion. In those experiments,
  the translated vectors are used to recover or infer sensitive properties of
  the underlying texts without access to the original encoder. The article
  argues that this raises security concerns because a database of embeddings
  alone may leak meaningful information about the source documents. A key
  methodological detail is that the approach relies on adversarial and
  cycle-consistency objectives rather than any supervised pairing between source
  and target points. The authors note that GAN-style training can be unstable,
  so they select among multiple initializations, which suggests the method may
  require careful tuning. Overall, the paper presents unsupervised embedding
  translation as both a proof of concept for a shared semantic geometry and a
  potential privacy risk when embeddings are exposed.
whyItMatters: >-
  If embeddings from one model can be translated into another space without
  paired data, then embedding databases may be much less private than people
  assume. That matters for retrieval systems, internal document stores, and any
  application where embeddings are shared but the raw text is meant to stay
  hidden.
limitations: >-
  The evidence comes from a specific experimental setup with selected model
  pairs and datasets, so it is not yet clear how broadly the method generalizes.
  The paper also relies on unstable adversarial training and multiple
  initializations, which can make results harder to reproduce or compare fairly.
  In addition, the security claims are demonstrated through downstream inference
  tasks rather than a full real-world attack evaluation.
authors:
  - Rishi Jha
  - Collin Zhang
  - Vitaly Shmatikov
  - John X. Morris
sourceUrl: 'https://arxiv.org/pdf/2505.12540'
sourceHost: arxiv.org
year: 2025
journal: NeurIPS 2025
sourceContext: fulltext
capturedAt: '2026-08-27T20:26:28.781Z'
draft: false
---
## Summary
This paper asks whether text embeddings from different models can be translated into one another without any paired examples, shared encoders, or predefined matches. The authors frame this as a stronger version of the Platonic Representation Hypothesis: that separately trained language models may converge to a universal latent structure. To test this idea, they introduce vec2vec, a modular unsupervised translation method built from input adapters, a shared latent backbone, output adapters, adversarial training, reconstruction, cycle-consistency, and vector-space preservation losses. The method is designed to map embeddings from an unknown source space into a target embedding space while keeping their geometry intact. The setup assumes access only to a database of source embeddings plus a separate target encoder that can be queried, but not to the original source encoder or paired documents. The authors evaluate translation by asking how close translated vectors are to the true target embeddings of the same texts, using cosine similarity, top-1 alignment, and mean rank. They report that vec2vec can produce translations that align very closely with target embeddings across different model architectures, parameter counts, and training data. The paper also emphasizes that this is not just geometric alignment: translated embeddings can be used for downstream information extraction tasks such as zero-shot attribute inference and embedding inversion. In those experiments, the translated vectors are used to recover or infer sensitive properties of the underlying texts without access to the original encoder. The article argues that this raises security concerns because a database of embeddings alone may leak meaningful information about the source documents. A key methodological detail is that the approach relies on adversarial and cycle-consistency objectives rather than any supervised pairing between source and target points. The authors note that GAN-style training can be unstable, so they select among multiple initializations, which suggests the method may require careful tuning. Overall, the paper presents unsupervised embedding translation as both a proof of concept for a shared semantic geometry and a potential privacy risk when embeddings are exposed.
## Why This Matters
If embeddings from one model can be translated into another space without paired data, then embedding databases may be much less private than people assume. That matters for retrieval systems, internal document stores, and any application where embeddings are shared but the raw text is meant to stay hidden.
## Caveats and Limitations
The evidence comes from a specific experimental setup with selected model pairs and datasets, so it is not yet clear how broadly the method generalizes. The paper also relies on unstable adversarial training and multiple initializations, which can make results harder to reproduce or compare fairly. In addition, the security claims are demonstrated through downstream inference tasks rather than a full real-world attack evaluation.
## Key Takeaways
- vec2vec translates embeddings between model spaces without paired data or shared encoders.
- The method is built around a shared latent representation plus adversarial, reconstruction, cycle-consistency, and vector-preservation losses.
- The paper presents this as evidence for a practical form of a universal latent structure for text embeddings.
- Translated embeddings can expose semantic information, including attributes and potentially recoverable document content.
- Results are promising but depend on adversarial training and are tested on a limited set of model and dataset combinations.
## Source
- URL: [https://arxiv.org/pdf/2505.12540](https://arxiv.org/pdf/2505.12540)
