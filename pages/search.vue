<template>
  <v-layout column justify-center align-center>
    <h2 class="heading">
      {{ title }}
      <span class="heading__number">({{ totalNumber }} results)</span>
    </h2>
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
      title: 'Search Results'
    }
  },
  computed: {
    totalNumber() {
      return this.$store.state.items.total_results
    }
  }
}
</script>
<style scoped lang="scss"></style>
