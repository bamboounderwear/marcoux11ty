---
layout: layout.njk
title: Blog
components:
  - components/page-header.njk
  - components/content-block.njk
content_title: Latest Posts
content: |
  {% for post in collections.post | reverse %}
  - [{{ post.data.title }}]({{ post.url }})
    <small>{{ post.date | date: "%Y-%m-%d" }}</small>
  {% endfor %}
---