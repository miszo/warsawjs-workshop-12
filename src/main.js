import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

Vue.mixin({
  methods: {
    numberToLetter(value) {
      return String.fromCharCode(65 + value);
    }
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
