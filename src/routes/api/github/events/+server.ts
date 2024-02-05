import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { octokit } from '../../../../services/github';

export const GET: RequestHandler = async () => {
	const response = await octokit.rest.activity.listPublicEventsForUser({
		username: 'thejoltjoker'
	});

	return json(response.data);
};
