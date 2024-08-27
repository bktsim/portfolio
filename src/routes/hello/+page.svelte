<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<Navbar page="Hi!" />

<div class="top !mt-0 !pb-0 !mb-[-5.5em]">
	<article class="section !mt-0 !md:mt-20">
		<div>
            <div class="text-center">
                <h4 class="smalltitle">
                    Hello!
                </h4>
                <p class="small-paragraph-text">
                    Thanks for clicking. Your time is valuable, so I'll keep it short.
                </p>
                <hr class="mt-8"/>
            </div>

			<div class="paragraph-container">
                <h4 class="smallsub">
                    Me
                </h4>
                <ul class="small-paragraph ml-12">
                    <li class="my-1">Brendon - 24' BSc Computer Science graduate @ University of British Columbia in Vancouver, Canada. </li>
                    <li class="my-1"><b>3x Internships (~1.25yr)</b> (Full Stack, Web Dev, Embedded, IoT, Backend) + Freelance (Game Dev).</li>
                    <li class="my-1"><b>3x Teaching Assistant (1yr)</b> in low-level courses (Computer Architecture, Computer Hardware & OS).</li>
                    <li class="my-1">Interested in large scale distributed systems, computer networking, and applied machine learning.</li>
                    <li class="my-1">Passionate about startups. Especially interested in solving problems that deliver large impact to communities.</li>
                </ul>
            </div>

			<div class="paragraph-container">
                <h4 class="smallsub">
                    Experience  <div class="link text-sm inline">(more <a href="/experience">here</a>)</div>
                </h4>
                <ul class="small-paragraph ml-12">
                    <li class="my-1"><strong class="text-sky-600 underline">Arista Networks: </strong> Contributed to <a class="link" href="https://github.com/sonic-net" target="_blank">SONiC</a>, an open-source network OS using C++ and Python.</li>
                    <li class="my-1"><strong class="text-yellow-500 underline">Alida: </strong> Worked on Surveys web-app full stack, creating web-accessible components in TypeScript, React, and C#.
                    <li class="my-1"><strong class="text-yellow-600 underline">Kai Shing: </strong> Automated manual processes & linked IoT data to applications with Java, Python, SQL.
                </ul>
                <p class="small-paragraph">
                    <strong>Technologies:</strong> C, C#, C++, Python, TypeScript, React, Java, SQL
                </p>
            </div>

            <div class="paragraph-container">
                <h4 class="smallsub">
                    Technical Projects <div class="link text-sm inline">(more <a href="/projects">here</a>)</div>
                </h4>
                <ul class="small-paragraph ml-12">
                    <li class="my-1"><strong>[DistSys] </strong> Implemented <a class="link" href="https://www.usenix.org/conference/atc14/technical-sessions/presentation/ongaro">Raft (ATC2014)</a>, 
                        a dist-sys consensus protocol. Built fault-tolerant KV server and sharding logic using Raft as protocol in Go (Golang). </li>
                    <li class="my-1"><strong>[ML/CV] </strong> Created Japanese coin counter CV model from scratch using YOLOV8 and Python. Implemented utility tool using Hough Circle Transform to help labelling process. </li>
                    <li class="my-1"><strong>[WebDev]</strong> Created <a class="link" href="https://www.hashbot.io/">hashbot.io</a>, a site for a Discord bot with 10M+ users in TypeScript and Next.js.
                    <li class="my-1"><strong>[GameDev]</strong> Worked on updates using Lua for Starship Roleplay, a ROBLOX roleplay game series with 3M+ unique game visits. Created my own games like
                        <a href="https://www.roblox.com/games/5609136861/Homework-Simulator" class="link">Homework Simulator</a> and
                        <a href="https://roblox.com/games/139404174858131/king-of-the-king-of-the-hills" class="link">King of the King of the Hills</a> from scratch.
                </ul>
                <p class="small-paragraph">
                    <strong>Technologies Used:</strong> Go (Golang), TypeScript, Python, Lua
                </p>
            </div>

            <div class="paragraph-container">
                <h4 class="smallsub">
                    Other Skills
                </h4>
                <ul class="small-paragraph ml-12">
                    <li class="my-1"><strong>[Parallel Computing] CUDA:</strong>  Course @ UBC, understanding CUDA internals and building GPU kernels.</li>
                    <li class="my-1"><strong>[Software Verification] SPIN:</strong> Course @ Waseda, verifying software models using formal methods & LTL. </li>
                    <li class="my-1"><strong>[Multimedia]</strong> Course @ Waseda, streaming techniques incl. Video Compression, RD Optimization, WebRTC, etc. </li>
                    <li class="my-1"><strong>[Entreprenurship]</strong> Course @ UBC, feasibility plan, business plan, market research, MVP, pitching, etc. </li>

                </ul>
            </div>

            <div class="text-center mt-8">
                <hr class="mb-8"/>

                <p class="small-paragraph-text">
                        Thank you for your time.
                </p>
                <p class="small-paragraph-text">
                    Here's my <a class="link" href="/resume" target="_blank">resume</a> for reference; If you'd like to chat, don't hesitate reach me by my 
                    <a href="mailto:contact@brendontsim.com?subject=From brendontsim.com | [YOUR SUBJECT HERE]" class="link">email</a>.
                </p>
            </div>
		</div>
	</article>
</div>

<Footer />
