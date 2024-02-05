<script lang="ts">
	export let title: string;
</script>

<header>
	<nav
		class="bg-to-black fixed top-0 z-40 grid h-40 w-full grid-cols-3 px-4 py-3 text-sm uppercase tracking-wider"
	>
		<a href="/">Johannes Andersson</a>
		<ul class="mx-auto inline-flex gap-3">
			<li>{title}</li>
		</ul>
		<a href="/" class="ml-auto">Go back</a>
	</nav>
</header>
