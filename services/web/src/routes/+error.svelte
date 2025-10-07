<script lang="ts">
	import { CircleAlert } from 'lucide-svelte';
</script>

<svelte:head>
	<title>404 - Halaman Tidak Ditemukan</title>
</svelte:head>

<div
	class="flex min-h-screen flex-col items-center justify-center p-10 text-text-primary"
>
	<div class="w-full p-20 text-center">
		<div class="mb-6 flex justify-center">
			<CircleAlert class="h-16 w-16 text-[#7A9E58]" />
		</div>
		<h1 class="text-6xl font-extrabold text-[#7A9E58]">404</h1>
		<p class="mt-4 text-xl font-semibold">Halaman Tidak Ditemukan</p>
		<p class="mt-2 text-gray-600">
			Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
		</p>
		<button
			type="button"
			class="mt-8 inline-block rounded bg-[#7A9E58] px-4 py-2 text-sm font-semibold text-white shadow transition hover:opacity-80"
			on:click={() => window.history.back()}
		>
			Kembali ke Halaman Sebelumnya
		</button>
	</div>
</div>
