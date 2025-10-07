<script lang="ts">
	import { INVOICES, STATS } from '$lib/invoice-example-data';
	import InvoiceListMobile from '$lib/components/dashboard/invoice-list-mobile.svelte';
	import InvoiceTable from '$lib/components/dashboard/invoice-table.svelte';
	import DashboardStats from '$lib/components/dashboard/dashboard-stats.svelte';
	import Heading from '$lib/components/dashboard/heading.svelte';
	const user = {
		name: 'Pengguna'
	};
</script>

<Heading
	title="Selamat Datang, {user.name}"
	description="Berikut adalah ringkasan aktivitas keuangan Anda."
/>

<DashboardStats stats={STATS} />

<div class="mt-10">
	<h2 class="text-lg font-bold text-[#2F3E46] sm:text-xl">Invoice Terbaru</h2>
	<div class="mt-4 block sm:hidden">
		<InvoiceListMobile invoices={INVOICES} />
	</div>
	<div
		class="mt-4 hidden rounded-lg border border-gray-200 bg-white shadow-sm sm:block"
	>
		<InvoiceTable invoices={INVOICES} />
	</div>
</div>
