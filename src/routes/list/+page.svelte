<script>
    import Navbar from "$lib/Navbar.svelte";

    import { BOOKS_PFP } from "../../resource.js";
</script>

<main>
    <Navbar />
    <h4>reading list</h4>
    <div class="grid grid-cols-7 gap-0">
        <div
            class="col-span-7 md:col-span-3 flex flex-col justify-center overflow-clip"
        >
            <pre
                class="text-[0.1rem]/[0.125rem] content-center border-dotted border-2 py-1 px-2 rounded-none flex justify-center">{BOOKS_PFP}</pre>
        </div>

        <div class="col-span-7 pt-4 md:pt-0 md:col-span-4">
            <div
                class="md:p-4 h-full grow flex flex-col justify-center text-left"
            >
                <p>
                    List of resources used (or actively using) to learn more
                    about topics I'm interested in. Mainly CS, occassionally
                    others. Includes articles and cool reads that I keep for
                    reference or for sharing.
                </p>
                <p class="pt-3">
                    Not listed in order of interest or priority. Anything that
                    I'm working on has a WIP tag attached. Others have TODO. No
                    tag means done. Balancing between building, learning, work
                    and hobbies. Learning new cool things is fun!
                </p>
            </div>
        </div>
    </div>
    <br />
    <h5>databases</h5>
    <ul class="list">
        <li>
            <a href="https://use-the-index-luke.com/" target="_blank"
                >Use The Index, Luke!, Markus Winand</a
            >
        </li>
        <li>
            WIP: <a
                href="https://15445.courses.cs.cmu.edu/fall2023/"
                target="_blank">CMU, Database Systems</a
            >
        </li>
        <li>
            TODO: <a
                href="https://15721.courses.cs.cmu.edu/spring2024/"
                target="_blank">CMU, Advanced Database Systems</a
            >
        </li>
    </ul>
    <br />
    <h5>distsys</h5>
    <ul class="list">
        <li>WIP: Designing Data Intensive Applications</li>
        <li>
            <a
                href="https://www.somethingsimilar.com/2013/01/14/notes-on-distributed-systems-for-young-bloods/"
                target="_blank"
                >Notes on Distributed Systems for Young Bloods, Jeff Hodges</a
            >
        </li>
        <li>
            <a
                href="https://www.cs.cornell.edu/projects/ladis2009/talks/dean-keynote-ladis2009.pdf
"
                target="_blank"
            >
                DistSys design and lessons</a
            > by Jeff Dean. (TODO: make BOTE table with updated numbers.)
        </li>
    </ul>
    <br />
    <h5>comparch / performance</h5>
    <ul class="list">
        <li>
            TODO: <a
                href="https://safari.ethz.ch/architecture/fall2023/doku.php?id=start
"
                target="_blank"
            >
                ETH Zurich, Computer Architecture</a
            >
        </li>
        <li>
            TODO: <a
                href="https://safari.ethz.ch/digitaltechnik/spring2022/doku.php?id=start
">ETH Zurich, Digital Design and Computer Architecture</a
            >
        </li>
        <li>
            TODO: <a
                href="https://safari.ethz.ch/architecture_seminar/fall2024/doku.php?id=start
"
                target="_blank"
            >
                ETH Zurich, Seminar in Computer Architecture, 227-2211-00L
            </a>
        </li>
        <li>
            TODO: <a
                href="https://safari.ethz.ch/projects_and_seminars/spring2023/doku.php?id=heterogeneous_systems"
                target="_blank"
            >
                ETH Zurich, Hands-on Acceleration on Heterogeneous Computing
                Systems
            </a>
        </li>
    </ul>
    <br />
    <h5>react</h5>
    <ul class="list">
        <li>
            <a
                href="https://react.dev/learn/you-might-not-need-an-effect"
                target="_blank">You might not need an effect</a
            >
        </li>
        <li>
            <a
                href="https://www.perssondennis.com/articles/react-anti-patterns-and-best-practices-dos-and-donts#user-content-declare-css-outside-components"
                target="_blank">React antipatterns</a
            >
        </li>
        <li>useRef, useMemo, mounting, useEffect</li>
    </ul>
    <br />
    <h5>general</h5>
    <ul class="list">
        <li><a href="https://roadmap.sh/" target="_blank">roadmaps.sh</a></li>
    </ul>
    <br />
    <h5>mlops, compilers, performance eng, hpc, transformer internals</h5>
    <p>
        would like to learn more: need to find more resources in these
        categories.
    </p>
</main>
