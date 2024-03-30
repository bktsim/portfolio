<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import TimelineItem from '$lib/components/timelineitem.svelte';
	import Job from '$lib/components/job.svelte';
	import { base } from '$app/paths';
	import Badge from '$lib/components/badge.svelte';
</script>

<Navbar page="experience" />

<div class="mt-14 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col grow mb-14">
	<article class="section">
		<h4 class="title">academics</h4>
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
				I have taken courses related to every single one of my computing interests listed above
				either as an upper-year course at UBC, or as an upper-year/graduate level course during my
				<!-- svelte-ignore a11y-missing-attribute -->
				exchange at <a class="italic">Waseda University</a> in 2023. You can find some of the
				'research' and academic projects that I have done related to these topics by my
				<a href="{base}/projects" class="link">projects</a> tab. Here's the names of a bunch of courses
				that I have taken to give you a rough idea of my academic background.
			</p>
			<div class="justify-center flex flex-row flex-wrap mt-4 bg-slate-100 p-5 rounded-lg">
				<Badge color="dark" content="Software Engineering" />
				<Badge color="dark" content="Advanced Data Structures & Algorithms" />
				<Badge color="dark" content="Computer Hardware & Operating Systems" />
				<Badge color="dark" content="Distributed Systems" />
				<Badge color="dark" content="Parallel Computation" />
				<Badge color="dark" content="Reliable Software" />
				<Badge color="dark" content="Language Processors (Compilers)" />
				<Badge color="dark" content="Computer Networking" />
				<Badge color="dark" content="Machine Learning & Data Mining" />
				<Badge color="dark" content="Computer Vision" />
				<Badge color="dark" content="Natural Language Processing" />
				<Badge color="dark" content="Foundations for Information Acesss Evaluation" />
				<Badge color="dark" content="Advanced Image Information" />
			</div>
			<p class="paragraph">
				In terms of development, I have extensive experience with languages like C, TypeScript,
				Python and Lua and frameworks like React, Node.js, and more - but honestly, it doesn't
				really matter to me. I am a strong believer that developers should pick tools based on the
				task, and not the other way around. I am confident in picking up any other language and
				framework that is best suited for any task I tackle.
			</p>
		</div>
	</article>
	<article class="section">
		<h4 class="title">work experience</h4>
		<div class="paragraph-container">
			<p class="paragraph">
				I have extensive real life software development experience across various different
				industries, working in embedded, backend and fullstack applications.
			</p>

			<Job
				key="arista"
				companyName="Arista Networks"
				jobTitle="Software Engineer Intern"
				jobDates="Sep 2023 - Dec 2023"
				jobLocation="Vancouver, Canada"
				jobTags={['C++', 'Python', 'Redis', 'Linux', 'SQL', 'Computer Networking']}
				jobParagraph="At Arista Networks, I worked on adding support for multi-asic devices, new tests & test infrastructure based on prior customer escalations, and prototypes of new features for SONiC, an open-source network operating system (NOS)."
				jobBulletPoints={[
					'Extended CLI configuration support for multi-asic devices with Python (and reading lots of high level design documents), enabling users to easily configure features and logging the same way they can with single-asic devices.',
					'Prototyped drop counter monitoring in C++, enabling users to configure rules and receive alerts, increasing network observability.',
					'Expanded test-suite for QoS features to include IPv6 based on problems discovered in customer escalation, preventing further regressions.',
					'Debugged and fixed bugs in configuration-related features by capturing packets using tcpdump and tracing source of errors.'
				]}
			/>
			<Job
				key="alida"
				companyName="Alida"
				jobTitle="Software Engineer Intern"
				jobDates="Jan 2022 - Aug 2022"
				jobLocation="Vancouver, Canada"
				jobTags={[
					'TypeScript',
					'Jest',
					'Material-UI',
					'C#',
					'HTML',
					'CSS',
					'JavaScript',
					'React',
					'SQL'
				]}
				jobParagraph="At Alida, I contributed to rewriting the Surveys application to a microservice. This involved creating interactive and WCAG-compliant web-accessible components with React, Typescript and Jest, as well as owning the architecture for migrating the appliaction to new backend APIs."
				jobBulletPoints={[
					'Created web-accessible and interactive components for Surveys application with Typescript, React with unit tests in Jest.',
					'Audited and added web-accessibility features throughout the Surveys application, improving user experience.',
					'Reduced pipeline blocks by increasing unit test coverage and rewriting indeterministic unit tests for frontend components, increasing overall developer productivity and velocity.',
					'Owned the architecture and design for the migration to a new backend API service, ensuring backwards compatibility and ease of switch with modular code.',
					'Worked with other teams to faciliate weekly pushes of application updates to production using GoCD.'
				]}
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
				jobBulletPoints={[
					'Eliminiated manual workflow that took 2-3 days by creating a dashboard, allowing staff to update restaurant statuses for mall operations without intervention of IT staff using Java, Spring Boot, JSP and SQL.',
					'Handled processing & analysis of air-quality data from 25+ IoT devices with Java and SQL, automating maintenance requests.',
					'Setup API endpoints in APIM with scripts in Liquid and C# to process data from other vendors, improving tenant experience.',
					'Performed data analysis & created visualizations for stakeholders using Qlik Sense and SQL.'
				]}
			/>
		</div>
		<p class="paragraph">
			A brief summary of the technologies, frameworks and technologies that I am familiar with:
		</p>
		<div class="align-left justify-start rounded py-4">
			<div class="bg-slate-100 rounded-lg py-4 px-8">
				<div class="flex flex-row flex-wrap">
					<Badge color="green" content="C" />
					<Badge color="green" content="C++" />
					<Badge color="green" content="TypeScript" />
					<Badge color="green" content="Java" />
					<Badge color="green" content="Python" />
					<Badge color="green" content="Go (Golang)" />
					<Badge color="green" content="JavaScript" />
					<Badge color="green" content="C#" />
					<Badge color="green" content="SQL" />
					<Badge color="green" content="HTML" />
					<Badge color="green" content="CSS" />
					<Badge color="green" content="Lua" />
					<Badge color="green" content="Promela (SPIN)" />
					<Badge color="green" content="CUDA" />
					<Badge color="blue" content="React" />
					<Badge color="blue" content="Next.js" />
					<Badge color="blue" content="Spring MVC" />
					<Badge color="blue" content="JUnit" />
					<Badge color="blue" content="Jest" />
					<Badge color="blue" content="Mocha" />
					<Badge color="blue" content="Chai" />
					<Badge color="blue" content="Flask" />
					<Badge color="blue" content="JSP" />
					<Badge color="blue" content="Struts" />
					<Badge color="blue" content="Material UI" />
					<Badge color="red" content="Git" />
					<Badge color="red" content="Linux" />
					<Badge color="red" content="Heroku" />
					<Badge color="red" content="Google Apps Script" />
					<Badge color="red" content="Qlik Sense" />
					<Badge color="red" content="WCAG" />
					<Badge color="red" content="REST" />
					<Badge color="red" content="GraphQL" />
					<Badge color="red" content="gRPC" />
					<Badge color="red" content="git" />
				</div>
			</div>
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
				<TimelineItem
					courseDate="2023W2"
					courseName="CPSC 313: Computer Hardware and Operating Systems"
					courseContent="Instruction sets, pipelining, code optimization, caching, virtual memory management, dynamically linked libraries, exception processing, execution time of programs."
					courseBulletPoints={[
						'Hosted office hours and tutorials to guide students through problems, answer student questions, aiding students to understanding course concepts and its relevance to real life applications.',
						'Created practice and exam problems to examine student understanding of concepts PrarieLearn with Python.'
					]}
				/>
				<TimelineItem
					courseDate="2022W1"
					courseName="CPSC 213: Introduction to Computer Systems"
					courseContent="Software architecture, operating systems, and I/O architectures. Relationships between application software, operating systems, and computing hardware; critical sections, deadlock avoidance, and performance; principles and operation of disks and networks."
					courseBulletPoints={[
						'Hosted office hours and tutorials to guide students through problems, answer student questions, and guided students to debug their multithreaded code in C.'
					]}
				/>
				<TimelineItem
					courseDate="2021W1"
					courseName="CPSC 121: Models of Computation"
					courseContent="Physical and mathematical structures of computation. Boolean algebra and combinations logic circuits; proof techniques; functions and sequential circuits; sets and relations; finite state machines; sequential instruction execution."
					courseBulletPoints={[
						'Hosted office hours, tutorials and labs to guide students through problems, and answered student questions.',
						'Helped students debug their circuits on breadboards during labs.'
					]}
				/>
			</div>
		</div>
	</article>

	<article class="section">
		<h4 class="title">freelance work</h4>
		<div class="paragraph-container">
			<p class="paragraph">
				I do ROBLOX game development and freelance web development on the side and get paid for it.
			</p>
			<p class="paragraph">
				For web development, I made <a href="https://www.hashbot.io/" class="link" target="_blank"
					>hashbot.io</a
				>, a website that advertises a Discord bot targeted at the Web3 community that stops spam
				and impersonation, monitoring over 10M+ users in real time.
			</p>
			<p class="paragraph">
				I also do game development, localization (Chinese-English) and graphics for ROBLOX games.
				I've made fully fleshed out clicker games from scratch (Homework Simulator) myself, and I've
				also worked in various game studios, including game studios with games that have over 3M+
				unique plays. In the future, I plan to consolidate and list my work here instead - but for
				now, you can see my past work at my old google site <a
					href="https://roblox.brendontsim.com/"
					target="_blank"
					class="link">here</a
				>.
			</p>
		</div>
	</article>
</div>
<Footer />

<!-- <style>
	* li {
		@apply indent-[-1.4em] text-left;
	}
</style> -->
