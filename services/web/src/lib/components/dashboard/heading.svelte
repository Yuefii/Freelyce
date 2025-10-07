<script lang="ts">
	import { Plus } from 'lucide-svelte';

	export let title: string;
	export let description: string;
</script>

<div
	class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
>
	<div>
		<h1 class="text-2xl font-bold tracking-tight text-[#2F3E46] sm:text-3xl">
			{title}
		</h1>
		<p class="mt-1 text-sm text-gray-700 sm:text-base dark:text-white">
			{description}
		</p>
	</div>
	<a
		href="/dashboard/invoices/create"
		class="mt-4 flex items-center gap-2 rounded bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg sm:mt-0"
	>
		<Plus class="h-5 w-5" />
		Buat Invoice Baru
	</a>
</div>
