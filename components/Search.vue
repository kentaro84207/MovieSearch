<template>
  <div class="search">
    <v-text-field
      v-model="keyword"
      label="Search for a movie ..."
      prepend-icon="search"
      class="search__input"
      autofocus
      clearable
      @keyup.enter="getData"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
      addUrl: 'search/movie',
      params: {
        api_key: process.env.API_KEY,
        language: 'en-US',
        query: this.keyword
      }
    }
  },
  methods: {
    getData() {
      if (this.keyword === '') return
      this.$store.dispatch('getData', {
        addUrl: this.addUrl,
        params: this.params
      })
    }
  }
}
</script>

<style scoped lang="scss"></style>
