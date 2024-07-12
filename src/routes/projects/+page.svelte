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
						"Implemented tool using Hough Circle Transform to help automate the labelling process."]}
					projectLink="https://docs.google.com/presentation/d/18ALZk-Azj6iYOlqK12G90RqpAqMniVKhxHZFcV8H2DE/edit?usp=sharing"
				/>
				<Project 
				projectId="info" 
				projectName="TREC CAsT Summary"
				projectBlurb="Compiled 2021 TREC CAsT results into a presentation."
				projectBulletpoint={[]}
				projectLink="https://docs.google.com/presentation/d/1jR_41FI9ZrhCdlEDEIohjRUwaW2J_JcsCoGeQn1oD7s/edit?usp=sharing"
				/>
				<Project 
				projectId="nlp" 
				projectName="ASR Error Correction"
				projectBlurb="Survey of methods (2023) for correcting ASR errors."
				projectBulletpoint={[]}
				projectLink="https://docs.google.com/presentation/d/1iPgyrDBmj3awBQ9RytPWcZsDSxXprcXKRqxp7omErec/edit?usp=sharing"
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
				/>
				<Project 
				projectId="hashbot" 
				projectName="hashbot.io"
				projectBlurb="Website for advertising Hashbot, a Discord bot for Web3 communities with 3M+ users."
				projectBulletpoint={[]}
				projectLink="https://www.hashbot.io/"
				/>
			</div>
		</div>
	</article>
</div>

<Footer />
