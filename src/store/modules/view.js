const view = {
  state: {
    page: 'Home' // default home
  },
  mutations: {
    SET_PAGE: (state, page) => {
      state.page = page
    }
  },
  actions: {
    setPage ({ commit }, page) {
      commit('SET_PAGE', page)
    }
  }
}
export default view
