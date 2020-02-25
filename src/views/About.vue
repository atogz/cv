<template>
  <main class="about flex flex-col justify-between">
    <div class="w-full flex justify-center">
      <div
        class="about-title flex flex-col text-md pl-3 border-l-2 mt-20 ml-10 border-red-200"
      >
        <span class="text-white font-bold">{{ getContent.subtitle }}</span>
      </div>
    </div>
    <div class="w-full flex justify-center">
      <div class="about-title__message flex flex-col text-md pl-3 ml-12">
        <h3 class="text-white font-bold text-6xl uppercase ml-10">
          {{ getContent.title }}
        </h3>
      </div>
    </div>
    <div class="flex w-full mt-4">
      <div class="w-full flex about-container">
        <div class="w-1/5"></div>
        <div
          class="w-2/5 about-img h-full ml-20 p-6 flex justify-center items-center"
        >
          <img class="max-h-full" src="../assets/image/avatar.png" />
        </div>
        <div
          class="w-3/5 relative about-text flex flex-col items-center justify-center"
        >
          <p
            class="w-full text-xl leading-loose mt-12"
            v-html="getContent.mainMessage"
          ></p>
          <p
            class="w-full about-text__secondary text-sm text-gray-500 mt-2"
            v-html="getContent.secondaryMessage"
          ></p>
          <div
            class="w-full text-center text-bold uppercase text-white mt-4 mb-6"
          >
            <a
              class="border-b-2 border-white pb-1"
              :href="getContent.profile.link"
              target="_blank"
              >{{ getContent.profile.message }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "About",
  props: ["language"],
  components: {},
  data() {
    return {
      content: {
        en: {
          subtitle: "about me",
          title: "hello",
          mainMessage:
            "<p>I'm fullstack web-developer, based in Moscow, who loves clean, simple & working solutions. I'm using the most modern techniques.</p>",
          secondaryMessage:
            "<p>I'm working using git (git flow), i know what CI / CD is, how to use flexbox and grid layout, using modern language structures. I can write an API service on my own or mock one for quick prototyping :) </p>",
          profile: {
            link: "https://linkedin.com/",
            message: "linkedin"
          }
        },
        ru: {
          subtitle: "обо мне",
          title: "привет",
          mainMessage:
            "Я фуллстек web-разработчик из Москвы.<br/>Решаю бизнес-задачи, используя современные релевантные технологии.",
          secondaryMessage:
            "В работе использую git (git flow), знаю, что такое CI / CD и как это всё настраивать, верстаю на flexbox / grid, использую последние стандарты языка. Пишу API и понятную документацию к нему :)",
          profile: {
            link: "https://hh.ru/",
            message: "hh.ru"
          }
        }
      }
    };
  },
  computed: {
    getLanguage() {
      return this.$store.getters.getCurrentLanguage;
    },
    getContent() {
      return this.content[this.getLanguage];
    }
  },
  methods: {
    navigate(event) {
      console.log("event: ", window.scrollY);
      console.log("wheelDelta: ", event.wheelDelta);
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (event.wheelDelta <= -80 || event.key === "ArrowDown") {
          this.$router.push("/projects");
        }
      }
      if (window.scrollY == 0) {
        if (event.wheelDelta >= 120 || event.key === "ArrowUp") {
          console.log("debug");
          this.$router.push("/");
        }
      }
    }
  },
  created() {
    window.addEventListener("wheel", this.navigate);
    window.addEventListener("keyup", this.navigate);
  },
  destroyed() {
    window.removeEventListener("wheel", this.navigate);
    window.removeEventListener("keyup", this.navigate);
  }
};
</script>

<style>
.about {
  background-image: url("../assets/image/about_bg.png");
  height: 100vh;
  background-size: cover;
  background-position: center;
  font-family: "Montserrat Bold", sans-serif;
  line-height: 4.75em;
}
.about-container {
  height: 60vh;
}
.about-title {
  font-family: "Montserrat", sans-serif;
}
.about-img {
  background-color: #ececec;
}
.about-text {
  font-family: "Montserrat", sans-serif;
  line-height: 20px;
  max-width: 100%;
  margin-left: 20px;
}

.about-text__secondary {
  margin-left: 10%;
  padding-right: 50px;
}
</style>
