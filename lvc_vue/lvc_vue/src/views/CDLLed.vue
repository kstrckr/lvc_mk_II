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

import { CDLLedContent } from '@/pageData/CDLLed.ts'

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
    this.pageData = CDLLedContent
  }
})
</script>

<style lang="less">
@import "../global_styling/globals.less";

li {
  list-style: none;
}
</style>
