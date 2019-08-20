<template>
    <div>
        <div id="main" style="width: 600px;height:400px;"></div>
        <div id="c1"></div>
        <div id="highmaps"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
import G2 from '@antv/g2'
import Highcharts from 'highcharts/highstock'
import Highmaps from 'highcharts/modules/map'
Highmaps(Highcharts)
import $ from 'jquery'
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
        highmaps() {
            Highcharts.setOptions({
                lang: {
                    drillUpText: '< 返回 “{series.name}”'
                }
            })
            var map = null,
                geochina =
                    'https://data.jianshukeji.com/jsonp?filename=geochina/'
            $.getJSON(geochina + 'china.json&callback=?', function(mapdata) {
                var data = []
                // 随机数据
                Highcharts.each(mapdata.features, function(md, index) {
                    var tmp = {
                        name: md.properties.name,
                        value: Math.floor(Math.random() * 100 + 1) // 生成 1 ~ 100 随机值
                    }
                    if (md.properties.drilldown) {
                        tmp.drilldown = md.properties.drilldown
                    }
                    data.push(tmp)
                })
                map = new Highcharts.Map('highmaps', {
                    chart: {
                        events: {
                            drilldown: function(e) {
                                console.log(e)
                                // 异步下钻
                                if (e.point.drilldown) {
                                    var pointName = e.point.properties.fullname
                                    map.showLoading('下钻中，请稍后...')
                                    // 获取二级行政地区数据并更新图表
                                    $.getJSON(
                                        geochina +
                                            e.point.drilldown +
                                            '.json&callback=?',
                                        function(data) {
                                            data = Highcharts.geojson(data)
                                            Highcharts.each(data, function(d) {
                                                if (d.properties.drilldown) {
                                                    d.drilldown =
                                                        d.properties.drilldown
                                                }
                                                d.value = Math.floor(
                                                    Math.random() * 100 + 1
                                                ) // 生成 1 ~ 100 随机值
                                            })
                                            map.hideLoading()
                                            map.addSeriesAsDrilldown(e.point, {
                                                name: e.point.name,
                                                data: data,
                                                dataLabels: {
                                                    enabled: true,
                                                    format: '{point.name}'
                                                }
                                            })
                                            map.setTitle({
                                                text: pointName
                                            })
                                        }
                                    )
                                }
                            },
                            drillup: function() {
                                map.setTitle({
                                    text: '中国'
                                })
                            }
                        }
                    },
                    title: {
                        text: '中国地图'
                    },
                    subtitle: {
                        text:
                            '<a href="https://www.hcharts.cn/mapdata">点击查看地图数据及详情，注意县级数据为收费数据，如果您有需要，请联系我们购买</a>'
                    },
                    mapNavigation: {
                        enabled: true,
                        buttonOptions: {
                            verticalAlign: 'bottom'
                        }
                    },
                    tooltip: {
                        useHTML: true,
                        headerFormat: '<table><tr><td>{point.name}</td></tr>',
                        pointFormat:
                            '<tr><td>全称</td><td>{point.properties.fullname}</td></tr>' +
                            '<tr><td>行政编号</td><td>{point.properties.areacode}</td></tr>' +
                            '<tr><td>父级</td><td>{point.properties.parent}</td></tr>' +
                            '<tr><td>经纬度</td><td>{point.properties.longitude},{point.properties.latitude}</td></tr>',
                        footerFormat: '</table>'
                    },
                    colorAxis: {
                        min: 0,
                        minColor: '#fff',
                        maxColor: '#006cee',
                        labels: {
                            style: {
                                color: 'red',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    series: [
                        {
                            data: data,
                            mapData: mapdata,
                            joinBy: 'name',
                            name: '中国地图',
                            states: {
                                hover: {
                                    color: '#a4edba'
                                }
                            }
                        }
                    ]
                })
            })
        }
    },
    mounted() {
        this.aaa()
        this.bbb()
        this.highmaps()
    }
}
</script>

<style>

</style>