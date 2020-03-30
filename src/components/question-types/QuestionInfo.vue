<template>
  <b-card
  class="text-center"
  border-variant="info"
  bg-variant="light"
  :header="question.header || 'Info header'"
  >
    <b-card-text>{{ question.text }}</b-card-text>
    <ButtonNext
    v-on:goNext="$emit('sendAnswer', {})"
    :variant="question.buttonVariant || 'primary'"
    :text="question.buttonText"
    />
  </b-card>
</template>

<script>
import ButtonNext from "./sub-types/ButtonNext"

export default {
  name: "QuestionInfo",
  components: {
    ButtonNext,
  },
  props: {
    question: Object,
  },
}
</script>

<style>

</style>
