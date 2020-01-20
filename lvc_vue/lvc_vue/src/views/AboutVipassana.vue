<template>
  <div id="standard-content-container">
    <LeftSidebar />
    <PageBody :title='tempTitle' />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import LeftSidebar from '@/components/LeftSidebar.vue'
import PageBody from '@/components/PageBody.vue'

export default Vue.extend({
  name: 'AboutVipassana',
  components: {
    LeftSidebar,
    PageBody
  },
  data () {
    return {
      tempTitle: 'Page Header Here'
    }
  }
})
</script>

<style lang="less">
@import "../global_styling/globals.less";
</style>
