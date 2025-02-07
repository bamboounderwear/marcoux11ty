---
layout: layout.njk
title: Blog
---
<div class="max-w-wide mx-auto">
    <h1>Blog Posts</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {%- for post in collections.post | reverse %}
        <a href="{{ post.url }}" class="group">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://placehold.co/800x400" alt="Featured image for {{ post.data.title }}" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h2 class="text-xl font-semibold group-hover:text-blue-600 transition-colors">{{ post.data.title }}</h2>
                    <p class="text-sm text-gray-600 mt-2">{{ post.date | dateFormat }}</p>
                </div>
            </div>
        </a>
        {%- endfor %}
    </div>
</div>