import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import { userStore } from '../stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
     
    },
    {
      path: '/start',
      name: 'start',
      component: () => import('../views/StartView.vue'),
   
    },
    {
      path: '/lista',
      name: 'lista',
      component: () => import('../views/ListView.vue'),
      
    },
    {
      path: '/show/:id',
      name: 'show',
      component: () => import('../views/ShowView.vue'),
     
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormView.vue'),
    
    },
  
  ]

  
  })

//   router.beforeEach((to,from,next)=>{
 
//     if(to.name==='lista'&& to.name==='show' && to.name==='form'&&  !userStore().isLogged){
//       next({name: 'home'})
//     }
//       next()
    
// })

export default router
