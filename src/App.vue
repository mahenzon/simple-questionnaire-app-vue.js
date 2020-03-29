<template>
  <div id="app">
    <Survey :questions="questions" :summaryModifiers="summaryModifiers"/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Survey from './components/Survey'

export default {
  name: 'App',
  components: {
    Survey,
  },
  data() {
    return {
      // TODO: fetch this data using axios
      questions: [
        {
          text: 'Hello first question text!',
        },
      ],
      summaryModifiers: {},
    }
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
