const requestData = [
  {
    path: '/requestDataHome',
    name: 'requestDataHome',
    component: () => import('@/views/requestData/index.vue'),
    meta: {
      title: '首页',
      isHidden: false
    }
  }
]

export default requestData
