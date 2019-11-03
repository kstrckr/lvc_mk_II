<template>
  <div id="standard-footer">
    <h3 class="gold-type logo-font"
    v-if="showText">
      Louisville
      <span class="red-type">Vipassana</span> Community
    </h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Footer',
  props: {
    showText: {
      type: Boolean,
      required: false,
      default: true
    }
  }
})
</script>

<style lang="less">
@import "../global_styling/globals.less";

#standard-footer {
  display: block;
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: right;
}

#standard-footer h3 {
  margin: 15px;
}

#standard-footer::after {
  display: block;
  position: relative;
  content: '.';
  height: 30px;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: @body-red;

}
</style>
