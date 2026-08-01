---
title: "CapuchinAI 1.0: Development of a Machine Learning-Based Touchscreen Paradigm to Test Cognition in Wild Capuchins"
summary: >-
  Vargas and colleagues introduce CapuchinAI v1.0, a portable,
  field-deployable touchscreen system designed to bring controlled cognitive
  testing into natural primate habitats. It combines a Raspberry Pi touchscreen
  and automated food dispenser with a YOLO-based capuchin-recognition pipeline.
  In a two-week pilot with two habituated groups of wild white-faced capuchins
  in Costa Rica, 16 individuals interacted with the device, 10 learned to
  trigger rewards by touching the screen and 8 formed robust screen-reward
  associations. The authors present it as the first stage toward individualised,
  longitudinal cognitive testing in the wild.
whyItMatters: >-
  CapuchinAI offers a practical way to reduce the usual trade-off between
  experimental control and ecological validity. If developed as planned, it
  could deliver repeatable, tailored tasks to identified animals in their own
  social and ecological settings, producing longitudinal data on cognitive
  variation that are very difficult to collect using either conventional field
  observations or laboratory studies alone.
limitations: >-
  This is a feasibility demonstration rather than evidence about capuchin
  cognition itself. The current field deployment performs species-level
  detection, not reliable individual recognition, and initially tested only a
  simple screen-reward association. Voluntary participation, preferential use
  by particular age-sex groups and food-based rewards can produce sampling bias
  and may limit portability to other populations or species.
authors:
  - Federico Sánchez Vargas
  - Sai Rakshith Potluri
  - Jacob Abernethy
  - Marcela E. Benítez
theme: "Cognition, Prediction & Mental Experience"
sourceUrl: https://doi.org/10.1002/ajp.70194
sourceHost: doi.org
doi: 10.1002/ajp.70194
year: 2026
journal: American Journal of Primatology
sourceContext: fulltext
capturedAt: '2026-08-01T19:15:00+01:00'
draft: false
---

## Summary

This methods paper describes CapuchinAI v1.0, a portable touchscreen station
for testing cognition in wild white-faced capuchins (*Cebus imitator*). The
aim is to preserve the ecological validity of field research while introducing
more of the repeatability and experimental control associated with laboratory
cognitive testing.

The apparatus combines a Raspberry Pi, infrared touchscreen overlay, webcam,
speaker, video-recording pipeline and a 3D-printed dispenser holding food
rewards. A modified YOLO-based computer-vision model detects a capuchin
approaching the station, starts recording, presents a stimulus and dispenses a
reward after a touch. The project has also developed a higher-performing
MultipleCapuchins facial-recognition model for six known animals, reporting
97.5% precision and 98.2% recall; however, the pilot deployment deliberately
used the simpler species-detection version to habituate as many animals as
possible.

During two weeks of presentations to two habituated groups at the Taboga Forest
Reserve in Costa Rica, 16 capuchins voluntarily interacted with the system. Ten
learnt to obtain food rewards by touching the screen, and eight showed robust
screen-reward associations, including anticipatory behaviour around reward
delivery. Five of these retained the association after a week without contact
with the apparatus.

The longer-term design is more ambitious. When individual-level identification
is reliably integrated, the station is intended to retrieve each animal's
testing history, assign the next appropriate task and adapt difficulty over
time. The authors envisage a modular battery spanning learning, memory,
inhibitory control, flexibility and social decision-making, coupled with
longitudinal behavioural, demographic, ecological and hormonal data.

## Why This Matters

Field cognition research is often constrained by one-off trials, uneven
participation and the difficulty of knowing who is taking part. A station that
can identify animals, administer repeated standardised tasks and record
performance automatically could make individual cognitive trajectories
measurable in the environments where those abilities evolved.

The paper is also unusually clear that machine learning is an enabling tool,
not a replacement for field expertise. Its value lies in pairing automated
data collection with the rich behavioural and ecological understanding that
long-term primate field projects already provide.

## Caveats and Limitations

This is a proof-of-feasibility study. In the current version, the operational
station detects the species, while individual facial recognition remains the
next development stage. The pilot therefore demonstrates habituation and a
basic association, rather than individualised cognitive testing or performance
on a validated cognitive battery.

Participation is voluntary and uneven. Adult and subadult males used the
apparatus most often, while some animals were displaced, so the data may not
represent the full group. Food rewards may also be unacceptable or impractical
at other field sites. The authors further emphasise the need for continuing
human validation of model outputs, particularly as behavioural classification
becomes more complex.

## Key Takeaways

- Introduces a portable AI-enabled touchscreen and reward station for wild
  capuchin cognitive research.
- Combines real-time capuchin detection, video capture, touchscreen task
  presentation and automated rewards.
- In the pilot, 16 animals interacted, 10 triggered rewards and 8 formed
  robust screen-reward associations.
- The underlying individual-recognition model reported 97.5% precision and
  98.2% recall in its initial evaluation.
- The current field setup uses species detection; individualised testing is a
  planned next stage.
- Aims to enable longitudinal, standardised cognitive testing while retaining
  the ecological context of wild primate behaviour.

## Source

- DOI: [10.1002/ajp.70194](https://doi.org/10.1002/ajp.70194)
