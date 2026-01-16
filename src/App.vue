<script setup>
import Header from './components/Header.vue'
import Trending from './components/Trending.vue'
import Market from './components/Market.vue'
import Main from './components/Main.vue'
import Aside from './components/Aside.vue'
import Footer from './components/Footer.vue'
</script> 

<template>
  <Header />
  <Trending />
  <Market />
  <section class="layout">
    <Main />
    <Aside />
  </section>
  <Footer />
</template>

<style scoped>
.layout {
  display: flex;
  align-items: flex-start;
}

@media (max-width: 1024px) {
  .layout {
    flex-direction: column;
  }
}
</style>