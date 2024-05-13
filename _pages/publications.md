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



<!--<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
  $(document).ready(function () {
    $('.content-item').hide();

    $('.btn').click(function () {
      var uniqueID = $(this).data('unique-id');
      var target = '#' + $(this).attr('id') + '-content-' + uniqueID;
      $('.content-item').not(target).hide();
      console.log(target)
      $(target).toggle();
    });
  });
</script>

