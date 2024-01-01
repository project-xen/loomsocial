<script>
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
	import '../global.css';
</script>

<div class="p-4 md:px-12 xl:px-24">
	<header>
		<Navbar />
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<Footer />
	</footer>
</div>
