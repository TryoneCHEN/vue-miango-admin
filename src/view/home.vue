<template>
    <div>
        <div id="main" style="width: 600px;height:400px;"></div>
        <div id="c1"></div>
         <div class="highcharts-container"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
import G2 from '@antv/g2'
import Highcharts from 'highcharts/highstock'

export default {
    methods: {
        aaa() {
            const data = [
                { genre: 'Sports', sold: 275 },
                { genre: 'Strategy', sold: 115 },
                { genre: 'Action', sold: 120 },
                { genre: 'Shooter', sold: 350 },
                { genre: 'Other', sold: 150 }
            ] // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
            // Step 1: 创建 Chart 对象
            const chart = new G2.Chart({
                container: 'c1', // 指定图表容器 ID
                width: 600, // 指定图表宽度
                height: 300 // 指定图表高度
            })
            // Step 2: 载入数据源
            chart.source(data)
            // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
            chart
                .interval()
                .position('genre*sold')
                .color('genre')
            // Step 4: 渲染图表
            chart.render()
        },
        bbb() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('main'))
            // 绘制图表
            myChart.setOption({
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            })
        },
        ccc() {
            var options = this.getMoreOptions(this.type)

            if (this.chart) {
                this.chart.destroy()
            }
            // 初始化 Highcharts 图表
            this.chart = new Highcharts.Chart('highcharts-more', options)
        }
    },
    mounted() {
        this.aaa()
        this.bbb()
        this.ccc()
    }
}
</script>

<style>
</style>