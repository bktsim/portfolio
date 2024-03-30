<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<Navbar page="projects" />

<div class="mt-14 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col grow">
	<div class="flex flex-col grow justify-center font-light">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.25"
			stroke="currentColor"
			class="w-23 h-24 justify-center self-center"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
			/>
		</svg>
		<p class="text-4xl justify-center text-center">WIP - Come back later!</p>
	</div>
</div>

<Footer />
