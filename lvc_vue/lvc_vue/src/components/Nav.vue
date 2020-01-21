<template>
<ul class='nav'>
  <li>
    <h4 class="current-link">
      <router-link to="/">Home</router-link>
    </h4>
  </li>
  <li>
    <h4>
      <router-link to="/about_vipassana">What is Insight Meditation</router-link>
    </h4>
  </li>
  <li>
    <h4>
      <router-link to="/cdl_led">CDL Led</router-link>
    </h4>
  </li>
  <li>
    <h4>
      <a href="./resources.html">Resources</a>
    </h4>
  </li>
  <li>
    <h4>
      <router-link to="/retreats">Classes & Retreats</router-link>
    </h4>
  </li>
</ul>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Nav'
})
</script>

<style lang="less">
@import "../global_styling/globals.less";
.nav {
  display: flex;
  justify-content: space-around;

  position:absolute;
  right: 0;
  width: 75%;
  width: 675px;
  margin: 25px 0 0 auto;
  padding: 0;

  background-color: @body-red;
  font-family: @body-font;
  font-weight: bold;
  color: white;

  list-style: none;

  a {
  margin: 5px;
  text-decoration: none;
  color: #fff;
  }

  a:hover {
  text-decoration: underline;
  }
}
</style>
