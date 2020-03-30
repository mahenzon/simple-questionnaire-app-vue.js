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

    <QuestionBool
    v-if="question.type === 'bool'"
    v-on:sendAnswer="sendAnswer"
    :question="question"
    />

    <QuestionInfo
    v-if="question.type === 'info'"
    v-on:sendAnswer="sendAnswer"
    :question="question"
    />

  </div>
</template>

<script>
import QuestionText from "./question-types/QuestionText"
import QuestionEmail from "./question-types/QuestionEmail"
import QuestionSelect from "./question-types/QuestionSelect"
import QuestionBool from "./question-types/QuestionBool"
import QuestionInfo from "./question-types/QuestionInfo"

export default {
  name: "Question",
  components: {
    QuestionText,
    QuestionEmail,
    QuestionSelect,
    QuestionBool,
    QuestionInfo,
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
