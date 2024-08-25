<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	export let data;
	const { title, date, Content } = data;
</script>

<Navbar page="Blog" blogTitle={title} />

<div class="mt-14 max-w-[85rem] mx-auto px-10 sm:px-34 lg:px-36  flex flex-col grow w-full">
	<div class="flex flex-col grow markdown">
		<h1>{title}</h1>
		<p class="font-mono">Published: {date}</p>
		<br/> <hr/>
		<Content />
	</div>
</div>

<Footer />
