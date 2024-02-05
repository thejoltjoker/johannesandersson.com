<script lang="ts">
	import { onMount } from 'svelte';
	let activeSection: string = '';
	let offsetElement: string;
	// Function to handle scroll events
	const handleScroll = () => {
		const scrollPosition = window.scrollY;

		// Assuming each section has a unique id, you can customize this logic based on your HTML structure
		const sections = document.querySelectorAll('section');

		// Find the section currently in view
		sections.forEach((section, index) => {
			const sectionTop = section.offsetTop - 200;
			const sectionBottom = sectionTop + section.clientHeight;
			const sectionOffset = 6; // rem width of the li items

			if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
				activeSection = section.id;

				// Offset the element based on the section's index
				offsetElement = `-${index * sectionOffset}rem`;
			}
		});
	};

	// Attach scroll event listener when the component is mounted
	onMount(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll);

		// Cleanup event listener on component destruction
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header>
	<nav
		class="fixed top-0 z-40 grid h-40 w-full grid-cols-3 bg-to-black px-4 py-3 text-sm uppercase tracking-wider"
	>
		<a href="/">Johannes Andersson</a>
		<div class="chapters relative mx-auto w-80 overflow-hidden border-0 border-green-400">
			<ul
				class="absolute flex justify-center pl-[calc(50%-3rem)] transition-all duration-1000 ease-[easeInOutCubic]"
				style:left={offsetElement}
			>
				<li class:active={activeSection === 'intro'} class="w-[6rem] text-center opacity-50">
					Intro
				</li>
				<li class:active={activeSection === 'on-set'} class="w-[6rem] text-center opacity-50">
					On Set
				</li>
				<li class:active={activeSection === 'dev'} class="w-[6rem] text-center opacity-50">
					Web Dev
				</li>
				<li class:active={activeSection === 'guide'} class="w-[6rem] text-center opacity-50">
					Guide
				</li>
				<li class:active={activeSection === 'paragliding'} class="w-[6rem] text-center opacity-50">
					Flying
				</li>
				<li class:active={activeSection === 'outro'} class="w-[6rem] text-center opacity-50">
					outro
				</li>
			</ul>
		</div>
		<a href="/" class="ml-auto">Chapters</a>
	</nav>
</header>

<style lang="postcss">
	.chapters {
		mask-image: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 1) 33%,
			rgba(0, 0, 0, 1) 67%,
			rgba(0, 0, 0, 0) 100%
		);
	}
	.active {
		@apply opacity-100;
	}
</style>
