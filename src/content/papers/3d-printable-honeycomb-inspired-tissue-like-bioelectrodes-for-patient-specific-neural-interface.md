---
title: 3D-Printable, Honeycomb-Inspired Tissue-Like Bioelectrodes for Patient-Specific Neural Interface
summary: >-
  This paper presents a patient-specific electrocorticography interface called
  HiPGE, a honeycomb-inspired printable gel electrode designed to match the
  folded, individually variable surface of the brain. The platform combines MRI
  reconstruction, finite-element modelling, and direct-ink-writing 3D printing
  to make soft hydrogel electrode arrays tailored to a person's gyral anatomy.
  In simulations, the honeycomb architecture reduced bending stiffness,
  improved cortical contact, and avoided signal gaps compared with stiffer
  control designs. In bench tests, the PEDOT:PSS/polyurethane hydrogel electrode
  showed low impedance, high charge storage and injection capacity, and stable
  electrochemical performance during 28-day in vitro ageing tests. In awake rat
  recordings, personalized HiPGE devices recorded visual evoked potentials with
  stronger signal-to-noise than a conventional contralateral electrode array,
  especially at edge channels where rigid arrays usually lose contact.
whyItMatters: >-
  The work ties neural-interface performance to individual cortical geometry,
  not just electrode material. It shows a plausible manufacturing route for
  soft, conformal, low-impedance brain-surface electrodes that could make ECoG
  arrays less one-size-fits-all.
limitations: >-
  The patient-specific human component is demonstrated through reconstructed
  MRI models and printed brain models, not human implantation. In vivo
  functional validation is in rats, chronic histology is limited to a four-week
  window, and the authors report that data are available from corresponding
  authors on reasonable request rather than through a fully open dataset.
authors:
  - Marzia Momin
  - Luyi Feng
  - Xiaoai Chen
  - Salahuddin Ahmed
  - Basma AlMahmood
  - Li-Pang Huang
  - Jiashu Ren
  - Xinyi Wang
  - Hyunjin Lee
  - Samuel R. Cramer
  - Nanyin Zhang
  - Sulin Zhang
  - Tao Zhou
theme: "Neural Interfaces & Living Systems"
sourceUrl: 'https://advanced.onlinelibrary.wiley.com/doi/10.1002/adma.202516291'
sourceHost: advanced.onlinelibrary.wiley.com
doi: 10.1002/adma.202516291
year: 2026
journal: Advanced Materials
sourceContext: fulltext
capturedAt: '2026-05-05T18:45:00+01:00'
draft: false
---
## Summary
This paper is about making brain-surface electrodes that fit the brain in front of them, rather than forcing a standard flat array onto a highly folded and individually variable cortex.

The authors call their device a **honeycomb-inspired printable gel electrode**, or **HiPGE**. It is a soft electrocorticography (ECoG) interface made from printed PDMS encapsulation layers and a conductive PEDOT:PSS/polyurethane hydrogel electrode layer. The important design move is that the device is not just soft. It is shaped around the patient's own cortical anatomy.

The workflow has three linked parts:

- MRI scans are used to reconstruct individual cortical geometry.
- Finite-element analysis is used to tune the layout, softness, contact, and predicted strain.
- Direct ink writing is used to print a honeycomb electrode array matched to the target surface.

In the paper, the team reconstructed 21 human brain models from the OASIS database and used these to show how much gyral patterns vary between individuals. They then selected five reconstructed models and designed personalized HiPGE layouts for sensorimotor regions. The honeycomb lattice is meant to give the array flexibility, mechanical robustness, open space for fluid exchange, and more conformal contact with curved cortical folds.

## What They Built
HiPGE is a multilayer printed device with:

- a soft PDMS bottom encapsulation layer;
- a conductive hydrogel electrode layer;
- a PDMS top encapsulation layer;
- an interface region, an interconnect region, and an input/output region.

