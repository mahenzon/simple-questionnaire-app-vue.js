<template>
  <b-list-group-item>
    <div class="text-left">
      <b>Q:</b> {{ question.text }}
    </div>
    <div class="text-left">
      <b>A:</b> {{ answerOutput }}
    </div>
  </b-list-group-item>
</template>

<script>
export default {
  name: "SummaryResult",
  props: {
    question: Object,
  },
  computed: {
    answerOutput() {
      const res = this.question.answer.result
      if (this.question.type === "bool") {
        if (this.question.customOption) {
          const customOptionField = res && "textYes" || "textNo"
          const value = this.question.customOption[customOptionField]
          if (value) return value
        }
        return res && "Yes" || "No"
      } else if (this.question.type === "select") {
        for (const {value, text} of this.question.options) {
          if (value === res) {
            return text
          }
        }
      }
      return res
    },
  },
}
</script>

<style>

</style>