<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12" v-for="(question, index) in quiz.questions">
        <div class="card">
          <div class="card-header">
            <span>Pytanie #{{ index + 1 }}</span>
            <button class="btn btn-outline-danger" v-on:click="removeQuestion(index)">Usuń pytanie</button>
          </div>
          <div class="card-body">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Pytanie"
                     v-model="question.text">
            </div>
            <div class="form-group row">
              <div class="col" v-for="(answer, index) in question.answers">
                <input type="text" class="form-control"
                       v-bind:placeholder="`Odpowiedź ${numberToLetter(index)}`"
                       v-model="question.answers[index]">
              </div>
            </div>
            <div class="form-group">

              <select class="form-control" v-model.number="question.correctAnswerIndex">
                <option value="" disabled selected>Wybierz poprawną odpowiedź</option>
                <option v-bind:value="index" v-for="(answer, index) in question.answers" v-text="answer"></option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 actions">
        <button class="btn btn-outline-success" v-on:click="addQuestion()">Dodaj pytanie</button>
        <button class="btn btn-success" v-on:click="submit()">Zapisz quiz</button>
      </div>
    </div>
    <div class="row">
      <router-link class="btn btn-link" to="/">Powrót do strony głównej</router-link>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'CreateQuiz',
    data() {
      return {
        quiz: {
          questions: []
        }
      }
    },

    methods: {
      submit() {
        this.addQuiz(this.quiz);
        this.clearQuiz();
        this.addQuestion();
      },
      addQuestion() {
        this.quiz.questions.push({
          text: '',
          answers: new Array(4),
          correctAnswerIndex: null
        });
      },
      removeQuestion(index) {
        return this.quiz.questions.splice(index, 1);
      },
      clearQuiz() {
        this.quiz = {questions: []}
      },

      ...mapMutations(['addQuiz'])
    },

    created() {
      this.addQuestion();
    }
  }
</script>

<style lang="scss" scoped>
  .row, .card {
    margin-top: 15px;
  }

  .actions, .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
