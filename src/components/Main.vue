<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue'
import { fetchArticles } from '../composables/useApi'

const emit = defineEmits(['loaded'])

const articles = ref([])
const currentIndex = ref(0)
const relatedIndex = ref(0)
let intervalId = null
let relatedIntervalId = null

const currentArticle = computed(() => articles.value[currentIndex.value])

const firstArticle = computed(() => articles.value[relatedIndex.value * 2 + 1])
const secondArticle = computed(() => articles.value[relatedIndex.value * 2 + 2])

onMounted(async () => {
  try {
    articles.value = await fetchArticles()
  } catch (error) {
    console.error('Failed to fetch articles:', error)
  } finally {
    emit('loaded')
  }

  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % 5
  }, 5000)
  
  relatedIntervalId = setInterval(() => {
    relatedIndex.value = (relatedIndex.value + 1) % 4
  }, 5000)
})

onUnmounted(() => {
  clearInterval(intervalId)
  clearInterval(relatedIntervalId)
})

</script>

<template>
  <div class="content">
    <Transition name="fade" mode="out-in">
      <div
        v-if="currentArticle?.image_url"
        :key="currentArticle.id"
        class="content-image">
        <img :src="currentArticle.image_url" :alt="currentArticle.title" />
        <div class="content-image-overlay">
          Photo: {{ currentArticle.author || 'USA Times' }}
        </div>
      </div>
    </Transition>

    <div class="content-article" v-if="currentArticle">
      <Transition name="fade" mode="out-in">
        <div :key="currentArticle.id">
          <div class="article-meta">
            <span class="article-category">{{ currentArticle.type || '' }}</span>
            <span class="article-read-time">4 min read</span>
          </div>

          <div class="content-info">
            <h2 class="article-title clamp-3">{{ currentArticle.title }}</h2>
            <p class="article-description clamp-3">{{ currentArticle.description }}</p>
            <div>
              <a :href="currentArticle.link" class="article-link">
                read full story
                <span>➔</span>
              </a>

              <div class="article-dots">
                <button
                  v-for="(article, index) in articles.slice(0, 5)"
                  :key="index"
                  type="button"
                  class="dot"
                  :class="{ active: index === currentIndex }"
                  :aria-label="`Open article ${index + 1}`"
                  @click="currentIndex = index">
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <div class="content-opinion">
        <div class="opinion-header">
          <h2 class="opinion-text">opinion & analysis</h2>
          <a href="#" class="opinion-view">view all<span>➔</span></a>
        </div>

        <div class="content-analysis">
          <div class="analysis-item">
            <div class="item-title">The Future of Urban Mobility</div>
            <div class="item-subtitle">thomas friedman</div>
          </div>

          <div class="analysis-item">
            <div class="item-title">Why Renting is the New Buying</div>
            <div class="item-subtitle">paul krugman</div>
          </div>

          <div class="analysis-item">
            <div class="item-title">Tech Stagination in 2025</div>
            <div class="item-subtitle">kara swisher</div>
            </div>
            
            <div class="analysis-item">
              <div class="item-title">Designing for the Next Decade</div>
            <div class="item-subtitle">jony ive</div>
          </div>
        </div>
      </div>

      <div class="content-related">
        <div class="related-row" v-if="firstArticle && secondArticle">
          <Transition name="fade" mode="out-in">
            <div :key="relatedIndex" class="related-pair">
              <a class="related-item" :href="firstArticle.link || '#'">
                <div class="related-image" v-if="firstArticle.image_url">
                  <img :src="firstArticle.image_url" :alt="firstArticle.title" />
                </div>
                <div class="related-content">
                  <span class="related-category">{{ firstArticle.type || '' }}</span>
                  <h3 class="related-title clamp-2">{{ firstArticle.title }}</h3>
                  <p class="related-description clamp-2">{{ firstArticle.description }}</p>
                </div>
              </a>
              <a class="related-item" :href="secondArticle.link || '#'">
                <div class="related-image" v-if="secondArticle.image_url">
                  <img :src="secondArticle.image_url" :alt="secondArticle.title" />
                </div>
                <div class="related-content">
                  <span class="related-category">{{ secondArticle.type || '' }}</span>
                  <h3 class="related-title clamp-2">{{ secondArticle.title }}</h3>
                  <p class="related-description clamp-2">{{ secondArticle.description }}</p>
                </div>
              </a>
            </div>
          </Transition>
        </div>
        <div class="related-dots">
          <button
            v-for="index in 4"
            :key="index"
            type="button"
            class="related-dot"
            :class="{ active: index - 1 === relatedIndex }"
            :aria-label="`Open related set ${index}`"
            @click="relatedIndex = index - 1">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  max-width: 60%;
  padding: 32px 48px;
  border-right: 1px solid var(--color-gray-100);
}

