<template>
  <div>
    <QuestionText
    v-if="question.type === 'text'"
    v-on:processAnswer="processAnswer"
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
    processAnswer(data) {
      this.$emit('processAnswer', data)
    },
  },
}
</script>

<style>

</style>
