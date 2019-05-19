<template>
  <div class="loadMore">
    <div v-if="showLoadMore" class="btn" @click="loadMore">Load More</div>
  </div>
</template>

<script>
export default {
  computed: {
    showLoadMore() {
      return (
        this.$store.state.items.total_results >
        this.$store.state.currentPage * 20
      )
    }
  },
  methods: {
    loadMore() {
      this.$store.dispatch('addPage')
      this.$store.dispatch('addData')
    }
  }
}
</script>

<style scoped lang="scss">
.loadMore {
  margin-bottom: 50px;
}
</style>
