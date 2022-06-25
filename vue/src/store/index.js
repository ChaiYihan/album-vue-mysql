import { createStore } from 'vuex'

export default createStore({
  state: {
    disSrc: '',
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    setDisSrc({state}, src){
      state.disSrc = src;
    },
  },
  modules: {
  }
})
