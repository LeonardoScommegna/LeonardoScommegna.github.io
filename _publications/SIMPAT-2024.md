---
title: "Efficient derivation of optimal signal schedules for multimodal intersections"
authors: "N. Bertocci, L. Carnevali, L. Scommegna, E. Vicario"
collection: publications
venue-type: "journal"
date: "2024-02-01"
venue: 'Simulation Modelling Practice and Theory'
paper-id: "SIMPAT-2024"
pdf: "/papers/SIMPAT-2024.pdf"
doi: "https://doi.org/10.1016/j.simpat.2024.102912"
github: "https://github.com/oris-tool/omnibus"
zenodo: "https://zenodo.org/records/10693840"
abstract: 'Tramways decrease time, cost, and environmental impact of urban transport, while requiring multimodal intersections where trams arriving with nominal periodic timetables may have right of way over road vehicles. Quantitative evaluation of stochastic models enables early exploration and online adaptation of design choices, identifying operational parameters that mitigate impact on road transport performance.

We present an efficient analytical approach for offline scheduling of traffic signals at multimodal intersections among road traffic flows and tram lines with right of way, minimizing the maximum expected percentage of queued vehicles of each flow with respect to sequence and duration of phases. To this end, we compute the expected queue size over time of each vehicle flow through a compositional approach, decoupling analyses of tram and road traffic. On the one hand, we define microscopic models of tram traffic, capturing periodic tram departures, bounded delays, and travel times with general (i.e., non-Exponential) distribution with bounded support, open to represent arrival and travel processes estimated from operational data. On the other hand, we define macroscopic models of road transport flows as finite-capacity vacation queues, with general vacation times determined by the transient probability that the intersection is available for vehicles, efficiently evaluating the exact expected queue size over time. We show that the distribution of the expected queue size of each flow at multiples of the hyperperiod, resulting from temporization of nominal tram arrivals and vehicle traffic signals, reaches a steady state within few hyper-periods. Therefore, transient analysis starting from this steady-state distribution and lasting for the hyper-period duration turns out to be sufficient to characterize road transport behavior over time intervals of arbitrary duration.

We implemented the proposed approach in the novel OMNIBUS Java library, and we compared against Simulation of Urban MObility (SUMO). Experimental results on case studies of real complexity with time-varying parameters show the approach effectiveness at identifying optimal traffic signal schedules, notably exploring in few minutes hundreds of schedules requiring tens of hours in SUMO.'
bibtex: '@article{bertocci2024efficient,
  title={Efficient derivation of optimal signal schedules for multimodal intersections},
  author={Bertocci, Nicola and Carnevali, Laura and Scommegna, Leonardo and Vicario, Enrico},
  journal={Simulation Modelling Practice and Theory},
  pages={102912},
  year={2024},
  publisher={Elsevier}
}'
---

