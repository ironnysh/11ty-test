---
layout: "base"
title: "Air Freelance"
description: "פוסטים וכתבות מאת לירון מילשטיין"
permalink: "/"
---
{% for thought in collections.thoughts | reverse %}
{% if loop.first %}
<article>

## {{ thought.data.title }}

{{ thought.templateContent | safe -}}
{{ thought.data.tags | tagList | safe }}


    </article>
    {% endif %}
    {% endfor %}