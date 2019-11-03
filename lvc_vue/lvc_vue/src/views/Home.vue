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
      </div>
    </div>
    <AboutUs />
  </div>
</template>

<script>
import AboutUs from '@/components/About.vue'

export default {
  name: 'Home',
  components: {
    AboutUs
  }
}
</script>

<style lang="less">
@import "../global_styling/globals.less";
.home-container {
  display: flex;
  justify-content: space-between;
  margin: 0 2% 0 0;
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

  margin: 18px 0 0 0;
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
}

.lvc-byline h2 {
  font-weight: lighter;
  margin: 0 auto;
  padding: 0;
}

#current-news {
  display: inline-block;
  margin: 30px auto;
  padding: 30px;
  background-color: rgb(196, 211, 221);

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

.vl {
    height: 100%;
    border: 1px solid rgba(0, 0, 0, .5);
}
</style>
