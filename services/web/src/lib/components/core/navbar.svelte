<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';

	let mobileMenuOpen = false;

	const toggleMobileMenu = () => {
		mobileMenuOpen = !mobileMenuOpen;
	};

	let showTicker = true;

	onMount(() => {
		const handleScroll = () => {
			showTicker = window.scrollY <= 20;
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll);

		onDestroy(() => {
			window.removeEventListener('scroll', handleScroll);
		});
	});
</script>

<nav class="fixed top-0 z-50 w-full bg-black backdrop-blur-sm">
	{#if showTicker}
		<div
			class="overflow-hidden bg-black pt-1.5 text-sm whitespace-nowrap text-white transition-all duration-300"
			transition:fade
		>
			<div class="news-ticker">
				<span class="mx-8"
					>Buat Invoice Profesional dalam Waktu Kurang dari 3 Menit</span
				>
				<span class="mx-8">Hemat Waktu Administrasi, Fokus pada Karya Anda</span
				>
				<span class="mx-8"
					>Dirancang untuk Freelancer, Pekerja Mandiri dan pelaku bisnis</span
				>
				<span class="mx-8">Cobalah Memulai dengan Gratis</span>
			</div>
		</div>
	{/if}
	<div class="mx-auto max-w-7xl pt-4 pb-2">
		<div class="mx-5 flex items-center justify-between md:mx-0">
			<div class="flex items-center space-x-3">
				<a href="/" class="Grotesk text-2xl text-white md:text-4xl">Freelyce</a>
			</div>

			<div class="hidden items-center space-x-8 md:flex">
				<a href="/auth/sign-in" class="hover-underline font-medium text-white"
					>Sign-in</a
				>
				<a
					href="/auth/sign-up"
					class="cursor-pointer bg-white px-6 py-2 text-sm font-medium transition-colors hover:bg-white/90"
				>
					Get Started
				</a>
			</div>

			<button class="md:hidden" on:click={toggleMobileMenu} aria-label="button">
				<svg
					class="h-6 w-6 text-white"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</button>
		</div>
	</div>
	<div class="mx-auto hidden px-6 pb-2 md:block">
		<div
			class="mx-auto flex max-w-7xl items-center space-x-8 pt-1.5 text-sm text-white"
		>
			<a href="#features" class="hover-underline">Features</a>
			<a href="#pricing" class="hover-underline">Pricing</a>
			<a href="#about" class="hover-underline">About</a>
			<a href="#contact" class="hover-underline">Contact</a>
		</div>
	</div>

	{#if mobileMenuOpen}
		<div class="space-y-2 border-t border-gray-700 px-6 pb-4 md:hidden">
			<a
				href="#features"
				class="block text-sm font-medium text-white hover:text-gray-400"
				>Features</a
			>
			<a
				href="#intelligence"
				class="block text-sm font-medium text-white hover:text-gray-400"
				>Intelligence</a
			>
			<a
				href="#about"
				class="block text-sm font-medium text-white hover:text-gray-400"
				>About</a
			>
			<a
				href="/auth/sign-up"
				class="mt-2 block w-full bg-white px-6 py-2 text-center text-sm font-medium text-black transition-colors hover:bg-white/90"
			>
				Get Started
			</a>
		</div>
	{/if}
</nav>
