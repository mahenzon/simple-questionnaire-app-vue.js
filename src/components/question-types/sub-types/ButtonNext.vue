<template>
  <b-button
  block
  @click="$emit('goNext')"
  :disabled="disabled"
  :variant="variant"
  data-cy="btnNext"
  >{{ text || 'Next' }}</b-button>
</template>

<script>
export default {
  name: "ButtonNext",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    variant: String,
    text: String,
  },
}
</script>

<style>

</style>
