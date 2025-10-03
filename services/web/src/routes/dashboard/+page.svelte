<script lang="ts">
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

<div class="mb-8 flex flex-wrap items-center justify-between gap-4">
	<div>
		<h1 class="text-3xl font-bold tracking-tight text-[#2F3E46]">
			Selamat Datang, {user.name}!
		</h1>
		<p class="mt-1 text-white">
			Berikut adalah ringkasan aktivitas keuangan Anda.
		</p>
	</div>
	<a
		href="/dashboard/invoices/create"
		class="rounded-md bg-[#7A9E58] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:opacity-80"
	>
		+ Buat Invoice Baru
	</a>
</div>

<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
	<h2 class="text-xl font-bold text-[#2F3E46]">Invoice Terbaru</h2>
	<div
		class="mt-4 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
	>
		<div class="overflow-x-auto">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-[#7A9E58]">
					<tr>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white"
							>No. Invoice</th
						>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white"
							>Status</th
						>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white"
							>Klien</th
						>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white"
							>Jumlah</th
						>
						<th scope="col" class="relative px-6 py-3"
							><span class="sr-only">Aksi</span></th
						>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200 bg-white">
					{#each recentInvoices as invoice}
						<tr>
							<td
								class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900"
								>{invoice.invoiceNumber}</td
							>
							<td class="whitespace-nowrap px-6 py-4">
								{#if invoice.status === 'Lunas'}
									<span
										class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
									>
										Lunas
									</span>
								{:else if invoice.status === 'Menunggu'}
									<span
										class="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800"
									>
										Menunggu
									</span>
								{:else}
									<span
										class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800"
									>
										Jatuh Tempo
									</span>
								{/if}
							</td>
							<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500"
								>{invoice.client}</td
							>
							<td
								class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800"
								>{invoice.amount}</td
							>
							<td
								class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
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
