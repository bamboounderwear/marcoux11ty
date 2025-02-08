---
layout: layout.njk
title: About Us
subtitle: Get to know our team and our story
components:
  - name: rich-text.njk
    data:
      title: Why We Chose Eleventy
      text: After evaluating various static site generators, Eleventy stood out for its simplicity and flexibility. It allows us to build fast, maintainable websites without unnecessary complexity.
  - name: image-text.njk
    data:
      title: Our Approach
      text: |
        <p>We believe in creating websites that are not just visually appealing but also performant and accessible. Our approach combines modern design principles with technical excellence.</p>
        <ul>
          <li>User-centered design</li>
          <li>Performance-first development</li>
          <li>Accessible by default</li>
        </ul>
      image: https://placehold.co/800x600/orange/white?text=Our+Approach
      imageAlt: Team working on a project
      imagePosition: right
  - name: image-text.njk
    data:
      title: Our Tools
      text: |
        <p>We carefully select our tools and technologies to ensure we can deliver the best possible results for our clients. This includes:</p>
        <ul>
          <li>Modern static site generators</li>
          <li>Progressive enhancement</li>
          <li>JAMstack architecture</li>
        </ul>
      image: https://placehold.co/800x600/purple/white?text=Our+Tools
      imageAlt: Development tools and technologies
      imagePosition: left
---