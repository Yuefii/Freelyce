<div class="flex min-h-screen flex-col items-center justify-center px-6 py-12">
	<div
		class="w-full max-w-md rounded border border-slate-200 bg-white p-8 shadow-sm"
	>
		<h2 class="text-text-primary mb-2 text-2xl font-bold tracking-tight">
			Selamat Datang Kembali
		</h2>
		<p class="text-text-secondary text-sm">
			Belum punya akun?
			<a
				href="/auth/sign-up"
				class="text-text-primary font-medium transition-colors hover:underline"
			>
				Daftar gratis
			</a>
		</p>

		<form class="mt-8 space-y-6" action="#" method="POST">
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
						class="focus:ring-primary focus:border-primary block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm"
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
						autocomplete="current-password"
						required
						class="focus:ring-primary focus:border-primary block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm"
					/>
				</div>
			</div>

			<div>
				<button
					type="submit"
					class="focus:ring-primary bg-primary flex w-full cursor-pointer justify-center rounded border border-transparent px-4 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:opacity-80"
				>
					Masuk
				</button>
			</div>
		</form>
	</div>
</div>
