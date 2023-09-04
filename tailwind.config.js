/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			height: {
				'screen-3x': '300vh' // 3 times the height of the screen
			}
		}
	},
	plugins: []
};
