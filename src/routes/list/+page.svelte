<script>
    import Navbar from "$lib/Navbar.svelte";
</script>

<main>
    <Navbar />
    <h4>reading list</h4>
    <p>
        My list of resources that I have used, or actively using here to learn
        more about topics I'm interested in. Mainly CS with some others at
        times. Also includes articles or cool reads that I may want to reference
        at times. I want to keep learning cool things.
    </p>
    <p>
        Not listed in order of interest or things to work on, but anything that
        I'm actively working on has a WIP tag attached to it. Anything that I
        haven't gone through has a TODO tag attached. Working on going through
        it whilst also building. One at a time!
    </p>
    <br />

    <h5>databases</h5>
    <ul class="list">
        <li>
            <a href="https://use-the-index-luke.com/" target="_blank"
                >Use The Index, Luke! Markus Winand</a
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
    <h5>mlops? compilers? performance eng? hpc? transformer internals?</h5>
    <p>need to find more resources in these categories.</p>
</main>
