<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light text-center">
      <h2>{{ msg }}</h2>
    </nav>
    <div>
      <quiz v-bind:quizzes="quizzes"/>
    </div>
  </div>
</template>

<script>
  import Quiz from './components/Quiz';
  import quizzes from './quizzes.json';

  export default {
    name: 'app',
    components: {
      Quiz
    },
    data () {
      return {
        msg: 'warsawjs-workshop-12-questions',
        quizzes: quizzes.quizzes
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navbar-expand-lg {
    justify-content: center;
  }
</style>
