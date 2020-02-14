<template>
  <main>
    <app-header
      :language="language"
      v-on:changeLanguage="changeLanguage($event)"
    />
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <home-view :language="language" />
      </div>
      <div class="section">
        <about-view :language="language" />
      </div>
      <div class="section">
        <my-work-view :language="language" />
      </div>
    </full-page>
  </main>
</template>

<script>
import Home from "./views/Home";
import About from "./views/About";
import MyWork from "./views/MyWork";
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    "app-header": Header,
    "home-view": Home,
    "about-view": About,
    "my-work-view": MyWork
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
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.flip-list-move {
  transition: transform 1s;
}
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
  /* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
