<script setup lang="ts">
  import { ref } from 'vue'
  import cursorIcon from './icons/cursorIcon.svg'
  
  const bookingMode = ref<'now' | 'schedule'>('now')
  const meteredRide = ref(false)
  const currentLocation = ref('')
  const destination = ref('')
  
  const useCurrentLocation = () => {
    console.log('Use current location')
  }
  
  const requestLimousine = () => {
    console.log('Request limousine', { bookingMode: bookingMode.value, meteredRide: meteredRide.value, currentLocation: currentLocation.value, destination: destination.value })
  }
  </script>

<template>
  <aside>
    <div class="booking-container">
      <div class="booking-header">
        <h1 class="booking-title">
          Go anywhere with<br />
          our Concierge
        </h1>
        <p class="booking-subtitle">Premium chauffeured service. Arrive in style.</p>
      </div>

      <div class="booking-controls">
        <div class="booking-selector">
          <button 
            :class="['mode-btn', { active: bookingMode === 'now' }]"
            @click="bookingMode = 'now'"
          >
            Now
          </button>
          <button 
            :class="['mode-btn', { active: bookingMode === 'schedule' }]"
            @click="bookingMode = 'schedule'"
          >
            Schedule
          </button>
        </div>

        <div class="toggle-container">
          <span class="toggle-label">Metered Ride</span>
          <label class="toggle-switch">
            <input 
              type="checkbox" 
              v-model="meteredRide"
            />
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <div class="input-group">
        <div class="input-wrapper">
          <input 
            type="text" 
            placeholder="Current Location" 
            class="input-field"
            v-model="currentLocation"
          />
          <button class="location-icon" @click="useCurrentLocation">
            <img :src="cursorIcon" alt="Location" width="20" height="20" />
          </button>
        </div>
        <div class="input-wrapper">
          <input 
            type="text" 
            placeholder="Where to?" 
            class="input-field"
            v-model="destination"
          />
        </div>
      </div>

      <button class="request-btn" @click="requestLimousine">
        <span>Request Limousine</span>
        ➝
      </button>

      <div class="footer-link">
        <a href="#" class="login-link">log in to see recent activity</a>
      </div>
    </div>
  </aside>
</template>

<style scoped>
aside {
  float: left;
  width: 40%;
  padding: 32px;
}

.booking-container {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.booking-header {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.booking-title {
  font-family: var(--font-tertiary);
  font-size: 48px;
  font-weight: 900;
  line-height: 40px;
  color: #101828;
  letter-spacing: -1px;
  margin-bottom: 10px;
}

.booking-subtitle {
  font-family: var(--font-secondary);
  font-size: 14px;
  font-weight: 400;
  color: var(--color-secondary);
}

.booking-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.booking-selector {
  display: flex;
  gap: 8px;
  background-color: #F3F4F6;
  padding: 4px;
  border-radius: 8px;
}

.mode-btn {
  padding: 10px 25px;
  border: none;
  background-color: transparent;
  border-radius: 6px;
  font-family: var(--font-secondary);
  font-size: 14px;
  font-weight: 700;
  color: var(--color-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.mode-btn.active {
  background-color: #ffffff;
  color: #000;
}

.mode-btn:hover:not(.active) {
  background-color: #E5E7EB;
}

.toggle-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toggle-label {
  font-family: var(--font-secondary);
  font-size: 14px;
  color: #101828;
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #D1D5DB;
  transition: 0.3s;
  border-radius: 24px;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.3s;
  border-radius: 50%;
}

.toggle-switch input:checked + .toggle-slider {
  background-color: #000000;
}

.toggle-switch input:checked + .toggle-slider:before {
  transform: translateX(20px);
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-field {
  width: 100%;
  padding: 20px 16px;
  border: none;
  background-color: #F3F4F6;
  border-radius: 8px;
  font-family: var(--font-secondary);
  font-size: 14px;
  color: #101828;
  outline: none;
  transition: background-color 0.2s ease;
}

.input-field::placeholder {
  color: #6A7282;
}

.input-field:focus {
  background-color: #E5E7EB;
}

.location-icon {
  position: absolute;
  right: 16px;
  top: 15px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.location-icon:hover {
  opacity: 0.7;
}

.request-btn {
  width: 100%;
  padding: 14px 20px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: var(--font-secondary);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s ease;
}

.request-btn:hover {
  background-color: #030020;
}

.request-btn:active {
  background-color: #0F172A;
}

.footer-link {
  text-align: center;
}

.login-link {
  font-family: var(--font-secondary);
  font-size: 12px;
  font-weight: 500;
  color: #6A7282;
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: color 0.2s ease;
  text-transform: uppercase;
}

.login-link:hover {
  color: #101828;
}
</style>