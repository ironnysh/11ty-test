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
עוד מחשבות על {%- for tag in thought.data.tags -%}<a href="/thoughts/tags/{{ tag }}/"> {{ tag }} </a>•{% endfor %}
<time>פורסם ב-{{ thought.data.date | hebrewDate }}</time>


עוד מחשבות על {%- for tag in tags -%} {%- if tag != "thoughts" -%}<a href="/thoughts/tags/{{ tag }}/"> {{ tag }} </a> •  
{% endif %}{% endfor %}


  {% for tag in tags %}
    {% set tagUrl %}/tags/{{ tag }}/{% endset %}
    <li><a href="/thoughts/tags/{{ tag }}/">{{ tag.lenght }}</a>dddd</li>
  {% endfor %}


</p>
</details>
    </article>
    {%- endfor -%}