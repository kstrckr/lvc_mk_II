<template>
  <div class="home-component">
    <div class="home-container">
      <div class="image-container">
        <img
          id="home-background"
          src="../../images/home_01.jpg"
          alt="bronze buddha statue background image"
        />
      </div>

      <div class="home-content">
        <div class="lvc-logo">
          <span class="gold-type">
            <h1>Louisville</h1>
          </span>
          <span class="red-type">
            <h1>Vipassana</h1>
          </span>
          <span class="gold-type">
            <h1>Community</h1>
          </span>
        </div>
        <h2 class="lvc-byline">
          <span class="blue-type">
            <h2>INSIGHT MEDITATION</h2>
          </span>
        </h2>
        <LatestNews />
      </div>
    </div>
    <AboutUs />
  </div>
</template>

<script>
import AboutUs from '@/components/About.vue'
import LatestNews from '@/components/LatestNews.vue'

export default {
  name: 'Home',
  components: {
    AboutUs,
    LatestNews
  }
}
</script>

<style lang="less">
@import "../global_styling/globals.less";
.home-container {
  display: flex;
  justify-content: space-between;
  margin: 0;
  text-align: center;

  .image-container {
    position: relative;
    display: inline-block;
    margin: -100px 0 0 0;
    width: 100%;
    z-index: -1;
  }

  #home-background {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 100%;
  }
}

.lvc-logo {
  font-family: @logo-font;
  font-size: 1.8em;

  margin: 30px 0 0 0;
  padding: 0;

  h1 {
    font-weight: lighter;

    margin: 0;
    padding: 0;
  }
}

.lvc-byline {
  font-family: "Karla", sans-serif;
  font-size: 1.5em;

  margin: 8px 0;
  padding: 0;

  h2 {
    font-weight: lighter;
    margin: 0 auto;
    padding: 0;
  }
}
</style>
