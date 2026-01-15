<script setup lang="ts">
import { ref } from 'vue'
import logoImage from '@/assets/photos/logo.png'
import arrowIcon from './icons/footerIcons/arrow.svg'
import twitterIcon from './icons/footerIcons/twitter.svg'
import instagramIcon from './icons/footerIcons/instagram.svg'
import facebookIcon from './icons/footerIcons/facebook.svg'
import linkedinIcon from './icons/footerIcons/linkedin.svg'
import youtubeIcon from './icons/footerIcons/youtube.svg'

const email = ref('')

const handleSubscribe = () => {
  console.log('Subscribe:', email.value)
}
</script>

<template>
  <footer>
    <div class="footer-content">
      <div class="footer-main">
        <div class="footer-left">
          <div class="logo">
            <img :src="logoImage" alt="USA TIMES" class="logo-image" />
          </div>
          <p class="brand-description">
            Delivering the highest quality journalism and premium urban services to the modern citizen.
          </p>
          <div class="newsletter">
            <h3 class="newsletter-title">SUBSCRIBE TO OUR NEWSLETTER</h3>
            <form class="newsletter-form" @submit.prevent="handleSubscribe">
              <input 
                type="email" 
                v-model="email"
                placeholder="Email address" 
                class="newsletter-input"
              />
              <button type="submit" class="newsletter-btn">
                <img :src="arrowIcon" alt="Subscribe" />
              </button>
            </form>
          </div>
          <div class="social-icons">
            <a href="#" class="social-icon">
              <img :src="twitterIcon" alt="Twitter" />
            </a>
            <a href="#" class="social-icon">
              <img :src="instagramIcon" alt="Instagram" />
            </a>
            <a href="#" class="social-icon">
              <img :src="facebookIcon" alt="Facebook" />
            </a>
            <a href="#" class="social-icon">
              <img :src="linkedinIcon" alt="LinkedIn" />
            </a>
            <a href="#" class="social-icon">
              <img :src="youtubeIcon" alt="YouTube" />
            </a>
          </div>
        </div>
        <div class="footer-right">
          <div class="nav-column">
            <h3 class="nav-title">NEWS</h3>
            <ul class="nav-links">
              <li><a href="#">World</a></li>
              <li><a href="#">U.S.</a></li>
              <li><a href="#">Politics</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Tech</a></li>
              <li><a href="#">Science</a></li>
              <li><a href="#">Health</a></li>
            </ul>
          </div>
          <div class="nav-column">
            <h3 class="nav-title">OPINION & ARTS</h3>
            <ul class="nav-links">
              <li><a href="#">Opinion</a></li>
              <li><a href="#">Arts</a></li>
              <li><a href="#">Books</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">Sports</a></li>
              <li><a href="#">Style</a></li>
            </ul>
          </div>
          <div class="nav-column">
            <h3 class="nav-title highlighted">SERVICES</h3>
            <ul class="nav-links">
              <li><a href="#">Ride</a></li>
              <li><a href="#">Apartments</a></li>
            </ul>
          </div>
          <div class="nav-column">
            <h3 class="nav-title">COMPANY</h3>
            <ul class="nav-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Advertise</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-separator"></div>
      <div class="footer-bottom">
        <span class="copyright">© 2025 USA Times Company</span>
        <div class="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Help</a>
        </div>
        <span class="footer-tagline">Designed for the Future.</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: #fff;
  padding: 64px 32px 32px;
  border-top: 1px solid #E5E7EB;
}

.footer-content {
  max-width: 1920px;
  margin: 0 auto;
}

.footer-main {
  display: flex;
  gap: 80px;
  margin-bottom: 32px;
}

.footer-left {
  flex: 0 0 400px;
}

.logo {
  margin-bottom: 32px;
}

.logo-image {
  height: 50px;
  width: auto;
}

.brand-description {
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 20px;
  color: var(--color-secondary);
  margin-bottom: 32px;
}

.newsletter {
  margin-bottom: 32px;
}

.newsletter-title {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
}

.newsletter-form {
  display: flex;
  gap: 0;
}

.newsletter-input {
  flex: 1;
  padding: 14px 16px;
  border: none;
  background: #F3F4F6;
  border-radius: 8px 0 0 8px;
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--color-primary);
  outline: none;
}

.newsletter-input::placeholder {
  color: var(--color-secondary);
}

.newsletter-btn {
  width: 48px;
  height: 48px;
  border: none;
  background: #000;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.newsletter-btn img {
  width: 16px;
  height: 16px;
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-icon {
  width: 40px;
  height: 40px;
  border: 1px solid #D1D5DB;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.social-icon img {
  width: 20px;
  height: 20px;
}

.footer-right {
  flex: 1;
  display: flex;
  gap: 64px;
}

.nav-column {
  flex: 1;
}

.nav-title {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 700;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
}

.nav-title.highlighted {
  color: var(--color-quaternary);
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links li {
  margin-bottom: 12px;
}

.nav-links a {
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--color-secondary);
  text-decoration: none;
}

.nav-links a:hover {
  color: var(--color-primary);
}

.footer-separator {
  height: 1px;
  background: #E0E0E0;
  margin-bottom: 24px;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-sans);
  font-size: 12px;
  color: var(--color-secondary);
}

.bottom-links {
  display: flex;
  gap: 24px;
}

.bottom-links a {
  color: var(--color-secondary);
  text-decoration: none;
}

.bottom-links a:hover {
  color: var(--color-primary);
}

.footer-tagline {
  font-style: italic;
}

@media (max-width: 1024px) {
  .footer-main {
    flex-direction: column;
    gap: 40px;
  }

  .footer-left {
    flex: 1;
  }

  .footer-right {
    flex-wrap: wrap;
    gap: 32px;
  }

  .nav-column {
    flex: 0 0 calc(50% - 16px);
  }
}

@media (max-width: 768px) {
  footer {
    padding: 48px 16px 20px;
  }

  .nav-column {
    flex: 0 0 100%;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>