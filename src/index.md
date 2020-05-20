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
<aside>
    עוד <a href="{{ '/thoughts/' | url }}">מחשבות</a> על {% for tag in thought.data.tags %} {% if tag != "thoughts" %}<a href="/thoughts/tags/{{ tag }}/"> {{ tag }} </a> •  
    {% endif %}{% endfor -%}
    <time datetime="{{ thought.date }}">{{ thought.date | shortDate }}</time>
</aside>
    </article>
    {% endif %}
    {% endfor %}