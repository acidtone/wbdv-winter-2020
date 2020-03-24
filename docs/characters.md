---
layout: default
title: "RPG Character Archetypes"
---
# {{page.title}}
<section>
{% for character in site.characters %}
<article>
  <h2>{{character.name}}</h2>
  <p>{{character.specialty}}</p>
  {{character.content}}
  <p><a href="{{character.source}}">Source</a></p>
</article>
{% endfor %}
</section>