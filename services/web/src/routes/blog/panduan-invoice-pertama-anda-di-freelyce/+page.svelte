<script lang="ts">
	import Footer from '$lib/components/core/footer.svelte';
	import Navbar from '$lib/components/core/navbar.svelte';
	import { ChevronRight } from 'lucide-svelte';

	const article = {
		category: 'Panduan Pengguna',
		title: 'Panduan Invoice Pertama Anda di Freelyce',
		author: 'Tim Freelyce',
		publishDate: '26 September 2025',
		featuredImage:
			'https://plus.unsplash.com/premium_photo-1661964030420-15481be20d5f?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: 'Panduan Invoice Pertama Anda di Freelyce.'
	};

	const recommendedArticles = [
		{
			slug: '/blog/post-1',
			category: 'Tips Freelance',
			title: '5 Kesalahan Umum Freelancer Saat Menentukan Harga'
		},
		{
			slug: '/blog/post-2',
			category: 'Manajemen Keuangan',
			title: 'Pentingnya Laporan Keuangan Sederhana untuk Bisnis Anda'
		},
		{
			slug: '/blog/post-3',
			category: 'Produktifitas',
			title: 'Fitur Tersembunyi di Freelyce untuk Maksimalkan Produktivitas'
		}
	];
</script>

<header>
	<Navbar />
</header>

<main class="pt-40">
	<div class="mx-auto max-w-7xl px-6 py-16">
		<nav
			aria-label="Breadcrumb"
			class="mb-8"
		>
			<ol class="flex items-center space-x-2 text-sm text-gray-500">
				<li>
					<a
						href="/"
						class="hover:text-gray-700 hover:underline">Home</a
					>
				</li>
				<li>
					<ChevronRight class="h-5 w-5 flex-shrink-0 text-gray-400" />
				</li>
				<li>
					<a
						href="/blog"
						class="hover:text-gray-700 hover:underline">Blog</a
					>
				</li>
				<li>
					<ChevronRight class="h-5 w-5 flex-shrink-0 text-gray-400" />
				</li>
				<li>
					<span class="font-medium text-gray-700">{article.title}</span>
				</li>
			</ol>
		</nav>

		<div class="grid grid-cols-1 gap-x-12 lg:grid-cols-3">
			<div class="lg:col-span-2 lg:border-r lg:border-gray-400 lg:pr-12">
				<article>
					<header class="mb-8 border-b border-gray-400 pb-8">
						<p
							class="text-sm font-semibold uppercase tracking-wider text-[#7A9E58]"
						>
							{article.category}
						</p>
						<h1
							class="mt-4 text-4xl font-black tracking-tight text-[#2F3E46] sm:text-5xl"
						>
							{article.title}
						</h1>
						<div class="mt-6 flex items-center space-x-4 text-sm text-gray-600">
							<span>Oleh {article.author}</span>
							<span class="text-gray-400">&bull;</span>
							<span>{article.publishDate}</span>
						</div>
					</header>

					<div class="my-8 overflow-hidden">
						<img
							src={article.featuredImage}
							alt={article.alt}
							class="aspect-video w-full object-cover"
						/>
					</div>

					<div
						class="prose prose-lg prose-headings:font-bold prose-headings:text-[#2F3E46]prose-a:text-[#2F3E46]prose-a:font-semibold hover:prose-a:underline mx-auto max-w-none text-gray-700"
					>
						<p class="lead">
							Selamat datang di Freelyce! Kami tahu, tujuan utama Anda adalah
							membuat invoice dan mendapatkan bayaran. Tapi sebelum itu, ada
							satu langkah pondasi yang akan membuat semua invoice Anda terlihat
							profesional secara otomatis.
						</p>
						<p>
							Mari kita siapkan identitas bisnis Anda agar bersinar di setiap
							dokumen yang Anda kirim.
						</p>

						<h2>Langkah 1: Pondasi Utama - Atur Informasi Bisnis Anda</h2>
						<p>
							Ini adalah langkah sekali seumur hidup di Freelyce. Dengan mengisi
							informasi bisnis, Anda memastikan setiap invoice memiliki kop
							surat yang profesional dan data yang akurat.
						</p>
						<ol>
							<li>Setelah login, cari menu <strong>"Pengaturan"</strong>.</li>
							<li>
								Di dalam menu Pengaturan, pilih tab <strong
									>"Profil Bisnis"</strong
								>.
							</li>
							<li>
								Isi kolom-kolom penting: <strong
									>Nama Bisnis, Alamat, Email, dan No. Telepon</strong
								> Anda.
							</li>
							<li>Jangan lupa unggah <strong>Logo Bisnis</strong> Anda!</li>
						</ol>

						<h2>Langkah 2: Tentukan Tujuan - Tambahkan Klien Anda</h2>
						<p>
							Setelah profil bisnis Anda siap, saatnya mendaftarkan klien yang
							akan Anda tagih...
						</p>

						<hr class="my-12" />
						<h2>Kini Anda Siap Menerima Pembayaran</h2>
						<p>
							Selamat! Anda telah berhasil menyiapkan akun dan mengirim invoice
							profesional pertama Anda.
						</p>
					</div>
				</article>
			</div>
			<aside class="hidden space-y-10 lg:block">
				<div class="sticky top-40 space-y-10">
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

					<div class="border-b border-gray-400 p-6">
						<h4 class="text-lg font-bold text-black">Baca Juga</h4>
						<div class="mt-4 space-y-4">
							{#each recommendedArticles as recArticle}
								<div>
									<p
										class="text-xs font-semibold uppercase tracking-wider text-[#7A9E58]"
									>
										{recArticle.category}
									</p>
									<a
										href={recArticle.slug}
										class="mt-1 block font-semibold text-[#2F3E46] hover:underline"
									>
										{recArticle.title}
									</a>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</aside>
		</div>
	</div>
</main>

<Footer />
