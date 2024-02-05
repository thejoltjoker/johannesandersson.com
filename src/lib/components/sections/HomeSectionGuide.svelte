<script lang="ts">
  import HomeSectionDev from './HomeSectionDev.svelte';

  import HomeSectionFilm from './HomeSectionFilm.svelte';

  import HomeSectionIntro from './HomeSectionIntro.svelte';

	import FooterMain from '../lib/components/FooterMain.svelte';

	import SeeMoreLink from '$lib/components/SeeMoreLink.svelte';
	import HeaderHome from '$lib/components/header/HeaderHome.svelte';
</script>

<section id="guide" class="mx-auto max-w-screen-md pt-32 text-3xl leading-normal">
	<h3 class="mb-3 text-5xl font-medium leading-tight">I love the outdoors.</h3>
	<p class="mb-6 text-5xl font-medium">And I love to share it.</p>
	<p>Which is why I became an outdoor adventure guide.</p>
	<p class="mb-6">
		I mostly do climbing related activities with guests but I create impressive outdoor adventure
		content in all disciplines.
	</p>
	<SeeMoreLink url="/guide" />
</section>

