# components-组件

## asideNav-侧边导航栏

### 利用引入json文件  实现组件的复用
    import navData from "../config/json/asideNacConf"
* 将配置文件中的导航信息 以及 跳转路由信息 渲染到界面中

## w_breadCrumb-面包屑导航

* 根据路由的变化 面包屑自动变换

## w_header-页面顶部栏

## alertFromBox 弹出层的from表单
* 用于在界面中 弹出一个添加用户或者商品的表单
* 根据传入的表格表头的信息  自动添加需要哪些表单字段

        /** 前端验证表单
         * 1.写入大部分类型的判断
         * 2.根据传来的表头信息中的data字段 自动找预先写好的判断条件
         * eg：表头中    {
                          "name":"姓名",
                          "icon":"",
                          "width":"",
                          "minWidth":"100",
                          "data":"name"
                        },
         组件将会自动将使用name的验证规则
         * */