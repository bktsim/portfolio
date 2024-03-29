<script>
	/**
	 * @type {string}
	 */
	export let page;

	const text = {
		name: 'brendon',
		about: 'about',
		projects: 'projects',
		experience: 'dev experience',
		hobbies: 'hobbies'
	};
</script>

<header
	class="flex md:sticky md:top-0 inset-x-0 flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm backdrop-blur-sm rounded"
>
	<nav
		class="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:flex-row md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
		aria-label="Global"
	>
		<a class="grow hidden md:inline-flex min-w-fit name pl-2" href="/" aria-label="Brand"
			>{text.name}</a
		>
		<div>
			<div class="md:hidden flex items-center justify-between">
				<a class="inline-flex grow flex-row pl-2 name" href="/" aria-label="Brand">{text.name}</a>
				<button
					type="button"
					class="self-end hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
					data-hs-collapse="#navbar-collapse-with-animation"
					aria-controls="navbar-collapse-with-animation"
					aria-label="Toggle navigation"
				>
					<svg
						class="hs-collapse-open:hidden flex-shrink-0 size-4"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line
							x1="3"
							x2="21"
							y1="18"
							y2="18"
						/></svg
					>
					<svg
						class="hs-collapse-open:block hidden flex-shrink-0 size-4"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
					>
				</button>
			</div>
		</div>
		<div
			id="navbar-collapse-with-animation"
			class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
		>
			<div
				class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:self-end md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7"
			>
				<a
					class:selected={page === 'index'}
					class:unselected={page !== 'index'}
					class="links"
					href="/"
					aria-current="page">{text.about}</a
				>
				<a
					class="links"
					class:selected={page === 'experience'}
					class:unselected={page !== 'experience'}
					href="/experience"
					aria-current="page">{text.experience}</a
				>
				<a
					class="links"
					class:selected={page === 'projects'}
					class:unselected={page !== 'projects'}
					href="/"
					aria-current="page">{text.projects}</a
				>
				<a
					class="links"
					class:selected={page === 'fun'}
					class:unselected={page !== 'fun'}
					href="/"
					aria-current="page">{text.hobbies}</a
				>
				<!-- <a
					class="font-semibold text-xl text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
					class:selected={page === 'account'}
					href="/">Account</a
				>-->
			</div>
		</div>
	</nav>
</header>

<style>
	.selected {
		@apply text-blue-600;
		@apply dark:text-blue-500;
		@apply font-bold;
	}

	.unselected {
		@apply text-gray-500;
		@apply hover:text-gray-400;
		@apply dark:text-gray-400;
		@apply dark:hover:text-gray-500;
	}

	.links {
		@apply font-semibold;
		@apply text-xl;
		@apply ml-2;
		@apply md:ml-0;
		@apply md:py-6;
	}

	.name {
		@apply text-3xl;
		@apply md:text-2xl;
		@apply font-bold;
		@apply dark:text-white;
	}
</style>
