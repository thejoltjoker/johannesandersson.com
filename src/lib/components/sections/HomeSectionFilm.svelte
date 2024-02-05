<script lang="ts">
  import HomeSectionIntro from './HomeSectionIntro.svelte';

	import FooterMain from '../lib/components/FooterMain.svelte';

	import SeeMoreLink from '$lib/components/SeeMoreLink.svelte';
	import HeaderHome from '$lib/components/header/HeaderHome.svelte';
</script>

<section
	id="on-set"
	class="bg-story mt-12 bg-story-film px-4 pb-20 pt-[50vh] lg:mx-4 lg:rounded-xl"
>
	<div class="mx-auto max-w-screen-md text-3xl leading-normal">
		<h3 class="mb-3 text-5xl font-medium leading-tight">I work on film sets.</h3>

		<p class="mb-6">
			I usually work as a Digital Imaging Technician, but I also enjoy doing stills photography.
		</p>
		<SeeMoreLink url="/dit" />
	</div>
</section>

