<template>
  <main class="about flex flex-col justify-between">
    <div class="w-full flex justify-center">
      <div
        class="about-title flex flex-col text-md pl-3 border-l-2 mt-20 ml-10 border-red-200"
      >
        <span class="text-white font-bold">{{ getContent.helloMessageTitle }}</span>
      </div>
    </div>
    <div class="w-full flex justify-center">
      <div
              class="about-title__message flex flex-col text-md pl-3 ml-12"
      >
        <h3 class="text-white font-bold text-6xl uppercase ml-10">{{ getContent.helloMessage }}</h3>
      </div>
    </div>
    <div class="flex w-full">
      <div class="w-full flex about-container">
        <div class="w-1/5"></div>
        <div
          class="w-2/5 about-img h-full ml-20 flex justify-center items-center"
        >
          <img src="../assets/image/avatar.png" />
        </div>
        <div
          class="w-3/5 relative about-text flex flex-col items-center justify-center"
        >
          <p class="w-full text-xl leading-loose mt-12" v-html="getContent.mainMessage">
          </p>
          <p class="w-full about-text__secondary text-sm text-gray-500 mt-2" v-html="getContent.secondaryMessage">
          </p>
          <div
            class="w-full text-center text-bold uppercase text-white mt-4 mb-6"
          >
            <span class="border-b-2 border-white pb-1">my profile</span>
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
          helloMessageTitle: "who i am",
          helloMessage: "hello",
          mainMessage:
            "<p>I'm fullstack web-developer, based in Moscow, who loves clean, simple & unique solutions. I'm using the most modern techniques and prefer Vue.js + Express.js + mongoDB stack. For CSS i prefer Tailwind.css ♡</p>",
          secondaryMessage:
            "<p>For some projects i pick Vue.js + PHP + SQL (PostgreSQL, MySQL) stack. I feel comfortable working with git (git flow), webpack and all sort of package managers, i know what CI/CD is, know how to use flexbox / grid layouts, but not afraid of using css-thingies including Bootstrap, Materal Design, Bulma.</p><p class='mt-2'>Have job experience with such products as: all kind of different CMS (WordPress, Drupal, Joomla, Opencart, Bitrix), Netlify, Gatsby.js, Mirage.js, Nuxt.js. </p><p class='mt-2'>I'm also familiar with agile and SCRUM and can manage your project on any stage :)</p>"
        },
        ru: {
          helloMessageTitle: "кто я",
          helloMessage: "привет",
          mainMessage:
            "I'm a UX/UI designer Austin based, who loves clean, simple & unique design. I also enjoy crafting brand identities, icons, & illustration work.",
          secondaryMessage:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quiserat sed elit sceleris Lorem ipsum dolor sit amet, consecteturadipiscing elit. Donec quis erat sed elit scelerisque iaculis. Nullamnec porttitor justo, at iaculis risus. Aliquam erat volutpat. queiaculis."
        }
      }
    };
  },
  computed: {
    getContent() {
      return this.content[this.language];
    }
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
  left: -5%;
  line-height: 20px;
  max-width: 100%;
}

  .about-text__secondary {
    left: 15%;
    position: relative;
    padding-right: 50px;
  }
</style>
