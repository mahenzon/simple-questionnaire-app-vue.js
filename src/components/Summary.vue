<template>
  <b-card border-variant="success" class="mb-2 mx-auto">
    <b-card-title>{{ summaryOptions.header }}</b-card-title>
    <b-card-text><h5>{{ summaryOptions.text }}</h5></b-card-text>
    <b-card-text>
      <div>Got {{ resultsToShow.length }} results:</div>
      <ul>
        <li v-for="q in resultsToShow" :key="q._id">
          <p>Q: {{ q.text }} </p>
          <p>A: {{ q.answer.result }} </p>
        </li>
      </ul>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "Summary",
  props: {
    results: Array,
    summaryOptions: Object,
  },
  computed: {
    resultsToShow() {
      return this.results.filter(q => q.answer.result)
    },
  },
}
</script>

<style>

</style>