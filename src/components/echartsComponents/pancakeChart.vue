<template>
    <div :id="chartsID" :style="{height:(myHeight || 300) +'px'}"></div>
</template>

<script>
    export default {
        name: "pancakeChart",
        props:['myHeight','title','chartsID','data'],
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
                    title : {
                        text: this.title,
                        subtext: '纯属虚构',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '70%',
                            center: ['50%', '60%'],
                            data:this.data,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
            }
        }
    }
</script>

<style scoped>

</style>