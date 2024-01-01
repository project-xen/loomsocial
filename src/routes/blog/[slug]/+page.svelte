<script>
	import { PortableText } from '@portabletext/svelte';
	import Subscription from '../../../components/Subscription.svelte';

	export let data;

	const post = data.post[0];
</script>

<div class="max-w-[55rem] mx-auto">
	<header class="pt-6 space-y-1 text-center">
		<span class="text-base font-medium leading-6 text-gray-600 dark:text-gray-200">
			{new Date(post.datePublished).toISOString().split('T')[0]}
		</span>

		<h1 class="text-3xl lg:text-5xl font-extrabold leading-9 text-sky-700 dark:text-sky-300">
			{post.title}
		</h1>
	</header>

	<article class="mt-12">
		<PortableText value={post.content} components={{}} />
	</article>

	<div>
		<Subscription />
	</div>
</div>

<svelte:head>
	<title>{post.title}</title>
	<meta name="description" content={`Discover | ${post.title}`} />
</svelte:head>
