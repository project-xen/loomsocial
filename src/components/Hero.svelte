<script>
	// @ts-nocheck

	export let data;

	const featuredPosts = data.posts.slice(0, 4);
</script>

<section>
	<div class="lg:flex justify-between items-start lg:space-x-10 xl:space-x-20 mt-12 mb-24">
		<div class="lg:w-3/5">
			<div>
				<small class="font-medium text-gray-600 dark:text-gray-300">- Digital Insights </small>
				<h1 class="py-2 font-medium text-3xl lg:text-5xl text-sky-600 dark:text-sky-300">
					Elevate your social media experience, and discover innovative tech solutions.
				</h1>
			</div>
			<img
				src="/tech.jpg"
				alt="hero pic from freepik.com"
				class="block object-cover w-full h-72 my-4 lg:mt-8 border-2 rounded-md"
			/>
		</div>

		<ul class="lg:w-2/5 mt-10 lg:mt-0">
			{#each featuredPosts as post}
				<li
					class="pb-5 mb-5 font-medium border-b border-gray-300 dark:border-gray-700 hover:text-gray-600 dark:hover:text-gray-300"
				>
					<a href={`/blog/${post.slug.current}`}>
						<span class="text-sm text-sky-600 dark:text-sky-300">
							{new Date(post.datePublished).toISOString().split('T')[0]}
						</span>
						<h2 class="text-2xl pt-1">{post.title}</h2>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>
