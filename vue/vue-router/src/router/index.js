import { createRouter, createWebHistory } from 'vue-router'
import basicRoutes from './Basic'
import routeMatchRoutes from './routeMatch'
import nestedRoutes from './nestedRoute'
import routeMeta from './routeMeta'
import requestData from './requestData'
import NotFound from '../views/notFound/index.vue'

const routes = [
  ...basicRoutes,
  ...routeMatchRoutes,
  ...nestedRoutes,
  ...routeMeta,
  ...requestData,
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全局前置守卫
router.beforeEach((to, from) => {
  if (to.meta && to.meta.title && !to.meta.isHidden) {
    document.title = to.meta.title
    return true
  } else {
    return true
  }
})

// 全局解析守卫
// 解析守卫刚好会在导航被确认之前、所有组件内守卫和异步路由组件被解析之后调用。
// router.beforeResolve(to => {
//   console.log('beforeResolve to', to)
//   return true
// })

// 全局后置守卫
// router.afterEach((to, from) => {
//   console.log('afterEach to', to)
//   console.log('afterEach from', from)
//   return true
// })

// 完整的导航解析流程
// 1.导航被触发。
// 2.在失活的组件里调用 beforeRouteLeave 守卫。
// 3.调用全局的 beforeEach 守卫。
// 4.在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。
// 5.在路由配置里调用 beforeEnter。
// 6.解析异步路由组件。
// 7.在被激活的组件里调用 beforeRouteEnter。
// 8.调用全局的 beforeResolve 守卫(2.5+)。
// 9.导航被确认。
// 10.调用全局的 afterEach 钩子。
// 11.触发 DOM 更新。
// 12.调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

export default router