.content-image {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 970px;
}

.content-image img {
  width: 970px;
  height: 545px;
  max-width: 100%;
  object-fit: cover;
  border-radius: 10px;
  display: block;
}

.content-image-overlay {
  position: absolute;
  bottom: 16px;
  right: 16px;
  padding: 6px 12px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  color: var(--color-white);
  font-family: var(--font-sans);
  font-size: 12px;
  line-height: 1.4;
}

.content-article {
  margin-top: 32px;
  max-width: 970px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.article-category {
  padding: 4px 12px;
  border: 1px solid var(--color-quaternary);
  border-radius: 20px;
  color: var(--color-quaternary);
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  background: var(--color-white);
}

.article-read-time {
  color: var(--color-secondary);
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
}

.content-info {
  max-width: 768px;
  height: 400px;
  padding-right: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;
}

.article-title {
  font-family: var(--font-serif);
  font-weight: 900;
  font-size: 60px;
  line-height: 60px;
  color: var(--color-primary);
  margin-bottom: 15px;
  overflow: hidden;
}

.article-description {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: var(--color-secondary);
  overflow: hidden;
}

.article-link {
  display: inline-flex;
  align-items: center;
  margin-bottom: 32px;
  color: var(--color-quaternary);
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
}

.article-link:hover span {
  margin-left: 10px;
}

.article-link span {
  font-size: 16px;
  margin-left: 5px;
  transition: margin-left 0.3s ease;
}

.article-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: var(--color-gray-300);
  padding: 0;
  cursor: pointer;
}

.dot.active {
  background: var(--color-quaternary);
  width: 10px;
  height: 10px;
}

.content-opinion {
  border-block: 1px solid rgba(0, 0, 0, 0.1);
  padding-block: 30px;
}

.opinion-header {
  display: flex;
  justify-content: space-between;
}

.opinion-text {
  font-family: var(--font-sans);
  font-weight: 900;
  font-size: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--color-black);
  padding-bottom: 24px;
}

.opinion-view, .opinion-view span {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 14px;
  color: var(--color-gray-400);
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.opinion-view:hover, .opinion-view:hover span {
  color: var(--color-quaternary);
}

.opinion-view span {
  font-size: 16px;
  margin-left: 5px;
}

.content-analysis {
  display: flex;
  gap: 24px;
}

.analysis-item {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: 30px;
}

.analysis-item:last-child {
  border-right: none;
  margin-right: 0;
}

.analysis-item:hover .item-title {
  color: var(--color-quaternary);
}

.item-title {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: var(--color-primary);
  padding-bottom: 16px;
  transition: color 0.3s ease;
}

.item-subtitle {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 12px;
  color: var(--color-gray-400);
  line-height: 1.6;
  letter-spacing: 1.12px;
  text-transform: uppercase;
}

.content-related {
  margin-top: 40px;
}

.related-row {
  margin-bottom: 40px;
}

.related-pair {
  display: flex;
  justify-content: space-between;
  gap: 24px;
}

.related-item {
  display: block;
  width: 50%;
  text-decoration: none;
  color: inherit;
}

.related-item:hover .related-title{
  color: var(--color-quaternary);
}

.related-image {
  width: 100%;
  aspect-ratio: 470 / 290;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 16px;
}

.related-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.related-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.related-category {
  color: var(--color-quaternary);
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
}

.related-title {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 28px;
  line-height: 1.3;
  color: var(--color-primary);
  margin: 0;
  transition: color 0.3s ease;
}

.clamp-2{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.clamp-3{
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.related-description {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-secondary);
  margin-bottom: 20px;
}

.related-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.related-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-gray-300);
  border: none;
  padding: 0;
  cursor: pointer;
}

.related-dot.active {
  background: var(--color-quaternary);
  width: 10px;
  height: 10px;
}

@media (max-width: 1024px) {
  .content {
    max-width: 100%;
    padding: 24px 24px;
    border-right: none;
  }
}

@media (max-width: 768px) {
  .content {
    padding: 20px 16px;
  }

  .content-info {
    height: auto;
    padding-right: 0;
    margin-bottom: 32px;
  }

  .article-link {
    margin-top: 32px;
  }

  .opinion-view {
    margin-bottom: 32px;
  }

  .content-image img {
    max-height: 210px;
  }

  .article-title {
    font-size: 36px;
    line-height: 40px;
  }

  .related-pair {
    flex-direction: column;
  }

  .related-item {
    width: 100%;
  }

  .opinion-header {
    flex-direction: column;
    gap: 8px;
  }

  .content-analysis {
    flex-direction: column;
  }

  .analysis-item {
    border-right: none;
    margin-right: 0;
  }
}

</style>