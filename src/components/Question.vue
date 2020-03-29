<template>
  <div>
    <QuestionText
    v-if="question.type === 'text'"
    v-on:sendAnswer="sendAnswer"
    :question="question"
    />
  </div>
</template>

<script>
import QuestionText from './question-types/QuestionText'

export default {
  name: "Question",
  components: {
    QuestionText,
  },
  props: {
    question: Object,
  },
  methods: {
    sendAnswer(data) {
      this.$emit('sendAnswer', data)
    },
  },
}
</script>

<style>

</style>
