import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../pages/HomePage';
import PlayQuiz from '../pages/PlayQuiz';
import CreateQuiz from '../pages/CreateQuiz';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/play',
      component: PlayQuiz
    },
    {
      path: '/create',
      component: CreateQuiz
    }
  ]
});
