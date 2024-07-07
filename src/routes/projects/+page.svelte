<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Project from "$lib/components/project.svelte";
</script>

<Navbar page="projects" />

<div class="top">
	<article class="section">
		<h4 class="title">machine learning</h4>
		<div class="paragraph-container">
			<Project 
				projectId="cv" 
				projectName="Japanese Coin Counter"
				projectBlurb="Created Japanese coin counter CV model from scratch using YOLOV8 and Python. Implemented tool using Hough Circle Transform to help labelling process."
				projectDescription="Lorem Ipsum"
			/>
		</div>
	</article>
</div>

<Footer />
