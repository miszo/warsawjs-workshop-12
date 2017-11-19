<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light text-center">
      <h2>{{ title }}</h2>
    </nav>
    <router-view/>
  </div>
</template>

<script>


  export default {
    name: 'app',
    data () {
      return {
        title: 'warsawjs-workshop-12-questions',
      }
    }
  }
</script>

<style lang="scss" scoped>
  nav {
    margin-bottom: 15px;
  }
  .navbar-expand-lg {
    justify-content: center;
  }
</style>
