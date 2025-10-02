<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';
	import logo from '$lib/assets/logo.png';

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

<nav class="fixed top-0 z-50 w-full bg-white shadow-md backdrop-blur-sm">
	{#if showTicker}
		<div
			class="overflow-hidden whitespace-nowrap bg-[#7A9E58] py-1.5 text-sm text-white transition-all duration-300"
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

	<div class="mx-auto max-w-7xl px-6 pb-2 pt-4">
		<div class="mx-5 flex items-center justify-between md:mx-0">
			<div class="flex items-center space-x-3">
				<a href="/" class="Grotesk text-2xl text-[#2F3E46] md:text-4xl">
					<img class="h-[100px] w-full" src={logo} alt="logo" />
				</a>
			</div>

			<div class="hidden items-center space-x-8 md:flex">
				<a
					href="/auth/sign-in"
					class="hover-underline font-medium text-[#2F3E46]"
				>
					Sign-in
				</a>
				<a
					href="/auth/sign-up"
					class="cursor-pointer rounded bg-[#7A9E58] px-6 py-2 text-lg font-medium text-white transition-colors hover:opacity-80"
				>
					Get Started
				</a>
			</div>

			<button class="md:hidden" on:click={toggleMobileMenu} aria-label="button">
				<svg
					class="h-6 w-6 text-[#2F3E46]"
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
			class="mx-auto flex max-w-7xl items-center space-x-8 px-6 pt-1.5 text-sm text-[#2F3E46]"
		>
			<a href="#features" class="hover-underline">Features</a>
			<a href="#pricing" class="hover-underline">Pricing</a>
			<a href="#about" class="hover-underline">About</a>
			<a href="#contact" class="hover-underline">Contact</a>
			<a href="/blog" class="hover-underline">Blog</a>
		</div>
	</div>

	{#if mobileMenuOpen}
		<div class="space-y-2 border-t border-[#91B678] px-6 pb-4 md:hidden">
			<a
				href="#features"
				class="block text-sm font-medium text-[#2F3E46] hover:text-[#3E594D]"
			>
				Features
			</a>
			<a
				href="#intelligence"
				class="block text-sm font-medium text-[#2F3E46] hover:text-[#3E594D]"
			>
				Intelligence
			</a>
			<a
				href="#about"
				class="block text-sm font-medium text-[#2F3E46] hover:text-[#3E594D]"
			>
				About
			</a>
			<a
				href="/auth/sign-up"
				class="mt-2 block w-full bg-[#F0F9E4] px-6 py-2 text-center text-sm font-medium text-[#2F3E46] transition-colors hover:bg-[#E2F0D0]"
			>
				Get Started
			</a>
		</div>
	{/if}
</nav>
