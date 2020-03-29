<template>
  <b-button
  block
  @click="$emit('goNext')"
  :disabled="disabled"
  :variant="variant"
  >{{ text || 'Next' }}</b-button>
</template>

<script>
export default {
  name: "ButtonNext",
  props: {
    disabled: Boolean,
    variant: String,
    text: String,
  },
}
</script>

<style>

</style>
