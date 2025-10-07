<script lang="ts">
	import logo from '$lib/assets/logo.png';
</script>

<div class="min-h-screen">
	<div class="mx-auto mb-6">
		<div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
			<a
				href="/dashboard/invoices"
				class="text-text-primary text-sm font-semibold hover:underline"
			>
				&larr; Kembali ke Daftar Invoice
			</a>
			<div class="flex items-center gap-3">
				<button
					class="text-text-primary cursor-pointer rounded border border-slate-300 bg-white px-4 py-2 text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
				>
					Edit
				</button>
				<button
					class="text-text-primary cursor-pointer rounded border border-slate-300 bg-white px-4 py-2 text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
				>
					Kirim
				</button>
				<button
					class="bg-primary cursor-pointer rounded px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
				>
					Download PDF
				</button>
			</div>
		</div>
	</div>

	<div
		class="relative mx-auto rounded border border-slate-200 bg-white p-8 shadow-lg sm:p-12"
	>
		<header
			class="flex items-start justify-between border-b border-slate-200 pb-8"
		>
			<div>
				<div class="mb-5">
					<img
						class="h-20 w-full"
						src={logo}
						alt="logo"
					/>
				</div>
				<p class="text-text-secondary text-sm">
					Jl. Freelancer No. 123<br />
					Kota Kreatif, 15412<br />
					hello@freelyce.com
				</p>
			</div>
			<div class="text-right">
				<h1
					class="text-text-primary text-3xl font-extrabold uppercase tracking-wide sm:text-4xl"
				>
					Invoice
				</h1>
				<p class="text-text-secondary mt-1 text-sm">#INV-2025-0012</p>
			</div>
		</header>

		<section class="mt-8 flex items-start justify-between">
			<div>
				<h2 class="text-text-primary mb-2 text-sm font-semibold uppercase">
					Ditagihkan Kepada:
				</h2>
				<p class="text-text-primary font-bold">PT Teknologi Maju</p>
				<p class="text-text-secondary text-sm">
					Jl. Inovasi Digital Blok A1<br />
					Jakarta Selatan, 12345<br />
					finance@teknologimaju.com
				</p>
			</div>
			<div class="text-right">
				<div class="mb-2">
					<span class="text-text-primary text-sm font-semibold uppercase"
						>Tanggal Terbit:
					</span>
					<span class="text-text-primary font-medium">7 Oktober 2025</span>
				</div>
				<div>
					<span class="text-text-primary text-sm font-semibold uppercase"
						>Jatuh Tempo:
					</span>
					<span class="text-text-primary font-medium">21 Oktober 2025</span>
				</div>
				<div class="mt-2">
					<span class="text-text-primary text-sm font-semibold uppercase"
						>Status:
					</span>
					<span
						class="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800"
					>
						Lunas
					</span>
				</div>
			</div>
		</section>

		<section class="mt-10">
			<div class="overflow-x-auto">
				<table class="w-full text-left">
					<thead class="bg-slate-50">
						<tr>
							<th class="text-text-primary p-3 text-sm font-semibold uppercase"
								>Deskripsi</th
							>
							<th
								class="text-text-primary w-24 p-3 text-center text-sm font-semibold uppercase"
								>Jumlah</th
							>
							<th
								class="text-text-primary w-36 p-3 text-right text-sm font-semibold uppercase"
								>Harga Satuan</th
							>
							<th
								class="text-text-primary w-40 p-3 text-right text-sm font-semibold uppercase"
								>Total</th
							>
						</tr>
					</thead>
					<tbody class="divide-y divide-slate-200">
						<tr>
							<td class="p-3 align-top">
								<p class="text-text-primary font-semibold">
									Pengembangan Website E-commerce
								</p>
								<p class="text-text-secondary mt-1 text-xs">
									Fitur lengkap termasuk payment gateway dan manajemen produk.
								</p>
							</td>
							<td class="p-3 text-center align-top">1</td>
							<td class="p-3 text-right align-top">Rp 5.000.000</td>
							<td class="p-3 text-right align-top font-semibold"
								>Rp 5.000.000</td
							>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section class="mt-8 flex items-start justify-between">
			<div class="w-1/2 pr-10">
				<h3 class="text-text-primary mb-2 text-sm font-semibold uppercase">
					Catatan:
				</h3>
				<p class="text-text-secondary text-xs">
					Pembayaran dapat dilakukan melalui transfer ke rekening BCA 12345678
					a/n Freelyce. Terima kasih atas kerja samanya.
				</p>
			</div>
			<div class="ml-auto w-1/2 max-w-xs">
				<div class="space-y-3">
					<div class="flex justify-between">
						<span class="text-text-secondary text-sm">Subtotal</span>
						<span class="text-text-primary font-medium">Rp 5.000.000</span>
					</div>
					<div class="flex justify-between">
						<span class="text-text-secondary text-sm">Pajak (11%)</span>
						<span class="text-text-primary font-medium">Rp 550.000</span>
					</div>
					<div class="my-2 border-t border-slate-200"></div>
					<div class="flex items-center justify-between">
						<span class="text-text-primary font-bold">Total Tagihan</span>
						<span class="text-primary text-2xl font-extrabold"
							>Rp 5.550.000</span
						>
					</div>
				</div>
			</div>
		</section>

		<footer class="mt-12 border-t border-slate-200 pt-6">
			<p class="text-center text-xs text-slate-400">
				Jika ada pertanyaan mengenai invoice ini, silakan hubungi kami.
			</p>
		</footer>
	</div>
</div>
