<template>
  <header class="absolute top-0 z-50 flex pl-10 w-full justify-between">
    <div class="w-1/2 flex">
      <img
        src="../assets/image/uk.png"
        @click="changeLanguage('en')"
        class="cursor-pointer opacity-50 mr-2"
        :class="{ 'opacity-100': lang === 'en' }"
      />
      <img
        src="../assets/image/russia.png"
        @click="changeLanguage('ru')"
        class="cursor-pointer opacity-50"
        :class="{ 'opacity-100': lang === 'ru' }"
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
      lang: null
    };
  },
  methods: {
    changeLanguage(lang) {
      this.lang = lang;
      this.$emit("test", this.lang);
    }
  },
  created() {
    this.lang = this.language;
  }
};
</script>

<style scoped></style>
