import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './todoApp.js'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict: true // 배포 시에는 strict 모드인 경우 성능 이슈가 발생할 수 있다.
  // 개발 시에만 strict 모드로 설정되도록 처리
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    todoApp
  }
})
