<script>
    import { PFP } from "../resource.js";
    import Navbar from "$lib/Navbar.svelte";
</script>

<main>
    <Navbar />
    <div class="grid grid-cols-7 gap-0">
        <div
            class="col-span-7 md:col-span-3 md:mr-4 flex justify-end border-2 border-dotted overflow-clip"
        >
            <pre class="text-[0.1rem]/[0.125rem]">{PFP}</pre>
        </div>

        <div class="col-span-7 pt-4 md:pt-0 md:col-span-4">
            <div
                class="md:p-4 h-full grow flex flex-col justify-center text-left"
            >
                <h3>brendon</h3>
                <h5>software engineer</h5>
                <p class="text-sm pb-3">contact (at) brendontsim (dot) com</p>
                <ul class="list">
                    <li>
                        <a href="https://github.com/bktsim" target="_blank">
                            github
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/brendontsim/"
                            target="_blank"
                        >
                            linkedin
                        </a>
                    </li>
                    <li>email for resume (en/ja)</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-6 gap-6 pt-6">
        <div class="col-span-6 box">
            <h4>about</h4>
            <p>
                Full stack software engineer with a backend focus. <br />
                <br class="sm:hidden" />
                University of British Columbia (Canada) graduate. Currently based
                in Japan. <br /> <br class="sm:hidden" />
                Interested in too many things, but mainly distsys, applied ML and
                performance eng. Diving into databases, GPUs, ML workflows, large
                compute infra and web optimizations.
                <br /> <br class="sm:hidden" />
                I read papers, make tea, play maimai, weeb out, snowboard and build
                things.
            </p>
        </div>
        <div class="col-span-6 sm:col-span-3 box">
            <h4>work stuff</h4>
            <ul class="list">
                <li>1.25yr SWE exp (and counting)</li>
                <li>1yr TA (comp arch, hardware & OS)</li>
                <li>full stack, web, embedded, game</li>
            </ul>
        </div>
        <div class="col-span-6 sm:col-span-3 box">
            <h4>current status</h4>
            <ul class="list">
                <li>japan prep</li>
                <li>building job board project</li>
                <li>working on database textbooks</li>
            </ul>
        </div>
    </div>
</main>
