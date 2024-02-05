import axios from 'axios';
import cheerio from 'cheerio';
import { parse } from 'date-fns';
import _ from 'lodash';
import type { PageLoad } from './$types';

const getLatestFlightDate = async (): Promise<Date | undefined> => {
	const url = 'https://flightlog.org/fl.html?l=1&a=28&user_id=11944';

	try {
		// Step 1: Use Axios to fetch data
		const res = await axios.get(url);

		// Step 2: Use Cheerio to parse HTML
		const html = res.data;
		const fl = cheerio.load(html);

		const selector =
			'body > div:nth-child(2) > div:nth-child(3) > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)';

		// Use the selector to get the desired element
		const targetElement = fl(selector);
		console.log(targetElement.text());

		const dateTimeString = _.trim(
			_.get(targetElement.text().match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}/), '[0]', '')
		);

		// Step 3: Use date-fns to parse the string into a Date object
		const parsedDate = parse(dateTimeString, 'yyyy-MM-dd HH:mm', new Date());

		console.log(parsedDate);
		return parsedDate;
	} catch (error) {
		console.error('Error fetching or parsing data:', error.message);
	}
};
export const load = (async () => {
	const date = await getLatestFlightDate();

	return { lastFlightDate: date };
}) satisfies PageLoad;
