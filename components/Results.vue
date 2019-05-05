<template>
  <div class="results">
    <ul class="results__lists">
      <li
        v-for="(item, index) in items"
        v-cloak
        :key="index"
        class="results__list"
        @click="changeDialog(), getItemNum(index)"
      >
        <figure v-if="item.poster_path !== null" class="results__image">
          <img :src="'https://image.tmdb.org/t/p/w500' + item.poster_path" />
        </figure>
        <figure v-else>
          <img src="~/static/noImage.jpg" />
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
  },
  methods: {
    changeDialog() {
      this.$store.dispatch('changeDialog')
      this.overlayClose()
    },
    overlayClose() {
      setTimeout(() => {
        const _overlay = document.querySelector('.v-overlay')
        _overlay.addEventListener('click', () => {
          this.changeDialog()
        })
      }, 500)
    },
    getItemNum(index) {
      this.$store.dispatch('changeItemNum', {
        itemNum: index
      })
    }
  }
}
</script>
<style scoped lang="scss">
.results {
  width: 100%;
  &__heading {
    margin-bottom: 30px;
  }
  &__lists {
    width: 100%;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    cursor: pointer;
  }
  &__list {
    width: 22%;
    margin-bottom: 50px;
    &:not(:nth-of-type(4n)) {
      margin-right: 4%;
    }
    &:hover {
      img {
        opacity: 0.6;
        transform: scale(1.1);
      }
    }
  }
  &__image {
    width: 100%;
    height: 24vw;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.6s ease-out;
    }
  }
  &__title {
    margin-top: 20px;
  }
}
</style>
