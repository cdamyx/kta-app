<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Button from '@/components/Button.vue'
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Categories from '@/components/Categories.vue'
import AboutUsSection from '@/components/AboutUsSection.vue'
import PreFooter from '@/components/PreFooter.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div>
    <Header></Header>
    <Hero></Hero>
    <Categories></Categories>
    <AboutUsSection></AboutUsSection>
    <PreFooter></PreFooter>
    <Footer></Footer>
  </div>
</template>

<style scoped>

</style>
