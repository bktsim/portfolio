<script>
	import { afterNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import '../app.css';

	afterNavigate(() => {
		// @ts-ignore
		window.HSStaticMethods.autoInit();
	});
	export let data;
</script>

{#key data.pathname}
	<div
		in:fade={{ duration: 400, delay: 400 }}
		out:fade={{ duration: 300 }}
		class="flex flex-col min-h-screen"
	>
		<slot />
	</div>
{/key}
