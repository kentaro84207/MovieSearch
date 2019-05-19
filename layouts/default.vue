<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <nuxt-link to="/">
        <h1 class="nav__heading">
          <v-toolbar-title v-text="title" />
        </h1>
      </nuxt-link>
      <Search />
      <v-spacer />
      <figure class="nav__figure pc">
        <img class="nav__image" src="logo.png" alt="THE MOVIE DB" />
      </figure>
      <h1 class="nav__figure sp">
        <img class="nav__image" src="header-logo.png" alt="THE MOVIE DB" />
      </h1>
    </v-toolbar>
    <v-content>
      <nuxt />
      <Modal />
    </v-content>
  </v-app>
</template>

<script>
import Search from '~/components/Search.vue'
import Modal from '~/components/Modal.vue'

export default {
  middleware: 'resetPage',
  components: {
    Search,
    Modal
  },
  data() {
    return {
      clipped: true,
      fixed: false,
      drawer: this.$ua.isFromPc(),
      items: [
        {
          icon: 'thumb_up_alt',
          title: 'Popular',
          to: '/'
        },
        {
          icon: 'star',
          title: 'Top Rated',
          to: '/top_rated'
        },
        {
          icon: 'play_arrow',
          title: 'Now Playing',
          to: '/now_playing'
        }
      ],
      miniVariant: false,
      title: 'MovieSearch',
      url: 'movie/popular'
    }
  }
}
</script>
<style scoped lang="scss">
.nav__heading {
  @include media(sp) {
    display: none;
  }
}

.nav__figure {
  width: 100px;
  padding-top: 10px;
  @include media(sp) {
    width: 45px;
  }
}

.nav__image {
  width: 100%;
}
</style>
