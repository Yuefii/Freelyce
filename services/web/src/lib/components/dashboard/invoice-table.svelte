<script lang="ts">
	import type { Invoice } from '$lib/invoice-example-data';
	export let invoices: Invoice[];
</script>

<div class="w-full overflow-x-auto">
	<table
		class="min-w-[500px] divide-y divide-gray-200 text-xs sm:min-w-full sm:text-sm"
	>
		<thead class="bg-[#7A9E58]">
			<tr>
				<th
					scope="col"
					class="px-3 py-3 text-left font-medium uppercase tracking-wider text-white sm:px-6"
					>No. Invoice</th
				>
				<th
					scope="col"
					class="px-3 py-3 text-left font-medium uppercase tracking-wider text-white sm:px-6"
					>Status</th
				>
				<th
					scope="col"
					class="px-3 py-3 text-left font-medium uppercase tracking-wider text-white sm:px-6"
					>Klien</th
				>
				<th
					scope="col"
					class="px-3 py-3 text-left font-medium uppercase tracking-wider text-white sm:px-6"
					>Jumlah</th
				>
				<th scope="col" class="relative px-3 py-3 sm:px-6"
					><span class="sr-only">Aksi</span></th
				>
			</tr>
		</thead>
		<tbody class="divide-y divide-gray-200 bg-white">
			{#each invoices as invoice}
				<tr>
					<td
						class="whitespace-nowrap px-3 py-4 font-medium text-gray-900 sm:px-6"
						>{invoice.no}</td
					>
					<td class="whitespace-nowrap px-3 py-4 sm:px-6">
						<span class={invoice.statusClass}>{invoice.status}</span>
					</td>
					<td class="whitespace-nowrap px-3 py-4 text-gray-500 sm:px-6"
						>{invoice.client}</td
					>
					<td
						class="whitespace-nowrap px-3 py-4 font-medium text-gray-800 sm:px-6"
						>{invoice.amount}</td
					>
					<td
						class="whitespace-nowrap px-3 py-4 text-right font-medium sm:px-6"
					>
						<a href={invoice.link} class="text-sky-600 hover:text-sky-900"
							>Lihat</a
						>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
