<template>
    <div class="show-page">
      <component :is="show"/> <!--EconomicSituation-->
    </div>
</template>

<script>
import EconomicSituation from './shows/EconomicSituation'
import MarketEnvironment from './shows/MarketEnvironment'
import ConsumerDemand from './shows/ConsumerDemand'
export default {
  name: 'ShowPage',
  components: { EconomicSituation, MarketEnvironment, ConsumerDemand },
  computed: {
    show: function () {
      return this.$store.state.show.show
    }
  },
  methods: {
    handleChangeAside: function () {
      this.$store.state.tree.isHidden = !this.$store.state.tree.isHidden
    }
  }
}
</script>

<style scoped>
  .show-page{
    color: #fff;
    height: 44rem;
    background-color: #444;
    margin-left: 0.5rem;
  }
</style>
