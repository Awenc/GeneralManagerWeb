<template>
    <div :id="chartsID" :style="{height:(myHeight || 300) +'px'}"></div>
</template>

<script>
    export default {
        name: "gaugeChart",
        props:['myHeight','title','chartsID','data'],
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
            }
        },
        mounted(){
            this.drawLine();
        },
        methods: {
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById(this.chartsID))
                // 绘制图表
                myChart.setOption({
                    tooltip : {
                        formatter: "{a} <br/>{b} : {c}%"
                    },
                    toolbox: {

                    },
                    series: [
                        {
                            name: '业务指标',
                            type: 'gauge',
                            detail: {formatter:'{value}%'},
                            data: [{value: this.data, name: this.title}]
                        }
                    ]
                });

            }
        },
        watch:{
            data(cur){
                // console.log(cur)
                //每次更新数据 重新渲染一遍图表
                this.drawLine();
            }
        }
    }
</script>

<style scoped>

</style>