<template>
  <header class="fixed top-0 z-50 flex pl-10 w-full justify-between">
    <div class="w-1/2 flex">
      <img
        src="../assets/image/uk.png"
        @click="changeLanguage('en')"
        class="cursor-pointer opacity-50 mr-2"
        :class="{ 'opacity-100': getLanguage === 'en' }"
      />
      <img
        src="../assets/image/russia.png"
        @click="changeLanguage('ru')"
        class="cursor-pointer opacity-50"
        :class="{ 'opacity-100': getLanguage === 'ru' }"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["language"],
  data() {
    return {
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$store.commit("changeLanguage", lang)
    }
  },
  computed: {
    getLanguage() {
      return this.$store.getters.getCurrentLanguage;
    },
  }
};
</script>

<style scoped></style>
