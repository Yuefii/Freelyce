document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIconOpen = document.getElementById("menu-icon-open");
  const menuIconClose = document.getElementById("menu-icon-close");
  const particleContainer = document.getElementById("particle-container");
  const backToTopButton = document.getElementById("back-to-top");
  const currentYearSpan = document.getElementById("current-year");

  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        backToTopButton.classList.add("show");
        backToTopButton.classList.remove("hidden");
      } else {
        backToTopButton.classList.remove("show");
        backToTopButton.classList.add("hidden");
      }
    });

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        navbar.classList.add("shadow-md", "bg-background/80");
        navbar.style.backdropFilter = "blur(8px)";
      } else {
        navbar.classList.remove("shadow-md", "bg-background/80");
        navbar.style.backdropFilter = "none";
      }
    });
  }

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      menuIconOpen.classList.toggle("hidden");
      menuIconClose.classList.toggle("hidden");
    });
  }

  if (particleContainer) {
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.animationDuration = `${5 + Math.random() * 5}s`;
      particleContainer.appendChild(particle);
    }
  }

  const itemListDesktop = document.getElementById("item-list-desktop");
  if (itemListDesktop) {
    const itemListMobile = document.getElementById("item-list-mobile");
    const addLineItemBtn = document.getElementById("add-line-item");
    const downloadPdfBtn = document.getElementById("download-pdf");
    const ctaButton = document.getElementById("cta-button");
    const logoInput = document.getElementById("logo-input");
    const logoPreview = document.getElementById("logo-preview");
    const addLogoBtn = document.getElementById("add-logo");
    const removeLogoBtn = document.getElementById("remove-logo");

    addLogoBtn.addEventListener("click", () => logoInput.click());

    removeLogoBtn.addEventListener("click", () => {
      logoInput.value = "";
      logoPreview.src = "";
      logoPreview.classList.add("hidden");
      addLogoBtn.classList.remove("hidden");
      removeLogoBtn.classList.add("hidden");
      if (logoPreview.src) {
        URL.revokeObjectURL(logoPreview.src);
      }
    });

    logoInput.addEventListener("change", () => {
      const file = logoInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          logoPreview.src = e.target.result;
          logoPreview.classList.remove("hidden");
          addLogoBtn.classList.add("hidden");
          removeLogoBtn.classList.remove("hidden");
        };
        reader.readAsDataURL(file);
      }
    });

    ctaButton.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    document.getElementById("date").valueAsDate = new Date();

    fetch("/next-invoice-number")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("invoice-number").textContent =
          data.invoice_number;
      });

    function calculateTotals() {
      let subtotal = 0;
      document
        .querySelectorAll(".item-row, .item-row-mobile")
        .forEach((row) => {
          const quantity =
            parseFloat(row.querySelector(".item-quantity").value) || 0;
          const rate = parseFloat(row.querySelector(".item-rate").value) || 0;
          const amount = quantity * rate;
          row.querySelector(".item-amount").textContent =
            `Rp${amount.toLocaleString("id-ID")}`;
          subtotal += amount;
        });

      const discountValue =
        parseFloat(document.getElementById("discount").value) || 0;
      const discountType = document.getElementById("discount-type").value;
      const taxRate =
        parseFloat(document.getElementById("tax-rate").value) || 0;

      let discountAmount = 0;
      if (discountType === "percentage") {
        discountAmount = (subtotal * discountValue) / 100;
      } else {
        discountAmount = discountValue;
      }

      const discountedSubtotal = subtotal - discountAmount;
      const taxAmount = discountedSubtotal * (taxRate / 100);
      const total = discountedSubtotal + taxAmount;

      document.getElementById("subtotal").textContent =
        `Rp${subtotal.toLocaleString("id-ID")}`;
      document.getElementById("total").textContent =
        `Rp${total.toLocaleString("id-ID")}`;
    }

    function addEventListenersToRow(row) {
      row
        .querySelector(".item-quantity")
        .addEventListener("input", calculateTotals);
      row
        .querySelector(".item-rate")
        .addEventListener("input", calculateTotals);

      const removeBtn = row.querySelector(".remove-item-btn");
      if (removeBtn) {
        removeBtn.addEventListener("click", () => {
          row.remove();
          calculateTotals();
        });
      }
    }

    function createNewDesktopRow() {
      const newRow = document.createElement("tr");
      newRow.classList.add("item-row", "border-b", "border-border");
      newRow.innerHTML = `
                <td class="p-2">
                    <input type="text" placeholder="Deskripsi item/layanan..." class="item-description input bg-transparent border-0 focus:ring-0 px-0 w-full">
                </td>
                <td class="p-2">
                    <input type="number" placeholder="1" class="item-quantity input text-right w-full" value="1">
                </td>
                <td class="p-2">
                    <input type="number" placeholder="0" class="item-rate input text-right w-full" value="">
                </td>
                <td class="p-2 text-right font-medium item-amount">
                    Rp0
                </td>
                <td class="p-2 text-center">
                    <button class="text-red-500 hover:text-red-700 transition-colors remove-item-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </td>
            `;
      addEventListenersToRow(newRow);
      itemListDesktop.appendChild(newRow);
    }

    function createNewMobileRow() {
      const newRow = document.createElement("div");
      newRow.classList.add(
        "p-4",
        "border",
        "border-border",
        "rounded-xl",
        "shadow-sm",
        "item-row-mobile",
        "bg-white",
      );
      newRow.innerHTML = `
                <div class="flex justify-between items-center mb-2">
                    <label class="text-xs font-medium text-muted">Item</label>
                    <button class="text-red-500 hover:text-red-700 transition-colors remove-item-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <input
                    type="text"
                    placeholder="Deskripsi item / layanan..."
                    class="item-description input border px-3 py-2 w-full rounded-lg"
                />

                <div class="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label class="text-xs font-medium block mb-1">Jumlah</label>
                        <input
                            type="number"
                            placeholder="1"
                            class="item-quantity input border px-3 py-2 w-full rounded-lg text-right"
                            value="1"
                        />
                    </div>

                    <div>
                        <label class="text-xs font-medium block mb-1">Harga</label>
                        <input
                            type="number"
                            placeholder="0"
                            class="item-rate input border px-3 py-2 w-full rounded-lg text-right"
                            value=""
                        />
                    </div>
                </div>

                <div class="flex justify-between items-center mt-4">
                    <span class="text-sm text-gray-600">Total</span>
                    <span class="item-amount text-lg font-semibold">Rp0</span>
                </div>
            `;
      addEventListenersToRow(newRow);
      itemListMobile.appendChild(newRow);
    }

    addLineItemBtn.addEventListener("click", () => {
      if (window.innerWidth < 640) {
        createNewMobileRow();
      } else {
        createNewDesktopRow();
      }
    });

    downloadPdfBtn.addEventListener("click", async function () {
      this.textContent = "Memproses...";
      this.disabled = true;

      const logoPreview = document.getElementById("logo-preview");
      const logoSrc = logoPreview.src.startsWith("data:image")
        ? logoPreview.src
        : null;

      const invoiceData = {
        invoice_number: document.getElementById("invoice-number").textContent,
        from_address: document.getElementById("from-address").value,
        bill_to_address: document.getElementById("bill-to-address").value,
        date: document.getElementById("date").value,
        due_date: document.getElementById("due-date").value,
        po_number: document.getElementById("po-number").value,
        discount: parseFloat(document.getElementById("discount").value) || 0,
        discount_type: document.getElementById("discount-type").value,
        items: [],
        notes: document.getElementById("notes").value,
        tax_rate: parseFloat(document.getElementById("tax-rate").value) || 0,
        logo: logoSrc,
      };

      document
        .querySelectorAll(".item-row, .item-row-mobile")
        .forEach((row) => {
          const description = row.querySelector(".item-description").value;
          if (description) {
            invoiceData.items.push({
              description: description,
              quantity:
                parseFloat(row.querySelector(".item-quantity").value) || 0,
              rate: parseFloat(row.querySelector(".item-rate").value) || 0,
            });
          }
        });

      try {
        const response = await fetch("/invoice", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(invoiceData),
        });

        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          a.download = `invoice-${invoiceData.invoice_number}.pdf`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          a.remove();
          saveInvoiceToDB(invoiceData);
        } else {
          const error = await response.text();
          alert("Gagal membuat invoice: " + error);
        }
      } catch (error) {
        alert("Terjadi kesalahan jaringan: " + error);
      } finally {
        this.textContent = "Unduh Invoice";
        this.disabled = false;
      }
    });

    document
      .querySelectorAll(".item-row, .item-row-mobile")
      .forEach(addEventListenersToRow);
    document
      .getElementById("tax-rate")
      .addEventListener("input", calculateTotals);
    document
      .getElementById("discount")
      .addEventListener("input", calculateTotals);
    document
      .getElementById("discount-type")
      .addEventListener("change", calculateTotals);
    calculateTotals();
  }
});

