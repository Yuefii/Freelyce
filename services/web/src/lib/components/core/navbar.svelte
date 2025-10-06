<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';
	import { Menu, X } from 'lucide-svelte';
	import logo from '$lib/assets/logo.png';

	let mobileMenuOpen = false;

	const toggleMobileMenu = () => {
		mobileMenuOpen = !mobileMenuOpen;
	};

	let showTicker = true;

	const tickerMessages = [
		'Buat Invoice Profesional dalam Waktu Kurang dari 3 Menit',
		'Hemat Waktu Administrasi, Fokus pada Karya Anda',
		'Dirancang untuk Freelancer, Pekerja Mandiri dan pelaku bisnis',
		'Cobalah Memulai dengan Gratis'
	];

	const doubledTickerMessages = [...tickerMessages, ...tickerMessages];

	const navLinks = [
		{ href: '#features', text: 'Features' },
		{ href: '#pricing', text: 'Pricing' },
		{ href: '#about', text: 'About' },
		{ href: '#contact', text: 'Contact' },
		{ href: '/blog', text: 'Blog' }
	];

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
			class="bg-primary overflow-hidden whitespace-nowrap py-1.5 text-sm text-white transition-all duration-300"
			transition:fade
		>
			<div class="news-ticker">
				{#each doubledTickerMessages as message}
					<span class="mx-8">{message}</span>
				{/each}
			</div>
		</div>
	{/if}

	<div class="mx-auto max-w-7xl px-6 pb-2 pt-4">
		<div class="flex items-center justify-between md:mx-0">
			<div class="flex items-center space-x-3">
				<a href="/" class="text-text-primary text-2xl md:text-4xl">
					<img class="h-16 w-full md:h-[100px]" src={logo} alt="logo" />
				</a>
			</div>

			<div class="hidden items-center space-x-8 md:flex">
				<a
					href="/auth/sign-in"
					class="hover-underline text-text-primary font-medium"
				>
					Sign-in
				</a>
				<a
					href="/auth/sign-up"
					class="bg-primary cursor-pointer rounded px-6 py-2 text-lg font-medium text-white transition-colors hover:opacity-80"
				>
					Get Started
				</a>
			</div>

			<button class="md:hidden" on:click={toggleMobileMenu} aria-label="button">
				{#if mobileMenuOpen}
					<X class="text-text-primary h-6 w-6" />
				{:else}
					<Menu class="text-text-primary h-6 w-6" />
				{/if}
			</button>
		</div>
	</div>

	<div class="mx-auto hidden px-6 pb-2 md:block">
		<div
			class="text-text-primary mx-auto flex max-w-7xl items-center space-x-8 px-6 pt-1.5 text-sm"
		>
			{#each navLinks as link}
				<a href={link.href} class="hover-underline">{link.text}</a>
			{/each}
		</div>
	</div>

	{#if mobileMenuOpen}
		<div class="border-primary space-y-2 border-t px-6 pb-4 md:hidden">
			{#each navLinks as link}
				<a
					href={link.href}
					on:click={toggleMobileMenu}
					class="text-text-primary hover:text-text-secondary block pt-2 text-sm font-medium"
					>{link.text}</a
				>
			{/each}

			<div class="mt-4 border-t border-gray-200 pt-4">
				<a
					href="/auth/sign-in"
					class="text-text-primary hover:text-text-secondary block text-sm font-medium"
					>Sign-in</a
				>
				<a
					href="/auth/sign-up"
					class="bg-primary mt-2 block w-full rounded px-6 py-2 text-center text-sm font-medium text-white transition-colors hover:opacity-80"
					>Get Started</a
				>
			</div>
		</div>
	{/if}
</nav>

<style>
	.news-ticker {
		display: inline-block;
		white-space: nowrap;
		animation: ticker 40s linear infinite;
	}

	@keyframes ticker {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>
