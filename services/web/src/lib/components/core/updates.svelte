<script lang="ts">
	const updates = [
		{
			label: 'Desain Profesional',
			title: 'Template Invoice Modern dan Minimalis',
			desc: 'Tinggalkan invoice manual. Pilih dari berbagai template elegan yang bisa disesuaikan dengan logo dan warna brand Anda.',
			labelClass: 'text-text-primary',
			descClass: 'text-text-secondary'
		},
		{
			label: 'Efisiensi Waktu',
			title: 'Buat dan Kirim dalam Hitungan Detik',
			desc: 'Buat tagihan, kirim langsung ke email klien, dan dapatkan notifikasi saat invoice dilihat atau sudah dibayar. Semua dalam satu platform.',
			labelClass: 'text-text-primary',
			descClass: 'text-[#4B615E]'
		},
		{
			label: 'Akses & Keamanan',
			title: 'Data Aman dan Dapat Diakses di Mana Saja',
			desc: 'Semua data invoice dan klien Anda tersimpan dengan aman dan dapat diakses kapan pun melalui laptop maupun ponsel.',
			labelClass: 'text-text-primary',
			descClass: 'text-text-secondary'
		}
	];
</script>

<section class="bg-secondary py-16">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each updates as update}
				<article class="hover-lift">
					<div
						class="mb-3 text-xs font-medium uppercase tracking-wider {update.labelClass}"
					>
						{update.label}
					</div>
					<h3
						class="hover-underline text-text-primary mb-3 cursor-pointer text-lg font-semibold"
					>
						{update.title}
					</h3>
					<p class="text-sm leading-relaxed {update.descClass}">
						{update.desc}
					</p>
				</article>
			{/each}
		</div>
	</div>
</section>
