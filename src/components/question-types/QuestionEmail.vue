<template>
  <b-card :title="question.text" :sub-title="question.subtitle">
    <b-input
    v-on:keyup.enter="sendAnswer"
    v-model="inputTextData"
    type="email"
    :placeholder="question.placeholder"
    :state="inputDataValid"
    :formatter="formatter"
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
  name: "QuestionEmail",
  mixins: [TextInputMixin],
  components: {
    ButtonNext,
  },
  methods:{
    formatter(value) {
      return value.toLowerCase()
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
  },
  computed: {
    inputDataValid() {
      if (this.inputTextData !== null) {
        return this.validEmail(this.inputTextData)
      }
      return null
    },
  },
}
</script>

<style>

</style>
