<template>
  <div>
    <input
      v-model="keyword"
      type="text"
      class="search"
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
