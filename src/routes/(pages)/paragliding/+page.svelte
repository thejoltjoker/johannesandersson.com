<script lang="ts">
	import HeaderSingle from '$lib/components/header/HeaderSingle.svelte';
	import { formatDistance } from 'date-fns';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data.lastFlightDate);
	let difference: string;
	if (data.lastFlightDate) {
		const now = new Date();
		difference = formatDistance(data.lastFlightDate, now, { addSuffix: true });

		console.log(difference);
	}
</script>

<HeaderSingle title="Pilot" />
<div class="grid-main">
	<div class="grid-section-mid">
		<div class=" mt-40 text-3xl leading-normal">
			<p class="mb-3 text-5xl font-medium">{difference} since last flight</p>
			<p class="mb-6">Which means that I'm probably out flying right now.</p>

			<p class="mb-6">I try to fly a lot.</p>
			<p class="text-base uppercase opacity-40">
				This is where you keep scrolling to find out more...
			</p>
		</div>
	</div>
</div>
