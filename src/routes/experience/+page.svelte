<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';

	import Job from '$lib/components/job.svelte';
</script>

<Navbar page="experience" />

<div class="mt-14 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col grow">
	<article class="section">
		<h4 class="title">computer science</h4>
		<div class="paragraph-container">
			<p class="paragraph">
				In computer science, I'm most interested in distributed systems, parallel computing,
				computer networks and machine learning. My interests stems from my habit of watching live
				streams. I love watching streams live, and I want to improve this experience for everyone.
			</p>
			<p class="paragraph">
				Aside from livestreaming-related computer science topics, I'm also interested in Operating
				Systems, Natural Language Processing (especially speech and information retrieval related
				applications), and Computer Vision.
			</p>
			<p class="paragraph">
				I have extensive experience with languages like C, TypeScript, Python and Lua - but
				honestly, it doesn't really matter. I am a strong believer that developers should pick tools
				based on the task, and not the other way around. I am confident in picking up any other
				language and framework that is best suited for any task I tackle.
			</p>
		</div>
	</article>
	<article class="section">
		<h4 class="title">internship experience</h4>
		<div class="paragraph-container">
			<p class="paragraph">
				I have extensive internship experience across various different industries working in
				embedded, backend and fullstack.
			</p>

			<Job
				key="arista"
				companyName="Arista Networks"
				jobTitle="Software Engineer Intern"
				jobDates="Sep 2023 - Dec 2023"
				jobLocation="Vancouver, Canada"
				jobTags={['C++', 'Python', 'Redis', 'Linux', 'SQL', 'Computer Networking']}
				jobParagraph="At Arista Networks, I worked on adding support for multi-asic devices, new tests & test infrastructure based on prior customer escalations, and prototypes of new features for SONiC, an open-source network operating system (NOS)."
			/>
			<Job
				key="alida"
				companyName="Alida"
				jobTitle="Software Engineer Intern"
				jobDates="Jan 2022 - Aug 2022"
				jobLocation="Vancouver, Canada"
				jobTags={['TypeScript', 'C#', 'HTML', 'CSS', 'JavaScript', 'React', 'SQL']}
				jobParagraph="At Alida, I created interactive and WCAG-compliant web-accessible components with React, TypeScript and Jest; Owned the architecture for migrating the frontend to a new backend API and worked on product features."
			/>
			<Job
				key="kaishing"
				companyName="Kai Shing Management Services"
				jobTitle="Software Engineer Intern"
				jobDates="May 2021 - Jul 2021"
				jobLocation="Hong Kong"
				jobTags={[
					'Java',
					'Spring Boot',
					'JSP',
					'HTML',
					'CSS',
					'Struts',
					'SQL',
					'Python',
					'Qlik Sense',
					'Azure APIM'
				]}
				jobParagraph="At Kai Shing, I eliminated manual workflows for building operations and improving tenant experience by creating dashboards, adding features and data pipelines to expose more data for business analytics & logistics."
			/>
		</div>
	</article>
	<article class="section">
		<h4 class="title">teaching experience</h4>
		<div class="paragraph-container">
			<p class="paragraph">
				At UBC, I work as a teaching assistant for computer science courses covering low-level
				concepts, introducing students to concepts in discrete math, computer systems, computer
				architure, operating systems and computer hardware. More specifically, I have taught the
				following courses:
			</p>
			<div class="!mt-8 paragraph mx-8">
				<div class="flex gap-x-3">
					<div class="w-16 text-end">
						<span class="text-xs text-gray-500 dark:text-gray-400">2023W2</span>
					</div>

					<div
						class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700"
					>
						<div class="relative z-10 size-7 flex justify-center items-center">
							<div class="size-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
						</div>
					</div>

					<div class="grow pt-0.5 pb-8">
						<h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
							CPSC 313: Computer Hardware and Operating Systems
						</h3>
						<p class="mt-1 text-lg text-gray-600 dark:text-gray-400">
							Instruction sets, pipelining, code optimization, caching, virtual memory management,
							dynamically linked libraries, exception processing, execution time of programs.
						</p>
						<p class="mt-4 font-bold text-xl text-gray-600 dark:text-gray-400">Duties:</p>
						<div class="ml-12 mt-1 text-lg text-gray-600 dark:text-gray-400">
							<li>
								Hosted office hours and tutorials to guide students through problems, answer student
								questions, aiding students to understanding course concepts and its relevance to
								real life applications.
							</li>
							<li>
								Created practice and exam problems to examine student understanding of concepts
								PrarieLearn with Python.
							</li>
						</div>
					</div>
				</div>
				<div class="flex gap-x-3">
					<div class="w-16 text-end">
						<span class="text-xs text-gray-500 dark:text-gray-400">2022W1</span>
					</div>

					<div
						class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700"
					>
						<div class="relative z-10 size-7 flex justify-center items-center">
							<div class="size-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
						</div>
					</div>

					<div class="grow pt-0.5 pb-8">
						<h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
							CPSC 213: Introduction to Computer Systems
						</h3>
						<p class="mt-1 text-lg text-gray-600 dark:text-gray-400">
							Software architecture, operating systems, and I/O architectures. Relationships between
							application software, operating systems, and computing hardware; critical sections,
							deadlock avoidance, and performance; principles and operation of disks and networks.
						</p>
						<p class="mt-4 font-bold text-xl text-gray-600 dark:text-gray-400">Duties:</p>
						<div class="ml-12 mt-1 text-lg text-gray-600 dark:text-gray-400">
							<li>
								Hosted office hours and tutorials to guide students through problems, answer student
								questions, and guided students to debug their multithreaded code in C.
							</li>
						</div>
					</div>
				</div>
				<div class="flex gap-x-3">
					<div class="w-16 text-end">
						<span class="text-xs text-gray-500 dark:text-gray-400">2021W1</span>
					</div>

					<div
						class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700"
					>
						<div class="relative z-10 size-7 flex justify-center items-center">
							<div class="size-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
						</div>
					</div>

					<div class="grow pt-0.5 pb-8">
						<h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
							CPSC 121: Models of Computation
						</h3>
						<p class="mt-1 text-lg text-gray-600 dark:text-gray-400">
							Physical and mathematical structures of computation. Boolean algebra and combinations
							logic circuits; proof techniques; functions and sequential circuits; sets and
							relations; finite state machines; sequential instruction execution.
						</p>
						<p class="mt-4 font-bold text-xl text-gray-600 dark:text-gray-400">Duties:</p>
						<div class="ml-12 mt-1 text-lg text-gray-600 dark:text-gray-400">
							<li>
								Hosted office hours, tutorials and labs to guide students through problems, answer
								student questions.
							</li>
							<li>Helped students debug their circuits on breadboards during labs.</li>
						</div>
					</div>
				</div>
			</div>
		</div>
	</article>

	<article class="section">
		<h4 class="title">freelance work experience</h4>
		<div class="paragraph-container">
			<p class="paragraph">i do game dev and get paid for doing it. wip</p>
		</div>
	</article>
</div>
<Footer />

<!-- <style>
	* li {
		@apply indent-[-1.4em] text-left;
	}
</style> -->
