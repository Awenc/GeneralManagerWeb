import Vue from 'vue'
import Router from 'vue-router'
/**======================登录与注册==================*/
import loginAndRegister from '@/views/loginAndRegist'
/**======================管理中心==================*/
import adminCenter from '@/views/adminCenter'
import table_one from '@/views/tableDemo/table_one'   //表格
import echarts_one from '@/views/echartsDemo/echarts_one'   //图表
Vue.use(Router)

export default new Router({
  routes: [
     {path: '/', name: 'loginAndRegister',component: loginAndRegister},
     {
         path: '/adminCenter',
         name: 'adminCenter',
         component: adminCenter,
         redirect:"/adminCenter/table_one",
         children:[
             {path: '/adminCenter/table_one', name: 'table_one',component: table_one},
             {path: '/adminCenter/echarts_one', name: 'echarts_one',component: echarts_one},
         ]
     },

  ]
})
