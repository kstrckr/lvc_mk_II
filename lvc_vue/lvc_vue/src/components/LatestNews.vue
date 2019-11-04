<template>
  <div id="current-news">
    <ul class="news-list">
      <li>
        <p>Newcomers Always Welcome!</p>
        <a href="./newcomer_guidelines.html">Guidelines for Newcomers</a>
      </li>
      <li>
        <div class="vl"></div>
      </li>
      <li>
        <p>Registration Open!</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LatestNews'
})
</script>

<style lang="less">

#current-news {
  display: inline-block;
  margin: 30px auto 0 auto;
  padding: 30px;
  background-color: rgb(196, 211, 221);

  .vl {
    height: 100%;
    border: 1px solid rgba(0, 0, 0, .5);
  }

  .news-list {
  display: flex;
  justify-content: space-around;
  width: 100%;
  list-style: none;

  margin: 0;
  padding: 0;

    li {
    margin: 5px;
    padding: 0;

      p {
      margin: 0;
      padding: 0;
      }
    }
  }
}
</style>
