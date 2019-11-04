<template>
  <div class="left-sidebar">
    <div id="left-content">
      <img src="../../images/photo_flowerandfeet.png" alt="sitting buddha statue">
      <p>{{ quote.text }}</p>
      <p class="blue-type">-{{ quote.author }}</p>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LeftSidebar',
  data: function () {
    return {
      quote: {
        text: 'There is always the possability of radical change. Every moment, every moment we are dying and being reborn, we and all of life.',
        author: 'Sharon Salzberg'
      }
    }
  }
})
</script>

<style lang="less">
@import "../global_styling/globals.less";

#left-content {
  flex-grow: 1;
  background-color: @body-gold;
  margin: 0;
  max-width: 250px;
  padding: 0;
  z-index: -1;
  text-align: right;

  img {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 10px;
    padding: 0;
  }
}
</style>
