<script lang="ts">
	import type { Invoice } from '$lib/invoice-example-data';
	export let invoices: Invoice[];

	function getStatusClass(status: string) {
		if (status === 'Lunas')
			return 'inline-flex rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800';
		if (status === 'Menunggu')
			return 'inline-flex rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800';
		if (status === 'Jatuh Tempo')
			return 'inline-flex rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800';
		return 'inline-flex rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-800';
	}
</script>

<div class="w-full overflow-x-auto">
	<table
		class="min-w-[500px] divide-y divide-gray-200 text-xs sm:min-w-full sm:text-sm"
	>
		<thead class="bg-[#7A9E58]">
			<tr>
				<th
					scope="col"
					class="px-3 py-3 text-left font-medium tracking-wider text-white uppercase sm:px-6"
					>No. Invoice</th
				>
				<th
					scope="col"
					class="px-3 py-3 text-left font-medium tracking-wider text-white uppercase sm:px-6"
					>Status</th
				>
				<th
					scope="col"
					class="px-3 py-3 text-left font-medium tracking-wider text-white uppercase sm:px-6"
					>Klien</th
				>
				<th
					scope="col"
					class="px-3 py-3 text-left font-medium tracking-wider text-white uppercase sm:px-6"
					>Jumlah</th
				>
				<th
					scope="col"
					class="relative px-3 py-3 sm:px-6"
					><span class="sr-only">Aksi</span></th
				>
			</tr>
		</thead>
		<tbody class="divide-y divide-gray-200 bg-white">
			{#each invoices as invoice}
				<tr>
					<td
						class="px-3 py-4 font-medium whitespace-nowrap text-gray-900 sm:px-6"
						>{invoice.no}</td
					>
					<td class="px-3 py-4 whitespace-nowrap sm:px-6">
						<span class={getStatusClass(invoice.status)}>{invoice.status}</span>
					</td>
					<td class="px-3 py-4 whitespace-nowrap text-gray-500 sm:px-6"
						>{invoice.client}</td
					>
					<td
						class="px-3 py-4 font-medium whitespace-nowrap text-gray-800 sm:px-6"
						>{invoice.amount}</td
					>
					<td
						class="px-3 py-4 text-right font-medium whitespace-nowrap sm:px-6"
					>
						<a
							href={invoice.link}
							class="text-sky-600 hover:text-sky-900">Lihat</a
						>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
