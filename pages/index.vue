<template>
  <v-layout column justify-center align-center>
    <h2 class="heading">Popular Movies</h2>
    <transition name="fade" mode="out-in">
      <div v-if="isLoading" key="loading">
        LOADING...
        <font-awesome-icon class="loader" icon="spinner" />
      </div>
      <div v-else key="loaded" class="contents">
        <Results />
        <LoadMore />
      </div>
    </transition>
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
      url: 'movie/popular',
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
    this.$store.dispatch('changeParams', this.params)
    this.$store.dispatch('changeUrl', this.url)
    this.$store.dispatch('getData')
  }
}
</script>
<style scoped lang="scss"></style>
