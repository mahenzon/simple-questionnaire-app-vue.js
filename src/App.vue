<template>
  <div id="app">
    <Loading v-show="!showSurvey" transition="expand"/>
    <Survey
    v-if="showSurvey"
    transition="expand"
    :questions="questions"
    :summaryOptions="summaryOptions"
    />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import axios from 'axios'

import Loading from "./components/LoadingDummy"
import Survey from "./components/Survey"


export default {
  name: "App",
  components: {
    Survey,
    Loading,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      questions: [],
      summaryOptions: {},
      showSurvey: false,
    }
  },
  mounted() {
    axios
    .get(`${this.publicPath}data/questions.json`)
    .then(response => {
      console.log("loaded")
      if (response.data) {
        if (response.data.questions) {
          this.questions = response.data.questions
        }
        if (response.data.summaryOptions) {
          this.summaryOptions = response.data.summaryOptions
        }
        this.showSurvey = true
      }
    })
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
