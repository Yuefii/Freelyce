<div class="min-h-screen p-4 sm:p-6 lg:p-8">
	<main class="mx-auto max-w-7xl">
		<header
			class="mb-8 flex flex-col items-start justify-between sm:flex-row sm:items-center"
		>
			<h1 class="text-text-primary mb-4 text-3xl font-extrabold sm:mb-0">
				Buat Invoice Baru
			</h1>
			<div class="flex items-center gap-3">
				<button
					class="bg-primary rounded px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:opacity-80"
				>
					Simpan & Preview
				</button>
			</div>
		</header>

		<form
			class="space-y-10 rounded border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
		>
			<section class="grid gap-8 md:grid-cols-3">
				<div class="space-y-4 md:col-span-2">
					<h2 class="text-text-primary text-lg font-bold">Tagihan Untuk:</h2>
					<div>
						<select
							class="text-text-primary w-full rounded border border-slate-300 bg-white px-4 py-2.5 text-sm transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
						>
							<option disabled selected>Pilih Klien yang Sudah Ada</option>
							<option>PT Teknologi Maju</option>
							<option>Creative Studio</option>
							<option>Kopi Kenangan Senja</option>
						</select>
						<p class="mt-2 text-xs text-slate-500">
							atau <a
								href="/#"
								class="text-primary font-semibold hover:underline"
								>Tambah Klien Baru</a
							>
						</p>
					</div>
					<textarea
						rows="3"
						placeholder="Detail alamat klien akan muncul di sini..."
						class="text-text-primary w-full rounded border border-slate-300 bg-white px-4 py-2.5 text-sm transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
					></textarea>
				</div>
				<div class="space-y-4">
					<div class="flex flex-col gap-2">
						<label
							for="invoice-number"
							class="text-sm font-semibold text-slate-600">No. Invoice</label
						>
						<input
							type="text"
							id="invoice-number"
							value="INV-2025-0013"
							class="text-text-primary rounded border border-slate-300 bg-white px-4 py-2.5 text-sm transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
						/>
					</div>
					<div class="flex flex-col gap-2">
						<label for="issue-date" class="text-sm font-semibold text-slate-600"
							>Tanggal Dibuat</label
						>
						<input
							type="date"
							id="issue-date"
							value="2025-10-07"
							class="text-text-primary rounded border border-slate-300 bg-white px-4 py-2.5 text-sm transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
						/>
					</div>
					<div class="flex flex-col gap-2">
						<label for="due-date" class="text-sm font-semibold text-slate-600"
							>Tanggal Jatuh Tempo</label
						>
						<input
							type="date"
							id="due-date"
							class="text-text-primary rounded border border-slate-300 bg-white px-4 py-2.5 text-sm transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
						/>
					</div>
				</div>
			</section>

			<section>
				<h2 class="mb-4 text-lg font-bold text-slate-800">Detail Item</h2>
				<div class="overflow-x-auto">
					<table class="w-full text-left text-sm">
						<thead class="bg-slate-50 text-xs uppercase text-slate-500">
							<tr>
								<th class="w-1/2 px-4 py-3">Deskripsi</th>
								<th class="px-4 py-3">Jumlah</th>
								<th class="px-4 py-3">Harga Satuan</th>
								<th class="px-4 py-3 text-right">Total</th>
								<th class="px-4 py-3"></th>
							</tr>
						</thead>
						<tbody class="divide-y divide-slate-200">
							<tr>
								<td class="p-2"
									><input
										type="text"
										placeholder="Contoh: Desain Website"
										class="w-full rounded-md border border-slate-300 p-2 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200"
									/></td
								>
								<td class="p-2"
									><input
										type="number"
										value="1"
										class="w-20 rounded-md border border-slate-300 p-2 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200"
									/></td
								>
								<td class="p-2"
									><input
										type="text"
										placeholder="Rp 5.000.000"
										class="w-36 rounded-md border border-slate-300 p-2 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200"
									/></td
								>
								<td class="text-text-primary p-2 text-right font-semibold"
									>Rp 5.000.000</td
								>
								<td class="p-2 text-center">
									<button
										type="button"
										class="text-2xl text-slate-400 hover:text-red-500"
										>&times;</button
									>
								</td>
							</tr>
							<tr>
								<td class="p-2"
									><input
										type="text"
										placeholder="Contoh: Jasa Konsultasi SEO"
										class="w-full rounded-md border border-slate-300 p-2 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200"
									/></td
								>
								<td class="p-2"
									><input
										type="number"
										value="5"
										class="w-20 rounded-md border border-slate-300 p-2 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200"
									/></td
								>
								<td class="p-2"
									><input
										type="text"
										placeholder="Rp 500.000"
										class="w-36 rounded-md border border-slate-300 p-2 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200"
									/></td
								>
								<td class="text-text-primary p-2 text-right font-semibold"
									>Rp 2.500.000</td
								>
								<td class="p-2 text-center">
									<button
										type="button"
										class="text-2xl text-slate-400 hover:text-red-500"
										>&times;</button
									>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<button
					type="button"
					class="bg-secondary border-primary text-primary mt-4 w-full cursor-pointer rounded border-2 border-dashed py-3 text-sm font-semibold transition-colors hover:opacity-80"
				>
					+ Tambah Baris
				</button>
			</section>

			<section class="grid items-start gap-8 md:grid-cols-2">
				<div class="space-y-4">
					<h2 class="text-lg font-bold text-slate-800">Catatan & Syarat</h2>
					<textarea
						rows="4"
						placeholder="Contoh: Pembayaran dapat dilakukan melalui transfer ke rekening BCA 12345678 a/n Freelyce."
						class="text-text-primary w-full rounded border border-slate-300 bg-white px-4 py-2.5 text-sm transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
					></textarea>
				</div>
				<div class="space-y-4 md:ml-auto md:w-4/5">
					<div class="flex items-center justify-between">
						<span class="text-sm text-slate-500">Subtotal</span>
						<strong class="text-text-primary font-semibold">Rp 7.500.000</strong
						>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-sm text-slate-500">Pajak (11%)</span>
						<strong class="text-text-primary font-semibold">Rp 825.000</strong>
					</div>
					<div class="my-2 border-t border-slate-200"></div>
					<div class="flex items-center justify-between">
						<span class="text-base font-bold text-slate-800">Total</span>
						<strong class="text-primary text-2xl font-extrabold"
							>Rp 8.325.000</strong
						>
					</div>
				</div>
			</section>
		</form>
	</main>
</div>
