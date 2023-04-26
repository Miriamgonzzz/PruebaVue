import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lista',
      name: 'lista',
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/show/:id',
      name: 'show',
      component: () => import('../views/ShowView.vue')
    },
  
  ]
})

export default router
