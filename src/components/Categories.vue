<template>
  <div class="categories bg-clrLightBlue rounded-tr-huge relative left-[-48px] mb-24">
    <div class="top flex items-center justify-center">
      <h2 class="font-normal py-24 text-5xl text-primary leading-none"><span class="font-bold">What We Do</span>
      <br>
      For Your Business</h2>
    </div>
    <div class="bottom flex space-x-9 relative left-[50px] pb-24">
      <Category></Category>
      <Category></Category>
      <Category></Category>
      <Category></Category>
    </div>
  </div>
</template>

<script>
import Category from './Category.vue'

export default {
  name: "Categories",
  components: {
    Category
  },
  props: ['icon'],
  setup(props) {
    console.log(props.icon)
  }
};
</script>

<style scoped>
.categories {
  
}

</style>