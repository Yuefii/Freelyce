document.addEventListener("DOMContentLoaded", () => {
	const dbName = "invoiceDB";
	const storeName = "invoices";
	let db;
	let allInvoices = [];
	let currentPage = 1;
	const itemsPerPage = 4;

	const request = indexedDB.open(dbName, 1);

	request.onerror = (event) => {
		console.error("Database error: " + event.target.errorCode);
	};

	request.onupgradeneeded = (event) => {
		const db = event.target.result;
		if (!db.objectStoreNames.contains(storeName)) {
			const objectStore = db.createObjectStore(storeName, { keyPath: "invoiceCode" });
			objectStore.createIndex("date", "date", { unique: false });
		}
	};

	request.onsuccess = (event) => {
		db = event.target.result;
		const transaction = db.transaction([storeName], "readonly");
		const objectStore = transaction.objectStore(storeName);
		const getAllRequest = objectStore.getAll();

		getAllRequest.onsuccess = () => {
			allInvoices = getAllRequest.result.sort((a, b) => new Date(b.date) - new Date(a.date));
			displayPage(1);
		};
	};

	const searchInput = document.getElementById("search-invoice");
	searchInput.addEventListener("input", (e) => {
		displayPage(1, e.target.value);
	});

	function displayPage(page, filter = "") {
		currentPage = page;
		const historyResults = document.getElementById("history-results");
		historyResults.innerHTML = "";

		const filteredInvoices = allInvoices.filter((invoice) =>
			invoice.invoiceCode.toLowerCase().includes(filter.toLowerCase())
		);

		if (filteredInvoices.length === 0) {
			historyResults.innerHTML = `
                <div class="text-center col-span-full py-12">
                    <p class="text-lg text-foreground/80">${filter ? 'Invoice tidak ditemukan.' : 'Riwayat invoice Anda kosong.'}</p>
                    <a href="/" class="btn btn-primary mt-4">Buat Invoice</a>
                </div>
            `;
			renderPagination(0, 0);
			return;
		}

		const startIndex = (page - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		const paginatedInvoices = filteredInvoices.slice(startIndex, endIndex);

		paginatedInvoices.forEach((invoice) => {
			const invoiceCard = document.createElement("div");
			invoiceCard.className = "card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300";

			let itemsHTML = "";
			invoice.items.forEach((item) => {
				itemsHTML += `<li class="flex justify-between text-sm"><span class="truncate">${item.description}</span> <span>${item.quantity} x ${item.rate}</span></li>`;
			});

			invoiceCard.innerHTML = `
                <div class="flex justify-between items-center pb-3 border-b border-border mb-4">
                    <div>
                        <h3 class="font-bold text-primary truncate">${invoice.invoiceCode}</h3>
                        <p class="text-sm text-foreground/60">${invoice.date}</p>
                    </div>
                    <button class="download-btn text-primary hover:text-primary/80 transition-colors" data-invoice-code="${invoice.invoiceCode}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </button>
                </div>
                <div class="space-y-3 text-sm">
                    <div><p class="font-medium text-foreground/60">Kepada:</p><p class="text-foreground">${invoice.to}</p></div>
                    <div><p class="font-medium text-foreground/60">Dari:</p><p class="text-foreground">${invoice.from}</p></div>
                    <div class="pt-2"><ul class="space-y-1">${itemsHTML}</ul></div>
                    <div class="flex justify-between items-center pt-3 border-t border-border"><p class="font-bold">Total:</p><p class="font-bold text-lg text-primary">${invoice.total}</p></div>
                </div>
            `;
			historyResults.appendChild(invoiceCard);
		});

		renderPagination(Math.ceil(filteredInvoices.length / itemsPerPage), page);

		document.querySelectorAll(".download-btn").forEach(button => {
			button.addEventListener("click", (e) => {
				const invoiceCode = e.currentTarget.dataset.invoiceCode;
				handleDownload(invoiceCode, e.currentTarget);
			});
		});
	}

	function renderPagination(totalPages, page) {
		const paginationControls = document.getElementById("pagination-controls");
		paginationControls.innerHTML = "";
		if (totalPages <= 1) return;

		const prevButton = document.createElement("button");
		prevButton.textContent = "Sebelumnya";
		prevButton.className = "btn btn-secondary";
		if (page === 1) prevButton.disabled = true;
		prevButton.addEventListener("click", () => {
			displayPage(page - 1, searchInput.value);
		});
		paginationControls.appendChild(prevButton);

		const pageInfo = document.createElement("span");
		pageInfo.className = "text-sm font-medium";
		pageInfo.textContent = `Halaman ${page} dari ${totalPages}`;
		paginationControls.appendChild(pageInfo);

		const nextButton = document.createElement("button");
		nextButton.textContent = "Berikutnya";
		nextButton.className = "btn btn-secondary";
		if (page === totalPages) nextButton.disabled = true;
		nextButton.addEventListener("click", () => {
			displayPage(page + 1, searchInput.value);
		});
		paginationControls.appendChild(nextButton);
	}

	async function handleDownload(invoiceCode, button) {
		const originalButtonContent = button.innerHTML;
		button.innerHTML = `<svg class="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`;
		button.disabled = true;

		const transaction = db.transaction([storeName], "readonly");
		const objectStore = transaction.objectStore(storeName);
		const request = objectStore.get(invoiceCode);

		request.onsuccess = async (event) => {
			const invoiceDataFromDB = event.target.result;
			if (invoiceDataFromDB) {
				const payload = {
					invoice_number: invoiceDataFromDB.invoiceCode,
					from_address: invoiceDataFromDB.from,
					bill_to_address: invoiceDataFromDB.to,
					date: invoiceDataFromDB.date,
					due_date: invoiceDataFromDB.dueDate,
					items: invoiceDataFromDB.items.map(item => ({ description: item.description, quantity: item.quantity, rate: item.rate })),
					po_number: "",
					discount: 0,
					discount_type: "fixed",
					notes: "",
					tax_rate: 0,
					logo: invoiceDataFromDB.logo || null,
				};

				try {
					const response = await fetch('/invoice', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
					if (response.ok) {
						const blob = await response.blob();
						const url = window.URL.createObjectURL(blob);
						const a = document.createElement('a');
						a.style.display = 'none';
						a.href = url;
						a.download = `invoice-${payload.invoice_number}.pdf`;
						document.body.appendChild(a);
						a.click();
						window.URL.revokeObjectURL(url);
						a.remove();
					} else {
						alert('Gagal membuat ulang invoice: ' + await response.text());
					}
				} catch (error) {
					alert('Terjadi kesalahan jaringan: ' + error);
				} finally {
					button.innerHTML = originalButtonContent;
					button.disabled = false;
				}
			}
		};
		request.onerror = (event) => {
			alert("Gagal mengambil data invoice dari riwayat.");
			button.innerHTML = originalButtonContent;
			button.disabled = false;
		};
	}
});
