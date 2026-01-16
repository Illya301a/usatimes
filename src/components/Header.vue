<script setup>
import logoImage from '@/assets/photos/logo.png'
import searchIcon from './icons/headerIcons/SearchIcon.svg'
import rideIcon from './icons/headerIcons/RideIcon.svg'
import apartmentsIcon from './icons/headerIcons/ApartmentsIcon.svg'

import { ref } from 'vue'

const date = new Date()
const currentDate = date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
})

const isMenuOpen = ref(false)
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
      <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen" aria-label="Toggle menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu w-5 h-5" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
      </button>
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
    <div class="menu-overlay" :class="{ open: isMenuOpen }" @click.self="isMenuOpen = false">
      <aside class="menu-panel">
        <div class="menu-header">
          <img :src="logoImage" alt="USA TIMES" class="menu-logo" />
          <button class="menu-close" @click="isMenuOpen = false" aria-label="Close menu">×</button>
        </div>
        <nav class="menu-links">
          <a href="#">News</a>
          <a href="#">Business</a>
          <a href="#">Opinion</a>
          <a href="#">Tech</a>
          <a href="#">Science</a>
          <a href="#">Ride</a>
          <a href="#">Apartments</a>
        </nav>
        <div class="menu-actions">
          <button class="menu-subscribe">Subscribe Now</button>
          <button class="menu-login">Log In</button>
        </div>
      </aside>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
}

.header-subtitle {
  color: var(--color-secondary);
  font-family: var(--font-sans);
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

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin-left: 8px;
}

.menu-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-primary);
  margin: 4px 0;
}

.search-button {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-primary);
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 6px;
}

.search-button:hover {
  background-color: #f3f4f6;
  transition: background-color 0.2s ease;
}

.login-link,
.subscribe-btn {
  font: 700 15px/1 var(--font-sans);
}

.login-link {
  color: var(--color-primary);
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 25px;
  transition: background-color 0.2s ease;
}

.login-link:hover {
  background-color: #f3f4f6;
}

.subscribe-btn {
  background: var(--color-quaternary);
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 25px;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: scale(1);
  transition: transform 0.2s ease;
}

.subscribe-btn:hover {
  transform: scale(1.05);
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
  font: 700 15px/1 var(--font-sans);
  display: flex;
  align-items: center;
  gap: 5px;
  letter-spacing: 0.6px;
  transition: color 0.2s ease;
}

.header-nav a:hover {
  color: #000;
}

.nav-separator {
  width: 1px;
  height: 16px;
  background: #e0e0e0;
}

.nav-separator ~ a {
  color: var(--color-quaternary);
}

.nav-separator ~ a:hover {
  color: oklch(48.8% 0.243 264.376);
  transition: color 0.2s ease;
}

.nav-icon {
  width: 16px;
  height: 16px;
}

@media (max-width: 1024px) {
  .header-top {
    padding: 12px 24px;
  }

  .logo-image {
    height: 44px;
  }

  .header-nav {
    gap: 20px;
    flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  .header-left {
    display: none;
  }

  .header-top {
    padding: 12px 16px;
  }

  .logo-image {
    height: 40px;
  }

  .header-right {
    display: none;
  }

  .menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .header-nav {
    display: none;
  }
}

.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 120;
}

.menu-overlay.open {
  opacity: 1;
  pointer-events: auto;
}

.menu-panel {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  max-width: 420px;
  background: #fff;
  padding: 20px 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  box-shadow: -8px 0 24px rgba(0, 0, 0, 0.08);
}

.menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu-logo {
  height: 40px;
  width: auto;
}

.menu-close {
  background: none;
  border: none;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  color: var(--color-primary);
}

.menu-links {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.menu-links a {
  font-family: var(--font-sans);
  font-size: 22px;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
}

.menu-actions {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.menu-subscribe {
  background: var(--color-quaternary);
  color: #fff;
  border: none;
  padding: 14px 20px;
  border-radius: 999px;
  font-weight: 700;
  cursor: pointer;
}

.menu-login {
  background: #fff;
  color: var(--color-primary);
  border: 1px solid #e0e0e0;
  padding: 12px 20px;
  border-radius: 999px;
  font-weight: 700;
  cursor: pointer;
}

@media (min-width: 769px) {
  .menu-overlay {
    display: none;
  }
}
</style>
