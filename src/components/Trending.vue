<script setup>
import { ref, onMounted, computed } from 'vue'
import trendingIcon from './icons/mainIcons/Trending.svg'
import { fetchArticles } from '../composables/useApi'

const articles = ref([])

const duplicatedArticles = computed(() => [...articles.value, ...articles.value])

const emit = defineEmits(['loaded'])

onMounted(async () => {
  try {
    const data = await fetchArticles()
    articles.value =
      data?.map(article => ({
        title: article.title,
        link: article.link || '#'
      })) || []
  } catch (error) {
    console.error('Failed to fetch articles:', error)
  } finally {
    emit('loaded')
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
        <template v-for="(article, index) in duplicatedArticles" :key="index">
          <a :href="article.link" class="trending-item">{{ article.title }}</a>
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
  background: var(--color-white);
  border-bottom: 1px solid var(--color-border-strong);
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
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 14px;
  color: var(--color-quaternary);
  text-transform: uppercase;
}

.trending-ticker {
  flex: 1;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(to right, transparent 0%, black 40px, black calc(100% - 40px), transparent 100%);
}

.trending-content {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  animation: scroll 90s linear infinite;
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
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: 14px;
  color: #1E2939;
  text-decoration: none;
  text-transform: capitalize;
  transition: color 0.2s ease;
}

.trending-item:hover {
  color: var(--color-quaternary);
}

.trending-separator {
  color: var(--color-gray-300);
  font-size: 13px;
  margin: 0 32px 0 56px;
}

@media (max-width: 768px) {
  .trending {
    padding: 12px 16px;
  }

  .trending-separator {
    margin: 0 16px 0 24px;
  }
}
</style>
