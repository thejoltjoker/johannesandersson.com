import { json } from '@sveltejs/kit';
import { octokit } from '../../../../services/github';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	try {
		const response = await octokit.rest.users.getByUsername({ username: 'thejoltjoker' });
		return json(response.data);
	} catch (error) {
		console.error('Error fetching GitHub user:', error);
		throw error;
	}
};
