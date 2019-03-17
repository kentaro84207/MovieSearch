<template>
  <div class="c-search">
    <v-text-field
      v-model="keyword"
      label="Search for a movie ..."
      prepend-icon="search"
      class="c-search__input"
      autofocus
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
.c-search {
  widows: 300px;
  margin-left: 30px;
}
</style>
