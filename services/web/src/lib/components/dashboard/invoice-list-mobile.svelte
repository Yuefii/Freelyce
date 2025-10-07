<script lang="ts">
	import { getStatusClass } from '$lib/helpers/status-class';
	import type { Invoice } from '$lib/invoice-example-data';
	import { ChevronDown } from 'lucide-svelte';

	export let invoices: Invoice[];
	let expandedInvoice: number | null = null;
</script>

<ul class="divide-y divide-gray-200 rounded border border-gray-200 bg-white">
	{#each invoices as invoice, i}
		<li>
			<button
				class="flex w-full items-center justify-between px-4 py-3 text-left font-semibold text-[#2F3E46] focus:outline-none"
				on:click={() =>
					expandedInvoice === i
						? (expandedInvoice = null)
						: (expandedInvoice = i)}
			>
				<span>{invoice.no}</span>
				<span class={getStatusClass(invoice.status)}>{invoice.status}</span>
				<ChevronDown class="ml-2 h-5 w-5" />
			</button>
			{#if expandedInvoice === i}
				<div class="px-4 py-4 text-sm">
					<div class="mb-1">
						<span class="font-medium">Klien:</span>
						{invoice.client}
					</div>
					<div class="mb-1">
						<span class="font-medium">Jumlah:</span>
						{invoice.amount}
					</div>
					<div class="mt-2 text-right">
						<a
							href={invoice.link}
							class="text-xs font-medium text-sky-600 hover:text-sky-900"
							>Lihat Detail</a
						>
					</div>
				</div>
			{/if}
		</li>
	{/each}
</ul>
