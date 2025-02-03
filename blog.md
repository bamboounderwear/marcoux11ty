---
layout: layout.njk
title: Blog
---
# Blog Posts

Here are our latest blog posts:

{%- for post in collections.post | reverse %}
- [{{ post.data.title }}]({{ post.url }})
  <small>{{ post.date | dateFormat }}</small>
{%- endfor %}