<template>
  <header></header>
  <div class="container">
    <page-home />
  </div>
  <footer></footer>
</template>

<script>
import PageHome from '@/components/PageHome.vue'

export default {
  name: 'App',
  components: {
    PageHome
  }
}
</script>

<style>
@import "assets/css/styles.css";
</style>
