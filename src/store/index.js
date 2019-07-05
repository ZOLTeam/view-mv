import Vue from 'vue'
import Vuex from 'vuex'
import view from './modules/view'
import tree from './modules/tree'
import show from './modules/show'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    view,
    tree,
    show
  }
})
