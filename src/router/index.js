import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'IndexPage',
      // component: res => require(['@/views/IndexView/IndexPage'], res)
      component: () => import('@/views/IndexView/IndexPage')
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('@/views/LoginView/LoginPage')
    },
    {
      path: '*',
      name: '',
      redirect: '/login'
    }
  ]
})
