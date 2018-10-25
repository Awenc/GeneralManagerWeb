<template>
    <div class="Chart">
        <linear class="c_linear c_chart"
            chartsID="Chart_line"
            myHeight="300"
            :x_data="xData"
            :y_data="yData"
            title="折线图"
        ></linear>

        <linear class="c_linear c_chart"
                chartsID="Chart_bar"
                myHeight="300"
                :x_data="xData"
                :y_data="yData"
                type="bar"
                title="柱状图"
        ></linear>
        <pancakeChart class="c_chart"
                title="饼状图"
                chartsID="Chart_pie"
                myHeight="300"
                :data="pieData"></pancakeChart>
        <gaugeChart
                class="c_chart"
                title="仪表盘"
                chartsID="Chart_gauge"
                myHeight="300"
                :data="gaugeChartData"></gaugeChart>
    </div>
</template>

<script>
    import linear from "../../components/echartsComponents/currencyChart"
    import pancakeChart from "../../components/echartsComponents/pancakeChart"
    import gaugeChart from "../../components/echartsComponents/gaugeChart"
    export default {
        name: "echarts_one",
        data(){
            return{
                xData:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                yData:[820, 932, 901, 934, 1290, 1330, 1320],
                pieData:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
                gaugeChartData:0,
            }
        },
        mounted(){
            setInterval(()=>{
                if(this.gaugeChartData<100){
                    this.gaugeChartData++
                }else{
                    this.gaugeChartData=0
                }

            },100)
        },
        components:{
            linear,
            pancakeChart,
            gaugeChart
        }
    }
</script>

<style lang="scss">
 .Chart{
     width:100%;
     display: flex;
     flex-wrap:wrap;
     .c_chart{
         width:50%;
     }
 }

</style>