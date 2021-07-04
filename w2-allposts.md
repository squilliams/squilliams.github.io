---
layout: allposts
title: All posts
landing-title: 'All posts'
nav-menu: true
description: 'My experimental blog-like static post'
image: assets/images/journallposts.jpg
permalink: /allposts/
author: null
show_tile: true

---
<div class="home">
  <h3>Posts</h3>
  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h3>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h3>
      </li>
    {% endfor %}
  </ul>
</div>
