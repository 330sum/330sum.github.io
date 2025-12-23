<template>
  <header class="header">
    <!-- 로고 -->
    <RouterLink to="/" class="logo">sumin</RouterLink>

    <!-- 데스크톱 네비 -->
    <nav class="nav desktop">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/resume" class="nav-link">Resume</RouterLink>
      <RouterLink to="/portfolio" class="nav-link">Portfolio</RouterLink>
      <RouterLink to="/personal-map" class="nav-link">Map</RouterLink>

      <button class="lang-btn" @click="toggleLanguage">
        {{ language === 'kr' ? 'EN' : 'KR' }}
      </button>
    </nav>

    <!-- 모바일 햄버거 -->
    <button class="hamburger" @click="open = !open">☰</button>

    <!-- 모바일 메뉴 -->
    <nav v-if="open" class="nav mobile">
      <RouterLink @click="close" to="/">Home</RouterLink>
      <RouterLink @click="close" to="/resume">Resume</RouterLink>
      <RouterLink @click="close" to="/portfolio">Portfolio</RouterLink>
      <RouterLink @click="close" to="/personal-map">Map</RouterLink>

      <button class="lang-btn" @click="toggleLanguage">
        {{ language === 'kr' ? 'EN' : 'KR' }}
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { language, toggleLanguage } from '@/stores/useLanguage';

const open = ref(false);
const close = () => (open.value = false);
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
}

.logo {
  font-size: 1.4rem;
  font-weight: 700;
  text-decoration: none;
  color: #0f172a;
}

.nav {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  font-size: 0.95rem;
  color: #475569;
  padding: 4px 0;
  transition: color 0.2s ease;
}

/* hover */
.nav-link:hover {
  color: #0f172a;
}
/* active (RouterLink 기본 클래스 사용) */
.nav-link.router-link-active {
  color: #0f172a;
  font-weight: 600;
}

.lang-btn {
  border: 1px solid #cbd5f5;
  background: white;
  padding: 4px 10px;
  cursor: pointer;
}

.hamburger {
  display: none;
  font-size: 1.4rem;
  background: none;
  border: none;
}

.desktop {
  display: flex;
}

.mobile {
  position: absolute;
  top: 64px;
  right: 16px;
  flex-direction: column;
  background: white;
  padding: 16px;
  border: 1px solid #e5e7eb;
  gap: 12px;
}

@media (max-width: 768px) {
  .desktop {
    display: none;
  }
  .hamburger {
    display: block;
  }
}
</style>
