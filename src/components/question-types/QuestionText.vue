<template>
  <b-card :title="question.text" :sub-title="question.subtitle">
    <b-input
    v-on:keyup.enter="sendAnswer"
    v-model="inputTextData"
    type="text"
    :placeholder="question.placeholder"
    :state="inputDataValid"
    ></b-input>
    <ButtonNext
    class="mt-2"
    v-on:goNext="sendAnswer"
    :disabled="!inputDataValid"
    :variant="buttonVariant"
    :text="buttonText"
    />
  </b-card>
</template>

<script>
import TextInputMixin from "../mixins/text-input-mixin"
import ButtonNext from "./sub-types/ButtonNext"

export default {
  name: "QuestionText",
  mixins: [TextInputMixin],
  components: {
    ButtonNext,
  },
  computed: {
    inputDataValid() {
      if (this.inputTextData === null) return null
      return this.inputTextData.length > 2
    },
  },
}
</script>

<style>

</style>
