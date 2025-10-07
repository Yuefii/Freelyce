<script lang="ts">
	import type { Stats } from '$lib/invoice-example-data';

	export let stats: Stats;
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
	<div
		class="overflow-hidden rounded border border-gray-200 bg-white shadow-sm"
	>
		<div class="p-5">
			<p class="truncate text-sm font-medium text-gray-500">
				Pendapatan (30 hari)
			</p>
			<p class="mt-1 text-3xl font-semibold tracking-tight text-[#2F3E46]">
				{stats.revenue}
			</p>
		</div>
	</div>
	<div
		class="overflow-hidden rounded border border-gray-200 bg-white shadow-sm"
	>
		<div class="p-5">
			<p class="truncate text-sm font-medium text-gray-500">Invoice Terbayar</p>
			<p class="mt-1 text-3xl font-semibold tracking-tight text-green-600">
				{stats.paidInvoices}
			</p>
		</div>
	</div>
	<div
		class="overflow-hidden rounded border border-gray-200 bg-white shadow-sm"
	>
		<div class="p-5">
			<p class="truncate text-sm font-medium text-gray-500">
				Menunggu Pembayaran
			</p>
			<p class="mt-1 text-3xl font-semibold tracking-tight text-yellow-600">
				{stats.pendingInvoices}
			</p>
		</div>
	</div>
	<div
		class="overflow-hidden rounded border border-gray-200 bg-white shadow-sm"
	>
		<div class="p-5">
			<p class="truncate text-sm font-medium text-gray-500">Jatuh Tempo</p>
			<p class="mt-1 text-3xl font-semibold tracking-tight text-red-600">
				{stats.overdueInvoices}
			</p>
		</div>
	</div>
</div>
