<script lang="ts">
	import { fly } from 'svelte/transition';
	export let close: () => void;
</script>

<div
	transition:fly={{ x: -300, duration: 200 }}
	class="fixed inset-0 z-40 bg-gray-900/50 md:hidden"
	on:click={close}
	role="presentation"
	aria-hidden="true"
></div>
