## 自定义 echarts 图表组件

### -currencyChart 常用的通用图表


| 属性  | 值 | 是否填写 | 说明  | 默认|
| :---: |:----:| :---:| :-----:| :----:|
| chartsID | string | 是 | 每个图表的ID，一个界面可展示多个图表 ||
| myHeight | string |   否 |图表高度 |300 |
| x_data | array |    是 |x轴数据 | |
| y_data | array |    是 |y轴数据 | |
| title | string|    是 |图表标题 |$1600 |
| mysmooth | bool|    否 |当type=line时 mysmooth=fasle为直线 true为曲线 |false|
| type | string|    否|图表类型（见下） |line |

    /**
        type --- 展示什么类型的图
             -line 线性图
             -bar 柱状图   
    */
        <linear class="c_linear c_chart"
                chartsID="Chart_bar"
                myHeight="300"
                :x_data="xData"
                :y_data="yData"
                type="bar"
                title="柱状图"
        ></linear>
### pancakeChart  饼状图 （属性和通过差不多）

### gaugeChart 仪表盘（属性和通过差不多）

----------------------------------
*  其他图表遇到实际项目再添加
                        
