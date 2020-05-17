---
layout: "page"
title: "מחשבות והרהורים"
description: "ארכיון פוסטים וכתבות מאת לירון מילשטיין"
permalink: "/thoughts/"
eleventyNavigation:
  key: "מחשבות"
  order: 2
---
{% from "layouts/thoughts.njk" import thoughtList %}
{% for thought in collections.thoughts | reverse %}
  {{ thoughtList(thought.url, thought.data.title, thought.data.date) }}
{% endfor %}