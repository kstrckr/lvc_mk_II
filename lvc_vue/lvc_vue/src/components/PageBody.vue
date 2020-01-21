<template>
<div class="page-body">
  <PageTitle :title='pageData.title' />
  <ul class="page-content">
    <li class="page-sections" v-for='entry in pageData.data' v-bind:key='entry.index'>
      <p class="section-heading red-type" v-if='entry.sectionHeading.length'>{{ entry.sectionHeading }}</p>
      <ul class="section-paragraphs">
        <li class="paragraph" v-for='paragraph in entry.sectionParagraphs' v-bind:key='paragraph'>
          <p class="paragraph-text"><span v-html="paragraph"></span></p>
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
@import "../global_styling/globals.less";

.page-body {
  margin: 100px 0 0 30px;
  padding: 0 0;
}

.page-content {
  margin: 0 0;
  padding: 0 0;
}

.page-sections {
  margin: 0 0;
  padding: 0 0;
}

.section-heading {
  margin: 0 0;
  padding: 0 0;
  font-weight: bold;
}

.section-paragraphs {
  margin: 0 0;
  padding: 0 0;
}

.paragraph {
  margin: 0 0;
  padding: 0 0;
}

.paragraph-text {
  // margin: 0 0;
  // padding: 0 0;
}
</style>
