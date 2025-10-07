
export type Stats = {
  revenue: string;
  paidInvoices: number;
  pendingInvoices: number;
  overdueInvoices: number;
};

export const STATS: Stats = {
  revenue: 'Rp 15.750.000',
  paidInvoices: 8,
  pendingInvoices: 3,
  overdueInvoices: 1
};


export type Invoice = {
  no: string;
  status: string;
  statusClass: string;
  client: string;
  amount: string;
  link: string;
};

export const INVOICES: Invoice[] = [
  {
    no: 'INV-2025-0012',
    status: 'Lunas',
    statusClass: 'inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800',
    client: 'PT Teknologi Maju',
    amount: 'Rp 5.000.000',
    link: '/dashboard/invoices/preview',
  },
  {
    no: 'INV-2025-0011',
    status: 'Menunggu',
    statusClass: 'inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800',
    client: 'Creative Studio',
    amount: 'Rp 2.500.000',
    link: '/dashboard/invoices/preview',
  },
  {
    no: 'INV-2025-0010',
    status: 'Jatuh Tempo',
    statusClass: 'inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800',
    client: 'Kopi Kenangan Senja',
    amount: 'Rp 1.250.000',
    link: '/dashboard/invoices/preview',
  },
  {
    no: 'INV-2025-0009',
    status: 'Lunas',
    statusClass: 'inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800',
    client: 'Digital Agency ID',
    amount: 'Rp 7.000.000',
    link: '/dashboard/invoices/preview',
  },
];
