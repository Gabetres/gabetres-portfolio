import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/:pathMatch(.*)*', name: 'NotFoundView', component: NotFoundView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router