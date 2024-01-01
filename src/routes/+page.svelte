<script>
	import Blogposts from '../components/Blogposts.svelte';
	import Hero from '../components/Hero.svelte';
	import Subscription from '../components/Subscription.svelte';

	export let data;
</script>

<div>
	<Hero {data} />
	<Blogposts {data} />
	<Subscription />
</div>

<svelte:head>
	<title>Loom Social</title>
	<meta
		name="description"
		content="Elevate your social media experience, and discover innovative tech solutions."
	/>
</svelte:head>
