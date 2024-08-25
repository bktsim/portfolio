<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
    export let data;
</script>

<Navbar page="Blog" />

<div class="mt-14 max-w-[85rem] mx-auto px-10 sm:px-34 lg:px-36 flex flex-col grow w-full">
    <h1 class="smalltitle pb-3">
        blog entries
    </h1>
    <ul class="list-none text-lg text-gray-400 mt-1 space-y-0.5">
        {#each data.posts as post}
            <li class="hover:bg-black/[.03] rounded-xl">
                <a class="flex" href={post.path}>
                    <span class="grow-0 shrink-0 basis-[130px] font-mono">{post.meta.date}</span>
                    <p class="font-serif">{post.meta.title.toLowerCase()}</p>
                </a>
            </li>
        {/each}
    </ul>
</div>

<Footer />