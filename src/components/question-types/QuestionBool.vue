<template>
  <b-card :title="question.text" :sub-title="question.subtitle">
    <b-card-body>
      <b-button @click="processClick(false)" class="mx-1" :variant="variantNo">{{ textNo }}</b-button>
      <b-button @click="processClick(true)" class="mx-1" :variant="variantYes">{{ textYes }}</b-button> 
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "QuestionBool",
  props: {
    question: Object,
  },
  data() {
    return {
      variantNo: "danger",
      variantYes: "primary",
      textNo: "No",
      textYes: "Yes",
    }
  },
  methods: {
    processClick(answer) {
      this.$emit("sendAnswer", {result: answer})
    },
  },
  created() {
    if (this.question.customOption) {
      ["variantNo", "variantYes", "textNo", "textYes"].forEach(attr => {
          const value = this.question.customOption[attr]
          if (value) {
            this[attr] = value
          }
      })
    }
  },
}
</script>

<style>

</style>