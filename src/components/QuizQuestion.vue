<template>
  <div class="card">
    <div class="card-header text-center">
      {{ question.text }}
    </div>
    <div class="card-body">
      <div class="card-text answers row">
        <button v-for="(answer, index) in question.answers" class="btn btn-light col-sm-6"
                v-on:click="checkAnswer(index)">{{ answer }}
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
          this.$emit('correctAnswer');
        }
        else {
          this.$emit('wrongAnswer');
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
    color: #423b9f;
    border: 1px solid #423b9f;
  }
</style>
