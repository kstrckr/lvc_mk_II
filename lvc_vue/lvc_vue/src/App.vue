<template>
  <div id="app">
    <div id="nav-container">
      <Nav />
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
export default Vue.extend({
  name: 'app',
  components: {
    Nav,
    Footer
  }
})
</script>

<style lang="less">
@import "./global_styling/globals.less";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: @body-font;

  max-width: 900px;
  margin: 0 auto 15px auto;
  padding: 0;
}

</style>
