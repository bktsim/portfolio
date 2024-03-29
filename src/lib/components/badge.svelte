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
	class="flex items-center gap-x-1.5 py-1.5 px-3 mx-2 my-2 rounded-full text-sm font-medium dark border-black/15 border-[1px]"
	>{content}</span
>

<style>
	.dark {
		@apply bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white;
	}

	.gray {
		@apply bg-gray-50 text-gray-500 dark:bg-white/[.05] dark:text-white;
	}

	.green {
		@apply bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500;
	}

	.blue {
		@apply bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500;
	}

	.red {
		@apply bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500;
	}

	.yellow {
		@apply bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500;
	}
</style>
