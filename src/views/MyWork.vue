<template>
  <main class="my-work">
    <div class="w-full flex justify-center">
      <div
        class="my-work-title flex flex-col text-md pl-3 border-l-2 ml-10 border-red-200"
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
    <div
      class="flex w-full justify-center h-10 flex items-center text-sm mt-10"
    >
      <div
        class="mr-4 text-gray-600 uppercase"
        @click="activeWorkCategory = 'all'"
        :class="{
          'text-purple-600 line-through': activeWorkCategory === 'all'
        }"
      >
        All
      </div>
      <div
        class="mr-4 text-gray-600 uppercase"
        @click="activeWorkCategory = 'vue'"
        :class="{
          'text-purple-600 line-through': activeWorkCategory === 'vue'
        }"
      >
        Vue.js
      </div>
      <div
        class="mr-4 text-gray-600 uppercase"
        @click="activeWorkCategory = 'javascript'"
        :class="{
          'text-purple-600 line-through': activeWorkCategory === 'javascript'
        }"
      >
        JavaScript
      </div>
      <div
        class="mr-4 text-gray-600 uppercase"
        @click="activeWorkCategory = 'php'"
        :class="{
          'text-purple-600 line-through': activeWorkCategory === 'php'
        }"
      >
        PHP
      </div>
    </div>
    <div class="w-full">
      <transition-group name="bounce" class="flex w-full flex-wrap" mode="out-in">
        <div
          class="w-1/5 flex flex-col px-6 py-6"
          v-for="project in getProjectsByCategory"
          :key="project.id"
        >
          <div
            class="w-full flex flex-col bg-purple-700 text-white justify-center items-center mr-3 rounded"
          >
            <div class="w-full text-center">
              <a :href="project.url"> {{ project.name }}</a>
            </div>
            <div class="w-full text-center">
              <span
                class="rounded-full bg-gray-500 text-gray-700 px-3 text-sm font-thin"
                v-for="category in project.category"
                :key="category"
              >
                {{ category }}</span
              >
            </div>
          </div>
        </div>
      </transition-group>
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
      activeWorkCategory: "all",
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
          },
          projects: [
            {
              id: 1,
              category: ["php", "vue", "javascript"],
              name: "akvacity.ru",
              url: "#",
              github: "github.com/atogz/"
            },
            {
              id: 2,
              category: ["php", "javascript"],
              name: "coral-club.ru",
              url: "#",
              github: "github.com/atogz/"
            },
            {
              id: 3,
              category: ["php", "vue", "javascript"],
              name: "ru.coral.club",
              url: "#",
              github: "github.com/atogz/"
            },
            {
              id: 4,
              category: ["javascript"],
              name: "geniapolis.ru",
              url: "#",
              github: "github.com/atogz/"
            },
            {
              id: 5,
              category: ["vue", "javascript"],
              name: "m.akvacity.ru",
              url: "google.com",
              github: "github.com/atogz/"
            },
            {
              id: 6,
              category: ["vue", "javascript"],
              name: "akvacity ORM",
              url: "#",
              github: "github.com/atogz/"
            },
            {
              id: 7,
              category: ["php", "javascript"],
              name: "cba.coral.club",
              url: "#",
              github: "github.com/atogz/"
            },
            {
              id: 8,
              category: ["vue", "javascript"],
              name: "workstation proto",
              url: "#",
              github: "github.com/atogz/"
            }
          ]
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
    },
    getProjectsByCategory() {
      if (this.activeWorkCategory === "all") {
        return this.getContent.projects;
      } else {
        return this.getContent.projects.filter(project => {
          return project.category.find(item => {
            return this.activeWorkCategory === item;
          });
        });
      }
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
