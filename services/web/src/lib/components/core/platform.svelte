<script lang="ts">
	const features = [
		{
			title: 'Pembuatan Invoice Cepat',
			color: 'text-text-secondary',
			items: [
				'Template profesional siap pakai',
				'Kustomisasi dengan logo & warna brand',
				'Simpan item & jasa untuk digunakan lagi',
				'Download & kirim invoice dalam format PDF'
			]
		},
		{
			title: 'Manajemen Pembayaran Mudah',
			color: 'text-text-primary',
			items: [
				'Kirim tagihan langsung ke email klien',
				'Pengingat pembayaran jatuh tempo otomatis',
				'Lacak status (dilihat, terbayar, terlambat)',
				'Kelola semua data klien di satu tempat'
			]
		},
		{
			title: 'Laporan & Analisis Sederhana',
			color: 'text-text-primary',
			items: [
				'Dashboard untuk memantau total pendapatan',
				'Lihat riwayat pembayaran dari setiap klien',
				'Laporan pendapatan bulanan & tahunan',
				'Ekspor data untuk keperluan administrasi'
			]
		}
	];
</script>

<section class="bg-secondary py-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="mb-16 text-center">
			<h2 class="mb-8 text-4xl leading-tight font-black text-text-primary">
				Satu Platform, Semua Kebutuhan
			</h2>
			<div class="mx-auto h-0.5 w-24 bg-primary"></div>
			<p class="mx-auto mt-8 max-w-2xl text-lg text-text-secondary">
				Dari membuat tagihan hingga memantau pendapatan, semua fitur yang Anda
				perlukan ada di sini untuk memudahkan pekerjaan Anda.
			</p>
		</div>

		<div class="grid gap-16 lg:grid-cols-3">
			{#each features as feature}
				<div>
					<h3 class="mb-6 text-xl font-bold text-text-primary">
						{feature.title}
					</h3>
					<ul class="{feature.color} space-y-4 text-sm">
						{#each feature.items as item}
							<li class="flex items-start">
								<div
									class="mt-2 mr-3 h-1 w-1 flex-shrink-0 rounded-full bg-primary"
								></div>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>
