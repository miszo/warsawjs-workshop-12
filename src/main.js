import Vue from 'vue';
import App from './App.vue';

import quizzes from './quizzes.json';
import router from './router';

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data: {
    quizzes: quizzes.quizzes
  }
});
