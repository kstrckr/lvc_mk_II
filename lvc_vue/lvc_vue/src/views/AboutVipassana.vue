<template>
  <div class="standard-content-container">
    <LeftSidebar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import LeftSidebar from '@/components/LeftSidebar.vue'
export default Vue.extend({
  name: 'AboutVipassana',
  components: {
    LeftSidebar
  }
})
</script>

<style lang="less">
@import "../global_styling/globals.less";
</style>
