import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import axios from 'axios';
import { parse } from 'node-html-parser';
import { parse as dateParse } from 'date-fns';
import _ from 'lodash';

export const GET: RequestHandler = async () => {
	try {
		const url = 'https://flightlog.org/fl.html?l=1&a=28&user_id=11944';
		const response = await axios.get(url);
		const html = response.data;

		const root = parse(html);
		const selector =
			'body > div:nth-child(2) > div:nth-child(3) > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)';

		const targetElement = root.querySelector(selector);

		if (!targetElement) {
			throw new Error('Target element not found');
		}

		const dateTimeString = _.trim(
			_.get(targetElement?.innerText.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}/), '[0]', '')
		);

		if (!dateTimeString) {
			throw new Error('Date and time string not found');
		}

		const parsedDate = dateParse(dateTimeString, 'yyyy-MM-dd HH:mm', new Date());

		return json({ latestFlight: parsedDate });
	} catch (error) {
		console.error('Error:', error.message);
		return json({ error: error.message });
	}
};
