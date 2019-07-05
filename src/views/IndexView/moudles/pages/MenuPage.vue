<template>
    <div class="menu-page">
      <el-tree class="tree-container"
               :data="node"
               node-key="id"
               :default-expanded-keys="[1, 11, 111]"
               :highlight-current="true"
               accordion
               :props="defaultProps"
               @node-click="handleNodeChecked">
      </el-tree>
    </div>
</template>

<script>
export default {
  name: 'MenuPage',
  data () {
    return {
      node: [{
        id: 1,
        label: '经济形势',
        children: [
          {
            id: 11,
            label: '网民经济信息指数'
          }, {
            id: 12,
            label: '消费预期指数'
          }, {
            id: 13,
            label: '投资景气指数'
          }, {
            id: 14,
            label: '就业压力指数'
          }, {
            id: 15,
            label: '双创热情指数'
          }]
      }, {
        id: 2,
        label: '市场环境',
        children: [{
          id: 21,
          label: '市场消费环境评价指数'
        }, {
          id: 22,
          label: '市场准入环境评价指数'
        }, {
          id: 23,
          label: '市场竞争环境评价指数'
        }, {
          id: 24,
          label: '金融服务环境指数'
        }]
      }, {
        id: 3,
        label: '消费需求',
        children: [{
          id: 31,
          label: '重庆绿色消费指数'
        }, {
          id: 32,
          label: '重庆农村消费指数'
        }, {
          id: 33,
          label: '重庆品质消费指数'
        }, {
          id: 34,
          label: '重庆时尚消费指数'
        }, {
          id: 35,
          label: '重庆信息消费指数'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeChecked: function (data) {
      if (data.id > 30 && data.id < 40) {
        this.$store.state.show.show = 'ConsumerDemand'
      }
      if (data.id > 20 && data.id < 30) {
        this.$store.state.show.show = 'MarketEnvironment'
      }
      if (data.id > 10 && data.id < 20) {
        this.$store.state.show.show = 'EconomicSituation'
      }
      this.$store.state.show.data = data.label
      console.log(this.$store.state.show)
    }
  }
}
</script>

<style scoped>
  .menu-page{
    height: 44rem;
    background-color: #444;
  }
  .tree-container {
    background-color: #444;
    color: #fff;
    padding-top: 2.5rem;
  }
</style>
<style src="../../../../../static/css/indexcss/tree.css"></style>
