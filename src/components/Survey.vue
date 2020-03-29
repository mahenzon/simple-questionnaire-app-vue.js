<template>
  <b-container>
    <h1>Hello there</h1>
  </b-container>
</template>

<script>
export default {
  name: "Survey",
  props: {
    questions: Array,
    summaryModifiers: Object,
  },
  data() {
    return {
      totalQuestions: 0,
      totalQuestionsSteps: 0,
      currentQuestion: null,
      showQuestion: true,
      showSummary: false,
      progressValue: 0,
      maxProgressValue: 0,
      questionsResults: [],
      collectedResults: [],
    }
  },
  created() {
    this.processRawQuestions()
    this.currentQuestion = this.questions[0]
    this.maxProgressValue = this.totalQuestionsSteps
  },
  methods: {
    processRawQuestions() {
      let previousQuestion
      this.questions.forEach(question => {
        this.totalQuestions++
        this.totalQuestionsSteps++
        this.processRawQuestion(question)
        if (previousQuestion) {
          previousQuestion._nextQuestion = question
        }
        previousQuestion = question
      })
    },
    processRawQuestion(question) {
      question._progress = this.totalQuestionsSteps
      question._id = `question-${this.totalQuestions}`
      this.resolveNestedQuestions(question)
    },
    resolveNestedQuestions(question) {
      if (question.onChoice) {
        this.totalQuestionsSteps++
        for (const choice in question.onChoice) {
          this.totalQuestions++
          const innerQuestionForChoice = question.onChoice[choice]
          this.processRawQuestion(innerQuestionForChoice)
          innerQuestionForChoice._parentQuestion = question
        }
      }
    },
  },
}
</script>

<style>

</style>