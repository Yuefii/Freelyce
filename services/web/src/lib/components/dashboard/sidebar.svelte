<script lang="ts">
	import { LayoutDashboard, FileText, Settings } from 'lucide-svelte';

	export let isMobile: boolean = false;
</script>

<aside
	class={`w-64 flex-col border-r border-gray-200 ${isMobile ? 'fixed inset-y-0 left-0 z-50 bg-white md:hidden' : 'hidden bg-black md:flex'}`}
>
	<div class="flex h-16 items-center px-6">
		<a
			href="/"
			class={`Grotesk text-2xl ${isMobile ? 'text-black' : 'text-white'}`}
			>FREELYCE</a
		>
	</div>

	<nav class="flex-1 space-y-2 overflow-y-auto p-4">
		<a
			href="/dashboard"
			class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-black"
		>
			<LayoutDashboard class="mr-3 h-5 w-5" />
			{isMobile ? 'Dasbor' : 'Dashboard'}
		</a>

		<a
			href="/dashboard/invoices"
			class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-black"
		>
			<FileText class="mr-3 h-5 w-5 text-white group-hover:text-black" />
			Invoice
		</a>

		<a
			href="/dashboard/settings"
			class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-black"
		>
			<Settings class="mr-3 h-5 w-5 text-white group-hover:text-black" />
			Pengaturan
		</a>
	</nav>
</aside>
