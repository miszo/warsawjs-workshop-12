<template>
  <div class="container" v-if="status === 'playing'">
    <h1>Pytanie #{{ currentQuestionIndex + 1 }}</h1>
    <quiz-question v-bind:question="currentQuestion"
                   v-on:correctAnswer="nextQuestion()"
                   v-on:wrongAnswer="lost()"></quiz-question>
  </div>
  <div class="container" v-else>
    <div class="card">
      <div class="card-header text-center">
        Koniec gry
      </div>
      <div class="card-body">
        <div class="card-text" >
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
</template>

<script>
  import { randomElement } from '../helpers';
  import QuizQuestion from './QuizQuestion';

  export default {
    name: 'quiz',
    props: ['quizzes'],
    components: {
      QuizQuestion
    },
    data() {
      return {
        questions: randomElement(this.quizzes).questions,
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
          this.won();
        }
      },
      won() {
        this.status = 'won';
      },
      lost() {
        this.status = 'lost';

      },
      playAgain() {
        this.status = 'playing';
        this.question = randomElement(this.quizzes).questions
        this.currentQuestionIndex = 0;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 15px;
  }
</style>
