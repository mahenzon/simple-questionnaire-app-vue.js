<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col cols="12" md="10" lg="8" xl="6" align-g="center">
        <b-progress :value="progressValue" :max="maxProgressValue" show-progress animated></b-progress>
        <div class="my-2">
          <Question v-show="showQuestion" v-on:processAnswer="processAnswer" :question="currentQuestion"/>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Question from './Question'

export default {
  name: "Survey",
  components: {
    Question,
  },
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
    processAnswer(data) {
      console.log('Got answer', data, 'for question', this.currentQuestion.text)
    },
  },
}
</script>

<style>

</style>