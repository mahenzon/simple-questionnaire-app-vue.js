<template>
  <div>
    <h1>Question here:</h1>
    <div>{{ question.text }}</div>
  </div>
</template>

<script>
export default {
  name: "QuestionText",
  props: {
    question: Object,
  },
}
</script>

<style>

</style>
