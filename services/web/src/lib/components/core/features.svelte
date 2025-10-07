<script lang="ts">
	import { FileText, Bell, BarChart3, Smartphone } from 'lucide-svelte';
</script>

<section
	id="features"
	class="bg-white py-24"
>
	<div class="mx-auto max-w-7xl px-6">
		<div class="mb-16 text-center">
			<h2 class="text-4xl leading-tight font-black text-text-primary">
				Dirancang untuk Kesuksesan Anda
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
				Semua alat yang Anda butuhkan untuk tampil profesional dan dibayar lebih
				cepat.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			<div class="text-center">
				<div
					class="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-text-primary"
				>
					<FileText class="h-6 w-6 text-white" />
				</div>
				<h3 class="mb-3 font-semibold text-text-primary">
					Template Profesional
				</h3>
				<p class="text-sm leading-relaxed text-text-secondary">
					Buat klien terkesan dengan invoice modern. Sesuaikan logo dan warna
					sesuai brand Anda dengan mudah.
				</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-text-primary"
				>
					<Bell class="h-6 w-6 text-white" />
				</div>
				<h3 class="mb-3 font-semibold text-text-primary">Pengingat Otomatis</h3>
				<p class="text-sm leading-relaxed text-text-secondary">
					Tak perlu lagi menagih manual. Sistem akan mengirimkan pengingat
					pembayaran secara otomatis kepada klien Anda.
				</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-text-primary"
				>
					<BarChart3 class="h-6 w-6 text-white" />
				</div>
				<h3 class="mb-3 font-semibold text-text-primary">Laporan Sederhana</h3>
				<p class="text-sm leading-relaxed text-text-secondary">
					Pantau pendapatan dan tagihan terbayar melalui dasbor yang simpel dan
					mudah dimengerti.
				</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-text-primary"
				>
					<Smartphone class="h-6 w-6 text-white" />
				</div>
				<h3 class="mb-3 font-semibold text-text-primary">Akses di Mana Saja</h3>
				<p class="text-sm leading-relaxed text-text-secondary">
					Berbasis cloud, data Anda aman dan bisa diakses kapan pun, baik
					melalui laptop, tablet, maupun ponsel.
				</p>
			</div>
		</div>
	</div>
</section>
