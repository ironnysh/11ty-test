---
layout: "base"
title: "Air Freelance"
description: "פוסטים וכתבות מאת לירון מילשטיין"
permalink: "/"
---
{%- set latestThought = collections.thoughts | reverse -%}
{%- for thought in latestThought.slice(0,1) -%}
  <article>
    <h2>{{ thought.data.title }}</h2>
        {{ thought.templateContent | safe }}
<details>
<summary>מידע נוסף</summary>
<p>
עוד מחשבות על {%- for tag in thought.data.tags -%} {%- if tag != "thoughts" -%}<a href="{{ tagUrl | url }}"> {{ tag }} </a>•{% endif %}{% endfor %}
<time>{{ thought.date | hebrewDate }}</time>
<time datetime="{{ thought.date }}">{{ thought.date | displayDate }}</time>
<time datetime="{{ thought.date }}">{{ thought.date | hebrewDate }}</time>
</p>
</details>
    </article>
    {%- endfor -%}