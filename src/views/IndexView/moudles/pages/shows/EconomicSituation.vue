<template>
  <div>
    <div id="esOpt" class="esOpt"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'EconomicSituation',
  computed: {
  },
  data () {
    return {
      option: {
        title: {
          text: '网名经济信息指数',
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
            lineStyle: {
              color: '#d31b19',
              width: 4
            },
            itemStyle: {
              borderWidth: 4,
              borderColor: '#fff'
            }
          }, {
            name: '全国',
            data: [88, 888, 45, 934, 222, 1330, 890],
            type: 'line',
            lineStyle: {
              color: '#128eee',
              width: 4
            },
            itemStyle: {
              borderWidth: 4,
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
