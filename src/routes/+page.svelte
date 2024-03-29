<script>
	import Navbar from '$lib/components/navbar.svelte';
</script>

<Navbar page="index" />

<div class="mt-14 md:mt-20 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
	<div class="m-8">
		<div class="flex justify-center min-h-[41vh]">
			<div class="flex flex-col justify-center">
				<h1 class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl inline-flex">(´• ω •`)ﾉ</h1>
			</div>
			<div class="flex flex-col justify-center ml-6 md:ml-14">
				<h1 class="text-5xl md:text-6xl xl:text-8xl dark:text-white font-bold">brendon tsim</h1>
				<h3 class="text-3xl md:text-4xl xl:text-5xl dark:text-white font-medium mt-2">
					software developer
				</h3>
			</div>
		</div>
		<article class="md:m-18 md:mt-20">
			<div>
				<h4 class="title">about</h4>
				<div class="paragraph-container">
					<p class="paragraph">
						Hey there! I'm Brendon, a software developer and a 4th year undergraduate student at The
						University of British Columbia in Vancouver, Canada majoring in Computer Science.
					</p>
					<p class="paragraph">
						In my free time, you can catch me playing the guitar, window shopping keyboards that I
						really shouldn't get, learning Japanese (i.e. watching VTubers) and playing video games
						- especially FPS and Rhythm games (maimai!). I chose to study computer science because I
						basically live on the internet. It's as if I'm in sorcery school.
					</p>
					<p class="paragraph">
						I'm on the lookout for cool projects that are related to my interests and full-time
						roles in Canada, USA, Australia, Japan and Hong Kong. I can speak English, Cantonese,
						Mandarin and Japanese, so any role using more than one language would be a cool plus!
					</p>
					<p class="paragraph">
						If you'd like to get in touch for academic/career opportunities, projects, or if you'd
						just like to chat, please dont hesitate to reach out through my <a
							href="mailto:contact@brendontsim.com?subject=From brendontsim.com | [YOUR SUBJECT HERE]"
							class="font-bold text-blue-500 underline">email</a
						>!
					</p>
				</div>
			</div>

			<div class="section">
				<h4 class="title">computer science</h4>
				<div class="paragraph-container">
					<p class="paragraph">
						In computer science, I'm most interested in distributed systems, parallel computing,
						computer networks and machine learning. My interests stems from my habit of watching
						live streams. I love watching streams live, and I want to improve this experience for
						everyone.
					</p>
					<p class="paragraph">
						Aside from livestreaming-related computer science topics, I'm also interested in
						Operating Systems, Software Verification, Natural Language Processing (especially speech
						and information retrieval related applications), and Computer Vision.
					</p>
				</div>
			</div>
		</article>
		<hr class="section-divider" />
		<article class="mt-8">
			<div class="section">
				<h4 class="title">work experience</h4>
				<div class="paragraph-container">
					<p class="paragraph">
						In computer science, I'm most interested in distributed systems, parallel computing,
						computer networks and machine learning. My interests stems from my habit of watching
						live streams. I love watching streams live, and I want to improve this experience for
						everyone.
					</p>
					<p class="paragraph">
						Aside from livestreaming-related computer science topics, I'm also interested in
						Operating Systems, Natural Language Processing (especially speech and information
						retrieval related applications), and Computer Vision.
					</p>
				</div>
			</div>
		</article>
	</div>
</div>

<style>
	.title {
		@apply text-6xl;
		@apply font-light;
		@apply mt-14;
		@apply md:mt-9;
	}

	.paragraph {
		@apply text-2xl;
		@apply text-justify;
		@apply mt-5;
	}

	.section-divider {
		/* @apply border-2; */
		@apply mt-16;
		@apply md:mt-12;
		@apply md:mb-5;
		@apply mx-8;
	}

	.paragraph-container {
		@apply ml-4;
		@apply mt-6;
	}

	.section {
		@apply my-24;
	}
</style>
