<template>
  <main class="welcome full flex flex-col justify-center ">
    <div class="w-full flex justify-center absolute top-0 mt-4">
      <span class="logo pt-0 pb-0 pr-3 pl-3 rounded-full">.atogzweb</span>
    </div>
    <div
      class="w-full flex flex-col text-white font-bold uppercase text-center"
    >
      <span class="w-full name text-bold">{{ name }}</span>
      <span class="w-full surname">{{ surname }}</span>
      <span class="w-full description text-xl"
        >Fullstack Web Developer & IT Project Manager</span
      >
    </div>
  </main>
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
