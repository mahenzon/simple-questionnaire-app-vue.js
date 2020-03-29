<template>
  <div>
    <QuestionText
    v-if="question.type === 'text'"
    v-on:sendAnswer="sendAnswer"
    :question="question"
    />

    <QuestionEmail
    v-if="question.type === 'email'"
    v-on:sendAnswer="sendAnswer"
    :question="question"
    />

    <QuestionSelect
    v-if="question.type === 'select'"
    v-on:sendAnswer="sendAnswer"
    :question="question"
    />


  </div>
</template>

<script>
import QuestionText from "./question-types/QuestionText"
import QuestionEmail from "./question-types/QuestionEmail"
import QuestionSelect from "./question-types/QuestionSelect"

export default {
  name: "Question",
  components: {
    QuestionText,
    QuestionEmail,
    QuestionSelect,
  },
  props: {
    question: Object,
  },
  methods: {
    sendAnswer(data) {
      this.$emit("sendAnswer", data)
    },
  },
}
</script>

<style>

</style>
