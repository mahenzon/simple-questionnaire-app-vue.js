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
        {
          type: "text",
          text: "What is your name?",
          placeholder: "John Smith",
        },
        {
          type: "email",
          text: "Your email:",
          subtitle: "We won't send you anything without your approval 📧",
          placeholder: "john.smith@example.com",
        },
        {
          type: "select",
          text: "Which sport do you prefer?",
          options: [
            { value: null, text: "Please select...", disabled: true },
            { value: "tennis", text: "Tennis" },
            { value: "football", text: "Football" },
            { value: "formula-one", text: "Formula One" },
          ],
          onChoice: {
            tennis: {
              type: "text",
              text: "Who is your favourite tennis player?",
              placeholder: "Novak Djokovic",
            },
            football: {
              type: "text",
              text: "Which team do you support?",
              placeholder: "Real Madrid",
            },
            "formula-one": {
              type: "select",
              text: "Which is your favourite race track?",
              options: [
                { value: null, text: "Favourite race track...", disabled: true },
                { value: "monaco", text: "Monaco" },
                { value: "spa", text: "Spa" },
                { value: "suzuka", text: "Suzuka" },
                { value: "monza", text: "Monza" },
              ],
            },
          },
        },
        {
          type: "bool",
          text: "Do you wish to be contacted in future?",
          customOption: {
            // variantNo: 'warning',
            // variantYes: 'success',
            textNo: "No.",
            textYes: "Yes, please!",
          },
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
