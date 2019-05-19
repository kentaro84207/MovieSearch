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
        <div v-else class="results__image -noimage">No Image</div>
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
    @include media(sp) {
      padding: 0 20px;
    }
  }
  &__list {
    margin-bottom: 50px;
    @include media(pc) {
      width: 22%;
    }
    @include media(tablet) {
      width: 45%;
    }
    @include media(sp) {
      width: 45%;
    }
    &:not(:nth-of-type(4n)) {
      @include media(pc) {
        margin-right: 4%;
      }
    }
    &:hover {
      img {
        @include media(pc) {
          opacity: 0.6;
          transform: scale(1.1);
        }
      }
    }
  }
  &__image {
    width: 100%;
    overflow: hidden;
    @include media(pc) {
      height: 24vw;
    }
    @include media(tablet) {
      height: 58.6vw;
    }
    @include media(sp) {
      height: 58.6vw;
    }
    img {
      width: 100%;
      height: 100%;
      transition: all 0.6s ease-out;
    }
    &.-noimage {
      @include flex-center;
      background-color: #e6e6e6;
    }
  }
  &__title {
    margin-top: 20px;
    @include media(sp) {
      margin-top: 10px;
    }
    font-weight: normal;
  }
}
</style>
