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

<section
	id="pricing"
	class="bg-secondary py-24"
>
	<div class="mx-auto max-w-7xl px-6">
		<div class="mb-16 text-center">
			<h2 class="text-4xl leading-tight font-black text-text-primary">
				Harga yang Jelas & Transparan
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
				Mulai gratis selamanya, atau buka semua fitur canggih untuk kembangkan
				bisnis Anda.
			</p>
		</div>
		<div class="mx-auto grid max-w-md gap-12 lg:max-w-4xl lg:grid-cols-2">
			<div
				class="flex flex-col rounded border border-text-primary bg-white p-8"
			>
				<h3 class="text-2xl font-bold text-text-primary">Gratis</h3>
				<p class="mt-2 text-sm text-text-secondary">
					Cocok untuk freelancer yang baru memulai.
				</p>
				<div class="mt-6">
					<span class="text-4xl font-bold">Rp 0</span>
					<span class="text-lg font-medium text-text-secondary">/ bulan</span>
				</div>
				<ul class="mt-8 space-y-4 text-sm">
					<li class="flex items-center">
						<Check class="h-5 w-5 flex-shrink-0 text-primary" />
						<span class="ml-3 text-text-secondary">6 Invoice per bulan</span>
					</li>
					<li class="flex items-center">
						<Check class="h-5 w-5 flex-shrink-0 text-primary" />
						<span class="ml-3 text-text-secondary"
							>Manajemen Klien Terbatas</span
						>
					</li>
					<li class="flex items-center">
						<Check class="h-5 w-5 flex-shrink-0 text-primary" />
						<span class="ml-3 text-text-secondary">Template Invoice Dasar</span>
					</li>
				</ul>
				<div class="mt-auto pt-8">
					<a
						href="/auth/sign-up"
						class="block w-full cursor-pointer rounded border border-text-primary px-6 py-3 text-center font-medium text-text-primary transition-colors hover:scale-105 hover:shadow-lg"
					>
						Mulai Sekarang
					</a>
				</div>
			</div>
			<div
				class="relative flex flex-col rounded border-2 border-text-primary bg-white p-8"
			>
				<div
					class="absolute top-0 -translate-y-1/2 transform rounded bg-text-primary px-4 py-1 text-sm font-semibold text-white"
				>
					Paling Populer
				</div>
				<h3 class="text-2xl font-bold text-text-primary">Pro</h3>
				<p class="mt-2 text-sm text-text-secondary">
					Untuk freelancer & bisnis yang ingin berkembang.
				</p>
				<div class="mt-6 flex flex-col items-start gap-2">
					<div class="flex items-center gap-2">
						<span
							class="text-base font-semibold text-text-secondary line-through opacity-70"
							>Rp 125.000</span
						>
						<span
							class="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow"
						>
							80% Diskon
						</span>
					</div>
					<div class="mt-1 flex items-end gap-2">
						<span class="text-5xl font-extrabold text-black drop-shadow"
							>Rp 25.000</span
						>
						<span class="text-lg font-medium text-text-secondary">/ bulan</span>
					</div>
				</div>
				<ul class="mt-8 space-y-4 text-sm">
					<li class="flex items-center font-semibold">
						<Check class="h-5 w-5 flex-shrink-0 text-primary" />
						<span class="ml-3 text-text-primary"
							>Invoice & Klien Tanpa Batas</span
						>
					</li>
					<li class="flex items-center">
						<Check class="h-5 w-5 flex-shrink-0 text-primary" />
						<span class="ml-3 text-text-secondary"
							>Template Premium & Kustomisasi</span
						>
					</li>
					<li class="flex items-center">
						<Check class="h-5 w-5 flex-shrink-0 text-primary" />
						<span class="ml-3 text-text-secondary"
							>Lacak Status Invoice (Dilihat/Dibayar)</span
						>
					</li>
					<li class="flex items-center">
						<Check class="h-5 w-5 flex-shrink-0 text-primary" />
						<span class="ml-3 text-text-secondary"
							>Pengingat Pembayaran Otomatis</span
						>
					</li>
				</ul>
				<div class="mt-auto pt-8">
					<button
						class="w-full cursor-pointer rounded bg-text-primary px-6 py-3 font-semibold text-white shadow transition-all duration-200 hover:scale-105 hover:shadow-lg"
						on:click={openModal}
					>
						Pilih Paket Pro
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<Modal
	{showModal}
	onClose={closeModal}
/>
