<template>
  <main class="welcome full flex flex-col justify-center ">
    <div class="w-full flex justify-center absolute top-0 mt-4">
      <span class="logo pt-0 pb-0 pr-3 pl-3 rounded-full">.atogzweb</span>
    </div>
    <div
      class="w-full flex flex-col text-white font-bold uppercase text-center"
    >
      <span class="w-full name text-bold">{{ getContent.name }}</span>
      <span class="w-full surname">{{ getContent.surname }}</span>
      <span class="w-full description text-xl"
        >Fullstack Web Developer & IT Project Manager</span
      >
    </div>
    {{ dummy.wheelDelta }}
  </main>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      dummy: {},
      language: "",
      content: {
        en: {
          name: "Pavel",
          surname: "Trofimov"
        },
        ru: {
          name: "Павел",
          surname: "Трофимов",
          helloMessage: "кто я",
          helloMessageTitle: "привет"
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
      this.dummy = event;
      console.log(this.dummy);
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (event.wheelDelta <= 0 || event.key === "ArrowDown") {
          this.$router.push("/about");
        }
      }
    }
  },
  created() {
    window.addEventListener("wheel", this.navigate);
    window.addEventListener("keyup", this.navigate);
    window.addEventListener("touchstart", this.navigate);
  },
  destroyed() {
    window.removeEventListener("wheel", this.navigate);
    window.removeEventListener("keyup", this.navigate);
    window.removeEventListener("touchstart", this.navigate);
  }
};
</script>

<style>
.welcome {
  background-image: url("../assets/image/welcome_bg.png");
  height: 100vh;
  background-size: cover;
  background-position: center;
  font-family: "Montserrat Bold", sans-serif;
  line-height: 4.75em;
}
.logo {
  background-color: #6f43d6;
  color: #fff;
}
.name {
  font-size: 4em;
}
.surname {
  font-size: 6em;
}
.description {
  font-size: 30px;
  color: #232227;
  text-transform: none;
  font-family: "Montserrat", sans-serif;
}
</style>
