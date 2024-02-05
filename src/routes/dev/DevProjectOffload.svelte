<script lang="ts">
	import DevSkillsSection from './DevSkillsSection.svelte';

	import DevGithubSection from '../../lib/components/DevGithubSection.svelte';

	import HeaderSingle from '$lib/components/header/HeaderSingle.svelte';
	import type { PageData } from './$types';
	import _ from 'lodash';

	// const repos = _.slice(_.orderBy(data.github.repos, ['updated_at'], ['desc']), 0, 6);
	interface ResumeDevSkills {
		language: string[];
		frontend: string[];
		backend: string[];
		database: string[];
		vcs: string[];
		tool: string[];
		cloud: string[];
		other: string[];
	}
	const skills: ResumeDevSkills = {
		language: ['JavaScript', 'Python', 'Lua', 'Bash', 'Batch'],
		frontend: [
			'HTML',
			'CSS/LESS/SCSS',
			'React',
			'Vue',
			'Svelte',
			'Tailwind',
			'Bootstrap',
			'Foundation'
		],
		backend: ['Node.js', 'Express', 'Flask', 'FastAPI'],
		database: ['MongoDB', 'MySQL', 'SQLite', 'Firestore'],
		vcs: ['Git'],
		tool: ['Docker', 'Wordpress', 'Vite', 'Jekyll', 'Gulp', 'FFMPEG', 'ImageMagick'],
		cloud: ['Firebase', 'Azure Static Web Apps', 'Azure Cloud Functions'],
		other: ['RESTful API design', 'PyQT/Pyside']
	};
</script>

<article class="relative mt-40 h-[70vh]">
	<div class="grid-main absolute top-[50%] z-10 w-full">
		<div class="col-span-4 col-start-4">
			<h3 class="mb-3 text-5xl font-medium">Offload</h3>
			<p class="mb-6 text-3xl">Offload files with ease and checksum verification.</p>
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
				<a class="text-base uppercase" href="https://offload.app/">See more</a>
			</a>
		</div>
	</div>
	<div class="grid-main absolute top-0 grid h-full w-full">
		<div class="bg-story col-span-8 col-start-7 h-full rounded-xl bg-project-offload"></div>
	</div>
</article>

