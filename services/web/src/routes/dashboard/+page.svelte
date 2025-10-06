<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	let expandedInvoice: number | null = null;

	const user = {
		name: 'Pengguna'
	};

	const stats = {
		revenue: 'Rp 15.750.000',
		paidInvoices: 8,
		pendingInvoices: 3,
		overdueInvoices: 1
	};

	const recentInvoices = [
		{
			status: 'Lunas',
			invoiceNumber: 'INV-2025-0012',
			client: 'PT Teknologi Maju',
			date: '25 Sep 2025',
			amount: 'Rp 5.000.000'
		},
		{
			status: 'Menunggu',
			invoiceNumber: 'INV-2025-0011',
			client: 'Creative Studio',
			date: '22 Sep 2025',
			amount: 'Rp 2.500.000'
		},
		{
			status: 'Jatuh Tempo',
			invoiceNumber: 'INV-2025-0010',
			client: 'Kopi Kenangan Senja',
			date: '15 Sep 2025',
			amount: 'Rp 1.250.000'
		},
		{
			status: 'Lunas',
			invoiceNumber: 'INV-2025-0009',
			client: 'Digital Agency ID',
			date: '10 Sep 2025',
			amount: 'Rp 7.000.000'
		}
	];
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
				{stats.revenue}
			</p>
		</div>
	</div>
	<div
		class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
	>
		<div class="p-5">
			<p class="truncate text-sm font-medium text-gray-500">Invoice Terbayar</p>
			<p class="mt-1 text-3xl font-semibold tracking-tight text-green-600">
				{stats.paidInvoices}
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
				{stats.pendingInvoices}
			</p>
		</div>
	</div>
	<div
		class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
	>
		<div class="p-5">
			<p class="truncate text-sm font-medium text-gray-500">Jatuh Tempo</p>
			<p class="mt-1 text-3xl font-semibold tracking-tight text-red-600">
				{stats.overdueInvoices}
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
			{#each recentInvoices as invoice, i}
				<li>
					<button
						class="flex w-full items-center justify-between px-4 py-3 text-left font-semibold text-[#2F3E46] focus:outline-none"
						on:click={() =>
							expandedInvoice === i
								? (expandedInvoice = null)
								: (expandedInvoice = i)}
					>
						<span>{invoice.invoiceNumber}</span>
						{#if invoice.status === 'Lunas'}
							<span
								class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
								>Lunas</span
							>
						{:else if invoice.status === 'Menunggu'}
							<span
								class="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800"
								>Menunggu</span
							>
						{:else}
							<span
								class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800"
								>Jatuh Tempo</span
							>
						{/if}
						<ChevronDown class="ml-2 h-5 w-5" />
					</button>
					{#if expandedInvoice === i}
						<div class="px-4 py-4 text-sm">
							<div class="mb-1">
								<span class="font-medium">Klien:</span>
								{invoice.client}
							</div>
							<div class="mb-1">
								<span class="font-medium">Tanggal:</span>
								{invoice.date}
							</div>
							<div class="mb-1">
								<span class="font-medium">Jumlah:</span>
								{invoice.amount}
							</div>
							<div class="mt-2 text-right">
								<a
									href="/#"
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
					{#each recentInvoices as invoice}
						<tr>
							<td
								class="whitespace-nowrap px-3 py-4 font-medium text-gray-900 sm:px-6"
								>{invoice.invoiceNumber}</td
							>
							<td class="whitespace-nowrap px-3 py-4 sm:px-6">
								{#if invoice.status === 'Lunas'}
									<span
										class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
										>Lunas</span
									>
								{:else if invoice.status === 'Menunggu'}
									<span
										class="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800"
										>Menunggu</span
									>
								{:else}
									<span
										class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800"
										>Jatuh Tempo</span
									>
								{/if}
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
								<a href="/#" class="text-sky-600 hover:text-sky-900">Lihat</a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
