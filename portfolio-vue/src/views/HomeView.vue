<template>
  <section class="home">
    <!-- 메인 소개 -->
    <div class="intro">
      <h1>{{ t.title }}</h1>
      <p class="subtitle">{{ t.subtitle }}</p>
      <p class="status">{{ t.status }}</p>
    </div>

    <!-- 연락처 -->
    <div class="contact">
      <a href="https://github.com/330sum" target="_blank">GitHub</a>
      <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
      <a href="https://instagram.com" target="_blank">Instagram</a>
      <a href="https://threads.net" target="_blank">Threads</a>
    </div>

    <!-- 이메일 -->
    <div class="email">
      <span>Email</span>
      <a href="mailto:xxxiumin93@gmail.com">xxxiumin93@gmail.com</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { language } from '@/stores/useLanguage';

const t = computed(() => {
  if (language.value === 'kr') {
    return {
      title: '만들고, 가르치고, 기록하는 사람',
      subtitle: '개발자이자 강사로서, 복잡한 것을 이해하기 쉽게 만드는 일을 합니다.',
      status: '현재 상태: 개인 프로젝트 정리 및 강의 준비 중',
    };
  }
  return {
    title: 'I build, teach, and document',
    subtitle: 'A developer and instructor who enjoys making complex things simple.',
    status: 'Current status: Working on personal projects and teaching prep',
  };
});
</script>

<style scoped>
.home {
  max-width: 880px;
  margin: 80px auto;
  padding: 0 24px;
}

.intro h1 {
  font-size: 2.4rem;
  margin-bottom: 12px;
  color: #0f172a;
}

.subtitle {
  font-size: 1.1rem;
  color: #475569;
  margin-bottom: 8px;
}

.status {
  font-size: 0.9rem;
  color: #64748b;
}

/* 연락처 */
.contact {
  display: flex;
  gap: 20px;
  margin-top: 32px;
}

.contact a {
  text-decoration: none;
  font-weight: 500;
  color: #0f172a;
  border-bottom: 1px solid transparent;
}

.contact a:hover {
  border-color: #0f172a;
}

/* 이메일 */
.email {
  margin-top: 24px;
  font-size: 0.9rem;
}

.email span {
  color: #64748b;
  margin-right: 8px;
}
</style>