The electrode layer uses a PEDOT:PSS/polyurethane hydrogel. This matters because neural tissue communicates through ions, while electronics conduct electrons. Hydrogels can support ionic contact with tissue, while conducting polymers support electronic transport, reducing the impedance penalty at the tissue-device interface.

The honeycomb structure is doing mechanical work. It makes the array easier to bend and stretch without abandoning coverage. It also leaves open pores rather than forming a sealed sheet over the cortex.

## Main Findings
The modelling results support the mechanical premise. The authors report that HiPGE more closely matched the low stiffness of brain tissue than non-porous or stiffer control materials. Under simulated settling onto cortical tissue, HiPGE had closer average contact with the brain surface than PDMS and SBS controls. The same modelling predicted better electrode connectivity because the personalized array stayed nearer to the cortical surface.

The electrical results were also favourable. Across tested frequencies from 1 Hz to 100,000 Hz, HiPGE had impedance below 10 kOhm, while platinum and stainless-steel controls were much higher. Cyclic voltammetry suggested higher charge storage and charge injection capacity than the metal controls. The authors attribute this to the porous, hydrated conducting-polymer hydrogel, which increases effective interface area and supports both capacitive and pseudocapacitive charge transfer.

The stability tests are useful but still early-stage. HiPGE electrodes were aged in PBS for 28 days at 50 C, which the authors interpret as equivalent to about 69 days at physiological temperature. They also tested devices in artificial cerebrospinal fluid at 37 C under dynamic agitation for 28 days. Impedance, charge storage, and charge injection remained stable across those in vitro tests.

The in vivo functional test used awake rats. Each animal carried a personalized HiPGE over one visual cortex and a conventional array over the contralateral cortex. The authors collected hundreds of visual evoked potential trials. Waveform timing and amplitude variance were broadly comparable, but HiPGE showed higher signal-to-noise, especially at edge channels where contact is usually more vulnerable.

## Why This Matters
The paper's central argument is that neural interfaces should be personalized at the level of mechanical fit. Brain folds are not a nuisance detail. They determine where electrodes actually touch tissue, how much the implant deforms tissue, and how stable the signal is likely to be.

This makes the paper interesting beyond the specific hydrogel chemistry. It is a manufacturing and design framework: MRI to model, model to patient-specific layout, layout to printed soft electrode. If that loop can be made reliable clinically, it could reduce the mismatch between individualized neuroanatomy and standardized electrode arrays.

The honeycomb design is also a neat compromise. A very soft sheet can conform, but may be hard to handle or may block fluid movement. A rigid grid is easier to handle but often loses contact. HiPGE tries to sit between those extremes: soft, porous, stretchable, printable, and shaped to the patient.

## Caveats
- The human-personalized part is anatomical and manufacturing validation, not human implantation.
- The live recording validation is in rats, so translation to human neurosurgical use remains open.
- Four-week histology is reassuring but does not settle long-term chronic implantation risk.
- The device was compared with a conventional printed-control style array in rats, not the full range of clinically used ECoG devices.
- The modelling excludes some viscoelastic effects that may matter under chronic or cyclic loading.
- The data availability statement says the data are available from the corresponding author on reasonable request.

## Bottom Line
This is a strong engineering proof-of-concept for patient-specific, soft ECoG arrays. The most important contribution is not merely that the electrode is flexible, but that it combines conformal mechanics, low-impedance hydrogel electrodes, and anatomy-specific 3D printing into one coherent neural-interface workflow.

## Source
- DOI: [10.1002/adma.202516291](https://doi.org/10.1002/adma.202516291)
- URL: [https://advanced.onlinelibrary.wiley.com/doi/10.1002/adma.202516291](https://advanced.onlinelibrary.wiley.com/doi/10.1002/adma.202516291)
- Full text used: [PubMed Central author manuscript](https://pmc.ncbi.nlm.nih.gov/articles/PMC13016203/)
