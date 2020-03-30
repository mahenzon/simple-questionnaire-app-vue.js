<template>
  <b-card border-variant="success" class="mb-2 mx-auto">
    <b-card-title>{{ summaryOptions.header }}</b-card-title>
    <b-card-text><h5>{{ summaryOptions.text }}</h5></b-card-text>
    <b-card-text>
      <b-list-group>
        <SummaryResult
        v-for="q in resultsToShow"
        :key="q._id"
        :question="q"
        />
      </b-list-group>
    </b-card-text>
  </b-card>
</template>

<script>
import SummaryResult from './SummaryResult'

export default {
  name: "Summary",
  components: {
    SummaryResult,
  },
  props: {
    results: Array,
    summaryOptions: Object,
  },
  computed: {
    resultsToShow() {
      return this.results.filter(q => q.answer.result !== undefined)
    },
  },
}
</script>

<style>

</style>