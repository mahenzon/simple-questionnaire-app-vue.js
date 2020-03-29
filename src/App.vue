<template>
  <div id="app">
    <Survey msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Survey from './components/Survey'

export default {
  name: 'App',
  components: {
    Survey,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
