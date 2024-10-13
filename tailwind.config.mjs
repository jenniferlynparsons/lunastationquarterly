/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
		},
		borderWidth: {
			'header': '24px',
			'navbar': '1px',
			'navlink': '2px',
			'subfooter': '4px',
			'footer' : '8px',
			'definition-list': '1px',
			'note': '6px',
		},
		colors: {
			'lsq-green': '#b6ac31',
			'lsq-orange': '#d24719',
			'lsq-orange-light': '#DC6D48',
			'lsq-alert': '#ffe6de',
			'lsq-white': '#ffffff',
			'lsq-black': '#222222',
			'lsq-gray-light': '#eeeeee',
		  },
		fontFamily: {
			sans: ['Oswald', 'sans-serif'],
			serif: ['Libre Baskerville', 'serif'],
		},
		textColor: {
			'lsq-green': '#b6ac31',
			'lsq-orange': '#d24719',
			'lsq-orange-light': '#DC6D48',
			'lsq-gray': '#3d3d3d',
			'lsq-white': '#ffffff',
			'lsq-black': '#222222',
		},
		backgroundImage: {
			'header': "url('/images/header.png')"
		},
		extend: {
			typography: {
				DEFAULT: {
				  css: {
					color: '#222',
					a: {
					  color: '#d24719',
					  '&:hover': {
						color: '#b6ac31',
					  },
					},
				  },
				},
			  },
		},
	},
	plugins: [require('@tailwindcss/typography'),],
}
