<template>
  <div class="container">
    <div v-if="status === 'playing'">
      <div class="row">
        <div class="col-sm-4">
          <ul class="list-group">
            <li class="list-group-item"
                v-for="(question, index) in questions"
                v-bind:class="{ active: index === currentQuestionIndex }">Pytanie #{{ index + 1 }}
            </li>
          </ul>
        </div>
        <div class="col-sm-8">
          <quiz-question v-bind:question="currentQuestion"
                         v-on:selectedCorrectAnswer="nextQuestion()"
                         v-on:selectedWrongAnswer="loose()"/>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="card">
        <h3 class="card-header text-center">
          Koniec gry
        </h3>
        <div class="card-body">
          <div class="card-text">
            <div v-if="status === 'won'" class="alert alert-success" role="alert">
              jesteś zwycięzcą!
            </div>
            <div v-else-if="status === 'lost'" class="alert alert-danger" role="alert">
              lol, żryj gruz :)
            </div>
            <button class="btn btn-primary" v-on:click="playAgain()">Zagraj jeszcze raz</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <router-link class="btn btn-link" to="/">Powrót do strony głównej</router-link>
    </div>
  </div>
</template>

<script>
  import { randomElement } from '../helpers';
  import QuizQuestion from '../components/QuizQuestion';

  export default {
    name: 'PlayQuiz',
    components: {
      QuizQuestion
    },
    data() {
      return {
        questions: randomElement(this.$store.state.quizzes).questions,
        currentQuestionIndex: 0,
        status: 'playing'
      }
    },

    computed: {
      currentQuestion() {
        return this.questions[this.currentQuestionIndex]
      }
    },

    methods: {
      nextQuestion() {
        if (this.questions.length > this.currentQuestionIndex + 1) {
          this.currentQuestionIndex += 1;
        } else {
          this.win();
        }
      },
      win() {
        this.status = 'won';
      },
      loose() {
        this.status = 'lost';
      },
      playAgain() {
        this.status = 'playing';
        this.questions = randomElement(this.$store.state.quizzes).questions;
        this.currentQuestionIndex = 0;
      }
    },

    created() {
      this.questions = randomElement(this.$store.state.quizzes).questions;
    }
  };
</script>

<style lang="scss" scoped>
  .container, .row {
    margin-top: 15px;
  }
</style>
