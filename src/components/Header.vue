<script setup>
import logoImage from '@/assets/photos/logo.png'
import searchIcon from './icons/navbarIcons/SearchIcon.svg'
import rideIcon from './icons/navbarIcons/RideIcon.svg'
import apartmentsIcon from './icons/navbarIcons/ApartmentsIcon.svg'

const date = new Date()
const currentDate = date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
})
</script>

<template>
  <header>
    <div class="header-top">
      <div class="header-left">
        <h1 class="header-date">{{ currentDate }}</h1>
        <span class="header-subtitle">today's paper</span>
      </div>
      
      <div class="header-center">
        <img :src="logoImage" alt="USA TIMES" class="logo-image" />
      </div>
      
      <div class="header-right">
        <button class="search-button">
          <img :src="searchIcon" alt="Search" width="20" height="20" />
        </button>
        <a href="#" class="login-link">log in</a>
        <button class="subscribe-btn">subscribe</button>
      </div>
    </div>

    <nav class="header-nav">
      <a href="#">news</a>
      <a href="#">business</a>
      <a href="#">opinion</a>
      <a href="#">tech</a>
      <a href="#">science</a>
      <a href="#">health</a>
      <a href="#">sports</a>
      <a href="#">arts</a>
      <span class="nav-separator"></span>
      <a href="#">
        <img :src="rideIcon" alt="Ride" class="nav-icon" />
        ride
      </a>
      <a href="#">
        <img :src="apartmentsIcon" alt="Apartments" class="nav-icon" />
        apartments
      </a>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
}

.header-top,
.header-nav {
  max-width: 1920px;
  margin: 0 auto;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 32px;
}

.header-left {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.header-date {
  color: var(--color-primary);
  font-family: var(--font-secondary);
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
}

.header-subtitle {
  color: var(--color-secondary);
  font-family: var(--font-secondary);
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

.header-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.logo-image {
  height: 50px;
  width: auto;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  justify-content: flex-end;
  text-transform: uppercase;
}

.search-button {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-primary);
  padding: 5px;
  display: flex;
  align-items: center;
}

.login-link,
.subscribe-btn {
  font: 700 15px/1 var(--font-secondary);
}

.login-link {
  color: var(--color-primary);
  text-decoration: none;
}

.subscribe-btn {
  background: var(--color-quaternary);
  color: #fff;
  border: none;
  padding: 8px 15px;
  border-radius: 25px;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 12px 20px;
  border-top: 1px solid #e0e0e0;
  text-transform: uppercase;
}

.header-nav a {
  color: var(--color-tertiary);
  text-decoration: none;
  font: 700 15px/1 var(--font-secondary);
  display: flex;
  align-items: center;
  gap: 5px;
  letter-spacing: 0.6px;
}

.nav-separator {
  width: 1px;
  height: 16px;
  background: #e0e0e0;
}

.nav-separator ~ a {
  color: var(--color-quaternary);
}

.nav-icon {
  width: 16px;
  height: 16px;
}
</style>
