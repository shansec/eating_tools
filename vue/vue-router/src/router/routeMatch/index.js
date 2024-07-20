const routeMatchRoutes = [
  // 路由匹配的时候可以使用正则表达式
  {
    path: '/routeMatchHome',
    name: 'routeMatchHome',
    component: () => import('@/views/routeMatch/home.vue'),
    meta: { transition: 'fade' }
  },
  {
    path: '/routeMatchAbout',
    name: 'routeMatchAbout',
    component: () => import('@/views/routeMatch/about.vue'),
    meta: { transition: 'fade' }
  }
]

export default routeMatchRoutes
