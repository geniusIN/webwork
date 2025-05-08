import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoardList from '@/views/BoardList.vue'
import NestedComponent from '@/views/NestedComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/watch',
      name: 'watch',
      component: () => import("../views/WatchView.vue"),
    },
    {
      path: '/ProvideInject',
      name: 'ProvideInject',
      component: () => import("../views/ProvideInject.vue"),
    },
    {
      path: '/component',
      name: 'component',
      component: () => import("../views/ComponentView.vue"),
    },
    {
      path: '/nested',
      name: 'nested',
      component: NestedComponent,
    },
    {
      path: '/board',
      name: 'board',
      component: BoardList,
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
  ],
})

export default router
