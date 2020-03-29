<template>
  <div>
    {{ question.text }}
  </div>
</template>

<script>
export default {
  name: "Question",
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