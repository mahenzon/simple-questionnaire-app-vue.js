<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col cols="12" md="10" lg="8" xl="6" align-g="center">
        <b-progress :value="progressValue" :max="maxProgressValue" show-progress animated></b-progress>
        <div class="my-2">
          <Question v-show="showQuestion" v-on:sendAnswer="processAnswer" :question="currentQuestion"/>
          <transition name="fade">
            <Summary
            v-show="showSummary"
            :results="collectedResults"
            :summaryOptions="summaryOptions"
            v-on:restart="resetQuestions"
            />
          </transition>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Question from "./Question"
import Summary from "./Summary"

export default {
  name: "Survey",
  components: {
    Question,
    Summary,
  },
  props: {
    questions: {
      type: Array,
      required: true,
    },
    summaryOptions: Object,
  },
  data() {
    return {
      totalQuestions: 0,
      totalQuestionsSteps: 0,
      currentQuestion: {},
      showQuestion: false,
      showSummary: false,
      progressValue: 0,
      maxProgressValue: 0,
      answeredQuestions: [],
      collectedResults: [],
      localQuestions: [],
    }
  },
  created() {
    this.processNewData()
  },
  methods: {
    processNewData() {
      this.deepCopyIncomingQuestions()
      this.processRawQuestions()
      this.maxProgressValue = this.totalQuestionsSteps
      this.resetQuestions()
    },
    processRawQuestions() {
      let previousQuestion
      this.localQuestions.forEach(question => {
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
      this.currentQuestion.answer = data
      this.answeredQuestions.push(this.currentQuestion)

      const nextQuestion = this.resolveNextQuestion(data)
      if (nextQuestion === null) {
        return this.showAnswersSummary()
      }
      this.progressValue = this.currentQuestion._progress
      this.currentQuestion = nextQuestion
    },
    getNextOrParent(question) {
      if (question._nextQuestion) {
        return question._nextQuestion
      }
      if (question._parentQuestion) {
        return this.getNextOrParent(question._parentQuestion)
      }
      return null
    },
    resolveNextQuestion(data) {
      if (this.currentQuestion.onChoice) {
        const questionForChoice = this.currentQuestion.onChoice[data.result]
        if (questionForChoice) {
          return questionForChoice
        }
        console.error("Next question for", this.currentQuestion.text, data, "not specified! Full question data:", this.currentQuestion)
        return null
      }
      return this.getNextOrParent(this.currentQuestion)
    },
    showAnswersSummary() {
      this.showQuestion = false
      this.showSummary = true
      this.progressValue = this.totalQuestionsSteps
      this.collectedResults = this.answeredQuestions
    },
    resetQuestions() {
      this.progressValue = 0
      this.currentQuestion = this.localQuestions[0]
      this.showSummary = false
      this.showQuestion = true
      this.answeredQuestions = []
      this.collectedResults = []
    },
    deepCopyIncomingQuestions() {
      this.localQuestions = []
      // just creating a deep copy so we don't mutate props
      this.questions.forEach(question => {
        this.localQuestions.push(JSON.parse(JSON.stringify(question)))
      })
    },
  },
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
