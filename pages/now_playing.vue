<template>
  <v-layout column justify-center align-center>
    <h2 class="heading">Now Playing Movies</h2>
    <div v-if="isLoading">
      LOADING...
      <font-awesome-icon class="loader" icon="spinner" />
    </div>
    <div v-else class="contents">
      <Results />
      <LoadMore @callLoadMore="addData" />
    </div>
  </v-layout>
</template>

<script>
import Results from '~/components/Results.vue'
import LoadMore from '~/components/LoadMore.vue'

export default {
  components: {
    Results,
    LoadMore
  },
  data() {
    return {
      addUrl: 'movie/now_playing',
      params: {
        api_key: process.env.API_KEY,
        language: 'en-US',
        page: this.$store.state.currentPage
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
  },
  methods: {
    addData() {
      this.$store.dispatch('addData', {
        addUrl: this.addUrl,
        params: this.params
      })
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
</style>
