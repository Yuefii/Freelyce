<script lang="ts">
	import { Check } from 'lucide-svelte';
	import Modal from './modal-coming-soon.svelte';

	let showModal = false;

	function openModal() {
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}
</script>

<section id="pricing" class="bg-secondary py-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="mb-16 text-center">
			<h2 class="text-text-primary text-4xl font-black leading-tight">
				Harga yang Jelas & Transparan
			</h2>
			<p class="text-text-secondary mx-auto mt-4 max-w-2xl text-lg">
				Mulai gratis selamanya, atau buka semua fitur canggih untuk kembangkan
				bisnis Anda.
			</p>
		</div>

		<div class="mx-auto grid max-w-md gap-12 lg:max-w-4xl lg:grid-cols-2">
			<div
				class="border-text-primary flex flex-col rounded border bg-white p-8"
			>
				<h3 class="text-text-primary text-2xl font-bold">Gratis</h3>
				<p class="text-text-secondary mt-2 text-sm">
					Cocok untuk freelancer yang baru memulai.
				</p>
				<div class="mt-6">
					<span class="text-4xl font-bold">Rp 0</span>
					<span class="text-text-secondary text-lg font-medium">/ bulan</span>
				</div>
				<ul class="mt-8 space-y-4 text-sm">
					<li class="flex items-center">
						<Check class="text-primary h-5 w-5 flex-shrink-0" />
						<span class="text-text-secondary ml-3">6 Invoice per bulan</span>
					</li>
					<li class="flex items-center">
						<Check class="text-primary h-5 w-5 flex-shrink-0" />
						<span class="text-text-secondary ml-3"
							>Manajemen Klien Terbatas</span
						>
					</li>
					<li class="flex items-center">
						<Check class="text-primary h-5 w-5 flex-shrink-0" />
						<span class="text-text-secondary ml-3">Template Invoice Dasar</span>
					</li>
				</ul>
				<div class="mt-auto pt-8">
					<a
						href="/auth/sign-up"
						class="border-text-primary text-text-primary block w-full cursor-pointer rounded border px-6 py-3 text-center font-medium transition-colors hover:opacity-80"
					>
						Mulai Sekarang
					</a>
				</div>
			</div>

			<div
				class="border-text-primary relative flex flex-col rounded border-2 bg-white p-8"
			>
				<div
					class="bg-text-primary absolute top-0 -translate-y-1/2 transform rounded px-4 py-1 text-sm font-semibold text-white"
				>
					Paling Populer
				</div>
				<h3 class="text-text-primary text-2xl font-bold">Pro</h3>
				<p class="text-text-secondary mt-2 text-sm">
					Untuk freelancer & bisnis yang ingin berkembang.
				</p>
				<div class="mt-6">
					<span class="text-4xl font-bold">Rp 59.000</span>
					<span class="text-text-secondary text-lg font-medium">/ bulan</span>
				</div>
				<ul class="mt-8 space-y-4 text-sm">
					<li class="flex items-center font-semibold">
						<Check class="text-primary h-5 w-5 flex-shrink-0" />
						<span class="text-text-primary ml-3"
							>Invoice & Klien Tanpa Batas</span
						>
					</li>
					<li class="flex items-center">
						<Check class="text-primary h-5 w-5 flex-shrink-0" />
						<span class="text-text-secondary ml-3"
							>Template Premium & Kustomisasi</span
						>
					</li>
					<li class="flex items-center">
						<Check class="text-primary h-5 w-5 flex-shrink-0" />
						<span class="text-text-secondary ml-3"
							>Lacak Status Invoice (Dilihat/Dibayar)</span
						>
					</li>
					<li class="flex items-center">
						<Check class="text-primary h-5 w-5 flex-shrink-0" />
						<span class="text-text-secondary ml-3"
							>Pengingat Pembayaran Otomatis</span
						>
					</li>
				</ul>
				<div class="mt-auto pt-8">
					<button
						class="bg-text-primary w-full cursor-pointer rounded px-6 py-3 font-medium text-white transition-colors hover:opacity-80"
						on:click={openModal}
					>
						Pilih Paket Pro
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<Modal {showModal} onClose={closeModal} />
