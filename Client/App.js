import Vue from 'vue'
import App from './App.vue'
import router from './src/router'
import store from './src/store'

new Vue({
  el: '#app',
  router,
  store,
  render: (createElement) => createElement(App)
})
