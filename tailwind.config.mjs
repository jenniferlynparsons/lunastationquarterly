/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
		},
		fontFamily: {
			sans: ['Oswald', 'sans-serif'],
			serif: ['Libre Baskerville', 'serif'],
		},
		extend: {},
	},
	plugins: [],
}
