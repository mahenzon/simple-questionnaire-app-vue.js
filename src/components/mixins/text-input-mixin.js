export default {
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
      this.$emit("sendAnswer", {result: this.inputTextData})
      this.inputTextData = null
    },
  },
  computed: {
    buttonText() {
      return this.question.buttonText
    },
    inputDataValid() {
      return null
    },
    buttonVariant() {
      return this.inputDataValid ? 'primary' : 'dark'
    },
  },
}