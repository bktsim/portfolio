<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
    export let data;
</script>

<Navbar page="Blog" />

<div class="mt-14 max-w-[85rem] mx-auto px-20 sm:px-32 md:px-44 lg:px-56 flex flex-col grow w-full text-lg">
    <h1 class="smalltitle pb-5">
        blog entries
    </h1>
    <p class="pb-4">
        Whether you're a old friend stalking my page or a random internet stranger, I hope you can
        learn a little more about what I'm doing lately and what I'm thinking about through my
        posts here.
    </p>
    <p class="pb-4">
        <b>To my friends:</b> I know I suck at catching up with you. If you are reading
        this and you're free, please send me a message on Signal or Discord. I'd love to catch up
        and learn about what you've been up to lately.
    </p>
    <p class="pb-8">
        I can't say that I'm a great writer, but I hope you enjoy the read.
    </p>
    <hr/>
    <ul class="list-none text-gray-400 pt-8 space-y-0.5">
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