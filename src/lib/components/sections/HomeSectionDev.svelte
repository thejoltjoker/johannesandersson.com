<script lang="ts">
  import HomeSectionFilm from './home/HomeSectionFilm.svelte';

  import HomeSectionIntro from './home/HomeSectionIntro.svelte';

	import FooterMain from '../lib/components/FooterMain.svelte';

	import SeeMoreLink from '$lib/components/SeeMoreLink.svelte';
	import HeaderHome from '$lib/components/header/HeaderHome.svelte';
</script>

<section id="dev" class="mx-auto max-w-screen-md pt-32 text-3xl leading-normal">
	<h3 class="mb-3 text-5xl font-medium leading-tight">I write code.</h3>
	<p class="mb-6">
		Why? To automate tasks, build unique apps, and indulge in the joy of problem-solving.
	</p>

	<SeeMoreLink url="/dev" />
</section>

