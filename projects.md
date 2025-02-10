---
layout: layout.njk
title: Our Projects
subtitle: A showcase of our latest work and creative endeavors
---
<div class="max-w-wide mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {%- for project in collections.project %}
        <a href="{{ project.url }}" class="group block relative">
            <div class="bg-neutral-900 overflow-hidden">
                <div class="relative pb-[80%]">
                    <img src="{{ project.data.featuredImage or 'https://placehold.co/800x400' }}" 
                         alt="Featured image for {{ project.data.title }}" 
                         class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                </div>
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 translate-y-4 transition-all duration-300 group-hover:translate-y-0 group-hover:from-black/100">
                    <h2 class="text-2xl font-semibold text-white transition-colors">{{ project.data.title }}</h2>
                    {% if project.data.category %}
                    <p class="text-sm text-white/60 mt-2">{{ project.data.category }}</p>
                    {% endif %}
                </div>
            </div>
        </a>
        {%- endfor %}
    </div>
</div>