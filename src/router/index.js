import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {name: 'firPage'}
  },
  {
    path: '/topMain',
    name: 'topMain',
    component: () => import('@/components/topMain'),
    children: [
      {
        path: '/shop/:product',
        name: 'shop',
        components:{ shop: () => import('@/views/shopComponent')},
        props: {shop: true}
      },
      {
        path: '/firPage',
        name: 'firPage',
        components: {shop: () => import('@/components/firPage')}
      }

    ]
  },

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 锚点行为
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    // 浏览器的 history.pushState
    if (savedPosition) {
      return {
        savedPosition,
        behavior: 'smooth'
      };
    } else {
      return {

        // x: 0,
        // y: 0,
        // 平滑滚动
        behavior: 'smooth'
      }
    }
  }
})

export default router
