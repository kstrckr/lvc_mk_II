<template>
<div class="page-body">
  <PageTitle :title='title' />
  <ul>
    <li v-for='entry in pageEntries' v-bind:key='entry'>

    </li>
  </ul>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageTitle from '@/components/PageTitle.vue'

export default Vue.extend({
  name: 'PageBody',
  components: {
    PageTitle
  },
  props: {
    title: String,
    pageEntries: Array
  }
})
</script>

<style lang="less">
.page-body {
  margin: 80px 0 0 30px;
}
</style>
