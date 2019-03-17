<template>
  <div class="results">
    <ul class="results__lists">
      <li
        v-for="(item, index) in items"
        v-cloak
        :key="index"
        class="results__list"
      >
        <figure class="results__image">
          <div v-if="item.poster_path !== null">
            <img
              :src="'https://image.tmdb.org/t/p/original' + item.poster_path"
            />
          </div>
          <div v-else>
            <img src="~/static/noImage.jpg" />
          </div>
        </figure>

        <h3 class="results__title">{{ item.title }}</h3>
      </li>
    </ul>
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
<style scoped lang="scss">
.results {
  &__heading {
    margin-bottom: 30px;
  }
  &__lists {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  &__list {
    width: 300px;
    margin-right: 20px;
    margin-bottom: 50px;
  }
  &__image {
    width: 100%;
    height: 450px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  &__title {
    text-align: center;
    margin-top: 20px;
  }
}
</style>
