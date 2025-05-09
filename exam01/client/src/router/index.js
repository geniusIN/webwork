import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from '@/views/MainComponent.vue'
import BoardList from '@/views/BoardList.vue'
import BoardInfo from '@/views/BoardInfo.vue'
import BoardForm from '@/views/BoardForm.vue'

const routes = [

  {
    path: '/post',
    name: 'boardForm',
    component: BoardForm
  },
  {
    path: '/boardInfo',
    name: 'boardInfo',
    component: BoardInfo
  },
  {
    path: '/board',
    name: 'board',
    component: BoardList
  },
  {
    path: '/',
    name: 'home',
    component: MainComponent
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
