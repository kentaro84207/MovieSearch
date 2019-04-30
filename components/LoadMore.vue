<template>
  <div @click="loadMore">Load More</div>
</template>

<script>
export default {
  computed: {
    currentPage() {
      return this.$store.state.currentPage
    }
  },
  methods: {
    loadMore() {
      this.$store.dispatch('addPage')
      this.$emit('callLoadMore')
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
