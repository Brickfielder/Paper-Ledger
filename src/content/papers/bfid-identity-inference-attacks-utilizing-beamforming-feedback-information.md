---
title: "BFId: Identity Inference Attacks Utilizing Beamforming Feedback Information"
summary: >-
  Todt, Morsbach and Strufe introduce BFId, an identity inference attack that
  uses WiFi beamforming feedback information rather than the channel state
  information more commonly studied in WiFi sensing. Beamforming feedback is
  broadcast unencrypted by ordinary WiFi clients during channel sounding, making
  it easier for a passive adversary with commodity hardware to collect. The
  authors built a new dataset of WiFi recordings from 197 participants, including
  beamforming feedback and CSI recordings across walking styles and perspectives.
  A deliberately simple recurrent model identified people from normal walking
  sequences using beamforming feedback with 99.5% accuracy, remained robust when
  reports were time-coarsened, and outperformed the same attack applied to CSI in
  the authors' direct comparisons.
whyItMatters: >-
  The paper reframes WiFi sensing as a privacy problem, not only a sensing
  capability. It shows that beamforming feedback, already part of modern WiFi
  infrastructure, can expose biometric identity signals without specialist CSI
  hardware or explicit user participation. That makes it relevant to future WiFi
  sensing standards, smart-building deployments and the broader question of how
  everyday communications infrastructure becomes an ambient measurement system.
limitations: >-
  The dataset is much larger than prior WiFi identification datasets, but still
  far smaller than a true smart-city or large-enterprise population. Recordings
  were collected under controlled conditions, including constraints on clothing
  and movement, so real-world performance may differ. The model also uses a
  closed-set softmax classifier, leaving open how well the attack would handle
  people absent from the training set.
authors:
  - Julian Todt
  - Felix Morsbach
  - Thorsten Strufe
theme: "Frontier Physical Systems & Enabling Technologies"
sourceUrl: https://doi.org/10.1145/3719027.3765062
sourceHost: dl.acm.org
doi: 10.1145/3719027.3765062
year: 2025
journal: "Proceedings of the 2025 ACM SIGSAC Conference on Computer and Communications Security"
sourceContext: fulltext
capturedAt: '2026-05-26T19:42:47+01:00'
draft: false
---
## Summary

This ACM CCS paper asks whether beamforming feedback information, or BFI, can
be used for identity inference. WiFi sensing research has shown that wireless
signals contain information about the environment, including human presence,
movement and identity. Much of that work uses channel state information, but CSI
is comparatively hard to collect because it often requires modified firmware and
specific hardware. BFI changes the threat model. Modern WiFi beamforming
requires clients to report compressed channel information back to an access
point, and those reports are transmitted over the air without encryption.

The authors introduce BFId as a first attack built around this channel. Rather
than optimizing a highly specialized sensing pipeline, they use a simple
recurrent neural network on raw BFI or CSI sequences to establish a practical
lower bound on the privacy risk. They then collect a dataset with 197
participants, recording both BFI and CSI across multiple walking styles and
perspectives.

The main result is stark. On normal walking sequences, BFId identifies
participants from BFI with 99.5% accuracy. The attack remains robust when the
number of beamforming reports is reduced, suggesting that simple time-coarsening
would not be enough as a mitigation. In a direct comparison, BFI performs better
than CSI in the authors' setup, despite CSI having higher temporal resolution.
The authors suggest that the BFI compression may act as a kind of useful
pre-processing, and that BFI may preserve spatial information especially well.

The paper also tests whether identity inference transfers across altered
walking styles and perspectives. BFI remains reliable when participants walk
with a backpack, carry a crate, walk quickly or pass through a turnstile, while
CSI degrades more strongly. Recordings from different perspectives are generally
not interchangeable, but BFI is easy to collect from multiple perspectives with
a single malicious node because the feedback reports are broadcast.

## Why This Matters

BFId matters because it exposes a privacy surface in ordinary communications
infrastructure. The problem is not that WiFi can be repurposed for sensing in a
laboratory. The sharper point is that a mechanism already deployed for better
network performance can leak biometric information to an adversary with a weaker
model than CSI attacks require.

That makes the paper especially relevant to standardization. If WiFi sensing and
joint communication-and-sensing systems are pursued without privacy protections,
then identity inference may become an ambient side effect of connectivity. The
paper is a useful technical warning: sensing performance and privacy risk are
the same signal viewed from different sides.

## Caveats and Limitations

The experiments are controlled. Clothing and walking conditions were constrained
so that gait could be captured clearly, and the setting is still simpler than a
busy public or domestic environment with overlapping motion, changing furniture
and interference from other networks. The dataset is large for this literature,
but the authors explicitly note that thousands of identities would be more
representative of large organizations or smart-city deployments.

The model is also closed-set. It identifies among people present in the training
data, rather than testing open-set recognition where an unknown person might
appear. The authors use a simple model and no heavy pre-processing, which is
helpful for establishing risk, but it also means the reported performance is not
necessarily the ceiling.

## Key Takeaways

- Beamforming feedback reports can carry biometric identity information.
- BFId identified participants from BFI with 99.5% accuracy in the authors'
  normal-walking experiment.
- BFI required a weaker adversary model than CSI because it is broadcast
  unencrypted and can be collected with common hardware.
- The attack remained robust across reduced sample rates, walking-style changes
  and multiple same-perspective settings.
- The work argues for privacy protections in WiFi sensing and future
  joint-communication-and-sensing standards.

## Source

- DOI: [10.1145/3719027.3765062](https://doi.org/10.1145/3719027.3765062)
- Local full text: `/home/marco/Downloads/3719027.3765062.pdf`
