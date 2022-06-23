<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<style>
h2 {
  font-weight: bold;
  font-size: 1.25em;
  margin-bottom: 0.5em;
}
</style>
