import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
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
      path: '/datatable',
      name: 'datatable',
      component: () => import('../views/BoardTable.vue'),
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
      path: '/cuList',
      name: 'cuList',
      component: () => import('../views/CustomerList.vue'),
    }
  ],
})

export default router
