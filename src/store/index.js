import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settings:{
      starttime: undefined,
      lang: undefined,
    }
  },
  getters:{//읽을때
    savedSettings: (state) => {
      return state.settings;
    }

  },
  mutations: {//쓸때
    saveSettings: (state, payLoad) =>{
      state.settings = payLoad;
    }
  },
  actions: {//쓸때
    saveSettings: ( {commit}, payLoad) =>{
      commit('saveSettings', payLoad);
    }
  },
  modules: {
  }
})
