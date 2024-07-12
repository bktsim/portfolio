<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { base } from '$app/paths';
</script>

<Navbar page="" />

<div class="mt-14 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col grow">
	<div class="flex flex-col grow justify-center font-light">
		<div class="flex justify-center w-full">
			<img class="flex sm:max-w-sm rounded-lg mb-4 border-pink-300 border-4" src="{base}/wip.png" alt="wip"/>
		</div>
		<p class="text-4xl justify-center text-center">i'm working on this - come back later!</p>
		<p class="text-xl font-light text-gray-400 justify-center text-center mt-1">
			image (𝕏): <a href="https://x.com/yuzutouhu_ika/status/1805206076524204533" target="_blank" class="underline text-blue-400">@yuzutouhu_ika</a>
		</p>
	</div>
</div>

<Footer />
