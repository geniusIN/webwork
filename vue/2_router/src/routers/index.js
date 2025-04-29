import { createMemoryHistory, createRouter } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import MemberForm from '../views/MemberForm.vue'
import MovieForm from '@/views/MovieForm.vue'
import TodoForm from '@/views/TodoForm.vue'
import EmpForm from '@/views/EmpForm.vue'
import ParamView from '@/views/ParamView.vue'
import EmpList from '@/views/EmpList.vue'
import EmpView from '@/views/EmpView.vue'

const routes = [
  
  { path: '/', component: HelloWorld },
  { path: '/memberForm', component: MemberForm },
  { path: '/movieForm', component: MovieForm },
  { path: '/todoForm', component: TodoForm },
  { path: '/empForm', component: EmpForm },
  { path: '/empList', component: EmpList },
  { path: '/empView', component: EmpView},
  // { path: '/paramView', component: ParamView}
  { path: '/paramView/:username', component: ParamView}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;