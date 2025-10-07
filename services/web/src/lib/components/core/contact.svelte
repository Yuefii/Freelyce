<script lang="ts">
	let name = '';
	let userEmail = '';
	let message = '';
	const recipientEmail = 'freelyce@gmail.com';

	function handleSubmit() {
		const subject = `Pesan dari ${name} via Website`;
		const body = `Nama: ${name}\nEmail: ${userEmail}\n\nPesan:\n${message}`;
		window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	}
</script>

<section
	id="contact"
	class="bg-secondary py-24"
>
	<div class="mx-auto max-w-3xl px-6 text-center">
		<h2 class="text-4xl leading-tight font-black text-text-primary">
			Hubungi Kami
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
			Ada pertanyaan, saran, atau butuh bantuan? Jangan ragu untuk mengisi form
			di bawah ini.
		</p>

		<form
			on:submit|preventDefault={handleSubmit}
			class="mt-12 text-left"
		>
			<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
				<div class="sm:col-span-2">
					<label
						for="name"
						class="block text-sm leading-6 font-semibold text-text-primary"
						>Nama Lengkap</label
					>
					<div class="mt-2.5">
						<input
							type="text"
							id="name"
							bind:value={name}
							required
							class="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-[#7A9E58] focus:outline-none focus:ring-inset sm:text-sm sm:leading-6"
							placeholder="John Doe"
						/>
					</div>
				</div>
				<div class="sm:col-span-2">
					<label
						for="email"
						class="block text-sm leading-6 font-semibold text-text-primary"
						>Alamat Email</label
					>
					<div class="mt-2.5">
						<input
							type="email"
							id="email"
							bind:value={userEmail}
							required
							class="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-[#7A9E58] focus:outline-none focus:ring-inset sm:text-sm sm:leading-6"
							placeholder="anda@email.com"
						/>
					</div>
				</div>
				<div class="sm:col-span-2">
					<label
						for="message"
						class="block text-sm leading-6 font-semibold text-text-primary"
						>Pesan Anda</label
					>
					<div class="mt-2.5">
						<textarea
							id="message"
							bind:value={message}
							rows="4"
							required
							class="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-[#7A9E58] focus:outline-none focus:ring-inset sm:text-sm sm:leading-6"
							placeholder="Tuliskan pesan Anda di sini..."
						></textarea>
					</div>
				</div>
			</div>
			<div class="mt-10">
				<button
					type="submit"
					class="block w-full cursor-pointer rounded-md bg-text-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-black"
				>
					Kirim Pesan
				</button>
			</div>
		</form>
	</div>
</section>
