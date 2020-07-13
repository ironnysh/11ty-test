---
layout: "base"
title: "Air Freelance"
description: "פוסטים וכתבות מאת לירון מילשטיין"
permalink: "/"
---
{% for post in collections.posts | reverse %}
<article>

## {{ post.data.title }} - {{ post.data.writer }}
{{ post.data.summary }}

[להמשך קריאה]({{ post.url }})
</article>
{% endfor %}