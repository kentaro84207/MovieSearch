<template>
  <div v-if="showLoadMore" @click="loadMore">Load More</div>
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
.search__input {
  padding-top: 20px;
  padding-left: 20px;
}
</style>
