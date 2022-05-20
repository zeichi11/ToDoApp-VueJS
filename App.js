import Vue from 'vue';
import App from './App.vue';
import router from './src/router';
import Store from './store.js';

new Vue({
  el: '#app',
  router,
  Store,
  render: createElement => createElement(App)
});
