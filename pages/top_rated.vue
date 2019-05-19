<template>
  <v-layout column justify-center align-center>
    <h2 class="heading">{{ title }}</h2>
    <Contents />
  </v-layout>
</template>

<script>
import Contents from '~/components/Contents.vue'

export default {
  head() {
    return {
      title: this.title
    }
  },
  components: {
    Contents
  },
  data() {
    return {
      title: 'Top Rated Movies',
      url: 'movie/top_rated',
      params: {
        api_key: process.env.API_KEY,
        language: 'en-US',
        page: this.$store.state.currentPage
      }
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
