import { createStore } from 'vuex'

export default createStore({
  state: {
    disSrc: '',
	  isLoading: false,
    albumurl: 'http://127.0.0.1:8090',
    dburl: 'http://127.0.0.1:8091',
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    setDisSrc({state}, src){
      state.disSrc = src;
    },
    setIsLoading({state}, sta){
      state.isLoading = sta;
	  },
  },
  modules: {
  }
})
