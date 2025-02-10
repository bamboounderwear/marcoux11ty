---
layout: layout.njk
title: Our Blog
subtitle: Insights, updates, and stories from our journey
---
<div class="max-w-wide mx-auto">
    <h1>Our Blog</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {%- for post in collections.post %}
        <a href="{{ post.url }}" class="group block relative">
            <div class="bg-neutral-900 overflow-hidden">
                <img src="{{ post.data.featuredImage or 'https://placehold.co/800x400' }}" alt="Featured image for {{ post.data.title }}" class="w-full h-64 object-cover">
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h2 class="text-2xl font-semibold text-white group-hover:text-blue-600 transition-colors">{{ post.data.title }}</h2>
                    <p class="text-white/80 mt-2">{{ post.data.date | dateFormat }}</p>
                </div>
            </div>
        </a>
        {%- endfor %}
    </div>
</div>