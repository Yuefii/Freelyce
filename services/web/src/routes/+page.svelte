<script lang="ts">
	import Cta from '$lib/components/core/cta.svelte';
	import Hero from '$lib/components/core/hero.svelte';
	import About from '$lib/components/core/about.svelte';
	import Price from '$lib/components/core/price.svelte';
	import Footer from '$lib/components/core/footer.svelte';
	import Navbar from '$lib/components/core/navbar.svelte';
	import Contact from '$lib/components/core/contact.svelte';
	import Updates from '$lib/components/core/updates.svelte';
	import Features from '$lib/components/core/features.svelte';
	import Platform from '$lib/components/core/platform.svelte';
</script>

<svelte:head>
	<title>Freelyce</title>
	<meta
		name="description"
		content="Freelyce adalah platform untuk membuat invoice berbasis website yang dirancang untuk freelance, pekerja mandiri, dan pelaku bisnis."
	/>
</svelte:head>

<header>
	<Navbar />
</header>

<main>
	<Hero />
	<Updates />
	<Features />
	<Price />
	<Platform />
	<About />
	<Cta />
	<Contact />
</main>

<Footer />

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
