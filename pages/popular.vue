<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <h2 class="heading">Popular Movies</h2>
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
  data() {
    return {
      addUrl: 'movie/popular',
      params: {
        api_key: process.env.API_KEY,
        language: 'en-US',
        page: 1
      }
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.loadingNow
    }
  },
  created: function() {
    this.$store.dispatch('getData', {
      addUrl: this.addUrl,
      params: this.params
    })
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
