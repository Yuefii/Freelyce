export function getStatusClass(status: string) {
		if (status === 'Lunas')
			return 'inline-flex rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800';
		if (status === 'Menunggu')
			return 'inline-flex rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800';
		if (status === 'Jatuh Tempo')
			return 'inline-flex rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800';
		return 'inline-flex rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-800';
	}