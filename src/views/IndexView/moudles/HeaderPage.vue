<template>
  <div>
    <el-row class="header">
      <el-col :span="6">
        <div class="logo-title">
          <div class="logo-container text-left">
            <div class="logo"><div></div></div>
          </div>
          <div class="title-container text-left">
            <div>重庆宏观经济指标库系统</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="nav-bar">
          <div class="menu-item text-left" v-bind:class="{active: activeMenu[0].item} " @click="handleSelect(-1)">首页</div>
          <div class="menu-item text-left" v-bind:class="{active: activeMenu[1].item} " @click="handleSelect(1)">指数分析</div>
        </div>
      </el-col>
      <el-col :span="8">&nbsp;</el-col>
      <el-col :span="4">
        <div class="user-info text-left" @click="handleUser()">
          <div class="user-container text-left">
            <div class="user"><div></div></div>
          </div>
          <div class="user-information text-left">
            <div>{{ user_information }}</div>
          </div>
        </div>
        <div class="logout-bar text-left" @click="handleLogout">
          <div class="logout-container">
            <div class="logout"><div></div></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  data () {
    return {
      activeMenu: [
        {item: true},
        {item: false}
      ],
      user_information: '普通用户'
    }
  },
  methods: {
    handleSelect (key) {
      if (key < 0) {
        this.activeMenu[0].item = true
        this.activeMenu[1].item = false
        this.$store.dispatch('setPage', 'Home')
      } else {
        this.activeMenu[0].item = false
        this.activeMenu[1].item = true
        this.$store.dispatch('setPage', 'Content')
      }
    },
    handleUser () { // user information button
    },
    handleLogout () {
      this.$router.push('/login')
      this.$store.dispatch('setPage', 'Home')
    }
  },
  created () {
  }
}
</script>

<style scoped lang="less">
  .header{
    width: 100%;
    height: 100%;
  }
  .text-left{
    float: left;
  }
  .logo-title{
    margin-left: 1.25rem;
    height: 3.25rem;
    line-height: 3.25rem;
    .logo-container{
      height: 3.25rem;
      width: 3.25rem;
    }
    .logo{
      margin: 0.625rem;
    }
    .logo div{
      height: 2rem;
      width: 2rem;
      background: url("../../../../static/img/indexpage/logo.png") no-repeat;
      background-size: cover;
    }
    .title-container{
      font-size: 1.125rem;
      font-weight: bolder;
    }
  }
  .nav-bar{
    text-align: center;
    height: 3.125rem;
    line-height: 3.125rem;
    .menu-item{
      margin-left: 1.25rem;
      width: 6.25rem;
      cursor: pointer;
      font-weight: bold;
    }
    .active{
      border-bottom: 2px solid #128eee;
    }
  }
  .user-info{
    text-align: left;
    height: 3.25rem;
    line-height: 3.25rem;
    cursor: pointer;
    .user-container{
      height: 3.25rem;
      width: 3.25rem;
    }
    .user{
      margin: 0.625rem;
    }
    .user div{
      height: 2rem;
      width: 2rem;
      background: url("../../../../static/img/indexpage/user.png") no-repeat;
      background-size: cover;
      border-radius: 50%;
    }
    .user-information{
      margin-left: 0.5rem;
    }
  }
  .logout-bar{
    height: 3.25rem;
    line-height: 3.25rem;
    cursor: pointer;
    .logout-container{
      margin-left: 0.5rem;
      height: 3.25rem;
      width: 3.25rem;
    }
    .logout{
      margin: 0.625rem;
    }
    .logout div{
      height: 2rem;
      width: 2rem;
      background: url("../../../../static/img/indexpage/logout.png") no-repeat;
      background-size: cover;
    }
  }
</style>
