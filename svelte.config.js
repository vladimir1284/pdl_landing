import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			assets: dev ? '' : 'https://www.ladetec.com/pdl'
		},
		appDir: 'internal'
	},

	preprocess: [vitePreprocess({})]
};

export default config;
