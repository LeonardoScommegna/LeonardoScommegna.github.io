---
title: "Compositional Coordinated Resource Provisioning for Workflows with Stochastic Durations in Kubernetes"
authors: "T. Botarelli, L. Carnevali, L. Scommegna, E. Vicario"
collection: publications
venue-type: "workshop"
date: "2026-05-01"
venue: 'Conference on System and Service Quality,  (QualITA)'
paper-id: "QualITA-2026"
pdf: "/papers/QualITA-2026.pdf"
doi: "https://doi.org/10.1145/3777911.3800627"
slides: "/talks/talk-QualITA-2026.pdf"
github: ""
zenodo: ""
abstract: ' In workflows with stochastic durations, the end-to-end (E2E) response time distribution is jointly determined by several factors, including the workflow topology, the response time distribution of elementary services, and their sensitivity to resource scaling. This complexity is further exacerbated when workflows are deployed on microservices architectures, where additional factors related to the orchestration infrastructure may affect the E2E response time.
In this paper, we apply a state-of-the-art resource provisioning method to a real container orchestration system. Specifically, the method coordinates resource allocation for elementary services by jointly considering the factors mentioned above. We consider workflows with randomly generated topology and with elementary service durations drawn from a data set used in the literature. We implement these workflows as microservices and we deploy them on Kubernetes using the proposed provisioning strategy. Experimental results demonstrate the effectiveness of the approach compared to alternative baselines, under both low and high workload conditions.'
bibtex: |
  @article{botarelli2026compositional,
    title={Compositional Coordinated Resource Provisioning for Workflows with Stochastic Durations in Kubernetes},
    author={Botarelli, Tommaso and Carnevali, Laura and Scommegna, Leonardo and Vicario, Enrico},
    booktitle={Companion of the 17th ACM/SPEC International Conference on Performance Engineering},
    pages={188--192},
    year={2026}
  }
---

