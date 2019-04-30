<template>
  <v-layout column justify-center align-center>
    <h2 class="heading">
      Search Results
      <span class="heading__number">({{ totalNumber }} results)</span>
    </h2>
    <div v-if="isLoading">
      LOADING...
      <font-awesome-icon class="loader" icon="spinner" />
    </div>
    <div v-else class="contents">
      <Results />
    </div>
  </v-layout>
</template>

<script>
import Results from '~/components/Results.vue'

export default {
  components: {
    Results
  },
  computed: {
    isLoading() {
      return this.$store.state.loadingNow
    },
    totalNumber() {
      return this.$store.state.items.total_results
    }
  }
}
</script>
<style scoped lang="scss">
@keyframes load {
  100% {
    transform: rotate(360deg);
  }
}
.loader {
  animation: load 1s linear infinite;
}

.contents,
.results {
  width: 100%;
}

.results__number {
}
</style>
