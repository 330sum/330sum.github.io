<template>
  <div class="intro" v-if="visible">
    <div class="content">
      <p class="line1">{{ text.line1 }}</p>
      <p class="line2">{{ text.line2 }}</p>

      <button class="enter" @click="enter">Enter</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { language } from '@/stores/useLanguage';

const visible = ref(true);

/**
 * 임시 언어 상태
 * → 다음 단계에서 KR / EN 토글로 교체
 */
const lang = ref<'kr' | 'en'>('kr');

const text = computed(() => {
  if (lang.value === 'kr') {
    return {
      line1: '안녕하세요.',
      line2: '만들고, 가르치고, 기록하는 개발자입니다.',
    };
  }
  return {
    line1: 'Hello.',
    line2: 'I build, teach, and document things.',
  };
});

function enter() {
  visible.value = false;
}
</script>

<style scoped>
.intro {
  position: fixed;
  inset: 0;
  background: #0f172a; /* 다크 네이비 */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.content {
  text-align: center;
}

.line1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.line2 {
  font-size: 1.2rem;
  opacity: 0.85;
}

.enter {
  margin-top: 2rem;
  padding: 0.6rem 1.2rem;
  background: white;
  color: #0f172a;
  border: none;
  cursor: pointer;
}
</style>
