<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import { INVOICES, STATS } from './invoices/invoiceData';
	let expandedInvoice: number | null = null;

	const user = {
		name: 'Pengguna'
	};
</script>

<div
	class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
>
	<div>
		<h1 class="text-2xl font-bold tracking-tight text-[#2F3E46] sm:text-3xl">
			Selamat Datang, {user.name}!
		</h1>
		<p class="mt-1 text-sm text-gray-700 sm:text-base dark:text-white">
			Berikut adalah ringkasan aktivitas keuangan Anda.
		</p>
	</div>
	<a
		href="/dashboard/invoices/create"
		class="w-full rounded-md bg-[#7A9E58] px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-colors hover:opacity-80 sm:w-auto"
	>
		+ Buat Invoice Baru
	</a>
</div>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
	<div
		class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
	>
		<div class="p-5">
			<p class="truncate text-sm font-medium text-gray-500">
				Pendapatan (30 hari)
			</p>
			<p class="mt-1 text-3xl font-semibold tracking-tight text-[#2F3E46]">
				{STATS.revenue}
			</p>
		</div>
	</div>
	<div
		class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
	>
		<div class="p-5">
			<p class="truncate text-sm font-medium text-gray-500">Invoice Terbayar</p>
			<p class="mt-1 text-3xl font-semibold tracking-tight text-green-600">
				{STATS.paidInvoices}
			</p>
		</div>
	</div>
	<div
		class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
	>
		<div class="p-5">
			<p class="truncate text-sm font-medium text-gray-500">
				Menunggu Pembayaran
			</p>
			<p class="mt-1 text-3xl font-semibold tracking-tight text-yellow-600">
				{STATS.pendingInvoices}
			</p>
		</div>
	</div>
	<div
		class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
	>
		<div class="p-5">
			<p class="truncate text-sm font-medium text-gray-500">Jatuh Tempo</p>
			<p class="mt-1 text-3xl font-semibold tracking-tight text-red-600">
				{STATS.overdueInvoices}
			</p>
		</div>
	</div>
</div>

<div class="mt-10">
	<h2 class="text-lg font-bold text-[#2F3E46] sm:text-xl">Invoice Terbaru</h2>
	<!-- Mobile: List with dropdown -->
	<div class="mt-4 block sm:hidden">
		<ul
			class="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white"
		>
			{#each INVOICES as invoice, i}
				<li>
					<button
						class="flex w-full items-center justify-between px-4 py-3 text-left font-semibold text-[#2F3E46] focus:outline-none"
						on:click={() =>
							expandedInvoice === i
								? (expandedInvoice = null)
								: (expandedInvoice = i)}
					>
						<span>{invoice.no}</span>
						<span class={invoice.statusClass}>{invoice.status}</span>
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
	</div>
	<!-- Desktop: Table -->
	<div
		class="mt-4 hidden rounded-lg border border-gray-200 bg-white shadow-sm sm:block"
	>
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
					{#each INVOICES as invoice}
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
	</div>
</div>
