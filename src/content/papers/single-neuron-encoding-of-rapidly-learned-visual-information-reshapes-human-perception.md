---
title: "Single-neuron encoding of rapidly learned visual information reshapes human perception"
summary: >-
  Armendariz and colleagues recorded activity from 1,104 neurons in visual and medial temporal regions while 13 people with drug-resistant epilepsy learned to recognize degraded two-tone “Mooney” images. Participants typically recognized an image after one or a few pairings with its grayscale version: recognition rose from about 4% before learning to 83% afterward. After learning, neurons in occipital cortex and medial temporal lobe carried information about the newly recognized images. Occipital activity became selective later than it did for intact grayscale pictures, and medial temporal responses to learned images lagged by about 110 ms compared with grayscale images. Population decoding improved for Mooney-image identity after learning, from 62% to 80% in occipital cortex; parahippocampal and medial temporal populations became decodable after learning where they had not been before. The authors propose that visual cortex can support this rapid perceptual change through additional recurrent processing, with later medial temporal activity reflecting downstream processing rather than necessary feedback. The recordings reveal timing and coding changes associated with learning, but do not establish the causal direction of information flow.
whyItMatters: >-
  The study shows how a single brief learning experience can change what a person sees and how that new interpretation appears in the activity of individual human neurons. Its timing results offer constraints for models of perception: recognition of newly learned degraded images takes longer than recognition of clear images, and information appears in visual cortex before later responses in memory-related regions.
limitations: >-
  The neuronal recordings came from 13 patients undergoing epilepsy monitoring, and electrode placement was determined clinically, so the sampled regions and people are not representative of the general population. The study is correlational: delayed medial temporal activity is consistent with downstream processing, but without selective perturbation it cannot prove that recognition does not rely on medial temporal feedback. Population decoding used pseudopopulations pooled across recording sessions, which cannot demonstrate that a single simultaneously active circuit performs the decoding. The task used a limited set of images and a specialized recognition phenomenon; broader generalization to everyday object learning remains to be established.
authors:
  - Marcelo Armendariz
  - Julie Blumberg
  - Jed Singer
  - Franz Aiple
  - Jiye Kim
  - Nuria Domínguez-Iturza
  - Armin Brandt
  - Peter Reinacher
  - Andreas Schulze-Bonhage
  - Gabriel Kreiman
sourceUrl: "https://www.nature.com/articles/s41593-026-02496-6"
sourceHost: "nature.com"
doi: "10.1038/s41593-026-02496-6"
year: 2026
journal: "Nature Neuroscience"
sourceContext: fulltext
capturedAt: "2026-11-04T16:00:00+00:00"
draft: false
---

## Summary

Some pictures are easy to recognize only after someone tells us what they show. A **Mooney image** is a picture reduced to black and white, with no shades of grey. Before learning, it can look like a meaningless arrangement of shapes. After seeing the original grayscale image, the same two-tone picture may suddenly become recognizable—and remain recognizable when shown again. The authors used this effect to study how a brief learning experience changes perception in the human brain.

Thirteen adults with drug-resistant epilepsy took part while already implanted with electrodes for clinical seizure monitoring. The researchers recorded spikes from 1,104 individual neurons across 34 sessions in medial occipital cortex, parahippocampal cortex, entorhinal cortex, hippocampus and amygdala. Participants first saw Mooney images they could not identify. They then saw a brief learning sequence pairing the original grayscale image with its Mooney version, and were tested again. On average, recognition required only one or a few pairings. Accuracy for Mooney images rose from about 4% before learning to 83% after learning; grayscale images were recognized at about 93%.

Before learning, neurons in occipital cortex responded to clear grayscale pictures but showed little preference for which Mooney image was presented. After learning, occipital neurons became more selective for the learned Mooney images. That selectivity appeared later than the responses to grayscale images, around 300–350 milliseconds after image onset rather than roughly 100–150 milliseconds. In the medial temporal lobe, learned-image selectivity emerged later still, around 350–400 milliseconds. Parahippocampal neurons did not show a reliable increase in selectivity in the single-neuron analysis.

The authors also asked whether patterns of activity across neurons could identify which image a participant was seeing. Linear classifiers decoded Mooney-image identity from occipital activity both before and after learning, but accuracy improved from about 62% to 80%. In parahippocampal cortex and the broader medial temporal group, image identity was not reliably decoded before learning but became decodable afterward, at about 63% and 57%, respectively. These classifiers used pseudopopulations, assembled from neurons recorded across sessions rather than simultaneously from one complete neural population.

The timing provides the authors’ main mechanistic interpretation. Occipital cortex contains information about the learned image earlier than medial temporal structures do. They suggest that visual cortex may resolve the image through additional recurrent processing—repeated interactions within visual cortex or with other neocortical areas—before later signals reach memory-related regions. The findings are consistent with the idea that medial temporal feedback is not required to produce this rapid recognition effect. However, because the study recorded activity rather than selectively disrupting connections, it cannot establish the direction or necessity of the information flow.

A separate eye-tracking experiment in ten healthy participants found similar behavioral learning and little difference in eye movements across conditions. This helps address the possibility that the neural effects simply reflected participants looking differently at recognized pictures, although it does not make the intracranial patient recordings representative of healthy brains.

## Why This Matters

The experiment connects a familiar perceptual experience—suddenly recognizing a picture after being shown what it depicts—to changes in the firing of individual human neurons. The brain does not merely register a new label: after learning, activity in visual and medial temporal regions carries information about the degraded image itself.

The delayed response to learned images is also informative. Recognizing a clear picture is fast, while interpreting an initially ambiguous picture requires extra processing time. The study suggests that this extra time is reflected in visual-cortical activity before later responses in medial temporal regions. That timing can help constrain computational accounts of how prior knowledge changes perception after only a few examples.

## Caveats and Limitations

- The single-neuron recordings came from 13 people undergoing epilepsy monitoring. Electrode locations were chosen for clinical reasons, not to sample the brain systematically, and neural activity in these patients may not fully represent typical perception.
- The study identifies associations and timing differences, not causal pathways. The later medial temporal response is consistent with downstream processing, but the authors did not selectively disrupt medial temporal input to prove that it is unnecessary.
- The population decoders pooled neurons across separate recording sessions. They show that the recorded responses contain image information, but do not demonstrate that a single simultaneously recorded circuit uses that information in the same way.
- The experiment focused on a small set of degraded images and a particular form of rapid recognition. Further work is needed to establish how far the results extend to ordinary object learning, other visual tasks and other kinds of learning.
- Single-neuron sampling provides detail about recorded cells but leaves much of the broader network unobserved. The proposal that recurrent visual processing explains the delayed recognition response remains a mechanistic interpretation to be tested.

## Key Takeaways

- Seeing an intact grayscale picture once or a few times can make its ambiguous two-tone version recognizable.
- After learning, neurons in occipital cortex and medial temporal regions carry more information about the identity of the degraded images.
- Occipital neurons show learned-image selectivity later than they respond to clear images; medial temporal responses appear later still.
- Decoding of image identity improved after learning, especially in occipital cortex.
- The results are consistent with additional recurrent visual processing supporting recognition before later medial temporal activity, but recordings alone cannot prove this causal account.

## Source

- Published in *Nature Neuroscience* on 4 November 2026.
- DOI: [10.1038/s41593-026-02496-6](https://doi.org/10.1038/s41593-026-02496-6)
- [Read the full article](https://www.nature.com/articles/s41593-026-02496-6)
- [Data and analysis code](https://kreimanlab.com/code/rapid-visual-learning-in-the-human-brain/)
