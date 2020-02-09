<template>
  <main class="about flex w-full items-end">
    <div class="w-full flex">
      <div class="w-full">
        <div class="w-1/3 ml-48 flex h-full mb-10 bg-gray-300">
          <img src="../assets/image/logo.png" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "About",
  components: {},
  data() {
    return {};
  }
};
</script>

<style>
.about {
  background-image: url("../assets/image/bg_home_2.png");
  height: 100vh;
  background-size: cover;
  background-position: center;
  font-family: "Montserrat Bold", sans-serif;
  line-height: 4.75em;
}
</style>
