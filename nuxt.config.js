module.exports = {
	router: {
		linkActiveClass: 'active',
		extendRoutes(routes, resolve) {
			routes.splice(0)

			routes.push(
				...[
					{
						path: '/',
						component: resolve(__dirname, 'pages/layout/'),
						children: [
							{
								path: '', // default
								name: 'home',
								component: resolve(__dirname, 'pages/home/')
							},
							{
								path: '/login', // default
								name: 'login',
								component: resolve(__dirname, 'pages/login/')
							},
							{
								path: '/register', // default
								name: 'register',
								component: resolve(__dirname, 'pages/login/')
							},
							{
								path: '/profile/:username', // default
								name: 'profile',
								component: resolve(__dirname, 'pages/profile/')
							},
							{
								path: '/settings', // default
								name: 'settings',
								component: resolve(__dirname, 'pages/settings/')
							},
							{
								path: '/editor', // default
								name: 'editor',
								component: resolve(__dirname, 'pages/editor/')
							},
							{
								path: '/article/:slug', // default
								name: 'article',
								component: resolve(__dirname, 'pages/article/')
							}
						]
					}
				]
			)
			// routes.push({
			//   name: 'custom',
			//   path: '*',
			//   component: resolve(__dirname, 'pages/404.vue')
			// })
		}
	}
}
