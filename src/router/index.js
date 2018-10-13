import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import loginAndRegister from '@/views/loginAndRegist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginAndRegister',
      component: loginAndRegister
    }
  ]
})
