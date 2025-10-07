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
	client: string;
	amount: string;
	link: string;
};

export const INVOICES: Invoice[] = [
	{
		no: 'INV-2025-0012',
		status: 'Lunas',
		client: 'PT Teknologi Maju',
		amount: 'Rp 5.000.000',
		link: '/dashboard/invoices/preview'
	},
	{
		no: 'INV-2025-0011',
		status: 'Menunggu',
		client: 'Creative Studio',
		amount: 'Rp 2.500.000',
		link: '/dashboard/invoices/preview'
	},
	{
		no: 'INV-2025-0010',
		status: 'Jatuh Tempo',
		client: 'Kopi Kenangan Senja',
		amount: 'Rp 1.250.000',
		link: '/dashboard/invoices/preview'
	},
	{
		no: 'INV-2025-0009',
		status: 'Lunas',
		client: 'Digital Agency ID',
		amount: 'Rp 7.000.000',
		link: '/dashboard/invoices/preview'
	}
];
