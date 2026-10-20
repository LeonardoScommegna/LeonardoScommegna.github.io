---
title: "Optimizing Bucket-Based Software Rejuvenation in Microservices Subject To Variable Workload"
authors: "L. Scommegna, A. Avritzer, L. Carnevali, A. Janes, H. Rodrigues, E. Vicario"
collection: publications
venue-type: "workshop"
date: "2026-10-20"
venue: 'International Workshop on Software Aging and Rejuvenation (WoSAR)'
paper-id: "WoSAR-2026"
pdf: "/papers/WoSAR-2026.pdf"
slides: "/talks/talk-WoSAR-2026.pdf"
doi: ""
github: "https://github.com/oris-tool/WoSAR-2026-bucket-system-rep-pkg"
abstract: 'Modern microservices architectures are designed for continuous operations but remain highly susceptible to software aging, a progressive degradation that causes increased response times and potential system failures. While software rejuvenation (i.e., controlled restart) is a common countermeasure, determining optimal rejuvenation instants is difficult under time-varying workload, as transient load spikes can easily be mistaken for aging symptoms.
Existing bucket-based monitoring algorithms can filter out latency fluctuations due to load, but lack systematic guidelines to configure the number and depth of buckets. 
We propose a Generalized Stochastic Petri Net (GSPN) model of a microservice subject to variable workload and bucket-based software rejuvenation, using Bernstein Phase Type (BPH) distributions to represent stochastic durations.
To quantitatively evaluate the interactions among workload profiles, aging accumulation, and bucket-based rejuvenation policies, we analyze the model under different workload patterns and bucket configurations. The experimental results provide actionable insights into how the bucket parameterization impacts the system throughput, availability, and Quality of Service (QoS) violations.'
bibtex: |
  @inproceedings{scommegna2026optimizing,
    title={Optimizing Bucket-Based Software Rejuvenation in Microservices Subject To Variable Workload},
    author={Scommegna, Leonardo and Avritzer, Alberto and  Carnevali, Laura and Janes, Andrea and  Rodrigues, Helena and Vicario, Enrico},
    booktitle={2026 IEEE International Symposium on Software Reliability Engineering Workshops (ISSREW)},
    year={2026},
    organization={IEEE}
  }
---

