import type { RouterConfig } from '@nuxt/schema'

export default {
	routes: _routes => [
		{
			name: 'home',
			path: '/',
			component: () => import('../pages/home').then(r => r.default || r)
		},
		{
			name: 'about',
			path: '/about',
			component: () => import('../pages/about').then(r => r.default || r)
		}
	]
} satisfies RouterConfig
