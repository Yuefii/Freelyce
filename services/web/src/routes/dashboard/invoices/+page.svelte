<script lang="ts">
	import Heading from '$lib/components/dashboard/heading.svelte';
	import InvoiceListMobile from '$lib/components/dashboard/invoice-list-mobile.svelte';
	import InvoiceTable from '$lib/components/dashboard/invoice-table.svelte';
	import { INVOICES } from '$lib/invoice-example-data';
	import { Search } from 'lucide-svelte';
</script>

<main class="mx-auto">
	<Heading
		title="Invoices"
		description="Berikut adalah daftar semua invoice Anda."
	/>

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
					class="w-full rounded border border-slate-300 bg-white py-2 pr-4 pl-10 text-sm text-slate-700 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
				/>
			</div>
		</div>

		<div class="mt-4 block sm:hidden">
			<InvoiceListMobile invoices={INVOICES} />
		</div>
		<div
			class="mt-4 hidden rounded-lg border border-gray-200 bg-white shadow-sm sm:block"
		>
			<InvoiceTable invoices={INVOICES} />
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
