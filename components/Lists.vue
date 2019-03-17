<template>
  <div>
    <div id="main_area">
      <p>Display search results here</p>
      <ul>
        <li v-for="(item, index) in items" v-cloak :key="index">
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.items.results
    }
  }
}
</script>
