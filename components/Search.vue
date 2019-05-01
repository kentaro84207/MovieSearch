<template>
  <div class="search">
    <v-text-field
      v-model="params.query"
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
      addUrl: 'search/movie',
      params: {
        api_key: process.env.API_KEY,
        language: 'en-US',
        query: ''
      }
    }
  },
  methods: {
    getData() {
      if (this.params.query === '') return
      this.$store.dispatch('getData', {
        addUrl: this.addUrl,
        params: this.params
      })
      this.$router.push('search')
    },
    addDate() {
      this.$store.dispatch('addData', {
        addUrl: this.addUrl,
        params: this.params
      })
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
