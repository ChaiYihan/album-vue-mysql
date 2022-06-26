import { createStore } from 'vuex'

export default createStore({
  state: {
    disSrc: '',
	isLoading: false,
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
