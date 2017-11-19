<template>
  <div class="container">
    <h1>Pytanie #{{ currentQuestionIndex + 1 }}</h1>
    <div class="card">
      <div class="card-header text-center">
        {{ currentQuestion.text }}
      </div>
      <div class="card-body">
        <div class="card-text answers row">
          <button v-for="(answer, index) in currentQuestion.answers" class="btn btn-light col-sm-6"
                  v-on:click="checkAnswer(index)">{{ answer }}
          </button>
        </div>
      </div>
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
      checkAnswer(index) {
        if (index === this.currentQuestion.correctAnswerIndex) {
          this.nextQuestion();
        }
        else {
          alert('lol, żryj gruz :)');
          this.currentQuestionIndex = 0;
        }
      },
      nextQuestion() {
        if (this.questions.length > this.currentQuestionIndex + 1) {
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

  .answers {
    margin-top: 5px;
  }

  .btn {
    color: #423b9f;
    border: 1px solid #423b9f;
  }
</style>
