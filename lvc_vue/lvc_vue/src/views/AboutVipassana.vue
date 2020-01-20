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

import { WhatIsVapassana } from '@/pageData/WhatIsInsightData'

export default Vue.extend({
  name: 'AboutVipassana',
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
    this.pageData = WhatIsVapassana
  }
})
</script>

<style lang="less">
@import "../global_styling/globals.less";

li {
  list-style: none;
}
</style>
