<script>
    import Navbar from "$lib/Navbar.svelte";
    import { SUBWAY } from "../../resource.js";
</script>

<main>
    <Navbar />
    <div>
        <h4 class="font-bold">thanks for visiting.</h4>
        <h5>Your time is valuable, so I'll keep it short.</h5>
    </div>
    <div class="pt-10">
        <h5 class="font-semibold">Me (brendon)</h5>
        <ul class="list">
            <li>
                24' BSc comp sci graduate from University of British Columbia
                (Vancouver, Canada)
            </li>
            <li>
                <b>3x internships (1.25yr)</b> (full stack, web, embedded, IoT, backend)
                + freelance (game)
            </li>
            <li>
                <b>3x teaching assistant (1yr)</b> in computer architecture, computer
                hardware & os
            </li>
            <li>
                Interested in distributed systems, computer networking, applied
                ml and entreprenurship
            </li>
        </ul>
    </div>
    <div class="pt-10">
        <h5 class="font-semibold">Experience</h5>
        <ul class="list">
            <li>
                <b class="underline text-sky-600">Arista Networks:</b> Worked on
                SONiC, open source network OS with Python and C++.
            </li>
            <li>
                <b class="text-yellow-500 underline">Alida:</b> Full-stack surveys,
                accessible question types with TypeScript, React and C#.
            </li>
            <li>
                <b class="text-yellow-600 underline">Kai Shing:</b> Automated manual
                processes & linked IoT data to apps with Java, Python, SQL
            </li>
        </ul>
        <p class="pt-2">
            <b>Technologies:</b> C, C#, C++, Python, TypeScript, React, Java, SQL
        </p>
    </div>
    <div class="pt-10">
        <h5 class="font-semibold">Projects</h5>
        <ul class="list">
            <li>
                <b>[DistSys] </b> Implemented
                <a
                    href="https://www.usenix.org/conference/atc14/technical-sessions/presentation/ongaro"
                    >Raft (ATC2014)</a
                >, a distsys consensus protocol. Built fault-tolerant KV server
                and sharding logic using Raft as protocol in Go (Golang).
            </li>
            <li>
                <b>[ML/CV] </b> Created Japanese coin counter CV model from scratch
                using YOLOV8 and Python. Implemented utility tool using Hough Circle
                Transform to help labelling process.
            </li>
            <li>
                <b>[WebDev]</b> Made
                <a href="https://www.hashbot.io/">hashbot.io</a> for a Discord bot
                with 10M+ users in TypeScript & Next.js.
            </li>
            <li>
                <b>[GameDev]</b> Worked on updates using Lua for Starship
                Roleplay, (3M+ unique game visits). Also made my own games:
                <a
                    href="https://www.roblox.com/games/5609136861/Homework-Simulator"
                    >Homework Simulator</a
                >
                and
                <a
                    href="https://roblox.com/games/139404174858131/king-of-the-king-of-the-hills"
                    >King of the King of the Hills</a
                >.
            </li>
        </ul>
        <p class="pt-2">
            <b>Technologies:</b>
            Go (Golang), TypeScript, Python, Lua
        </p>
    </div>
    <div class="pt-10">
        <h5 class="font-semibold">Cool courses I took (and skills I have)</h5>
        <ul class="list">
            <li>
                <b>[Parallel Computing] CUDA:</b> CUDA internals and building GPU
                kernels.
            </li>
            <li>
                <b>[Software Verification] SPIN:</b> Verifying software models using
                formal methods & LTL
            </li>
            <li>
                <b>[Multimedia]</b> streaming tech like Video Compression, RD Optimization,
                WebRTC, etc.
            </li>
            <li>
                <b>[Entreprenurship]</b> 0->1, doing startup and going through feasibility
                plan, business plan, market research, MVP, pitching, etc.
            </li>
        </ul>
    </div>
    <div class="pt-14">
        <h4 class="font-bold">thank you for your time.</h4>
        <p>
            If you'd like to chat, please reach out at [contact (at) brendontsim
            (dot) com].
        </p>
        <p>Feel free to explore the rest of my site!</p>
    </div>
</main>
