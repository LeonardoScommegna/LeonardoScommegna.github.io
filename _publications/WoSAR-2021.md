---
title: "Evaluation of software aging in component-based web applications subject to soft errors over time"
authors: "J. Parri, S. Sampietro, L. Scommegna, E. Vicario"
collection: publications
venue-type: "workshop"
date: "2021-10-25"
venue: 'International Workshop on Software Aging and Rejuvenation (WoSAR)'
paper-id: "WoSAR-2021"
pdf: "/papers/WoSAR-2021.pdf"
doi: "https://doi.org/10.1109/ISSREW53611.2021.00040"
github: ""
zenodo: ""
abstract: 'Modern Web Applications rely on architectures usually designed with modular software components whose behaviour is shaped over fundamental principles and characteristics of the HTTP protocol. Dependency Injection frameworks support designers and developers in the automated management of components lifecycle, binding them to predefined scopes, thus delegating to an outer and independent participant the responsibility of creation, destruction and inter-dependencies definition of runtime instances. In this way, different scopes configurations implicitly act as different software micro-rejuvenation policies, emphasising the importance of choices in the assignment of component scopes; while supporting the stateful behaviour in data-retention mechanism, wider scopes may majorly expose in-memory components to software aging processes. We report a practical experience illustrating how the memory maintained in the business logic of a Web Application may give space to aging processes affecting the runtime behaviour of a stateful web application, and we show how this threat is contrasted by micro-rejuvenation at component level implemented by the container under different assignment strategies for components scopes. To this end, we propose an accelerated testing approach relying on a fault injection process that executes an event-driven simulation of arising soft errors over time. Experimentation on an exemplary web application implemented on the stack of Java Enterprise Edition show how manifestation, correction, and propagation of errors are conditioned by different scopes assigned to components by the software developer.'
bibtex: '@inproceedings{parri2021evaluation,
  title={Evaluation of software aging in component-based web applications subject to soft errors over time},
  author={Parri, Jacopo and Sampietro, Samuele and Scommegna, Leonardo and Vicario, Enrico},
  booktitle={2021 IEEE International Symposium on Software Reliability Engineering Workshops (ISSREW)},
  pages={25--32},
  year={2021},
  organization={IEEE}
}'
---

