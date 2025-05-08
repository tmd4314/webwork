import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/BookList.vue'),
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../views/BookInfo.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/BookForm.vue'),
    },
  ],
})

export default router
