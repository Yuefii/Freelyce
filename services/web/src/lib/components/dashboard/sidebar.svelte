<script lang="ts">
	import { LayoutDashboard, FileText, Settings } from 'lucide-svelte';
	import logo from '$lib/assets/logo.png';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	export let isMobile: boolean = false;

	const currentPath = derived(page, ($page) => $page.url.pathname);
</script>

<aside
	class={`w-64 flex-col border-r border-slate-200 ${isMobile ? 'fixed inset-y-0 left-0 z-50 bg-white md:hidden' : 'hidden bg-white md:flex'}`}
>
	<div class="mt-5 flex h-16 items-center px-6">
		<a
			href="/"
			class="text-text-primary text-2xl md:text-4xl"
		>
			<img
				class="h-20 w-full"
				src={logo}
				alt="logo"
			/>
		</a>
	</div>
	<nav class="mt-3 flex-1 space-y-2 overflow-y-auto p-4">
		<a
			href="/dashboard"
			class="hover:bg-primary text-text-primary group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:text-white {$currentPath ===
			'/dashboard'
				? 'bg-primary text-white'
				: ''}"
		>
			<LayoutDashboard class="mr-3 h-5 w-5" />
			{isMobile ? 'Dashboard' : 'Dashboard'}
		</a>
		<a
			href="/dashboard/invoices"
			class="hover:bg-primary text-text-primary group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:text-white {$currentPath.startsWith(
				'/dashboard/invoices'
			)
				? 'bg-primary text-white'
				: ''}"
		>
			<FileText class="mr-3 h-5 w-5" />
			Invoices
		</a>
		<a
			href="/dashboard/settings"
			class="hover:bg-primary text-text-primary group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:text-white {$currentPath ===
			'/dashboard/settings'
				? 'bg-primary text-white'
				: ''}"
		>
			<Settings class="mr-3 h-5 w-5" />
			Pengaturan
		</a>
	</nav>
</aside>
