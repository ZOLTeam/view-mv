const tree = {
  state: {
    page: 'Home', // default home
    isHidden: false
  },
  mutations: {
    SET_PAGE: (state, page) => {
      state.page = page
    },
    SET_HIDDEN: (state, isHidden) => {
      state.page = isHidden
    }
  },
  actions: {
    setPage ({ commit }, page) {
      commit('SET_PAGE', page)
    },
    setHidden ({ commit }, isHidden) {
      commit('SET_HIDDEN', isHidden)
    }
  }
}
export default tree
