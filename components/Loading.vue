<template>
  <div v-if="isLoading" class="loading">LOADING</div>
</template>

<script>
export default {
  computed: {
    isLoading() {
      return this.$store.state.loadingNow
    }
  }
}
</script>
