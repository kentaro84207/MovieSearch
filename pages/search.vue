<template>
  <v-layout column justify-center align-center>
    <h2 class="heading">
      Search Results
      <span class="heading__number">({{ totalNumber }} results)</span>
    </h2>
    <Contents />
  </v-layout>
</template>

<script>
import Contents from '~/components/Contents.vue'

export default {
  components: {
    Contents
  },
  computed: {
    totalNumber() {
      return this.$store.state.items.total_results
    }
  }
}
</script>
<style scoped lang="scss"></style>
