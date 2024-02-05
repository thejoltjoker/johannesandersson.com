<script lang="ts">
	import HeaderHome from '../lib/components/header/HeaderHome.svelte';

	import { onMount } from 'svelte';
</script>

<HeaderHome />
<!-- <div class="w-full">
	<div class="mx-auto mt-20 h-40 w-1 bg-red-500"></div>
</div> -->
<section id="intro" class="mx-auto max-w-screen-md pt-40 text-3xl leading-normal">
	<p class="mb-3 text-5xl font-medium">Hello!</p>
	<h1 class="mb-6 text-5xl font-medium">I am Johannes.</h1>
	<p class="mb-6">
		I’m a creative person that have spent the past decade chasing my interests professionally.
	</p>

	<p class="mb-6">
		This has taken me on a quite a journey, so let me share some of the highlights with you.
	</p>
	<p class="text-base uppercase opacity-40">This is where you keep scrolling to find out more...</p>
</section>

<!-- On Set -->
<section
	id="on-set"
	class="bg-story mt-12 bg-story-film px-4 pb-20 pt-[50vh] lg:mx-4 lg:rounded-xl"
>
	<div class="mx-auto max-w-screen-md text-3xl leading-normal">
		<h3 class="mb-3 text-5xl font-medium leading-tight">I work on film sets.</h3>

		<p class="mb-6">
			I usually work as a Digital Imaging Technician, but I also enjoy doing stills photography.
		</p>
		<a
			href="/"
			class="-ms-4 inline-flex cursor-pointer gap-3 rounded-full px-4 py-2 transition hover:bg-zinc-800/50"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6 text-amber-400"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
				/>
			</svg>

			<p class="text-base uppercase">See more</p>
		</a>
	</div>
</section>

<!-- Developer -->
<section id="dev" class="mx-auto max-w-screen-md pt-32 text-3xl leading-normal">
	<h3 class="mb-3 text-5xl font-medium leading-tight">I write code.</h3>
	<p class="mb-6">
		Why? To automate tasks, build unique apps, and indulge in the joy of problem-solving.
	</p>

	<a
		href="/dev"
		class="-ms-4 inline-flex cursor-pointer gap-3 rounded-full px-4 py-2 transition hover:bg-zinc-800/50"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="h-6 w-6 text-amber-400"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
			/>
		</svg>

		<p class="text-base uppercase">See more</p>
	</a>
</section>

<!-- Guide -->
<section id="guide" class="mx-auto max-w-screen-md pt-32 text-3xl leading-normal">
	<h3 class="mb-3 text-5xl font-medium leading-tight">I love the outdoors.</h3>
	<p class="mb-6 text-5xl font-medium">And I love to share it.</p>
	<p>Which is why I became an outdoor adventure guide.</p>
	<p class="mb-6">
		I mostly do climbing related activities with guests but I create impressive outdoor adventure
		content in all disciplines.
	</p>
	<a
		href="/"
		class="-ms-4 inline-flex cursor-pointer gap-3 rounded-full px-4 py-2 transition hover:bg-zinc-800/50"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="h-6 w-6 text-amber-400"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
			/>
		</svg>

		<p class="text-base uppercase">See more</p>
	</a>
</section>

<section
	id="paragliding"
	class="bg-story mt-12 bg-story-paragliding px-4 pb-20 pt-[50vh] lg:mx-4 lg:rounded-xl"
>
	<div class="mx-auto max-w-screen-md text-3xl leading-normal">
		<h3 class="mb-3 text-5xl font-medium leading-tight">My latest obsession is paragliding</h3>

		<p class="mb-6">
			It's already taken me to six different countries and I'm looking forward to explore further.
		</p>
		<a
			href="/paragliding"
			class="-ms-4 inline-flex cursor-pointer gap-3 rounded-full px-4 py-2 transition hover:bg-zinc-800/50"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6 text-amber-400"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
				/>
			</svg>

			<p class="text-base uppercase">See more</p>
		</a>
	</div>
</section>
<section id="outro"></section>
<footer class="h-[40vh]">
	<p class="mb-3 text-5xl font-medium">Enough about me.</p>
	<h1 class="mb-6 text-5xl font-medium">Tell me about yourself!</h1>
	<p class="mb-6">
		I’m a creative person that have spent the past decade chasing my interests professionally.
	</p>

	<p class="mb-6">
		This has taken me on a quite a journey, so let me share some of the highlights with you.
	</p>
	<p class="text-base uppercase opacity-40">This is where you keep scrolling to find out more...</p>
</footer>
