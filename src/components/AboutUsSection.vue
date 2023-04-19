import Button from './Button.vue'

<template>
  <div class="about-us flex items-center space-x-9 mb-24">
    <div class="about-us--left">
      <div class="img">
        <img src="../assets/img/about-graphics.webp">
      </div>
    </div>
    <div class="about-us--right text-primary">
      <h2 class="text-5xl tracking-tighter leading-none font-light"><span class="font-bold">About Us</span><br>Fake or Real</h2>
      <br>
      <p class="text-clrLightPurple">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <br>
      <p class="text-clrLightPurple">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <br>
      <button class="btn bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        EXPLORE MORE
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUsSection",
};
</script>

<style scoped>
.about-us {
  
}

.about-us__element {
  
}

.about-us--left {
  width: 52.35%;
}

.about-us--right {
  width: 38%;

}
</style>