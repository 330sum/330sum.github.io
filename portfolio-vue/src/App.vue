<template>
  <!-- <IntroScreen /> -->

  <button @click="toggleLanguage" style="position: fixed; top: 20px; right: 20px">
    {{ language === 'kr' ? 'EN' : 'KR' }}
  </button>

  <TheHeader></TheHeader>
  <TheView></TheView>
</template>

<script setup lang="ts">
import { toggleLanguage, language } from '@/stores/useLanguage';
import TheHeader from './layouts/TheHeader.vue';
import TheView from './layouts/TheView.vue';
import IntroScreen from './components/IntroScreen.vue';
</script>
