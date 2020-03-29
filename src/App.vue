<template>
  <div id="app">
    <Survey :questions="questions" :summaryModifiers="summaryModifiers"/>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import Survey from "./components/Survey"

export default {
  name: "App",
  components: {
    Survey,
  },
  data() {
    return {
      // TODO: fetch this data using axios
      questions: [
        // {
        //   type: "text",
        //   text: "What is your name?",
        //   placeholder: "John Smith",
        // },
        {
          type: "email",
          text: "Your email:",
          subtitle: "We won't send you anything without your approval 📧",
          placeholder: 'john.smith@example.com',
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
