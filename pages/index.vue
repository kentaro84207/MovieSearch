<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <Loading />
        <Results />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Loading from '~/components/Loading.vue'
import Results from '~/components/Results.vue'

export default {
  components: {
    Loading,
    Results
  }
}
</script>
