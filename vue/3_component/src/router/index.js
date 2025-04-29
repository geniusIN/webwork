import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/slot',
      name: 'slot',
      component: () => import('../views/Slot.vue'),
    },
    {
      path: '/emp',
      name: 'emp',
      component: () => import('../views/EmpView.vue'),
    },
    {
      path: '/parent',
      name: 'parent',
      component: () => import('../views/ParentComponent4.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/nested',
      name: 'nested',
      component: () => import('../views/NestedComponent.vue'),
    },
  ],
})

export default router
