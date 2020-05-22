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

{{ thought.templateContent | safe }}

{% meta %}
{% for tag in thought.data.tags %}
{% if tag != "thoughts" %}
[{{ tag }}](/thoughts/tags/{{ tag }}/){% endif %}{% endfor -%}{{ thought.date | shortDate }}{% endmeta %}

{% postMeta thought.data.tags | join(" • "), thought.data.date | shortDate %}
מילה:
{% for tag in thought.data.tags %}{% if tag != "thoughts" %}
[{{ tag }}](/thoughts/tags/{{ tag }}/){% endif %}{% endfor -%}
{% endpostMeta %}
    </article>
    {% endif %}
    {% endfor %}