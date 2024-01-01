<script>
	// @ts-nocheck

	export let data;

	let visible = 30;

	let blogpost = data.posts.slice(4, visible);

	function showMore() {
		visible += 4;
		blogpost = data.posts.slice(4, visible);
	}
</script>

<section>
	<ul class="lg:grid grid-cols-2 gap-12">
		{#each blogpost as post}
			<li
				class="p-6 lg:p-8 my-8 lg:my-0 bg-gray-300 bg-opacity-10 rounded-md
			hover:border-2 border-sky-600 dark:border-sky-300"
			>
				<a href={`/blog/${post.slug.current}`}>
					<div>
						<span class="font-medium text-sky-600 dark:text-sky-300">
							{new Date(post.datePublished).toISOString().split('T')[0]}
						</span>

						<h3 class="text-2xl lg:text-3xl font-medium my-2">
							{post.title}
						</h3>

						<p class="line-clamp-4 text-gray-600 dark:text-gray-300">
							{post.overview}
						</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>

	<div class="text-center">
		<button
			on:click|preventDefault={showMore}
			class={data.posts.length <= visible
				? 'hidden'
				: 'bg-sky-800 px-16 py-2 rounded-full text-lg font-medium hover:bg-sky-600 lg:mt-12'}
			type="button">Show More</button
		>
	</div>
</section>
