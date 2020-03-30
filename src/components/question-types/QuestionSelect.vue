<template>
  <b-card :title="question.text" :sub-title="question.subtitle">
    <b-form-select v-model="selected" :options="question.options"></b-form-select>
    <ButtonNext
    class="mt-2"
    v-on:goNext="sendAnswer"
    :disabled="!selected"
    :variant="selected ? 'primary' : 'dark'"
    />
  </b-card>
</template>

<script>
import ButtonNext from "./sub-types/ButtonNext"

export default {
  name: "QuestionSelect",
  components: {
    ButtonNext,
  },
  props: {
    question: Object,
  },
  data() {
    return {
      selected: null,
    }
  },
  methods: {
    sendAnswer() {
      this.$emit("sendAnswer", {result: this.selected})
      this.selected = null
    },
  },
}
</script>

<style>

</style>