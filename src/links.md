---
layout: "page"
title: "לינקים לאתרים והמלצות על ספרים"
description: "לינקים לאתרים מעניינים והמלצות על ספרים, סרטים וכל מיני דברים שלא בא לי לכתוב עליהם משהו ארוך."
permalink: "/links/"
eleventyNavigation:
  key: "בקטנה"
  order: 3
---
{%- for link in collections.links | reverse -%}
<article class="links">
    <a href="{{ link.data.url }}"><h4>↜ {{ link.data.title }}</h4></a>
    {{ link.templateContent | safe }}
</article>
{%- endfor %}

[דווחו]({{ '/about/' | url }}) אם מצאתם לינק שבור.