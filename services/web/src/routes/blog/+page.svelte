<script>
	import Navbar from '$lib/components/core/navbar.svelte';
	import Footer from '$lib/components/core/footer.svelte';
</script>

<header>
	<Navbar />
</header>

<main class="pt-40">
	<div class="mx-auto max-w-7xl px-6 py-16">
		<header class="mb-12 border-b border-[#2F3E46] pb-4">
			<h1 class="text-5xl font-black tracking-tight text-[#2F3E46] sm:text-6xl">
				Panduan & Wawasan
			</h1>
			<p class="mt-4 max-w-2xl text-lg text-[#4B615E]">
				Kumpulan artikel untuk tutorial, tips, info update terbaru tentang
				freelyce dan hal lain seputar teknologi.
			</p>
		</header>

		<div class="grid grid-cols-1 gap-x-12 lg:grid-cols-3">
			<div class="lg:col-span-2 lg:border-r lg:border-gray-400 lg:pr-12">
				<article
					class="group grid grid-cols-1 gap-8 border-b border-gray-400 pb-10 md:grid-cols-2"
				>
					<div class="overflow-hidden rounded-lg">
						<a href="/blog/panduan-invoice-pertama-anda-di-freelyce">
							<img
								src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="Meja kerja seorang freelancer dengan laptop."
								class="aspect-video h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
						</a>
					</div>
					<div class="flex flex-col">
						<p class="text-sm font-semibold text-[#7A9E58]">PANDUAN APLIKASI</p>
						<h2
							class="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#2F3E46]"
						>
							<a
								href="/blog/panduan-invoice-pertama-anda-di-freelyce"
								class="hover:text-gray-700"
								>Panduan Invoice Pertama Anda di Freelyce</a
							>
						</h2>
						<p class="mt-4 text-base text-[#4B615E]">
							Panduan lengkap langkah demi langkah untuk mengubah kerja keras
							Anda menjadi dokumen profesional yang siap menghasilkan uang...
						</p>
						<a
							href="/blog/panduan-invoice-pertama-anda-di-freelyce"
							class="mt-auto pt-4 text-sm font-bold text-[#2F3E46] transition-all group-hover:ml-1"
							>Baca selengkapnya &rarr;</a
						>
					</div>
				</article>

				<div class="mt-10 space-y-10">
					<h3 class="text-2xl font-bold text-[#2F3E46]">Artikel Terbaru</h3>
					<article
						class="group grid grid-cols-1 gap-6 border-b border-gray-400 pb-10 md:grid-cols-4"
					>
						<a
							href="/blog/panduan-invoice-pertama-anda-di-freelyce"
							class="block h-full overflow-hidden rounded-lg md:col-span-1"
						>
							<img
								src="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3xlbnwwfHwwfHx8MA%3D%3D"
								alt="Tampilan antarmuka sebuah aplikasi di layar."
								class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
						</a>
						<div class="flex flex-col md:col-span-3">
							<p
								class="text-xs font-semibold uppercase tracking-wider text-[#7A9E58]"
							>
								Panduan Aplikasi
							</p>
							<h4 class="mt-2 text-xl font-bold text-[#2F3E46]">
								<a
									href="/blog/panduan-invoice-pertama-anda-di-freelyce"
									class="hover:text-gray-700"
									>Fitur Tersembunyi di Freelyce untuk Maksimalkan Produktivitas</a
								>
							</h4>
							<p class="mt-auto pt-2 text-sm text-gray-500">
								Oleh Tim Freelyce &bull; 10 Sep 2025
							</p>
						</div>
					</article>
				</div>
			</div>

			<aside class="space-y-10">
				<div class="border-b border-gray-400 bg-white p-6">
					<h4 class="text-center text-2xl font-bold text-[#2F3E46]">
						Mulai Buat Invoice Kamu
					</h4>
					<p class="my-4 text-center text-sm text-[#4B615E]">
						Daftar gratis dan rasakan kemudahan membuat invoice profesional
						dalam hitungan menit. Tidak perlu kartu kredit untuk memulai.
					</p>
					<div class="flex justify-center">
						<a
							href="/auth/sign-up"
							class="rounded bg-[#7A9E58] px-10 py-2 text-base font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
						>
							Daftar Gratis Sekarang
						</a>
					</div>
				</div>
				<div class="border-b border-gray-400 p-8 text-center">
					<h4 class="text-2xl font-bold text-[#2F3E46]">Tentang Kami.</h4>
					<p class="mt-3 text-sm text-gray-700">
						Freelyce lahir dari keresahan kami akan administrasi yang rumit.
						Misi kami adalah memberdayakan para pekerja mandiri di Indonesia
						dengan alat yang simpel dan kuat.
					</p>
					<a
						href="/#about"
						class="mt-4 inline-block text-sm font-bold text-[#2F3E46] transition-all hover:underline"
					>
						Baca Cerita Kami &rarr;
					</a>
				</div>
			</aside>
		</div>
	</div>
</main>

<Footer />
