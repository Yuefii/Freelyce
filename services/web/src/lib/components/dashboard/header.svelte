<script lang="ts">
	import { Menu, Settings, User } from 'lucide-svelte';
	export let toggleMenu: () => void;
</script>

<header class="flex h-16 items-center justify-between bg-white px-6">
	<button
		class="md:hidden"
		on:click={toggleMenu}
		aria-label="Toggle mobile menu"
	>
		<Menu class="h-6 w-6" />
	</button>

	<div class="ml-4 flex items-center md:ml-auto">
		<a
			href="/dashboard/settings"
			class="cursor-pointer rounded-full p-2"
			aria-label="User settings"
		>
			<span class="inline-block h-8 w-8 overflow-hidden rounded-full">
				<User class="h-full w-full text-gray-400" />
			</span>
		</a>
	</div>
</header>
