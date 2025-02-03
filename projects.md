---
layout: layout.njk
title: Projects
components:
  - components/page-header.njk
  - components/content-block.njk
content_title: Our Recent Projects
content: |
  {% for project in collections.project %}
  - [{{ project.data.title }}]({{ project.url }})
  {% endfor %}
---