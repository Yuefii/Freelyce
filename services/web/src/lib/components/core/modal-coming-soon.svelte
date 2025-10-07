<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { X } from 'lucide-svelte';

	export let showModal: boolean;
	export let onClose: () => void;

	let rootElement: HTMLDivElement;

	$: if (showModal && rootElement) rootElement.focus();

	function closeModal() {
		onClose();
	}

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === rootElement) {
			closeModal();
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}

	function handleBackdropKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			closeModal();
		}
	}

	onMount(() => {
		if (browser) {
			window.addEventListener('keydown', handleKeydown);
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('keydown', handleKeydown);
		}
	});
</script>

{#if showModal}
	<div
		bind:this={rootElement}
		class="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.50)] backdrop-blur-sm"
		on:click={handleBackdropClick}
		on:keydown={handleBackdropKeydown}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
	>
		<div class="relative w-full max-w-md rounded bg-white p-8 shadow-xl">
			<button
				class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
				on:click={closeModal}
				aria-label="Close"
			>
				<X class="h-6 w-6" />
			</button>
			<h3 class="text-2xl font-bold text-text-primary">Fitur Belum Tersedia</h3>
			<p class="mt-4 text-text-secondary">
				Fitur ini sedang dalam pengembangan dan akan segera hadir. Terima kasih
				atas kesabaran Anda!
			</p>
			<div class="mt-6 flex justify-end">
				<button
					class="cursor-pointer rounded bg-text-primary px-6 py-2 font-medium text-white transition-colors hover:opacity-80"
					on:click={closeModal}
				>
					Tutup
				</button>
			</div>
		</div>
	</div>
{/if}
