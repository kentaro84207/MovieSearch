<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="768">
      <div v-if="dialog" class="modal">
        <div class="modal__header">
          <figure
            v-if="items[itemNum].backdrop_path !== null"
            class="modal__bg"
          >
            <img
              :src="
                'https://image.tmdb.org/t/p/original' +
                  items[itemNum].backdrop_path
              "
            />
          </figure>
          <div class="modal__title">
            <h3 class="modal__title-main">{{ items[itemNum].title }}</h3>
            <v-rating
              v-model="rating"
              background-color="grey lighten-1"
              color="yellow lighten-3"
              readonly
              half-increments
            ></v-rating>
            <dl class="modal__title-date">
              <dt>公開日</dt>
              <dd>{{ items[itemNum].release_date }}</dd>
            </dl>
          </div>
          <div class="modal__close" @click="changeDialog"></div>
        </div>
        <div class="modal__poster">
          <figure
            v-if="items[itemNum].poster_path !== null"
            class="results__image"
          >
            <img
              :src="
                'https://image.tmdb.org/t/p/original' +
                  items[itemNum].poster_path
              "
            />
          </figure>
        </div>
        <div class="modal__contents">
          <div class="modal__contents__inner">
            <p class="modal__contents-story">{{ items[itemNum].overview }}</p>
          </div>
        </div>
      </div>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  computed: {
    dialog() {
      return this.$store.state.dialog
    },
    items() {
      return this.$store.state.items.results
    },
    itemNum() {
      return this.$store.state.itemNum
    },
    rating() {
      return this.items[this.itemNum].vote_average / 2
    }
  },
  methods: {
    changeDialog() {
      this.$store.dispatch('changeDialog')
    }
  }
}
</script>

<style scoped lang="scss">
.modal {
  width: 100%;
  position: relative;
  &__header {
    position: relative;
    height: 432px;
    background-color: #424242;
    &::before {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
  &__bg {
    width: 100%;
    height: 100%;
  }
  &__title {
    width: 40%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 30px;
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    &-main {
      font-size: 38px;
    }
    &-date {
      margin-top: 20px;
    }
  }
  &__close {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      display: inline-block;
      height: 2px;
      width: 25px;
      position: absolute;
      top: 20px;
      right: 10px;
      background-color: #fff;
    }
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
  &__poster {
    width: 40%;
    position: absolute;
    top: 100px;
    left: 60px;
  }
  &__contents {
    width: 100%;
    min-height: 160px;
    background-color: #fff;
    &__inner {
      width: 40%;
      margin-right: 30px;
      margin-left: auto;
    }
    &-story {
      padding-top: 30px;
      padding-bottom: 30px;
      text-align: justify;
      line-height: 1.73;
    }
  }
}
</style>
