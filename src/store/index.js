import { createStore } from 'vuex'

export default createStore({
  state: {
    list: 9
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getList(state){return state.list}
  }
})
