<template>
    <div>
      <div class="split-line"></div>
      <div class="main-page">
        <component :is="page"/> <!--<Home/>--><!--<Content/>-->
      </div>
    </div>
</template>

<script>
import Home from './HomePage'
import Content from './ContentPage'
export default {
  name: 'MainPage',
  components: { Home, Content },
  computed: {
    page: function () {
      return this.$store.state.view.page
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .split-line{
    height: 0.5rem;
    background-color: #000;
  }
  .main-page{
    height: 100%;
    overflow: hidden;
    background-color: #000;
  }
</style>
