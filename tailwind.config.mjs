/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
		},
		borderWidth: {
			'header': '24px',
			'footer' : '8px',
		},
		colors: {
			'lsq-green': '#b6ac31',
			'lsq-orange': '#d24719',
			'lsq-white': '#ffffff',
		  },
		fontFamily: {
			sans: ['Oswald', 'sans-serif'],
			serif: ['Libre Baskerville', 'serif'],
		},
		backgroundImage: {
			'header': "url('/images/header.png')"
		  },
		
		extend: {
			
		},
	},
	plugins: [],
}
