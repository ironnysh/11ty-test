---
layout: "base"
title: "Air Freelance"
description: "פוסטים וכתבות מאת לירון מילשטיין"
permalink: "/"
---

<article>

## 3 Random posts

<script type = "text/javascript" >
	var randomIndexUsed = [];
var counter = 0;
var numberOfPosts = 3;
while (counter < numberOfPosts) {
	var randomIndex;
	var postHREF;
	var postTitle;
	randomIndex = Math.floor(Math.random() * postsHREF.length);
	if (randomIndexUsed.indexOf(randomIndex) == "-1") {
		postHREF = postsHREF[randomIndex];
		postTitle = postsTitle[randomIndex];
		if (counter == (numberOfPosts - 1)) {
			document.write('<h5><a href="' + postHREF + '">' + postTitle + '</a></h5>');
		} else {
			document.write('<ul><li></li><a href="' + postHREF + '">' + postTitle + '</a></li></ul>');
		}
		randomIndexUsed.push(randomIndex);
		counter++;
	}
} </script>
</article>

<hr>

## NORMAL HOMEPAGE

{% for post in collections.posts | limit (2) %}
<article>

## {{ post.data.title }} - {{ post.data.writer }}
{{ post.data.summar }}

[להמשך קריאה]({{ post.url }})
</article>
{% endfor %}