<template>
  <div>
    <div id="esOpt" class="esOpt"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'MarketEnvironment',
  computed: {
  },
  data () {
    return {
      option: {
        title: {
          text: '市场消费环境评价指数',
          textStyle: {
            color: '#fff'
          }
        },
        textStyle: {
          color: '#fff'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['重庆', '全国'],
          textStyle: {
            color: '#fff'
          }
        },
        xAxis: {
          type: 'category',
          data: [
            '2019年1月',
            '2019年2月',
            '2019年3月',
            '2019年4月',
            '2019年5月',
            '2019年6月',
            '2019年7月'
          ]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '重庆',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
            lineStyle: {
              color: '#df0c77',
              width: 4
            },
            itemStyle: {
              borderWidth: 4,
              borderColor: '#fff'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(223,12,119,1)'
                }, {
                  offset: 1, color: 'rgba(0,0,0,0)'
                }],
                global: false // 缺省为 false
              }
            }
          }, {
            name: '全国',
            data: [88, 888, 45, 934, 222, 1330, 890],
            type: 'line',
            smooth: true,
            lineStyle: {
              color: '#128eee',
              width: 3,
              type: 'dashed'
            },
            itemStyle: {
              borderWidth: 3,
              borderColor: '#fff'
            }
          }
        ]
      }
    }
  },
  mounted () {
    let esOpt = echarts.init(document.getElementById('esOpt'))
    esOpt.setOption(this.option)
    window.addEventListener('resize', function () { esOpt.resize() })
  },
  created () { // 设置 chart 数据
  },
  methods: {
    getData: function () {
    }
  }
}
</script>

<style scoped lang="less">
  .esOpt{
    height: 44rem;
  }
</style>
