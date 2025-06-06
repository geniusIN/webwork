import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BooksView from '../views/BooksView.vue'
import BookDetail from '../views/BookDetail.vue'
import BookReview from '../views/BookReview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bookReview',
      name: 'bookReview',
      component: BookReview,
    },
    {
      path: '/bookDetail',
      name: 'bookDetail',
      component: BookDetail,
    },
    {
      path: '/book',
      name: 'book',
      component: BooksView,
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
