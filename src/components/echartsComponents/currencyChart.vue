<template>
    <div :id="chartsID" :style="{height:(myHeight || 300) +'px'}"></div>
</template>

<script>
    export default {
        name: "currencyChart",
        props:['myHeight','x_data','y_data','title','mysmooth','type','chartsID'],
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
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
                    xAxis: {
                        type: 'category',
                        data: this.x_data
                    },
                    yAxis: {
                        type: 'value'
                    },
                    title: {
                        left: 'center',
                        text: this.title,
                    },
                    series: [{
                        data: this.y_data,
                        type: this.type || 'line',
                        smooth: this.mysmooth  || false   //打开为曲线
                    }]
                });
            }
        }
    }
</script>

<style scoped>

</style>