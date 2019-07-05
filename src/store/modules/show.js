const show = {
  state: {
    show: 'EconomicSituation', // default EconomicSituation
    data: '网民经济信息指数' // default 网民经济信息指数
  },
  mutations: {
    SET_SHOW: (state, show, data) => {
      state.show = show
      state.data = data
    }
  },
  actions: {
    setShow ({ commit }, show, data) {
      commit('SET_PAGE', show, data)
    }
  }
}
export default show
