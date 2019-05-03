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
        <v-toolbar-title v-text="title" />
      </nuxt-link>
      <Search />
      <v-spacer />
      <figure class="nav__figure">
        <img class="nav__image" src="logo.png" alt="THE MOVIE DB" />
      </figure>
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
      drawer: true,
      fixed: false,
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
.nav__figure {
  width: 100px;
  padding-top: 10px;
}

.nav__image {
  width: 100%;
}
</style>
