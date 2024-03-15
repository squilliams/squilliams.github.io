---
title: Movies & Books Activities
layout: landing
description: 'Log of my movies and books.'
image: assets/images/pic07.jpg
permalink: /moviesandbooks
nav-menu: true
---
<script>
	async function fetchRSSFeed(feedUrl, elementId) {
	const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		let htmlContent = '';

		data.items.slice(0, 5).forEach(item => { // Limit to the first 5 entries
		htmlContent += `
			<div class="rss-entry">
			<h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
			<p>${item.description || 'No description available.'}</p>
			</div>
		`;
		});

		document.getElementById(elementId).innerHTML = htmlContent;
	} catch (error) {
		console.error("Failed to fetch RSS feed", error);
		document.getElementById(elementId).innerHTML = '<p>Failed to load RSS feed.</p>';
	}
	}

	// Fetch and display the Letterboxd feed
	fetchRSSFeed('https://letterboxd.com/squilliams/rss/', 'rss-feed-content');

	// Fetch and display the Goodreads feed
	fetchRSSFeed('https://www.goodreads.com/user/updates_rss/4668551', 'goodreads-feed-content');
</script>
<style>
  .rss-entry img {
    max-height: 200px;
    width: auto; /* This ensures the aspect ratio is maintained */
  }
</style>

<!-- Main -->
<div id="main">

<!-- One -->
<section id="one">
	<div class="inner">
		<header class="major">
			<h2>Letterboxd and Goodreads</h2>
		</header>
		<p><a href="https://letterboxd.com/squilliams/">My Letterboxd</a> and <a href="https://www.goodreads.com/user/show/4668551-bimo-tyasono">My Goodreads</a> helps me log my watching and reading activities throughout the year.</p>
	</div>
</section>

<section id="two">
<div class="inner">
<div class="row">
	<div class="6u 12u$(small)">
		<h3>Letterboxd</h3>
		<div id="rss-feed-content"></div>
	</div>
	<div class="6u$ 12u$(small)">
		<h3>Goodreads</h3>
		<div id="goodreads-feed-content"></div>		
	</div>
</div>
</div>
</section>

<!-- Three -->
<section id="three">
	<div class="inner">
		<header class="major">
			<h2>Any recommendation?</h2>
		</header>
		<p>Feel free to DM me :D</p>
		<ul class="actions">
			<li><a href="https://www.instagram.com/squillliams/" class="button next">DM on Instagram</a></li>
		</ul>
	</div>
</section>

</div>
