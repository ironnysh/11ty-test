---
layout: "base"
title: "Air Freelance"
description: "פוסטים וכתבות מאת לירון מילשטיין"
permalink: "/"
---
{% for thought in collections.thoughts | reverse %}
{% if loop.first %}
<article>
<h2>{{ thought.data.title }}</h2>
    {{ thought.templateContent | safe }}
<details>
<summary>מידע נוסף</summary>
<p>
עוד מחשבות על {%- for tag in thought.data.tags -%} {%- if tag != "thoughts" -%}{% set tagUrl %}/thoughts/tags/{{ tag }}/{% endset %}<a href="{{ tagUrl | url }}"> {{ tag }} </a>•{% endif %}{% endfor %}
<time>{{ thought.date | oldHebrewDate }}</time>
<time datetime="{{ thought.date }}">{{ thought.date | displayDate }}</time>
<time datetime="{{ thought.date }}">{{ thought.date | hebrewDate }}</time>
</p>
</details>
    </article>
    {% endif %}
    {%- endfor -%}