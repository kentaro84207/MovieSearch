<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <Loading />
        <Search />
        <Lists />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Loading from '~/components/Loading.vue'
import Search from '~/components/Search.vue'
import Lists from '~/components/Lists.vue'

export default {
  components: {
    Loading,
    Search,
    Lists
  }
}
</script>
