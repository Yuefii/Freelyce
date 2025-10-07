<script lang="ts">
	import { INVOICES } from './invoiceData';
	import { Plus, Search } from 'lucide-svelte';
</script>

<main class="mx-auto">
	<header
		class="mb-8 flex flex-col items-start justify-between sm:flex-row sm:items-center"
	>
		<div>
			<h1 class="text-3xl font-extrabold text-slate-800">Invoices</h1>
			<p class="mt-1 text-sm text-slate-500">
				Berikut adalah daftar semua invoice Anda.
			</p>
		</div>
		<a
			href="/dashboard/invoices/create"
			class="bg-primary mt-4 flex items-center gap-2 rounded px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:opacity-80 focus:ring-4 focus:ring-emerald-200 sm:mt-0"
		>
			<Plus class="h-5 w-5" />
			Buat Invoice Baru
		</a>
	</header>

	<div class="overflow-hidden">
		<div class="flex items-center justify-between py-4">
			<div class="relative w-full max-w-xs">
				<div
					class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
				>
					<Search class="h-5 w-5 text-slate-400" />
				</div>
				<input
					type="text"
					placeholder="Cari klien atau no. invoice..."
					class="w-full rounded border border-slate-300 bg-white py-2 pl-10 pr-4 text-sm text-slate-700 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
				/>
			</div>
		</div>

		<div
			class="overflow-x-auto rounded border border-slate-200 bg-white shadow-sm"
		>
			<table class="w-full text-left text-sm text-slate-600">
				<thead class="bg-primary text-xs uppercase text-white">
					<tr>
						<th class="px-6 py-4">No. Invoice</th>
						<th class="px-6 py-4">Status</th>
						<th class="px-6 py-4">Klien</th>
						<th class="px-6 py-4 text-right">Jumlah</th>
						<th class="px-6 py-4 text-center">Aksi</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-slate-200">
					{#each INVOICES as invoice}
						<tr>
							<td class="whitespace-nowrap px-6 py-4 font-medium text-slate-900"
								>{invoice.no}</td
							>
							<td class="px-6 py-4">
								<span class={invoice.statusClass}>{invoice.status}</span>
							</td>
							<td class="px-6 py-4">{invoice.client}</td>
							<td class="px-6 py-4 text-right font-semibold"
								>{invoice.amount}</td
							>
							<td class="px-6 py-4 text-center">
								<a
									href={invoice.link}
									class="font-medium text-emerald-600 hover:underline">Lihat</a
								>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<div class="flex items-center justify-between py-4">
			<span class="text-sm text-slate-500"
				>Menampilkan <span class="font-semibold">1-4</span> dari
				<span class="font-semibold">20</span> invoice</span
			>
			<div class="inline-flex items-center gap-2">
				<button
					class="rounded border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
				>
					Sebelumnya
				</button>
				<button
					class="rounded border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
				>
					Berikutnya
				</button>
			</div>
		</div>
	</div>
</main>
