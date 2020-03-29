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
      this.$emit("sendAnswer", {resilt: this.inputTextData})
      this.inputTextData = null
    },
  },
  computed: {
    buttonText() {
      return this.question.buttonText || "Next"
    },
    inputDataValid() {
      return null
    },
    buttonVariant() {
      return this.inputDataValid && 'primary' || 'dark'
    },
  },
}