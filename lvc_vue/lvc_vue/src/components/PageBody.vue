<template>
<div class="page-body">
  <PageTitle :title='pageData.title' />
  <ul>
    <li v-for='entry in pageData.data' v-bind:key='entry.index'>
      <p v-if='entry.sectionHeading.length'>{{ entry.sectionHeading }}</p>
      <ul>
        <li v-for='paragraph in entry.sectionParagraphs' v-bind:key='paragraph'>
          <p>{{ paragraph }}</p>
        </li>
      </ul>
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageTitle from '@/components/PageTitle.vue'

import IPageData from '@/pageData/IPageData'

export default Vue.extend({
  name: 'PageBody',
  components: {
    PageTitle
  },
  props: {
    pageData: Object as () => IPageData
  }
})
</script>

<style lang="less">
.page-body {
  margin: 80px 0 0 30px;
}
</style>
