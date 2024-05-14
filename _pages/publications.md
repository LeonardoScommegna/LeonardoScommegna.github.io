---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

<ul>
{% for post in site.publications reversed %}
  <li>
    {% assign post_id = forloop.index %}
    {% include publication.html %}
  </li>
{% endfor %}
</ul>


{% include abstract-bibtex-hider.html %}



