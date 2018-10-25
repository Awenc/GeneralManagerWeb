<template>
    <div id="myChart" :style="{height:myHeight +'px'}"></div>
</template>

<script>
    export default {
        name: "linear",
        props:['myWidth','myHeight','x_data','y_data','title'],
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
                let myChart = this.$echarts.init(document.getElementById('myChart'))
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
                        type: 'line'
                    }]
                });
            }
        }
    }
</script>

<style scoped>

</style>