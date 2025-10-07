<script lang="ts">
	import { fly } from 'svelte/transition';
	import Sidebar from '$lib/components/dashboard/sidebar.svelte';
	import Header from '$lib/components/dashboard/header.svelte';
	import SidebarMobileDrop from '$lib/components/dashboard/sidebar-mobile-drop.svelte';

	let mobileMenuOpen = false;
</script>

<div class="flex h-screen bg-white font-sans">
	<Sidebar />

	{#if mobileMenuOpen}
		<SidebarMobileDrop close={() => (mobileMenuOpen = false)} />
		<div transition:fly={{ x: -300, duration: 300 }}>
			<Sidebar isMobile={true} />
		</div>
	{/if}

	<div class="flex flex-1 flex-col">
		<Header toggleMenu={() => (mobileMenuOpen = !mobileMenuOpen)} />
		<main class="flex-1 overflow-y-auto p-6 md:p-8">
			<slot />
		</main>
	</div>
</div>
