<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Project from "$lib/components/project.svelte";
</script>

<Navbar page="projects" />

<div class="top !mt-0">
	<article class="project-section">
		<h4 class="title">distributed computing</h4>
		<div class="paragraph-container">
			<div class="flex flex-col md:flex-row md:basis-full grow w-full">
				<Project 
					projectId="raft" 
					projectName="Raft (as presented in ATC2014)"
					projectBlurb="Implemented Raft and KVServer using Raft in Golang."
					projectBulletpoint={[
						"Implemented Raft, a distributed systems consensus algorithm (as presented in ATC2014) in Golang.",
						"Implemented a KVServer using Raft as the consensus algorithm. Handling multiple servers and clients, the server offered strong consistency guarantees and was tolerable to crashes and network partitions.",
						"Implemented basic sharding for multiple server instances.",
						"Verified reliability of implementation by running tests provided by the MIT course 6.840 500+ times at each stage using a custom bash script."
					]}
					projectLink="https://web.stanford.edu/~ouster/cgi-bin/papers/raft-atc14.pdf"
					tooltipText="Link to Paper"
					imageCredits="Image from ScyllaDB"
				/>
				<Project 
					projectId="promela" 
					projectName="Promela Model Verification"
					projectBlurb="Completed exercises in Promela, formulating LTL equations to verify correctness of models."
					projectBulletpoint={[
					]}
					projectLink=""
					tooltipText=""
					imageCredits=""
				/>
			</div>
		</div>
	</article>

	<article class="project-section">
		<h4 class="title">machine learning</h4>
		<div class="paragraph-container">
			<div class="flex flex-col md:flex-row">
				<Project 
					projectId="coin_counter" 
					projectName="Japanese Coin Counter"
					projectBlurb="Counted Japanese Coins with Roboflow and YOLOV8."
					projectBulletpoint={[
						"Created Japanese coin counter CV model from scratch (pretrained weights, but data for training set from scratch!) using YOLOV8 and Python.", 
						"Implemented tool using Hough Circle Transform to help automate the labelling process."
						]}
					projectLink="https://docs.google.com/presentation/d/18ALZk-Azj6iYOlqK12G90RqpAqMniVKhxHZFcV8H2DE/edit?usp=sharing"
					tooltipText="Presentation Slides"
					imageCredits=""
				/>
				<Project 
					projectId="info" 
					projectName="TREC CAsT Summary"
					projectBlurb="Compiled 2021 TREC CAsT results into a presentation."
					projectBulletpoint={[
						"Summarized the contents of 2021 TREC CAsT results into a digestable presentation, learning about the information retrieval and the challenges that the field faces with conversational search systems in the process."
					]}
					projectLink="https://docs.google.com/presentation/d/1jR_41FI9ZrhCdlEDEIohjRUwaW2J_JcsCoGeQn1oD7s/edit?usp=sharing"
					tooltipText="Summary Slides"
					imageCredits=""
				/>
					<Project 
					projectId="nlp" 
					projectName="ASR Error Correction"
					projectBlurb="Survey of methods (2023) for correcting ASR errors."
					projectBulletpoint={[
						"Summarized methods (2023) for correcting ASR (\"Automatic Speech Recognition\") errors into a short presentation.",
						"Wrote a survey on the topic in greater detail, evaluating various error correction methodologies and their effectiveness."
					]}
					projectLink="https://docs.google.com/presentation/d/1iPgyrDBmj3awBQ9RytPWcZsDSxXprcXKRqxp7omErec/edit?usp=sharing"
					tooltipText="Presentation Slides"
					imageCredits=""
				/>
			</div>

		</div>
	</article>

	<article class="project-section">
		<h4 class="title">web development</h4>
		<div class="paragraph-container">
			<div class="flex flex-col md:flex-row md:basis-full">
				<Project 
					projectId="personal" 
					projectName="My Personal Website"
					projectBlurb="This website! Built with Svelte."
					projectBulletpoint={[]}
					projectLink=""
					tooltipText=""
					imageCredits=""
				/>
				<Project 
					projectId="hashbot" 
					projectName="hashbot.io"
					projectBlurb="Website for advertising Hashbot, a Discord bot for Web3 communities with 3M+ users."
					projectBulletpoint={[
						"Created a website for Hashbot, a Discord bot that protects large servers against impersonators, scanning over 3M+ clients across multiple servers 24/7 with TypeScript, React and Next.js.",
						"Integrated plugins such as Chargebee, Google Analytics and Intercom to improve analytics \& user experience."
					]}
					projectLink="https://www.hashbot.io/"
					tooltipText="Visit hashbot.io"
					imageCredits=""
				/>
			</div>
		</div>
	</article>

	<article class="project-section">
		<h4 class="title">game development</h4>
		<div class="paragraph-container">
			<p class="text-xl font-light justify-center mt-1">
				I did a lot of ROBLOX game development, whether that be...
			</p>
			<p class="text-xl font-light justify-center mt-5 ml-8">
				making my own games - leading a small team of 3 to work on
				<a href="https://roblox.brendontsim.com/programming/neverawake" target="_blank" class="font-bold underline text-blue-500">Homework Simulator</a>,
			</p>

			<p class="text-xl font-light justify-center mt-3 ml-8">
				...or for others, like making game economies and weapons for 
				<a href="https://roblox.brendontsim.com/programming/star-wars" target="_blank" class="font-bold underline text-blue-500">Star Wars Groups</a> with 7k+ members,
			</p>

			<p class="text-xl font-light justify-center mt-3 ml-8">
				...and sometimes, working in teams to develop games like 
				<a href="https://www.roblox.com/groups/1191237/St-rfall#!/about" target="_blank" class="font-bold underline text-blue-500">Starship Roleplay</a> with 3M+ unique plays.
			</p>

			<p class="text-xl font-light justify-center mt-5">
				I've been a project lead, team lead, developer, graphic & UI designer in these projects. I now only exclusively do localization for to help games be more available to Chinese speakers.
			</p>

			<p class="text-xl font-light justify-center mt-4">
				You can find some snippets of my past work on my old google site 
				<a href="https://roblox.brendontsim.com/home" target="_blank" class="font-bold underline text-blue-500">here.</a>
			</p>
		</div>
	</article>
</div>

<Footer />
