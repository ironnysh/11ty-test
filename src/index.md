---
layout: "base"
title: "Air Freelance"
description: "פוסטים וכתבות מאת לירון מילשטיין"
permalink: "/"
---

{% for post in collections.posts | limit (5) %}
<article>

## {{ post.data.title }} - {{ post.data.writer }}
{{ post.data.summar }}

[להמשך קריאה]({{ post.url }})
</article>
{% endfor %}

<hr>

<article>

## 3 Random posts

<script type="text/javascript">
    var randomIndexUsed = [];
    var counter = 0;
    var numberOfPosts = 3;

    while (counter < numberOfPosts)
    {
        var randomIndex;
        var postHREF;
        var postTitle;

        randomIndex = Math.floor(Math.random() * postsHREF.length);

        if (randomIndexUsed.indexOf(randomIndex) == "-1")
        {
            postHREF = postsHREF[randomIndex];
            postTitle = postsTitle[randomIndex];

            if (counter == (numberOfPosts - 1))
            {
                document.write('<ul><li><a href="' + postHREF + '">' + postTitle + '</a></li></ul>');
            }
            else
            {
                document.write('<h5><a href="' + postHREF + '">' + postTitle + '</a></h5>');
            }

            randomIndexUsed.push(randomIndex);

            counter++;
        }
    }
</script>
</article>
