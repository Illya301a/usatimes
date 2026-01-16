<script setup>
import { computed, reactive } from 'vue'
import Header from './components/Header.vue'
import Trending from './components/Trending.vue'
import Market from './components/Market.vue'
import Main from './components/Main.vue'
import Aside from './components/Aside.vue'
import Footer from './components/Footer.vue'

const loadState = reactive({
  main: false,
  trending: false,
  market: false
})

const allReady = computed(() => loadState.main && loadState.trending && loadState.market)
</script> 

<template>
  <div class="app-shell" :class="{ 'is-ready': allReady }">
    <Header />
    <Trending @loaded="loadState.trending = true" />
    <Market @loaded="loadState.market = true" />
    <section class="layout">
      <Main @loaded="loadState.main = true" />
      <Aside />
    </section>
    <Footer />
  </div>
  <div v-if="!allReady" class="app-loader">
    Loading...
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  align-items: flex-start;
}

.app-shell {
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s ease;
}

.app-shell.is-ready {
  opacity: 1;
  visibility: visible;
}

.app-loader {
  position: fixed;
  inset: 0;
  background: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--color-secondary);
  z-index: 2;
}

@media (max-width: 1024px) {
  .layout {
    flex-direction: column;
  }
}
</style>