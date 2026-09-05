import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs'
		}),

		// GitHub Pages serves this repo from a subfolder. The deploy workflow sets
		// BASE_PATH; local dev and the tests run from the root.
		paths: {
			base: process.env.BASE_PATH || '',
			// Absolute asset urls, so a page works whether or not the url that
			// reached it had a trailing slash.
			relative: false
		},

		// The site imports the library the way users do, from 'layercake'
		alias: {
			layercake: './src/lib/index.js',
			'layercake/*': './src/lib/*'
		},

		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
