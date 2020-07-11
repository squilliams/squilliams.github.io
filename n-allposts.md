---
title: All Posts
permalink: /allposts/
image: assets/images/journallposts.jpg
layout: allposts
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
