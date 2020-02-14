import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: "en",
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
        name: "akvacity workstation",
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
        name: "crude template app",
        url: "#",
        github: "github.com/atogz/"
      },
      {
        id: 9,
        category: ["php"],
        name: "employee motivation module",
        url: "#",
        github: "github.com/atogz/"
      }
    ]
  },
  getters: {
    getCurrentLanguage: state => {
      return state.language;
    },
    getProjectData: (state) => (id) => {
      return state.projects.filter( project => {
        return project.id === id;
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
