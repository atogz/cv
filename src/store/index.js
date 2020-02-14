import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: "en",
    projects: {
      en: [
       {
         id: 1,
         category: ["php", "vue", "javascript"],
         name: "akvacity.ru",
         url: "#",
         github: "github.com/atogz/",
         summary: 'Short project summary',
         description: 'Full Project Description',
         images: [
           {
             id: 1,
             name: "Изображение 1",
             url: "google.com"
           },
           {
             id: 2,
             name: "Изображение 2",
             url: "google.com"
           },
           {
             id: 3,
             name: "Изображение 3",
             url: "google.com"
           },
           {
             id: 4,
             name: "Изображение 4",
             url: "google.com"
           },
         ]
       },
       {
         id: 2,
         category: ["php", "javascript"],
         name: "coral-club.ru",
         url: "#",
         github: "github.com/atogz/",
         summary: 'Short project summary',
         description: 'Full Project Description',
         images: [
           {
             id: 1,
             name: "Изображение 1",
             url: "google.com"
           },
           {
             id: 2,
             name: "Изображение 2",
             url: "google.com"
           },
           {
             id: 3,
             name: "Изображение 3",
             url: "google.com"
           },
           {
             id: 4,
             name: "Изображение 4",
             url: "google.com"
           },
         ]
       },
       {
         id: 3,
         category: ["php", "vue", "javascript"],
         name: "ru.coral.club",
         url: "#",
         github: "github.com/atogz/",
         summary: 'Short project summary',
         description: 'Full Project Description',
         images: [
           {
             id: 1,
             name: "Изображение 1",
             url: "google.com"
           },
           {
             id: 2,
             name: "Изображение 2",
             url: "google.com"
           },
           {
             id: 3,
             name: "Изображение 3",
             url: "google.com"
           },
           {
             id: 4,
             name: "Изображение 4",
             url: "google.com"
           },
         ]
       },
       {
         id: 4,
         category: ["javascript"],
         name: "geniapolis.ru",
         url: "#",
         github: "github.com/atogz/",
         summary: 'Short project summary',
         description: 'Full Project Description',
         images: [
           {
             id: 1,
             name: "Изображение 1",
             url: "google.com"
           },
           {
             id: 2,
             name: "Изображение 2",
             url: "google.com"
           },
           {
             id: 3,
             name: "Изображение 3",
             url: "google.com"
           },
           {
             id: 4,
             name: "Изображение 4",
             url: "google.com"
           },
         ]
       },
       {
         id: 5,
         category: ["vue", "javascript"],
         name: "m.akvacity.ru",
         url: "google.com",
         github: "github.com/atogz/",
         summary: 'Short project summary',
         description: 'Full Project Description',
         images: [
           {
             id: 1,
             name: "Изображение 1",
             url: "google.com"
           },
           {
             id: 2,
             name: "Изображение 2",
             url: "google.com"
           },
           {
             id: 3,
             name: "Изображение 3",
             url: "google.com"
           },
           {
             id: 4,
             name: "Изображение 4",
             url: "google.com"
           },
         ]
       },
       {
         id: 6,
         category: ["vue", "javascript"],
         name: "akvacity workstation",
         url: "#",
         github: "github.com/atogz/",
         summary: 'Short project summary',
         description: 'Full Project Description',
         images: [
           {
             id: 1,
             name: "Изображение 1",
             url: "google.com"
           },
           {
             id: 2,
             name: "Изображение 2",
             url: "google.com"
           },
           {
             id: 3,
             name: "Изображение 3",
             url: "google.com"
           },
           {
             id: 4,
             name: "Изображение 4",
             url: "google.com"
           },
         ]
       },
       {
         id: 7,
         category: ["php", "javascript"],
         name: "cba.coral.club",
         url: "#",
         github: "github.com/atogz/",
         summary: 'Short project summary',
         description: 'Full Project Description',
         images: [
           {
             id: 1,
             name: "Изображение 1",
             url: "google.com"
           },
           {
             id: 2,
             name: "Изображение 2",
             url: "google.com"
           },
           {
             id: 3,
             name: "Изображение 3",
             url: "google.com"
           },
           {
             id: 4,
             name: "Изображение 4",
             url: "google.com"
           },
         ]
       },
       {
         id: 8,
         category: ["vue", "javascript"],
         name: "crude template app",
         url: "#",
         github: "github.com/atogz/",
         summary: 'Short project summary',
         description: 'Full Project Description',
         images: [
           {
             id: 1,
             name: "Изображение 1",
             url: "google.com"
           },
           {
             id: 2,
             name: "Изображение 2",
             url: "google.com"
           },
           {
             id: 3,
             name: "Изображение 3",
             url: "google.com"
           },
           {
             id: 4,
             name: "Изображение 4",
             url: "google.com"
           },
         ]
       },
       {
         id: 9,
         category: ["php"],
         name: "employee motivation module",
         url: "#",
         github: "github.com/atogz/",
         summary: 'Short project summary',
         description: 'Full Project Description',
         images: [
           {
             id: 1,
             name: "Изображение 1",
             url: "google.com"
           },
           {
             id: 2,
             name: "Изображение 2",
             url: "google.com"
           },
           {
             id: 3,
             name: "Изображение 3",
             url: "google.com"
           },
           {
             id: 4,
             name: "Изображение 4",
             url: "google.com"
           },
         ]
       }
     ],
      ru: [
        {
          id: 1,
          category: ["php", "vue", "javascript"],
          name: "akvacity.ru",
          url: "#",
          github: "github.com/atogz/",
          summary: 'Краткое описание проекта',
          description: 'Полное описание проекта',
          images: [
            {
              id: 1,
              name: "Изображение 1",
              url: "google.com"
            },
            {
              id: 2,
              name: "Изображение 2",
              url: "google.com"
            },
            {
              id: 3,
              name: "Изображение 3",
              url: "google.com"
            },
            {
              id: 4,
              name: "Изображение 4",
              url: "google.com"
            },
          ]
        },
        {
          id: 2,
          category: ["php", "javascript"],
          name: "coral-club.ru",
          url: "#",
          github: "github.com/atogz/",
          summary: 'Краткое описание проекта',
          description: 'Полное описание проекта',
          images: [
            {
              id: 1,
              name: "Изображение 1",
              url: "google.com"
            },
            {
              id: 2,
              name: "Изображение 2",
              url: "google.com"
            },
            {
              id: 3,
              name: "Изображение 3",
              url: "google.com"
            },
            {
              id: 4,
              name: "Изображение 4",
              url: "google.com"
            },
          ]
        },
        {
          id: 3,
          category: ["php", "vue", "javascript"],
          name: "ru.coral.club",
          url: "#",
          github: "github.com/atogz/",
          summary: 'Краткое описание проекта',
          description: 'Полное описание проекта',
          images: [
            {
              id: 1,
              name: "Изображение 1",
              url: "google.com"
            },
            {
              id: 2,
              name: "Изображение 2",
              url: "google.com"
            },
            {
              id: 3,
              name: "Изображение 3",
              url: "google.com"
            },
            {
              id: 4,
              name: "Изображение 4",
              url: "google.com"
            },
          ]
        },
        {
          id: 4,
          category: ["javascript"],
          name: "geniapolis.ru",
          url: "#",
          github: "github.com/atogz/",
          summary: 'Краткое описание проекта',
          description: 'Полное описание проекта',
          images: [
            {
              id: 1,
              name: "Изображение 1",
              url: "google.com"
            },
            {
              id: 2,
              name: "Изображение 2",
              url: "google.com"
            },
            {
              id: 3,
              name: "Изображение 3",
              url: "google.com"
            },
            {
              id: 4,
              name: "Изображение 4",
              url: "google.com"
            },
          ]
        },
        {
          id: 5,
          category: ["vue", "javascript"],
          name: "m.akvacity.ru",
          url: "google.com",
          github: "github.com/atogz/",
          summary: 'Краткое описание проекта',
          description: 'Полное описание проекта',
          images: [
            {
              id: 1,
              name: "Изображение 1",
              url: "google.com"
            },
            {
              id: 2,
              name: "Изображение 2",
              url: "google.com"
            },
            {
              id: 3,
              name: "Изображение 3",
              url: "google.com"
            },
            {
              id: 4,
              name: "Изображение 4",
              url: "google.com"
            },
          ]
        },
        {
          id: 6,
          category: ["vue", "javascript"],
          name: "akvacity АРМ менеджера",
          url: "#",
          github: "github.com/atogz/",
          summary: 'Краткое описание проекта',
          description: 'Полное описание проекта',
          images: [
            {
              id: 1,
              name: "Изображение 1",
              url: "google.com"
            },
            {
              id: 2,
              name: "Изображение 2",
              url: "google.com"
            },
            {
              id: 3,
              name: "Изображение 3",
              url: "google.com"
            },
            {
              id: 4,
              name: "Изображение 4",
              url: "google.com"
            },
          ]
        },
        {
          id: 7,
          category: ["php", "javascript"],
          name: "cba.coral.club",
          url: "#",
          github: "github.com/atogz/",
          summary: 'Краткое описание проекта',
          description: 'Полное описание проекта',
          images: [
            {
              id: 1,
              name: "Изображение 1",
              url: "google.com"
            },
            {
              id: 2,
              name: "Изображение 2",
              url: "google.com"
            },
            {
              id: 3,
              name: "Изображение 3",
              url: "google.com"
            },
            {
              id: 4,
              name: "Изображение 4",
              url: "google.com"
            },
          ]
        },
        {
          id: 8,
          category: ["vue", "javascript"],
          name: "crude template app",
          url: "#",
          github: "github.com/atogz/",
          summary: 'Краткое описание проекта',
          description: 'Полное описание проекта',
          images: [
            {
              id: 1,
              name: "Изображение 1",
              url: "google.com"
            },
            {
              id: 2,
              name: "Изображение 2",
              url: "google.com"
            },
            {
              id: 3,
              name: "Изображение 3",
              url: "google.com"
            },
            {
              id: 4,
              name: "Изображение 4",
              url: "google.com"
            },
          ]
        },
        {
          id: 9,
          category: ["php"],
          name: "модуль мотивации сотрудников",
          url: "#",
          github: "github.com/atogz/",
          summary: 'Краткое описание проекта',
          description: 'Полное описание проекта',
          images: [
            {
              id: 1,
              name: "Изображение 1",
              url: "google.com"
            },
            {
              id: 2,
              name: "Изображение 2",
              url: "google.com"
            },
            {
              id: 3,
              name: "Изображение 3",
              url: "google.com"
            },
            {
              id: 4,
              name: "Изображение 4",
              url: "google.com"
            },
          ]
        }
      ]
    }

  },
  getters: {
    getCurrentLanguage: state => {
      return state.language;
    },
    getProjectData: (state, getters) => (id) => {
     const language = getters.getCurrentLanguage;

      return state.projects[language].find( project => {
        return project.id === Number(id);
      })
    }
  },
  mutations: {
    changeLanguage(state, language) {
      return state.language = language;
    }
  },
  actions: {},
  modules: {}
});
