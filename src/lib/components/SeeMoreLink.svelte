<script lang="ts">
	export let url: string;
</script>

<a
	href={url}
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