function saveInvoiceToDB(invoiceData) {
  const dbName = "invoiceDB";
  const storeName = "invoices";

  const request = indexedDB.open(dbName, 1);

  request.onerror = (event) => {
    console.error("Database error: " + event.target.errorCode);
  };

  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    if (!db.objectStoreNames.contains(storeName)) {
      db.createObjectStore(storeName, { keyPath: "invoiceCode" });
    }
  };

  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction([storeName], "readwrite");
    const objectStore = transaction.objectStore(storeName);

    const total = calculateTotalFromData(invoiceData);

    const itemsWithTotal = invoiceData.items.map((item) => ({
      ...item,
      total: item.quantity * item.rate,
    }));

    const dataToStore = {
      invoiceCode: invoiceData.invoice_number,
      date: invoiceData.date,
      dueDate: invoiceData.due_date,
      from: invoiceData.from_address,
      to: invoiceData.bill_to_address,
      items: itemsWithTotal,
      total: `Rp${total.toLocaleString("id-ID")}`,
      logo: invoiceData.logo,
    };

    const addRequest = objectStore.add(dataToStore);

    addRequest.onsuccess = () => {
      console.log("Invoice saved to IndexedDB");
    };

    addRequest.onerror = (event) => {
      console.error(
        "Error saving invoice to IndexedDB: " + event.target.errorCode,
      );
    };
  };
}

function calculateTotalFromData(data) {
  const subtotal = data.items.reduce(
    (acc, item) => acc + item.quantity * item.rate,
    0,
  );

  let discountAmount = 0;
  if (data.discount_type === "percentage") {
    discountAmount = (subtotal * data.discount) / 100;
  } else {
    discountAmount = data.discount;
  }

  const discountedSubtotal = subtotal - discountAmount;
  const taxAmount = discountedSubtotal * (data.tax_rate / 100);
  const total = discountedSubtotal + taxAmount;

  return total;
}

document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const pre = button.previousElementSibling;
    const code = pre.querySelector("code");
    const textToCopy = code.innerText;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        const originalIcon = button.innerHTML;
        button.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
            `;
        setTimeout(() => {
          button.innerHTML = originalIcon;
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  });
});
