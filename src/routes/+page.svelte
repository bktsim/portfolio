<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<Navbar page="index" />

<div class="top">
	<div class="flex flex-col sm:flex-row justify-center py-12 sm:min-h-[50vh]">
		<div class="flex flex-col justify-center">
			<h1
				class="text-5xl text-center justify-center sm:justify-start sm:text-left sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl inline-flex"
			>
				(´• ω •`)ﾉ
			</h1>
		</div>
		<div class="flex flex-col justify-center ml-2 sm:ml-6 md:ml-14 mt-4 sm:mt-0">
			<h1
				class="text-3xl text-center justify-center sm:justify-start sm:text-left sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl font-bold"
			>
				brendon tsim
			</h1>
			<h3
				class="text-2xl text-center justify-center sm:justify-start sm:text-left sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-medium sm:mt-2"
			>
				software developer
			</h3>
		</div>
	</div>
	<article class="section !mt-0 !md:mt-20">
		<div>
			<h4 class="title">about</h4>
			<div class="paragraph-container">
				<p class="paragraph">
					Hey there! I'm Brendon. I'm a software developer with working experience across the stack
					(full stack, web, embedded, IoT, game dev), and a 4th year undergraduate student at The
					University of British Columbia in Vancouver, Canada majoring in Computer Science.
				</p>
				<p class="paragraph">
					In my free time, you can catch me playing the guitar, window shopping keyboards that I
					really shouldn't get, learning Japanese (i.e. watching VTubers) and playing video games -
					especially FPS and Rhythm games (maimai!). As you can tell from my hobbies, I like being
					on the internet.
				</p>
				<p class="paragraph">
					I'm on the lookout for cool projects that are related to my interests and full-time roles
					in Canada, USA, Australia, Japan and Hong Kong. I can speak English, Cantonese, Mandarin
					and Japanese, so any role using more than one language would be a cool plus!
				</p>
				<p class="paragraph">
					If you'd like to get in touch for academic/career opportunities, projects, or if you'd
					just like to chat, please dont hesitate to reach out through my <a
						href="mailto:contact@brendontsim.com?subject=From brendontsim.com | [YOUR SUBJECT HERE]"
						class="link">email</a
					>!
				</p>
			</div>
		</div>
	</article>
</div>

<Footer />
