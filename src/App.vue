<script setup>
import Header from './components/Header.vue'
import Trending from './components/Trending.vue'
import Market from './components/Market.vue'
import Content from './components/Content.vue'
import Aside from './components/Aside.vue'
</script> 

<template>
  <Header />
  <main>
    <Trending />
    <Market />
    <Content />
  </main>
  <Aside />
</template>