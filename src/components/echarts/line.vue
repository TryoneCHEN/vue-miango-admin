<template>
    <div>
        <!-- <div id="main" style="width: 600px;height:400px;"></div> -->
        <div :id="id" :style="{width,height}"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    props: ['width', 'height', 'id'],
    methods: {
        bbb() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById(this.id))
            var option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    }
                ]
            }
            // 绘制图表
            myChart.setOption(option)
        }
    },
    mounted() {
        this.bbb()
    }
}
</script>

<style>
</style>