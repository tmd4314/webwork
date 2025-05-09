import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from '@/views/MainComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainComponent
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
