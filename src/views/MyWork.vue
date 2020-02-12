<template>
  <main class="my-work">
    <div class="w-full flex justify-center">
      <div
        class="my-work-title flex flex-col text-md pl-3 border-l-2 mt-20 ml-10 border-red-200"
      >
        <span class="text-gray-800 font-bold">{{ getContent.subtitle }}</span>
      </div>
    </div>
    <div class="w-full flex justify-center">
      <div class="my-work-title__mesage flex flex-col text-md pl-3 ml-12">
        <h3 class="text-gray-800 font-bold text-6xl uppercase ml-10">
          {{ getContent.title }}
        </h3>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "MyWork",
  props: ["language"],
  components: {},
  data() {
    return {
      content: {
        en: {
          subtitle: "awesome projects",
          title: "my work",
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
          subtitle: "последние работы",
          title: "мои проекты",
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
    getContent() {
      return this.content[this.language];
    }
  }
};
</script>

<style>
.my-work {
  background-image: url("../assets/image/mywork_bg.png");
  height: 100vh;
  background-size: cover;
  background-position: bottom;
  font-family: "Montserrat Bold", sans-serif;
  line-height: 4.75em;
  color: #333;
}
</style>
