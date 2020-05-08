---
layout: "page"
title: "פוסטים, כתבות והרהורים"
description: "פוסטים וכתבות מאת לירון מילשטיין"
permalink: "/thoughts/"
eleventyNavigation:
  key: "מחשבות"
  order: 2
---
{%- for thought in collections.thoughts | reverse -%}
<section>
  <a href="{{ thought.url }}"><h5>{{ thought.data.title }}</h5></a>
  <time>{{ thought.date.toLocaleDateString('he-IL') }}</time>
</section>
{%- endfor -%}