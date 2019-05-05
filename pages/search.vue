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
  computed: {
    isLoading() {
      return this.$store.state.loadingNow
    },
    totalNumber() {
      return this.$store.state.items.total_results
    }
  },
  methods: {
    addData() {
      this.$store.dispatch('addData', {
        url: this.url,
        params: this.params
      })
    }
  }
}
</script>
<style scoped lang="scss"></style>
