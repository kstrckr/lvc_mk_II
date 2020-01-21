<template>
  <div id="standard-content-container">
    <LeftSidebar />
    <PageBody :pageData='pageData' />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import LeftSidebar from '@/components/LeftSidebar.vue'
import PageBody from '@/components/PageBody.vue'

import { RetreatsContent } from '@/pageData/Retreats.ts'

export default Vue.extend({
  name: 'CDLLed',
  components: {
    LeftSidebar,
    PageBody
  },
  data () {
    return {
      pageData: {}
    }
  },
  created () {
    this.pageData = RetreatsContent
  }
})
</script>

<style lang="less">
@import "../global_styling/globals.less";

li {
  list-style: none;
}
</style>
