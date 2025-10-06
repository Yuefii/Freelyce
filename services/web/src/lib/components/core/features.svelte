<script lang="ts">
	import { FileText, Bell, BarChart3, Smartphone } from 'lucide-svelte';
</script>

<section id="features" class="bg-white py-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="mb-16 text-center">
			<h2 class="text-text-primary text-4xl font-black leading-tight">
				Dirancang untuk Kesuksesan Anda
			</h2>
			<p class="text-text-secondary mx-auto mt-4 max-w-2xl text-lg">
				Semua alat yang Anda butuhkan untuk tampil profesional dan dibayar lebih
				cepat.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			<div class="text-center">
				<div
					class="bg-text-primary mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-sm"
				>
					<FileText class="h-6 w-6 text-white" />
				</div>
				<h3 class="text-text-primary mb-3 font-semibold">
					Template Profesional
				</h3>
				<p class="text-text-secondary text-sm leading-relaxed">
					Buat klien terkesan dengan invoice modern. Sesuaikan logo dan warna
					sesuai brand Anda dengan mudah.
				</p>
			</div>

			<div class="text-center">
				<div
					class="bg-text-primary mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-sm"
				>
					<Bell class="h-6 w-6 text-white" />
				</div>
				<h3 class="text-text-primary mb-3 font-semibold">Pengingat Otomatis</h3>
				<p class="text-text-secondary text-sm leading-relaxed">
					Tak perlu lagi menagih manual. Sistem akan mengirimkan pengingat
					pembayaran secara otomatis kepada klien Anda.
				</p>
			</div>

			<div class="text-center">
				<div
					class="bg-text-primary mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-sm"
				>
					<BarChart3 class="h-6 w-6 text-white" />
				</div>
				<h3 class="text-text-primary mb-3 font-semibold">Laporan Sederhana</h3>
				<p class="text-text-secondary text-sm leading-relaxed">
					Pantau pendapatan dan tagihan terbayar melalui dasbor yang simpel dan
					mudah dimengerti.
				</p>
			</div>

			<div class="text-center">
				<div
					class="bg-text-primary mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-sm"
				>
					<Smartphone class="h-6 w-6 text-white" />
				</div>
				<h3 class="text-text-primary mb-3 font-semibold">Akses di Mana Saja</h3>
				<p class="text-text-secondary text-sm leading-relaxed">
					Berbasis cloud, data Anda aman dan bisa diakses kapan pun, baik
					melalui laptop, tablet, maupun ponsel.
				</p>
			</div>
		</div>
	</div>
</section>
