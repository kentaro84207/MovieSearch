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
      keyword: ''
    }
  },
  methods: {
    getData() {
      if (this.keyword === '') return
      this.$store.dispatch('getData', this.keyword)
    }
  }
}
</script>

<style scoped lang="scss">
.search {
  widows: 300px;
  padding-top: 10px;
  margin-left: 30px;
}
</style>
