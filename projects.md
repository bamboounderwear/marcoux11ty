---
layout: layout.njk
title: Our Projects
subtitle: A showcase of our latest work and creative endeavors
---
<div class="max-w-wide mx-auto">
    <h1>Our Projects</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {%- for project in collections.project %}
        <a href="{{ project.url }}" class="group block relative">
            <div class="bg-neutral-900 overflow-hidden">
                <img src="{{ project.data.featuredImage or 'https://placehold.co/800x400' }}" alt="Featured image for {{ project.data.title }}" class="w-full h-64 object-cover">
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h2 class="text-2xl font-semibold text-white group-hover:text-blue-600 transition-colors">{{ project.data.title }}</h2>
                </div>
            </div>
        </a>
        {%- endfor %}
    </div>
</div>