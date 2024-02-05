<script lang="ts">
	import type { RestEndpointMethodTypes } from '@octokit/rest';
	import _ from 'lodash';
	import { onMount } from 'svelte';

	let repos: RestEndpointMethodTypes['repos']['listForUser']['response']['data'];

	onMount(async () => {
		try {
			const response = await fetch('/api/github/repos');

			if (!response.ok) {
				throw new Error(`Failed to fetch repos: ${response.statusText}`);
			}

			const data = await response.json();
			repos = _.slice(_.orderBy(data, ['updated_at'], ['desc']), 0, 6);
		} catch (error) {
			console.error(error.message);
			throw error;
		}
	});
</script>

<!-- const repos = _.slice(_.orderBy(data.github.repos, ['updated_at'], ['desc']), 0, 6); -->

<div class="mx-auto mt-40 max-w-screen-xl p-4 text-3xl leading-normal lg:grid-cols-2">
	<div class="max-w-screen-md">
		<h3 class="mb-6 text-5xl font-medium">GitHub</h3>
		<p class="mb-6">
			I use GitHub for version control for most of my projects. Here's what I've been working on
			recently.
		</p>
	</div>
	<!-- Repos -->

	{#if repos}
		<div class="grid grid-cols-12 gap-4">
			{#each repos as repo}
				<div
					class="col-span-full flex h-full w-full flex-col justify-between rounded-lg border border-zinc-700 p-4 text-base md:col-span-6 xl:col-span-4"
				>
					<div>
						<div class="flex items-center justify-between">
							<p class="font-mono text-xs opacity-40">{repo.language ?? repo.id}</p>
							<p class="inline-flex items-center font-mono text-sm text-amber-400">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="currentColor"
									class="-mt-[2px] me-1 h-4 w-4"
								>
									<path
										fill-rule="evenodd"
										d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
										clip-rule="evenodd"
									/>
								</svg>
								{repo.stargazers_count}
							</p>
						</div>
						<h6 class="mb-3 text-xl font-medium">{repo.name}</h6>

						<p class="mb-3 text-lg">{repo.description ?? 'No description.'}</p>
					</div>

					<a href={repo.html_url} class="group text-sm">
						<span class="inline-flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								class="me-1 h-4 w-4 fill-teal-400 opacity-100 transition group-hover:translate-x-1"
							>
								<path
									fill-rule="evenodd"
									d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z"
									clip-rule="evenodd"
								/>
							</svg>

							<span class="opacity-40 group-hover:opacity-100">{repo.full_name}</span>
						</span>
					</a>
				</div>
			{/each}
		</div>
	{/if}
	<!-- Events -->
	<!-- <div>
		{#each events as event}
			<div class="mb-3 w-full rounded-lg border border-zinc-600 p-4 text-base">
				<div class="flex items-center justify-between">
					<p class="font-mono text-xs opacity-40">{event.id}</p>
					<p class="font-mono text-sm text-teal-400">{_.startCase(event.type ?? '')}</p>
				</div>
				{#if event.payload.commits?.[0].message}
					<p class="italic">{event.payload.commits?.[0].message}</p>
				{/if}
				<a href={event.repo.url} class="underline opacity-40">{event.repo.name}</a>
			</div>
		{/each}
	</div> -->
</div>
