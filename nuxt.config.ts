import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	alias: {
		'~': '../src'
	},
	router: { options: { scrollBehaviorType: 'smooth' } },
	css: [
		'~/shared/assets/css/main.scss',
		'~/shared/assets/css/variables.scss',
		'~/shared/assets/css/normalize.scss'
	],
	typescript: {
		strict: true,
		typeCheck: true
	},
	vite: {
		plugins: [tailwindcss()]
	},
	dir: {
		app: './src/app',
		layouts: './src/app/layouts'
	},
	modules: ['@nuxt/eslint']
})
