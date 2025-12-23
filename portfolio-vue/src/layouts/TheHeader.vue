<template>
  <header class="header">

    <div class="logo">
      <RouterLink to="/">sumin</RouterLink>
    </div>

    <nav>
      <ul class="nav">
        <li>
          <RouterLink to="/" class="nav-link">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/resume" class="nav-link">Resume</RouterLink>
        </li>
        <li>
          <RouterLink to="/portfolio" class="nav-link">Portfolio</RouterLink>
        </li>
        <li>
          <RouterLink to="/personal-map" class="nav-link">Map</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 32px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
}

/* 로고 */
.logo a {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-decoration: none;
  color: #0f172a;
}

/* 네비 */
.nav {
  display: flex;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  position: relative;
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

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 2px;
  background-color: #0f172a;
}
</style>
