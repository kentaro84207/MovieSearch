<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page Not Found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Back To Home</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: function() {
        return { statusCode: 404, message: 'This page could not be found' }
      }
    }
  }
}
</script>
