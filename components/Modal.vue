<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog">
      <div v-if="dialog" class="modal">
        <div class="modal__header">
          <h3 class="modal__title">{{ items[itemNum].title }}</h3>
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
          <p class="modal__contents-story">{{ items[itemNum].overview }}</p>
          <v-rating v-model="rating" readonly half-increments></v-rating>
          <dl class="modal__contants-date">
            <dt>公開日</dt>
            <dd></dd>
          </dl>
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
      console.log(this.items[this.itemNum].vote_average / 2)
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
