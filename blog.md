---
layout: layout.njk
title: Projects
---
<div class="max-w-wide mx-auto">
    <h1>Our Projects</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {%- for project in collections.project %}
        <a href="{{ project.url }}" class="group">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="{{ project.data.featuredImage or 'https://placehold.co/800x400' }}" alt="Featured image for {{ project.data.title }}" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h2 class="text-2xl font-semibold group-hover:text-blue-600 transition-colors">{{ project.data.title }}</h2>
                </div>
            </div>
        </a>
        {%- endfor %}
    </div>
</div>