<template>
  <v-layout column justify-center align-center>
    <div v-if="isLoading">
      LOADING...
      <font-awesome-icon class="loader" icon="spinner" />
    </div>
    <div v-else class="contents">
      <Search />
      <Results />
    </div>
  </v-layout>
</template>

<script>
import Results from '~/components/Results.vue'
import Search from '~/components/Search.vue'

export default {
  components: {
    Results,
    Search
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

.search {
  width: 300px;
  padding-top: 10px;
  margin: 0 auto 30px;
}

.contents,
.results {
  width: 100%;
}
</style>
