<template>
  <main class="about flex flex-col justify-between">
    <div class="w-full flex justify-center">
      <div
        class="about-title flex flex-col text-md pl-3 border-l-2 mt-20 ml-10 border-red-200"
      >
        <span>{{ getContent.helloMessage }}</span>
      </div>
    </div>
    <div class="flex w-full">
      <div class="w-full flex about-container">
        <div class="w-1/5"></div>
        <div
          class="w-2/5 about-img h-full ml-20 flex justify-center items-center"
        >
          <img src="../assets/image/logo.png" />
        </div>
        <div
          class="w-3/5 relative about-text flex flex-col items-center justify-center"
        >
          <p class="w-full text-2xl leading-loose mt-12">
            {{ getContent.mainMessage }}
          </p>
          <p class="w-full text-sm text-gray-500 mt-2">
            {{ getContent.secondaryMessage }}
          </p>
          <div
            class="w-full text-center text-bold uppercase text-white mt-8 mb-6"
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
          helloMessage: "who am i",
          helloMessageTitle: "hello",
          mainMessage:
            "I'm a UX/UI designer Austin based, who loves clean, simple & unique design. I also enjoy crafting brand identities, icons, & illustration work.",
          secondaryMessage:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quiserat sed elit sceleris Lorem ipsum dolor sit amet, consecteturadipiscing elit. Donec quis erat sed elit scelerisque iaculis. Nullamnec porttitor justo, at iaculis risus. Aliquam erat volutpat. queiaculis."
        },
        ru: {
          helloMessage: "кто я",
          helloMessageTitle: "привет",
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
}
</style>
