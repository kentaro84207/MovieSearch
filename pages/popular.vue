<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div v-if="isLoading">
        LOADING...
        <font-awesome-icon class="loader" icon="spinner" />
      </div>
      <div v-else>
        <Results />
      </div>
    </v-flex>
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
</style>
