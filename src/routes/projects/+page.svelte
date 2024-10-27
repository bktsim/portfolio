<script>
    import Navbar from "$lib/Navbar.svelte";
    import { SUBWAY } from "../../resource.js";
</script>

<main>
    <Navbar />
    <div class="w-full grid grid-cols-7 gap-6">
        <div class="col-span-7 box">
            <h5 class="my-0 py-0">this website</h5>
            <div class="project">
                <div>web development</div>
                <div class="text-gray-400">svelte</div>
            </div>
            <ul class="list">
                <li>ur looking at it right now. built with svelte!</li>
            </ul>
        </div>

        <div class="col-span-7 sm:col-span-4 box">
            <h5 class="my-0 py-0">raft</h5>
            <div class="project">
                <div>distributed computing</div>
                <div class="text-gray-400">go (golang)</div>
            </div>
            <ul class="list">
                <li>
                    implemented raft, a distsys consensus algorithm in Go (as
                    seen in
                    <a
                        href="https://web.stanford.edu/~ouster/cgi-bin/papers/raft-atc14.pdf"
                        target="_blank"
                        alt="link to the paper for raft">ATC2014</a
                    >)
                </li>
                <li>
                    built KVServer on top with strong consistency guarantees,
                    basic sharding and tolerable to non-byzantine failures.
                </li>
            </ul>
        </div>
        <div class="col-span-7 sm:col-span-3 box">
            <h5 class="my-0 py-0">promela</h5>
            <div class="project">
                <div>software verification</div>
                <div class="text-gray-400">SPIN</div>
            </div>
            <ul class="list">
                <li>
                    used LTL in Promela (SPIN) to verify correctness of
                    concurrent protocols
                </li>
            </ul>
        </div>
        <button
            class="col-span-7 box text-left hover:bg-gray-100"
            on:click={() =>
                window.open("https://jobs.brendontsim.com", "_blank")}
        >
            <h5 class="my-0 py-0">japan job board</h5>
            <div class="project">
                <div>
                    full stack development, web development, applied AI (LLM
                    agents)
                </div>
                <div class="text-gray-400">
                    go (golang), docker, rabbitmq, postgreSQL, gemini,
                    javascript, svelte, oracle cloud, apache2
                </div>
            </div>
            <ul class="list">
                <li>
                    building job board that scrapes jobs of top companies in
                    Japan off the web.
                </li>
                <li>
                    applied LLMs with structured output to tag jobs into
                    categories and add metadata (e.g. translate details to
                    Japanese) to improve querying experience.
                </li>
                <li>
                    built services in Go, Docker, RabbitMQ to facilitate
                    processing and validation of leads for jobs, ensuring data
                    liveliness and validity.
                </li>
                <li>
                    optimized query runtimes by implementing appropriate indexes
                    for DB with caching layer at the application level to avoid
                    redundant/frequent queries.
                </li>
                <li>
                    configured apache2 and ip ports on oracle cloud to host
                    website
                </li>
            </ul>
        </button>
        <button
            class="col-span-7 box text-left hover:bg-gray-100 flex flex-col justify-start"
            on:click={() => window.open("https://hashbot.pages.dev", "_blank")}
        >
            <h5 class="my-0 py-0">hashbot</h5>
            <div class="project">
                <div>web development, compilers</div>
                <div class="text-gray-400">typescript, react, next.js</div>
            </div>
            <ul class="list">
                <li>
                    created hashbot.io for Hashbot, a discord bot protecting
                    large Web3 servers (3M+ users) against impersonators.
                </li>
                <li>
                    integrated analytics & subscription management features into
                    the site.
                </li>
                <li>
                    modified regex crate to support confusables (e.g. H@SHB0T ==
                    HASHBOT)
                </li>
            </ul>
        </button>
        <div class="box marquee col-span-7">
            <ul class="marquee__content">
                <li>YOU WANT TO STAY ON THE PAGE</li>
                <li>YOU WANT TO STAY ON THE PAGE</li>
            </ul>

            <ul aria-hidden="true" class="marquee__content">
                <li>YOU WANT TO STAY ON THE PAGE</li>
                <li>YOU WANT TO STAY ON THE PAGE</li>
            </ul>
        </div>
        <div class="col-span-7 flex justify-center box overflow-clip">
            <pre class="text-[0.23rem]/[0.25rem]">{SUBWAY}</pre>
        </div>
        <div class="box marquee col-span-7">
            <ul class="marquee__content">
                <li>OOOOOO I HAVE UR ATTENTION</li>
                <li>OOOOOO I HAVE UR ATTENTION</li>
            </ul>

            <ul aria-hidden="true" class="marquee__content">
                <li>OOOOOOO I HAVE UR ATTENTION</li>
                <li>OOOOOOO I HAVE UR ATTENTION</li>
            </ul>
        </div>

        <button
            class="col-span-7 sm:col-span-3 box text-left hover:bg-gray-100 flex flex-col justify-start"
            on:click={() =>
                window.open(
                    "https://docs.google.com/presentation/d/18ALZk-Azj6iYOlqK12G90RqpAqMniVKhxHZFcV8H2DE/edit?usp=sharing",
                    "_blank",
                )}
        >
            <h5 class="my-0 py-0">japanese coin counter</h5>
            <div class="project">
                <div>machine learning, computer vision</div>
                <div class="text-gray-400">python, YOLOV8, OpenCV</div>
            </div>
            <ul class="list">
                <li>
                    built dataset from scratch and trained a coin segmentation &
                    classifier with YOLOV8 & Python.
                </li>
                <li>
                    implemented hough circle trasnform based tool to assist with
                    labelling.
                </li>
            </ul>
        </button>
        <div class="col-span-7 sm:col-span-4 grid grid-cols-1 gap-6">
            <button
                class="col-span-1 box text-left hover:bg-gray-100 flex flex-col justify-start"
                on:click={() =>
                    window.open(
                        "https://docs.google.com/presentation/d/1jR_41FI9ZrhCdlEDEIohjRUwaW2J_JcsCoGeQn1oD7s/edit?usp=sharing",
                        "_blank",
                    )}
            >
                <h5 class="my-0 py-0">TREC CaST summary</h5>
                <div class="project">
                    <div>machine learning, information retrieval</div>
                    <div class="text-gray-400">research</div>
                </div>

                <ul class="list">
                    <li>
                        wrote a summary on 2021 TREC, CaST track on
                        conversational search.
                    </li>
                </ul>
            </button>
            <button
                class="col-span-1 box text-left hover:bg-gray-100 flex flex-col justify-start"
                on:click={() =>
                    window.open(
                        "https://docs.google.com/presentation/d/1iPgyrDBmj3awBQ9RytPWcZsDSxXprcXKRqxp7omErec/edit?usp=sharing",
                        "_blank",
                    )}
            >
                <h5 class="my-0 py-0">survey on ASR error correction</h5>
                <div class="project">
                    <div>machine learning, natural language processing</div>
                    <div class="text-gray-400">research</div>
                </div>

                <ul class="list">
                    <li>
                        wrote a survey on recent ASR error correction
                        techniques.
                    </li>
                </ul>
            </button>
        </div>
        <div class="col-span-7 box">
            <h5 class="my-0 py-0">roblox game development</h5>
            <div class="project">
                <div>game dev</div>
                <div class="text-gray-400">lua</div>
            </div>

            <ul class="list">
                <li>
                    6+ years of ROBLOX game development as both leader and
                    member, ranging from programming, graphics & UI design,
                    localization. whatever the team needs!
                </li>
                <li>
                    led team of 2/3 to build my own games fully built in with
                    progression, microtransactions, graphics and the like.
                    currently, i've led and built <a
                        href="https://www.roblox.com/games/5609136861/Homework-Simulator"
                        target="_blank">homework simulator</a
                    >
                    and
                    <a
                        href="https://www.roblox.com/games/139404174858131/King-of-the-King-of-the-Hills"
                        target="_blank">king of the king of the hills</a
                    >.
                </li>
                <li>
                    made complete game economy, weapons, bounty, mining and
                    housing <a
                        href="https://roblox.brendontsim.com/programming/star-wars"
                        target="_blank">systems</a
                    >
                    for a star wars community group (7k+ members). also made
                    <a
                        href="https://roblox.brendontsim.com/programming"
                        target="_blank"
                    >
                        custom community-tailored stuff</a
                    > for other communities (e.g. military, aviation).
                </li>
                <li>
                    worked with team on games like <a
                        href="https://www.roblox.com/groups/1191237/St-rfall#!/about"
                        target="_blank">Starship Roleplay</a
                    > with 3M+ unique plays.
                </li>
            </ul>
        </div>
    </div>
</main>
