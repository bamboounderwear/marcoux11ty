---
layout: layout.njk
title: Projects
---
# Our Projects

Here are some of our recent projects:

{% for project in collections.project %}
- [{{ project.data.title }}]({{ project.url }})
{% endfor %}