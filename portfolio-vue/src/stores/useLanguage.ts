import { ref } from 'vue';

export type Language = 'kr' | 'en';

export const language = ref<Language>('kr');

export function toggleLanguage() {
  language.value = language.value === 'kr' ? 'en' : 'kr';
}
