<template>
  <b-card :title="question.text" :sub-title="question.subtitle">
    <b-input
    v-on:keyup.enter="sendAnswer"
    v-model="inputTextData"
    type="text"
    :placeholder="question.placeholder"
    :state="inputDataValid"
    ></b-input>
    <b-button
    block
    @click="sendAnswer"
    class="mt-2"
    :disabled="!inputDataValid"
    :variant="buttonVariant"
    >{{ buttonText }}</b-button>
  </b-card>
</template>

<script>
export default {
  name: "QuestionText",
  props: {
    question: Object,
  },
  data() {
    return {
      inputTextData: null,
    }
  },
  methods: {
    sendAnswer() {
      if (!this.inputDataValid) {
        return
      }
      this.$emit('sendAnswer', {resilt: this.inputTextData})
      this.inputTextData = null
    },
  },
  computed: {
    buttonText() {
      return this.question.buttonText || "Next"
    },
    inputDataValid() {
      if (this.inputTextData === null) return null
      return this.inputTextData.length > 2
    },
    buttonVariant() {
      return this.inputDataValid && 'primary' || 'dark'
    },
  },
}
</script>

<style>

</style>
