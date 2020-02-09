<template>
  <main class="about flex w-full items-end">
    <div class="w-full flex about-container">
      <div class="w-1/5"></div>
      <div
        class="w-2/5 about-img h-full ml-20 flex justify-center items-center"
      >
        <img src="../assets/image/logo.png" />
      </div>
      <div class="w-3/5 relative about-text flex flex-col items-center justify-center">
        <p class="w-full text-2xl leading-loose">
          I'm a UX/UI designer Austin based, who loves clean, simple & unique
          design. I also enjoy crafting brand identities, icons, & illustration
          work.
        </p>
        <p class="w-full text-sm text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
          erat sed elit sceleris Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec quis erat sed elit scelerisque iaculis. Nullam
          nec porttitor justo, at iaculis risus. Aliquam erat volutpat. que
          iaculis.
        </p>
          <div class="w-full text-center text-bold uppercase text-white mt-8">
              <span class="border-b-2 border-white pb-1">my profile</span>
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
  background-image: url("../assets/image/about_bg.png");
  height: 100vh;
  background-size: cover;
  background-position: center;
  font-family: "Montserrat Bold", sans-serif;
  line-height: 4.75em;
}
.about-container {
  height: 60vh;
}
.about-img {
  background-color: #ececec;
}
.about-text {
  font-family: "Montserrat", sans-serif;
  left: -5%;
  line-height: 20px;
}
</style>
