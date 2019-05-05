<template>
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
    }
  }
}
</script>
<style scoped lang="scss"></style>
