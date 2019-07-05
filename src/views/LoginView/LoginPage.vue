<template>
    <div>
      <el-button @click="Login">Login</el-button>
    </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {

    }
  },
  methods: {
    Login: function () {
      this.$router.push('/index')
    }
  }
}
</script>

<style scoped>

</style>
