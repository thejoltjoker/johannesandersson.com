/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
				mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
			},
			colors: {
				'almost-black': '#131312'
			},
			borderRadius: {
				xl: '2rem'
			},
			backgroundImage: {
				'story-film': "url('/img/story/film/main.jpg')",
				'story-paragliding': "url('/img/story/paragliding/main.jpg')",
				'project-offload': "url('/img/project/offload/main.jpg')",
				'to-black': 'linear-gradient(180deg, rgba(19,19,18,1) 0%, rgba(0,0,0,0) 100%)'
			},
			gridTemplateColumns: {
				main: 'repeat(16, minmax(0, 1fr))'
			}
		}
	},
	plugins: []
};
