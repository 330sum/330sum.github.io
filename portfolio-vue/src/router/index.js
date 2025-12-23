import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ResumeView from '@/views/ResumeView.vue';
import PortfolioView from '@/views/PortfolioView.vue';
import PersonalMapView from '@/views/PersonalMapView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/resume',
    name: 'Resume',
    component: ResumeView,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioView,
  },
  {
    path: '/personal-map',
    name: 'PersonalMap',
    component: PersonalMapView,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
