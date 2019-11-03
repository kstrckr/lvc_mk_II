<template>
<ul class='nav'>
  <li>
    <h4 class="current-link">
      <a href="./index.html">Home</a>
    </h4>
  </li>
  <li>
    <h4>
      <a href="./whatis.html">What is Insight Meditation</a>
    </h4>
  </li>
  <li>
    <h4>
      <a href="./cdlled.html">CDL Led</a>
    </h4>
  </li>
  <li>
    <h4>
      <a href="./resources.html">Resources</a>
    </h4>
  </li>
  <li>
    <h4>
      <a href="./edu.html">Classes & Retreats</a>
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

  width: 75%;
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
