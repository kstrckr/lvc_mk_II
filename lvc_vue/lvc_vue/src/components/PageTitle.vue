<template>
<div class="page-header">
  <h1>{{ title }}</h1>
</div>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  name: 'PageTitle',
  props: {
    title: String
  }
})

</script>

<style lang="less">
@import "../global_styling/globals.less";

.page-header {
  h1 {
    font-size: 18px;
    font-weight: bold;
    color: @blue-text;
  }
}

</style>
