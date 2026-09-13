---
title: >-
  NCP-ArchPreview Technical Report: Moving towards Latent Space Language Models
  through Next Concept Prediction
summary: >-
  This technical report presents NCP-ArchPreview, a latent-space language model
  that extends standard next-token prediction with a second objective called
  Next Concept Prediction, or NCP. The idea is to predict discrete concepts that
  cover multiple tokens, rather than relying only on token-by-token forecasting.
  To build these concepts, the model constructs a product-quantized concept
  vocabulary directly from its hidden states. A dedicated Concept Module then
  predicts future concepts during training. Those predicted concepts are fed
  back into token-level generation so the model can use both concept-level and
  token-level signals. The authors train NTP and NCP jointly end-to-end, rather
  than treating the concept objective as a separate post-hoc add-on. They scale
  the system to 8.9 billion parameters and train it on 5.73 trillion tokens from
  the Dolma-3 dataset. The report claims this is the largest demonstration of a
  latent-space language model so far. In its experiments, NCP-ArchPreview
  reaches the final pretraining loss of OLMo-3-7B after using only 51.3% of the
  total training tokens. After full pretraining, it reports better downstream
  macro-average performance than OLMo-3-7B, including a large improvement on
  GSM8K. The paper also says controlled experiments show that gains come from
  both the latent architecture and the NCP objective. Another result is that the
  model can approach the training loss of a parameter-aligned 8.9B baseline
  while using 85% of the usual compute. The learned latent space remains useful
  after pretraining, since updating only the 17M-parameter VQ module gives a
  lightweight path for domain adaptation, and injecting concept representations
  into a DFlash2 drafter improves accepted length with minimal overhead.
whyItMatters: >-
  This work suggests that language models may become more efficient if they
  learn to predict higher-level concepts, not just the next token. If that holds
  up, it could reduce training cost and make adaptation to new domains cheaper
  and more flexible.
limitations: >-
  The evidence comes from a technical report and appears centered on a specific
  model family and training setup, so the results may not generalize broadly.
  The abstract does not provide full details on ablations, benchmark coverage,
  or failure cases, so it is hard to judge how robust the gains are across
  tasks. As with many large-scale pretraining studies, improvements may depend
  on the chosen data mix, model size, and compute budget rather than on the
  concept objective alone.
authors:
  - Jiaqi Cao
  - Chiyu Chen
  - Shuang Cheng
  - Xu Cheng
  - Beiya Dai
  - Yufan Feng
  - Kewen Ge
  - Ruijun Ge
  - Jiayi Huang
  - Yang Jiao
  - Dahua Lin
  - Zhouhan Lin
  - Yifan Liu
  - Yuliang Liu
  - Biqing Qi
  - Mowen Ruan
  - Junzhe Shen
  - Yunchong Song
  - Hao Sun
  - Zhongbo Tian
  - Yixuan Wang
  - Rubin Wei
  - Jiaxin Xiong
  - Kangyu Yang
  - Qian Yao
  - Qi Zhang
  - Bowen Zhou
sourceUrl: 'https://arxiv.org/abs/2609.10715'
sourceHost: arxiv.org
doi: 10.48550/arXiv.2609.10715
year: 2026
sourceContext: fulltext
capturedAt: '2026-09-13T19:20:12.720Z'
draft: false
---
## Summary
This technical report presents NCP-ArchPreview, a latent-space language model that extends standard next-token prediction with a second objective called Next Concept Prediction, or NCP. The idea is to predict discrete concepts that cover multiple tokens, rather than relying only on token-by-token forecasting. To build these concepts, the model constructs a product-quantized concept vocabulary directly from its hidden states. A dedicated Concept Module then predicts future concepts during training. Those predicted concepts are fed back into token-level generation so the model can use both concept-level and token-level signals. The authors train NTP and NCP jointly end-to-end, rather than treating the concept objective as a separate post-hoc add-on. They scale the system to 8.9 billion parameters and train it on 5.73 trillion tokens from the Dolma-3 dataset. The report claims this is the largest demonstration of a latent-space language model so far. In its experiments, NCP-ArchPreview reaches the final pretraining loss of OLMo-3-7B after using only 51.3% of the total training tokens. After full pretraining, it reports better downstream macro-average performance than OLMo-3-7B, including a large improvement on GSM8K. The paper also says controlled experiments show that gains come from both the latent architecture and the NCP objective. Another result is that the model can approach the training loss of a parameter-aligned 8.9B baseline while using 85% of the usual compute. The learned latent space remains useful after pretraining, since updating only the 17M-parameter VQ module gives a lightweight path for domain adaptation, and injecting concept representations into a DFlash2 drafter improves accepted length with minimal overhead.
## Why This Matters
This work suggests that language models may become more efficient if they learn to predict higher-level concepts, not just the next token. If that holds up, it could reduce training cost and make adaptation to new domains cheaper and more flexible.
## Caveats and Limitations
The evidence comes from a technical report and appears centered on a specific model family and training setup, so the results may not generalize broadly. The abstract does not provide full details on ablations, benchmark coverage, or failure cases, so it is hard to judge how robust the gains are across tasks. As with many large-scale pretraining studies, improvements may depend on the chosen data mix, model size, and compute budget rather than on the concept objective alone.
## Key Takeaways
- Adds a concept-level prediction objective on top of next-token prediction.
- Builds concepts with product quantization over hidden states.
- Trains token-level and concept-level objectives jointly end-to-end.
- Reports better efficiency and downstream performance than OLMo-3-7B.
- Shows the latent space can also help with post-training adaptation and drafting.
## Source
- DOI: [10.48550/arXiv.2609.10715](https://doi.org/10.48550/arXiv.2609.10715)
- URL: [https://arxiv.org/abs/2609.10715](https://arxiv.org/abs/2609.10715)
