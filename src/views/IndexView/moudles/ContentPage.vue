<template>
  <div>
    <el-container>
      <el-aside width="15rem" :hidden="isHidden">
        <MenuPage/>
      </el-aside>
      <el-main>
        <ShowPage/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MenuPage from './pages/MenuPage'
import ShowPage from './pages/ShowPage'
export default {
  name: 'ContentPage',
  components: { ShowPage, MenuPage },
  data () {
    return {
    }
  },
  computed: {
    isHidden: function () {
      return this.$store.state.tree.isHidden
    }
  },
  created () {
  },
  methods: {
  }
}
</script>
<style scoped lang="less">
  .text-left{
    float: left;
  }
  .el-container{
    padding: 0;
  }
  .el-header{
    padding: 0;
  }
  .el-main{
    padding: 0;
  }
  .el-aside{
    padding: 0;
  }
</style>
