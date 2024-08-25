<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { base } from '$app/paths';
    export let data;
</script>

<Navbar page="Blog" />

<div class="mt-14 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col grow">
	<div class="flex flex-col grow justify-center font-light">

		<div class="text-xl font-light text-gray-400 justify-center text-center mt-1">
                {#each data.posts as post}
                    <div class="bg-white text-left">
                        <h2>
                            <a class="link" href={post.path}>
                                {post.meta.title}
                            </a>
                        </h2>
                        Published {post.meta.date}
                    </div>
                {/each}
        </div>
	</div>
</div>

<Footer />