<script lang="ts">
	import HeaderSingle from '$lib/components/header/HeaderSingle.svelte';
	import type { PageData } from './$types';
	import _ from 'lodash';
	import DevSkillsSection from '$lib/components/sections/dev/DevSkillsSection.svelte';
	import DevProjectOffload from '$lib/components/sections/dev/DevProjectOffload.svelte';
	import DevGithubSection from '$lib/components/sections/dev/DevGithubSection.svelte';

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

<HeaderSingle title="Developer" />

<div class="grid grid-cols-main px-4">
	<div class="grid-section-mid mt-40 text-3xl leading-normal">
		<h1 class="mb-6 text-5xl font-medium">
			I am a software and full stack <span class="underline decoration-amber-400">developer</span>.
		</h1>
		<p class="mb-6">I started writing code more than fifteen years ago.</p>

		<p class="mb-6">
			I love automation, full stack development and writing apps that I have use for.
		</p>
		<p class="text-base uppercase opacity-40">
			This is where you keep scrolling to find out more...
		</p>
	</div>
</div>
<!-- Projects -->
<DevProjectOffload />

<!-- Skills -->
<DevSkillsSection />

<!-- Github -->
<DevGithubSection />
<div class="py-[50vh]"></div>
