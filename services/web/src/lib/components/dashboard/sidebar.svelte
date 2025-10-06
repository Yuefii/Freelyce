<script lang="ts">
	import { LayoutDashboard, FileText, Settings } from 'lucide-svelte';
	import logo from '$lib/assets/logo.png';

	export let isMobile: boolean = false;
</script>

<aside
	class={`w-64 flex-col border-r border-gray-200 ${isMobile ? 'fixed inset-y-0 left-0 z-50 bg-[#F0F9E4] md:hidden' : 'hidden bg-[#F0F9E4] md:flex'}`}
>
	<div class="flex h-16 items-center px-6">
		<a href="/" class="text-2xl text-[#2F3E46] md:text-4xl">
			<img class="h-16 w-full" src={logo} alt="logo" />
		</a>
	</div>
	<nav class="flex-1 space-y-2 overflow-y-auto p-4">
		<a
			href="/dashboard"
			class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-[#2F3E46] hover:bg-white hover:text-black"
		>
			<LayoutDashboard class="mr-3 h-5 w-5" />
			{isMobile ? 'Dashboard' : 'Dashboard'}
		</a>
		<a
			href="/dashboard/invoices"
			class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-[#2F3E46] hover:bg-white hover:text-black"
		>
			<FileText class="mr-3 h-5 w-5 text-[#2F3E46] group-hover:text-black" />
			Invoice
		</a>
		<a
			href="/dashboard/settings"
			class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-[#2F3E46] hover:bg-white hover:text-black"
		>
			<Settings class="mr-3 h-5 w-5 text-[#2F3E46] group-hover:text-black" />
			Pengaturan
		</a>
	</nav>
</aside>
