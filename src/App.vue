<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div>{{ msg }}</div>
    </nav>
    <div>
      <quiz v-bind:quizzes="quizzes"/>
    </div>
  </div>
</template>

<script>
  import Quiz from './Quiz';
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

<style lang="scss">

</style>
