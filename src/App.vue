<template>
  <main>
    <app-header :language="language" v-on:test="changeLanguage($event)" />
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <home-view :language="language" />
      </div>
      <div class="section">
        <about-view :language="language" />
      </div>
      <div class="section">
        <h2>Second 3</h2>
      </div>
    </full-page>
  </main>
</template>

<script>
import Home from "./views/Home";
import About from "./views/About";
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    "app-header": Header,
    "home-view": Home,
    "about-view": About
  },
  data() {
    return {
      options: {
        //anchors: ["welcome", "about", "works"],
        lockAnchors: true,
        loopBottom: true
      },
      language: "en"
    };
  },
  methods: {
    changeLanguage(lang) {
      this.language = lang;
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap");
@import url(http://allfont.ru/allfont.css?fonts=montserrat-bold);
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
