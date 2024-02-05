import type { PageLoad } from './$types';

interface LatestFlightData {
	latestFlight: string;
}
export const load = (async ({ fetch }) => {
	const res = await fetch(`/api/paragliding/latestFlight`);
	const data: LatestFlightData = await res.json();

	return data;
}) satisfies PageLoad;
