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
      url: 'search/movie',
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
      this.$store.dispatch('changeParams', this.params)
      this.$store.dispatch('changeUrl', this.url)
      this.$store.dispatch('getData')
      this.$router.push('search')
    }
  }
}
</script>

<style scoped lang="scss">
.search__input {
  padding-top: 25px;
  padding-left: 50px;
}
</style>
