<main>
	<div
		class="flex min-h-screen flex-col items-center justify-center px-6 py-12"
	>
		<div class="w-full max-w-md border border-gray-200 bg-white p-8 shadow-sm">
			<h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
				Buat Akun Baru
			</h2>
			<p class="text-sm text-gray-600">
				Sudah punya akun?
				<a
					href="/auth/sign-in"
					class="font-medium text-black transition-colors hover:underline"
				>
					Masuk di sini
				</a>
			</p>

			<form class="mt-8 space-y-6" action="#" method="POST">
				<div>
					<label for="name" class="block text-sm font-medium text-gray-700">
						Nama Lengkap
					</label>
					<div class="mt-1">
						<input
							id="name"
							name="name"
							type="text"
							required
							class="block w-full appearance-none border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:ring-black focus:outline-none sm:text-sm"
						/>
					</div>
				</div>

				<div>
					<label for="email" class="block text-sm font-medium text-gray-700">
						Alamat Email
					</label>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="block w-full appearance-none border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:ring-black focus:outline-none sm:text-sm"
						/>
					</div>
				</div>

				<div>
					<label for="password" class="block text-sm font-medium text-gray-700">
						Password
					</label>
					<div class="mt-1">
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="new-password"
							required
							class="block w-full appearance-none border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:ring-black focus:outline-none sm:text-sm"
						/>
					</div>
				</div>

				<div>
					<label
						for="confirm-password"
						class="block text-sm font-medium text-gray-700"
					>
						Konfirmasi Password
					</label>
					<div class="mt-1">
						<input
							id="confirm-password"
							name="confirm-password"
							type="confirm-password"
							autocomplete="new-password"
							required
							class="block w-full appearance-none border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:ring-black focus:outline-none sm:text-sm"
						/>
					</div>
				</div>

				<div>
					<button
						type="submit"
						class="flex w-full justify-center border border-transparent bg-black px-4 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none"
					>
						Buat Akun
					</button>
				</div>
			</form>
		</div>
	</div>
</main>
