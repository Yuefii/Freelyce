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

<section id="pricing" class="bg-[#F0F9E4] py-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="mb-16 text-center">
			<h2 class="text-4xl font-black leading-tight text-[#2F3E46]">
				Harga yang Jelas & Transparan
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
				Mulai gratis selamanya, atau buka semua fitur canggih untuk kembangkan
				bisnis Anda.
			</p>
		</div>

		<div class="mx-auto grid max-w-md gap-12 lg:max-w-4xl lg:grid-cols-2">
			<div class="flex flex-col rounded border border-[#2F3E46] bg-white p-8">
				<h3 class="text-2xl font-bold text-[#2F3E46]">Gratis</h3>
				<p class="mt-2 text-sm text-gray-600">
					Cocok untuk freelancer yang baru memulai.
				</p>
				<div class="mt-6">
					<span class="text-4xl font-bold">Rp 0</span>
					<span class="text-lg font-medium text-gray-500">/ bulan</span>
				</div>
				<ul class="mt-8 space-y-4 text-sm">
					<li class="flex items-center">
						<Check class="h-5 w-5 flex-shrink-0 text-green-500" />
						<span class="ml-3 text-gray-700">6 Invoice per bulan</span>
					</li>
					<li class="flex items-center">
						<Check class="h-5 w-5 flex-shrink-0 text-green-500" />
						<span class="ml-3 text-gray-700">Manajemen Klien Terbatas</span>
					</li>
					<li class="flex items-center">
						<Check class="h-5 w-5 flex-shrink-0 text-green-500" />
						<span class="ml-3 text-gray-700">Template Invoice Dasar</span>
					</li>
				</ul>
				<div class="mt-auto pt-8">
					<a
						href="/auth/sign-up"
						class="block w-full rounded border border-[#2F3E46] px-6 py-3 text-center font-medium text-[#2F3E46] transition-colors hover:bg-gray-50"
					>
						Mulai Sekarang
					</a>
				</div>
			</div>

			<div
				class="relative flex flex-col rounded border-2 border-[#2F3E46] bg-white p-8"
			>
				<div
					class="absolute top-0 -translate-y-1/2 transform rounded bg-[#2F3E46] px-4 py-1 text-sm font-semibold text-white"
				>
					Paling Populer
				</div>
				<h3 class="text-2xl font-bold text-[#2F3E46]">Pro</h3>
				<p class="mt-2 text-sm text-gray-600">
					Untuk freelancer & bisnis yang ingin berkembang.
				</p>
				<div class="mt-6">
					<span class="text-4xl font-bold">Rp 59.000</span>
					<span class="text-lg font-medium text-gray-500">/ bulan</span>
				</div>
				<ul class="mt-8 space-y-4 text-sm">
					<li class="flex items-center font-semibold">
						<Check class="h-5 w-5 flex-shrink-0 text-green-500" />
						<span class="ml-3 text-gray-900">Invoice & Klien Tanpa Batas</span>
					</li>
					<li class="flex items-center">
						<Check class="h-5 w-5 flex-shrink-0 text-green-500" />
						<span class="ml-3 text-gray-700"
							>Template Premium & Kustomisasi</span
						>
					</li>
					<li class="flex items-center">
						<Check class="h-5 w-5 flex-shrink-0 text-green-500" />
						<span class="ml-3 text-gray-700"
							>Lacak Status Invoice (Dilihat/Dibayar)</span
						>
					</li>
					<li class="flex items-center">
						<Check class="h-5 w-5 flex-shrink-0 text-green-500" />
						<span class="ml-3 text-gray-700">Pengingat Pembayaran Otomatis</span
						>
					</li>
				</ul>
				<div class="mt-auto pt-8">
					<button
						class="w-full rounded bg-[#2F3E46] px-6 py-3 font-medium text-white transition-colors hover:opacity-80"
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
