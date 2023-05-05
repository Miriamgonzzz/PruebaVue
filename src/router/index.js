import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
//import {useAuth} from '../composables/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // meta:{
      //   requieresAuth: false,
      // }
    },
    {
      path: '/start',
      name: 'start',
      component: () => import('../views/StartView.vue'),
      // meta:{
      //   requieresAuth: true,
      // }
    },
    {
      path: '/lista',
      name: 'lista',
      component: () => import('../views/ListView.vue'),
      // meta:{
      //   requieresAuth: true,
      // }
    },
    {
      path: '/show/:id',
      name: 'show',
      component: () => import('../views/ShowView.vue'),
      // meta:{
      //   requieresAuth: true,
      // }
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormView.vue'),
      // meta:{
      //   requieresAuth: true,
      // }
    },
  
  ]

  
  })

//   router.beforeEach((to,from,next)=>{
//     const requiresAuth = to.matched.some(record => record.meta.requeresAuth)
//     const {isAuthenticated}=useAuth()
//     if(requiresAuth &&!isAuthenticated.value){
//       next('/')
//     }else{
//       next()
//     }
// })

export default router
