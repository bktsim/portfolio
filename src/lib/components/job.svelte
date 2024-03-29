<script>
	import Badge from '$lib/components/badge.svelte';

	/**
	 * @type {string}
	 */
	export let companyName;
	/**
	 * @type {string}
	 */
	export let key;
	/**
	 * @type {string}
	 */
	export let jobTitle;
	/**
	 * @type {string}
	 */
	export let jobLocation;
	/**
	 * @type {string}
	 */
	export let jobDates;
	/**
	 * @type {string[]}
	 */
	export let jobTags;
	/**
	 * @type {string}
	 */
	export let jobParagraph;
	/**
	 * @type {string[]}
	 */
	export let jobBulletPoints;
</script>

<div class="mt-5 mr-10">
	<button
		type="button"
		class="hs-collapse-open:shadow-lg hs-collapse-open:shadow-neutral-300/50 hs-collapse-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent hover:bg-neutral-200 Wdisabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 w-full"
		id={key}
		data-hs-collapse="#{key}-heading"
	>
		<div class="flex flex-row p-2 grow">
			<div class="flex flex-col justify-center mr-5">
				<img src="/company/{key}.png" class="flex w-12" alt="{key} logo" />
			</div>
			<div class="flex flex-col text-left sm:justify-center sm:items-start">
				<h4 class="job-title">
					{companyName},
					<br class="visible sm:hidden" />
					{jobTitle}
				</h4>
				<p>{jobDates}・{jobLocation}</p>
			</div>
		</div>
		<svg
			class="hs-collapse-open:rotate-180 flex-shrink-0 size-4"
			xmlns="http://www.w3.org/2000/svg"
			width="50"
			height="50"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg
		>
	</button>
	<div
		id="{key}-heading"
		class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
		aria-labelledby={key}
	>
		<div class="mt-5 mx-6">
			<p class="job-paragraph">
				{jobParagraph}
			</p>
			<div class="justify-center sm:justify-end flex flex-row pt-5 flex-wrap">
				{#each jobTags as tag}
					<Badge color="green" content={tag} />
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.job-title {
		@apply font-semibold;
		@apply text-base;
		@apply md:text-2xl;
		@apply lg:text-3xl;
	}

	.job-paragraph {
		@apply text-lg;
		@apply text-justify;
		@apply mt-5;
	}
</style>
