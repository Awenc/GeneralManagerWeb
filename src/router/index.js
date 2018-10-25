import Vue from 'vue'
import Router from 'vue-router'
/**======================登录与注册==================*/
import loginAndRegister from '@/views/loginAndRegist'
/**======================管理中心==================*/
import adminCenter from '@/views/adminCenter'
import homePage from '@/views/homePage'     //首页
import table_one from '@/views/tableDemo/table_one'   //表格1
import table_two from '@/views/tableDemo/table_two'   //表格2
import echarts_one from '@/views/echartsDemo/echarts_one'   //图表
Vue.use(Router)

export default new Router({
  routes: [
     {path: '/', name: 'loginAndRegister',component: loginAndRegister},
     {
         path: '/adminCenter',
         name: 'adminCenter',
         component: adminCenter,
         redirect:"/adminCenter/homePage",
         children:[
             {path: '/adminCenter/homePage', name: 'homePage',component: homePage},
             {path: '/adminCenter/table_one', name: 'table_one',component: table_one},
             {path: '/adminCenter/table_two', name: 'table_two',component: table_two},
             {path: '/adminCenter/echarts_one', name: 'echarts_one',component: echarts_one},
         ]
     },

  ]
})
