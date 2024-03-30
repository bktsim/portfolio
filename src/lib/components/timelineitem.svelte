<script>
	/**
	 * @type {string}
	 */
	export let courseName;
	/**
	 * @type {string}
	 */
	export let courseContent;
	/**
	 * @type {string[]}
	 */
	export let courseBulletPoints;
	/**
	 * @type {string}
	 */
	export let courseDate;
</script>

<div class="flex gap-x-3">
	<div class="w-16 text-end">
		<span class="text-base text-gray-500">{courseDate}</span>
	</div>

	<div
		class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700"
	>
		<div class="relative z-10 size-7 flex justify-center items-center">
			<div class="size-2 rounded-full bg-gray-400"></div>
		</div>
	</div>

	<div class="grow pt-0.5 pb-8">
		<h3 class="flex gap-x-1.5 font-normal text-2xl lg:text-3xl text-gray-800">
			{courseName}
		</h3>
		<p class="mt-2 text-lg text-gray-600">
			{courseContent}
		</p>
		<p class="mt-4 font-base text-2xl text-gray-600">main duties:</p>
		<div class="ml-12 mt-1 text-lg text-gray-600">
			{#each courseBulletPoints as bulletPoint}
				<li>{bulletPoint}</li>
			{/each}
		</div>
	</div>
</div>
