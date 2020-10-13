import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2. 创建Store对象
const store = new Vuex.Store({
  state: {
    isMenuShow: 0,
  },
  getters: {
    menuShowInfo(state) {
      return state.isMenuShow
    }
  },
  mutations: {
    menuToggle(state) {
      state.isMenuShow = !state.isMenuShow
    }
  },
  actions: {



  }
})

// 3.挂载到vue实力上
export default store
