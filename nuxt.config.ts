// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	alias: {
		'~': './src'
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
	dir: {
		app: './src/app',
		layouts: './src/app/layouts'
	},

	components: [
		{ path: '~/shared/components', enabled: true, pathPrefix: false }
	],
	modules: ['@nuxt/eslint', '@nuxt/image']
})
