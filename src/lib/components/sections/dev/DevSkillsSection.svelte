<script lang="ts">
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
		language: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Lua', 'Bash', 'Batch'],
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
		other: ['RESTful API design', 'PyQT/Pyside', 'Agile']
	};
</script>

<section>
	<div class="mx-auto mt-40 max-w-screen-md p-4 text-3xl leading-normal">
		<h3 class="mb-6 text-5xl font-medium">Here are some things I know.</h3>
		<p class="mb-6">
			These are skills, programming languages, tools and other technologies I've used successfully
			in the past.
		</p>
	</div>

	<div class="grid-main">
		<div class="col-span-full grid grid-cols-12 2xl:col-span-full 2xl:col-start-3">
			{#each Object.keys(skills) as skill, i}
				<div class="col-span-full pt-6 sm:col-span-6 md:col-span-3">
					<p class="text-teal-400">{_.padStart(`${i + 1}`, 2, '0')}.</p>
					<h5 class="pb-3 text-3xl">{_.startCase(skill)}</h5>
					<ul>
						{#each _.get(skills, skill).sort() as item}
							<li>
								<div class="inline-flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 16 16"
										fill="currentColor"
										class="h-4 w-4 text-teal-400"
									>
										<path
											fill-rule="evenodd"
											d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
											clip-rule="evenodd"
										/>
									</svg>
									{item}
								</div>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>
