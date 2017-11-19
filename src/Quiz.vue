<template>
  <div class="container">
    <h1>Pytanie #{{ currentQuestionIndex + 1 }}</h1>
    <div>
      {{ currentQuestion.text }}
      <li v-for="(answer, index) in currentQuestion.answers">
        <button class="btn btn-light" v-on:click="selectAnswer(index)">{{ answer }}</button>
      </li>
    </div>
  </div>
</template>

<script>
  import { randomElement } from './helpers';
  export default {
    name: 'quiz',
    props: ['quizzes'],
    data() {
      return {
        questions: randomElement(this.quizzes).questions,
        currentQuestionIndex: 0
      }
    },

    computed: {
      currentQuestion() {
        return this.questions[this.currentQuestionIndex]
      }
    },

    methods: {
      selectAnswer(index) {
        if (index === this.currentQuestion.correctAnswerIndex) {
          this.nextQuestion();
        }
        else {
          alert('lol, żryj gruz :)');
          this.currentQuestionIndex = 0;
        }
      },
      nextQuestion() {
        if(this.questions.length > this.currentQuestionIndex + 1) {
          this.currentQuestionIndex += 1;
        } else {
          alert('jesteś zwycięzcą!')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 15px;
  }
  li {
    margin-top: 5px;
    list-style: none;

  }
</style>
