<template>
  <v-layout column justify-center align-center>
    <h2 class="heading">Search Results</h2>
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
</style>
