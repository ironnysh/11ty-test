---
layout: "base"
isFront: "true"
title: "Home Air Freelance"
description: "פוסטים וכתבות מאת לירון מילשטיין"
permalink: "/"
---
{%- set latestThought = collections.thoughts | reverse -%}
{%- for thought in latestThought.slice(0,1) -%}
    <article>
    <h2>{{ thought.data.title }}</h2>
            {{ thought.templateContent | safe }}
<mark>Posted on {{ thought.data.date | hebrewDate }}</mark>
<details>
<summary>מידע נוסף</summary>
<p>
עוד מחשבות על {%- for tag in thought.data.tags -%}<a href="/thoughts/tags/{{ tag }}/"> {{ tag }} </a>•{% endfor %}
<time>פורסם ב-{{ thought.data.date | hebrewDate }}</time>

<section>
  {%- if isFront %}
    <p>This paragraph is only written to the front page.</p>
  {% endif %}
  <p>This paragraph is rendered on all pages.</p>
</section>

    עוד מחשבות על {%- for tag in thought.data.tags -%} {%- if tag != "thoughts" -%}{% set tagUrl %}/thoughts/tags/{{ tag }}/{% endset %}<a href="{{ tagUrl | url }}" rel="tag">{{ tag }}</a>
     {% endif %}{% endfor %} 

בדיקת תגים {%- for tag in tags -%} {%- if tag != "thoughts" -%}<a href="/thoughts/tags/{{ tag }}/"> {{ tag }} </a> •  
{% endif %}{% endfor %}


</p>
</details>
    </article>
    {%- endfor -%}
