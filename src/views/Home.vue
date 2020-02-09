<template>
  <div class="main full flex  items-center justify-center">
    <div class="w-3/12"></div>
    <div
      class="w-6/12 flex flex-col text-white font-bold uppercase text-center"
    >
      <span class="w-full name text-bold">{{ name }}</span>
      <span class="w-full surname">{{ surname }}</span>
      <span class="w-full description text-xl text-black"
        >Fullstack Web Developer & IT Project Manager</span
      >
    </div>
    <div class="w-3/12"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      name: "Павел",
      surname: "Трофимов"
    };
  }
};
</script>

<style>
.main {
  background-image: url("../assets/image/bg_home_1.png");
  height: 100vh;
  background-size: cover;
  font-family: "Montserrat Bold", sans-serif;
  line-height: 4.75em;
}
.name {
  font-size: 4em;
}
.surname {
  font-size: 6em;
}
.description {
  text-transform: none;
  font-family: "Montserrat", sans-serif;
}
</style>
