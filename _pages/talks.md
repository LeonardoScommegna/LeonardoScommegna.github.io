---
layout: archive
title: "Research Activities"
permalink: /research/
author_profile: true
---

## Presentations
<ul>
{% for talk in site.talks reversed %}
  {% if talk.talk-type == "presentation" %}
  <li>
    {% include presentation.html %}
  </li>
  {% endif %}
{% endfor %}
</ul>

## Invited Talks
<ul>
{% for talk in site.talks reversed %}
  {% if talk.talk-type == "invited" %}
  <li>
    {% include presentation.html %}
  </li>
  {% endif %}
{% endfor %}
</ul>





{% if site.talkmap_link == true %}

## Trips Overview
<div>
<iframe src="/talkmap/map.html" height="400" width="550" style="border:none;"></iframe>
</div>


{% endif %}