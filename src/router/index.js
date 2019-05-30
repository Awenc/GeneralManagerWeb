import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
     {path: '/', name: 'loginAndRegister',component:  r => require.ensure([], () => r(require('../views/loginAndRegist')), 'loginAndRegist')},
     {
         path: '/adminCenter',
         name: 'adminCenter',
         component:   r => require.ensure([], () => r(require('../views/adminCenter')), 'adminCenter'),
         redirect:"/adminCenter/homePage",
         children:[
             {path: '/adminCenter/homePage', name: 'homePage',component:  r => require.ensure([], () => r(require('../views/homePage')), 'homePage')},
             {path: '/adminCenter/table_one', name: 'table_one',component: r => require.ensure([], () => r(require('../views/tableDemo/table_one')), 'table_one')},
             {path: '/adminCenter/table_two', name: 'table_two',component: r => require.ensure([], () => r(require('../views/tableDemo/table_two')), 'table_two')},
             {path: '/adminCenter/echarts_one', name: 'echarts_one',component: r => require.ensure([], () => r(require('../views/echartsDemo/echarts_one')), 'echarts_one')},
         ]
     },
  ]
})
