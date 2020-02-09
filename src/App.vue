<template>
  <div>
    <header class="absolute top-0 z-50">
      <span @click="language = 'en'">en</span>
      <span @click="language = 'ru'">ru</span>
    </header>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <home-view :language="language" />
      </div>
      <div class="section">
        <about-view />
      </div>
      <div class="section">
        <h2>Second 3</h2>
      </div>
    </full-page>
  </div>
</template>

<script>
import Home from "./views/Home";
import About from "./views/About";
export default {
  name: "App",
  components: {
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
      language: "ru"
    };
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
fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
