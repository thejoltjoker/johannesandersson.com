<script lang="ts">
	import HomeSectionParagliding from './HomeSectionParagliding.svelte';

	import HomeSectionGuide from './HomeSectionGuide.svelte';

	import HomeSectionDev from './HomeSectionDev.svelte';

	import HomeSectionFilm from './HomeSectionFilm.svelte';

	import HomeSectionIntro from './HomeSectionIntro.svelte';

	import FooterMain from '../lib/components/FooterMain.svelte';

	import SeeMoreLink from '$lib/components/SeeMoreLink.svelte';
	import HeaderHome from '$lib/components/header/HeaderHome.svelte';
</script>

<!-- <div class="w-full">
	<div class="mx-auto mt-20 h-40 w-1 bg-red-500"></div>
</div> -->
<HomeSectionIntro></HomeSectionIntro>

<!-- On Set -->
<HomeSectionFilm></HomeSectionFilm>

<!-- Developer -->
<HomeSectionDev></HomeSectionDev>

<!-- Guide -->
<HomeSectionGuide></HomeSectionGuide>

<HomeSectionParagliding></HomeSectionParagliding>
<section id="outro"></section>
