<template>
  <div>
    <div id="main_area">
      <p>Display search results here</p>
      <ul>
        <li v-for="(item, index) in items" v-cloak :key="index">
          {{ item.title }}
          <img
            :src="'https://image.tmdb.org/t/p/original' + item.poster_path"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     imgUrl:
  //   }
  // },
  computed: {
    items() {
      return this.$store.state.items.results
    }
  }
}
</script>
