<script>
	/**
	 * @type {string}
	 */
	export let color;
	/**
	 * @type {string}
	 */
	export let content;
</script>

<span
	class="flex items-center gap-x-1.5 py-1.5 px-3 mx-2 my-2 rounded-full text-sm font-medium {color
		? color
		: 'dark'} border-black/15 border-[1px]">{content}</span
>

<style>
	.dark {
		@apply bg-gray-100 text-gray-800;
	}

	.gray {
		@apply bg-gray-50 text-gray-500;
	}

	.green {
		@apply bg-teal-100 text-teal-800;
	}

	.blue {
		@apply bg-blue-100 text-blue-800;
	}

	.red {
		@apply bg-red-100 text-red-800;
	}

	.yellow {
		@apply bg-yellow-100 text-yellow-800;
	}
</style>
