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
      component: () => import('../views/BoardList.vue'),
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../views/BoardInfo.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/BoardForm.vue'),
    },
    {
      path: '/nested',
      name: 'nested',
      component: () => import('../views/NestedComponent.vue'),
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../views/ComponentView.vue'),
    },
    {
      path: '/provide',
      name: 'provide',
      component: () => import('../views/ProvideInject.vue'),
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import('../views/WatchView.vue'),
    },
  ],
})

export default router
