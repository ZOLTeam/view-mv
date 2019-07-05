<template>
  <div class="index">
    <el-container class="bg">
      <el-header height="3.25rem">
        <Header/>
      </el-header>
      <el-main>
        <Main/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from './moudles/HeaderPage'
import Main from './moudles/MainPage'
export default {
  name: 'IndexPage',
  components: { Header, Main },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
  .index{
    position: absolute;
    top:0;
    left: 0;
    background-color: #333;
    color: #fff;
    width: 100%;
    height: 100%;
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
</style>
