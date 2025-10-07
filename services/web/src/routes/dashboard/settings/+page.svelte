<script lang="ts">
	let user = {
		full_name: 'John Doe',
		email: 'john.doe@example.com'
	};

	let business = {
		business_logo:
			'https://eswpcd25uod.exactdn.com/blog/wp-content/uploads/2017/05/01-1024x1024.jpg?strip=all&lossy=1&ssl=1',
		business_name: 'Freelyce',
		business_email: 'freelyce@proton.me',
		business_address:
			'Jl. Jend. Sudirman No. 52-53, Jakarta Selatan, Indonesia',
		business_telepon: '081234567890'
	};

	let logoPreview: string | null = business.business_logo;
	let logoFile: File | ArrayBuffer | null = null;

	let currentPassword = '';
	let newPassword = '';
	let confirmPassword = '';

	function handleLogoChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files[0]) {
			logoFile = input.files[0];
			const reader = new FileReader();
			reader.onload = (e) => {
				const result = e.target?.result;
				logoPreview = typeof result === 'string' ? result : null;
			};
			reader.readAsDataURL(logoFile);
		}
	}

	function handleProfileSubmit() {
		console.log('Menyimpan data profil:', { user, business });
		if (logoFile && logoFile instanceof File) {
			console.log('Mengunggah logo baru:', logoFile.name);
		}
		alert('Data profil berhasil disimpan!');
	}

	function handlePasswordChange() {
		if (newPassword !== confirmPassword) {
			alert('Konfirmasi kata sandi baru tidak cocok!');
			return;
		}
		if (!newPassword || newPassword.length < 8) {
			alert('Kata sandi baru minimal harus 8 karakter.');
			return;
		}

		console.log('Mengubah kata sandi...', { currentPassword, newPassword });
		alert('Kata sandi berhasil diubah!');
	}
</script>

<div class="mx-auto">
	<h1 class="text-text-primary mb-8 text-3xl font-bold">Pengaturan Profil</h1>
	<form
		on:submit|preventDefault={handleProfileSubmit}
		class="mb-8 bg-white"
	>
		<h2
			class="text-text-primary mb-6 border-b border-slate-200 pb-4 text-xl font-semibold"
		>
			Informasi Bisnis
		</h2>

		<div class="space-y-6">
			<div class="flex items-center space-x-6">
				{#if logoPreview}
					<img
						src={logoPreview}
						alt="Logo Bisnis"
						class="h-24 w-24 rounded-full object-cover"
					/>
				{/if}
				<div>
					<label
						for="logo-upload"
						class="cursor-pointer rounded bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow transition-all duration-200 hover:scale-105 hover:shadow-lg"
					>
						Ubah Logo
					</label>
					<input
						id="logo-upload"
						name="logo-upload"
						type="file"
						class="sr-only"
						accept="image/*"
						on:change={handleLogoChange}
					/>
					<p class="text-text-secondary mt-2 text-xs">
						PNG, JPG, GIF hingga 2MB.
					</p>
				</div>
			</div>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div>
					<label
						for="business_name"
						class="text-text-primary mb-1 block text-sm font-medium"
						>Nama Bisnis</label
					>
					<input
						type="text"
						id="business_name"
						bind:value={business.business_name}
						class="focus:border-primary focus:ring-primary w-full rounded border border-gray-300 px-4 py-2 shadow-sm"
					/>
				</div>
				<div>
					<label
						for="business_email"
						class="text-text-primary mb-1 block text-sm font-medium"
						>Email Bisnis</label
					>
					<input
						type="email"
						id="business_email"
						bind:value={business.business_email}
						class="focus:border-primary focus:ring-primary w-full rounded border border-gray-300 px-4 py-2 shadow-sm"
					/>
				</div>
				<div class="md:col-span-2">
					<label
						for="business_telepon"
						class="text-text-primary mb-1 block text-sm font-medium"
						>Nomor Telepon</label
					>
					<input
						type="tel"
						id="business_telepon"
						bind:value={business.business_telepon}
						class="focus:border-primary focus:ring-primary w-full rounded border border-gray-300 px-4 py-2 shadow-sm"
					/>
				</div>
				<div class="md:col-span-2">
					<label
						for="business_address"
						class="text-text-primary mb-1 block text-sm font-medium"
						>Alamat Bisnis</label
					>
					<textarea
						id="business_address"
						rows="3"
						bind:value={business.business_address}
						class="focus:border-primary focus:ring-primary w-full rounded border border-gray-300 px-4 py-2 shadow-sm"
					></textarea>
				</div>
			</div>
		</div>
		<div class="mt-8 pt-6">
			<h2
				class="text-text-primary mb-6 border-b border-slate-200 pb-4 text-xl font-semibold"
			>
				Informasi Personal
			</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div>
					<label
						for="full_name"
						class="text-text-primary mb-1 block text-sm font-medium"
						>Nama Lengkap</label
					>
					<input
						type="text"
						id="full_name"
						bind:value={user.full_name}
						class="focus:border-primary focus:ring-primary w-full rounded border border-gray-300 px-4 py-2 shadow-sm"
					/>
				</div>
				<div>
					<label
						for="email"
						class="text-text-primary mb-1 block text-sm font-medium"
						>Email Akun</label
					>
					<input
						type="email"
						id="email"
						bind:value={user.email}
						class="focus:border-primary focus:ring-primary w-full rounded border border-gray-300 px-4 py-2 shadow-sm"
					/>
				</div>
			</div>
		</div>
		<div class="mt-8">
			<button
				type="submit"
				class="hover:bg-primary bg-primary cursor-pointer rounded px-5 py-2.5 text-sm font-semibold text-white shadow transition-all duration-200 hover:scale-105 hover:shadow-lg"
			>
				Simpan Perubahan
			</button>
		</div>
	</form>
	<form
		on:submit|preventDefault={handlePasswordChange}
		class="mt-8 max-w-4xl bg-white pt-6"
	>
		<h2
			class="text-text-primary mb-6 border-b border-slate-200 pb-4 text-xl font-semibold"
		>
			Keamanan Kata Sandi
		</h2>
		<div class="space-y-4">
			<div>
				<label
					for="current_password"
					class="text-text-primary mb-1 block text-sm font-medium"
					>Kata Sandi Saat Ini</label
				>
				<input
					type="password"
					id="current_password"
					bind:value={currentPassword}
					class="focus:border-primary focus:ring-primary w-full rounded border border-gray-300 px-4 py-2 shadow-sm"
				/>
			</div>
			<div>
				<label
					for="new_password"
					class="text-text-primary mb-1 block text-sm font-medium"
					>Kata Sandi Baru</label
				>
				<input
					type="password"
					id="new_password"
					bind:value={newPassword}
					class="focus:border-primary focus:ring-primary w-full rounded border border-gray-300 px-4 py-2 shadow-sm"
				/>
			</div>
			<div>
				<label
					for="confirm_password"
					class="text-text-primary mb-1 block text-sm font-medium"
					>Konfirmasi Kata Sandi Baru</label
				>
				<input
					type="password"
					id="confirm_password"
					bind:value={confirmPassword}
					class="focus:border-primary focus:ring-primary w-full rounded border border-gray-300 px-4 py-2 shadow-sm"
				/>
			</div>
		</div>
		<div class="mt-6 flex justify-start">
			<button
				type="submit"
				class="bg-primary cursor-pointer rounded px-5 py-2.5 text-sm font-semibold text-white shadow transition-all duration-200 hover:scale-105 hover:shadow-lg"
			>
				Ubah Kata Sandi
			</button>
		</div>
	</form>
</div>
