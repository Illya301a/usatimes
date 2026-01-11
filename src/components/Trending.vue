<script setup>
import { ref, onMounted, computed } from 'vue'
import trendingIcon from './icons/mainIcons/Trending.svg'

const articles = ref([])

const duplicatedArticles = computed(() => [...articles.value, ...articles.value])

onMounted(async () => {
  try {
    const response = await fetch('https://uat.usatimes.com/api/articles')
    const data = await response.json()
    articles.value = data.data?.map(article => article.title) || []
  } catch (error) {
    console.error('Failed to fetch articles:', error)
  }
})
</script>

<template>
  <div class="trending">
    <div class="trending-header">
      <img :src="trendingIcon" alt="Trending" class="trending-icon" />
      <span class="trending-title">TRENDING</span>
    </div>
    <div v-if="articles.length" class="trending-ticker">
      <div class="trending-content">
        <template v-for="(title, index) in duplicatedArticles" :key="index">
          <a href="#" class="trending-item">{{ title }}</a>
          <span class="trending-separator">•</span>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trending {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  max-width: 1920px;
  margin: 0 auto;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  overflow: hidden;
}

.trending-header {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.trending-icon {
  width: 16px;
  height: 16px;
}

.trending-title {
  font-family: var(--font-secondary);
  font-weight: 700;
  font-size: 14px;
  color: var(--color-quaternary);
  text-transform: uppercase;
}

.trending-ticker {
  flex: 1;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(to right, transparent 0%, black 60px, black calc(100% - 60px), transparent 100%);
}

.trending-content {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  animation: scroll 60s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.trending-item {
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 14px;
  color: #1E2939;
  text-decoration: none;
  text-transform: capitalize;
}

.trending-item:hover {
  text-decoration: underline;
}

.trending-separator {
  color: #D1D5DC;
  font-size: 13px;
  margin: 0 32px 0 56px;
}
</style>
