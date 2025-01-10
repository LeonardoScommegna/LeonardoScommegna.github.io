---
title: "Quantitative evaluation of software rejuvenation of a pool of service replicas"
authors: "L. Scommegna, M. Becattini, G. Fontani, L. Paroli, E. Vicario"
collection: publications
venue-type: "workshop"
date: "2024-09-01"
venue: 'International Workshop on Software Aging and Rejuvenation (WoSAR)'
paper-id: "WoSAR-2024"
pdf: "/papers/WoSAR-2024.pdf"
slides: "/talks/talk-WoSAR-2024.pdf"
doi: "https://doi.org/10.1109/ISSREW63542.2024.00110"
github: "https://github.com/oris-tool/WoSAR-2024-replica-pool-rep-pkg"
zenodo: "https://doi.org/10.5281/zenodo.13370985"
abstract: 'Cloud-based systems require the management of large volumes of requests while maintaining specific levels of availability and performance. 
Each service is thus replicated into a pool of identical replicas. This allows for load distribution among the pool of replicas and a greater degree of fault tolerance compared to a single instance of the service that stands as a single point of failure.
The high availability and scalability requirements, coupled with the phenomenon of software aging, have made the replica-based approach pervasive in modern online services.
In such configurations, the unavailability of a single replica, due to scheduled maintenance or unexpected failures, does not imply the unavailability of the whole system but rather an increase in the load of the remaining replicas. 
This identifies a performability problem in which the system can tolerate a certain number of offline replicas in the pool. However, once a certain threshold is exceeded, the resulting high workload pending on the online replicas could degrade the performance of the system, potentially leading to a failure in meeting the non-functional requirements.
In this work, we study the problem of aging in a pool of service replicas. 
We characterize two inspection-based rejuvenation strategies that could be implemented in this context, which we identify as uncoordinated and coordinated rejuvenation. We represent them through the formalism of Stochastic Time Petri Nets (STPN) and through steady-state analysis, we conduct a performability evaluation of both the models as the frequency of inspections and the pool size vary.'
bibtex: '@inproceedings{scommegna2024quantitative,
  title={Quantitative evaluation of software rejuvenation of a pool of service replicas},
  author={Scommegna, Leonardo and Becattini, Marco and Fontani, Giovanni and Paroli, Leonardo and Vicario, Enrico},
  booktitle={2024 IEEE International Symposium on Software Reliability Engineering Workshops (ISSREW)},
  year={2024},
  organization={IEEE}
}'
---

