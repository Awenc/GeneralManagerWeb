# 设想利用vue+elementUI 建立一个可重复使用的 后台管理界面
## 1.安装依赖
    npm insatall
    cnpm install
## 2.启动
    npm run dev     
## 项目使用插件

### 1.elementUI

#### elementUI插件使用
* 安装依赖

    http://element-cn.eleme.io/#/zh-CN/component/quickstart
* 单独引用index.css文件

        -build/webpack.base.conf.js
        module: {
            rules: [
                {
                    test: /\.(css|less|scss)(\?.*)?$/,
                    loader: 'style-loader!css-loader!sass-loader!less-loader!postcss-loader',
                    include:[
                        '/node_modules/element-ui/lib/theme-chalk/',
                    ]
                },
            ],
        .......
        }
### 2.sass
####  sass 的使用
* 安装依赖   
    npm install node-sass --save-dev
    
    npm install sass-loader --save-dev
* 配置

    -webpack.base.config.js、
    
          rules: [
          ...
              {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
              },
          ...
          ]
### 3.echarts
* 安装依赖
    
        cnpm install echarts -S        
* 引入
        
        import echarts from 'echarts'
        
        Vue.prototype.$echarts = echarts 
          
    
    