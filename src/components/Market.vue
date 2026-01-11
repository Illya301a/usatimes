<script setup>
import { ref, onMounted } from 'vue'
import marketUp from './icons/mainIcons/marketUp.svg'
import marketDown from './icons/mainIcons/marketDown.svg'

const stocks = ref([])

onMounted(async () => {
  try {
    const response = await fetch('https://uat.usatimes.com/api/market')
    const data = await response.json()
    stocks.value = data.stocks || []
  } catch (error) {
    console.error('Failed to fetch market data:', error)
  }
})

const formatNumber = (num) => {
  return num >= 0 ? `+${num.toFixed(2)}` : num.toFixed(2)
}
</script>

<template>
  <div class="market">
    <div class="market-header">
      <div class="market-dot"></div>
      <div>
        <h2 class="market-title">MARKETS LIVE</h2>
        <span class="market-subtitle">Real-time Data</span>
      </div>
    </div>
    
    <div 
      v-for="stock in stocks" 
      :key="stock.symbol" 
      class="market-card"
    >
      <div class="market-card-top">
        <div class="market-name-group">
          <span class="market-name">{{ stock.name }}</span>
          <span class="market-symbol">{{ stock.symbol }}</span>
        </div>
        <img 
          :src="stock.changeValue >= 0 ? marketUp : marketDown" 
          alt=""
          class="market-arrow"
        />
      </div>
      <div class="market-card-bottom">
        <div class="market-price">${{ stock.price.toFixed(2) }}</div>
        <div 
          class="market-change" 
          :class="{ positive: stock.changeValue >= 0, negative: stock.changeValue < 0 }"
        >
          {{ formatNumber(stock.changeValue) }} ({{ formatNumber(stock.changePercent) }}%)
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.market {
  width: 100%;
  padding-block: 16px;
  border-bottom: 1px solid #F3F4F6;
  background: #F9FAFB80;
  display: flex;
  align-items: center;
  overflow: auto;
}

.market-header {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  padding-inline: 24px;
  position: relative;
}

.market-header::after,
.market-card:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 20%;
  bottom: 20%;
  width: 1px;
  background: #e0e0e0;
}

.market-dot {
  width: 8px;
  height: 8px;
  background: #00C950;
  border-radius: 50%;
}

.market-title,
.market-subtitle {
  font-family: var(--font-secondary);
  line-height: 1.2;
  margin: 0;
}

.market-title {
  font-weight: 900;
  font-size: 14px;
  color: var(--color-primary);
}

.market-subtitle {
  font-weight: 400;
  font-size: 11px;
  color: var(--color-secondary);
}

.market-card {
  min-width: 200px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  flex-shrink: 0;
}

.market-card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.market-name-group {
  display: flex;
  align-items: center;
  gap: 4px;
}

.market-name,
.market-symbol,
.market-price,
.market-change {
  font-family: var(--font-secondary);
}

.market-name {
  font-weight: 700;
  color: var(--color-primary);
}

.market-symbol {
  font-weight: 400;
  font-size: 14px;
  color: var(--color-secondary);
}

.market-arrow {
  width: 12px;
  margin-left: 10px;
}

.market-card-bottom {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.market-price {
  font-weight: 700;
  font-size: 18px;
  color: var(--color-primary);
}

.market-change {
  font-weight: 500;
  font-size: 13px;
}

.market-change.positive {
  color: #00C950;
}

.market-change.negative {
  color: #D32F2F;
}
</style>
