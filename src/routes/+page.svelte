<script lang="ts">
	import HomeSectionDev from '$lib/components/sections/HomeSectionDev.svelte';
	import HomeSectionFilm from '$lib/components/sections/HomeSectionFilm.svelte';
	import HomeSectionGuide from '$lib/components/sections/HomeSectionGuide.svelte';
	import HomeSectionIntro from '$lib/components/sections/HomeSectionIntro.svelte';
	import HomeSectionParagliding from '$lib/components/sections/HomeSectionParagliding.svelte';
</script>

<!-- <div class="w-full">
	<div class="mx-auto mt-20 h-40 w-1 bg-red-500"></div>
</div> -->
<HomeSectionIntro />

<!-- On Set -->
<HomeSectionFilm />

<!-- Developer -->
<HomeSectionDev />

<!-- Guide -->
<HomeSectionGuide />

<HomeSectionParagliding />
<section id="outro"></section>
