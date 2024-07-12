<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Project from "$lib/components/project.svelte";
</script>

<Navbar page="projects" />

<div class="top !mt-0">
	<article class="project-section">
		<h4 class="title text-center">machine learning</h4>
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
				/>
			</div>

		</div>
	</article>
	<article class="project-section">
		<h4 class="title text-center">web development</h4>
		<div class="paragraph-container">
			<div class="flex flex-col md:flex-row md:basis-full">
				<Project 
					projectId="personal" 
					projectName="My Personal Website"
					projectBlurb="This website! Built with Svelte."
					projectBulletpoint={[]}
					projectLink=""
					tooltipText=""
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
				/>
			</div>
		</div>
	</article>
</div>

<Footer />
