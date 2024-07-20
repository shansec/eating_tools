const routeMeta = [
  {
    path: '/routeMetaHome',
    name: 'routeMetaHome',
    component: () => import('@/views/routeMeta/home.vue'),
    meta: {
      title: '首页',
      isHidden: false
    }
  },
  {
    path: '/routeMetaAbout',
    name: 'routeMetaAbout',
    component: () => import('@/views/routeMeta/about.vue'),
    meta: {
      title: '关于我们',
      isHidden: false
    }
  }
]

export default routeMeta
