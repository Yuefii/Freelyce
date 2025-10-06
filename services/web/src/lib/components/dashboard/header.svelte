<script lang="ts">
	import { Menu, User, Settings, LogOut } from 'lucide-svelte';
	import { onDestroy, onMount } from 'svelte';

	export let toggleMenu: () => void;

	let showDropdown = false;

	function handleUserClick() {
		showDropdown = !showDropdown;
	}
	function closeDropdown(e: MouseEvent) {
		if (!(e.target as HTMLElement).closest('.user-dropdown')) {
			showDropdown = false;
		}
	}

	if (typeof window !== 'undefined') {
		let removeListener: (() => void) | null = null;
		onMount(() => {
			window.addEventListener('click', closeDropdown);
			removeListener = () => window.removeEventListener('click', closeDropdown);
		});
		onDestroy(() => {
			if (removeListener) removeListener();
		});
	}
</script>

<header class="flex h-16 items-center justify-between bg-white px-6">
	<button
		class="md:hidden"
		on:click={toggleMenu}
		aria-label="Toggle mobile menu"
	>
		<Menu class="h-6 w-6" />
	</button>

	<div class="user-dropdown relative ml-4 flex items-center md:ml-auto">
		<button
			class="cursor-pointer rounded-full p-2 focus:outline-none"
			aria-label="User menu"
			on:click|stopPropagation={handleUserClick}
		>
			<span class="inline-block h-8 w-8 overflow-hidden rounded-full">
				<User class="h-full w-full text-gray-400" />
			</span>
		</button>
		{#if showDropdown}
			<div class="absolute right-0 z-20 mt-32 w-40 rounded bg-white shadow-lg">
				<a
					href="/dashboard/settings"
					class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
				>
					<Settings class="h-4 w-4" /> Pengaturan
				</a>
				<button
					class="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
				>
					<LogOut class="h-4 w-4" /> SignOut
				</button>
			</div>
		{/if}
	</div>
</header>
