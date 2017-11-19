<template>
  <div class="card">
    <h4 class="card-header text-center">
      {{ question.text }}
    </h4>
    <div class="card-body">
      <div class="card-text answers row">
        <button v-for="(answer, index) in question.answers" class="btn btn-block btn-outline-primary text-left"
                v-on:click="checkAnswer(index)">
          <span class="font-weight-bold">{{ String.fromCharCode(65 + index) }}.</span> {{ answer }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'quiz-question',
    props: ['question'],
    data() {
      return {}
    },

    methods: {
      checkAnswer(index) {
        if (index === this.question.correctAnswerIndex) {
          this.$emit('selectedCorrectAnswer');
        }
        else {
          this.$emit('selectedWrongAnswer');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .answers {
    margin-top: 5px;
  }

  .btn {
    margin: 1%;
  }
</style>
