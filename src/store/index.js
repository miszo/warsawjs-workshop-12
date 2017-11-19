import Vue from 'vue';
import Vuex from 'vuex';

import quizzes from './../quizzes.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quizzes: quizzes.quizzes,
  },

  mutations: {
    addQuiz(state, quiz) {
      return state.quizzes.push(quiz);
    },
  },
});
