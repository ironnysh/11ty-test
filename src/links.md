---
layout: "page"
title: "לינקים לאתרים והמלצות על ספרים"
description: "לינקים לאתרים מעניינים והמלצות על ספרים, סרטים וכל מיני דברים שלא בא לי לכתוב עליהם משהו ארוך."
permalink: "/links/"
eleventyNavigation:
  key: "בקטנה"
  order: 3
---
{% from "layouts/links.njk" import linkPost %}
{% for link in collections.links | reverse %}
  {{ linkPost(link.data.sourceUrl, link.data.title, link.templateContent, link.data.date, link.data.sourceName) }}
{% endfor %}
[דווחו]({{ '/about/' | url }}) אם מצאתם לינק שבור.