const defaultTheme = require('tailwindcss/defaultTheme');
const { addIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Outfit"', ...defaultTheme.fontFamily.sans],
			}
		}
	},
	plugins: [
		addIconSelectors(['lucide'])
	]
};
