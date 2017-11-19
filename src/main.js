import Vue from 'vue';
import App from './App.vue';

import quizzes from './quizzes.json';
import router from './router';

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
  render: h => h(App),
  data: {
    quizzes: quizzes.quizzes
  }
});
