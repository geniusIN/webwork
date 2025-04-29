<script>
import GoodsView from './components/goods.vue';
import MemberForm from './views/MemberForm.vue';
import MovieForm from './views/MovieForm.vue';
import TodoForm from './views/TodoForm.vue';
import { RouterLink, RouterView } from 'vue-router'
import EmpView from './views/EmpView.vue';
import EmpList from './views/EmpList.vue';
import EmpForm from './views/EmpForm.vue';

export default{
  components:{GoodsView, MemberForm, MovieForm, TodoForm, EmpView, EmpForm, EmpList},
  data(){
    return{
      message: "greeting",
      fruits: ["사과", "바나나", "포도"]
    }
    
  },
  methods: {}
}
</script>

<template>
  <div class="container">
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        
        <li class="nav-item">
          <RouterLink to="/memberForm" class="nav-link active" aria-current="page">회원가입</RouterLink>
        </li>


        <li class="nav-item">
          <RouterLink to="/movieForm" class="nav-link active" aria-current="page">영화조회</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/todoForm" class="nav-link active" aria-current="page">할일목록</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/paramView/kim" class="nav-link active" aria-current="page">파라미터</RouterLink>
          <RouterLink to="/paramView/park" class="nav-link active" aria-current="page">파라미터</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/empView" class="nav-link active" aria-current="page">사원</RouterLink>
        </li>
      </ul>
    </div>
  </div>
  </nav>

  <div class="card">
    <div class="card-body">
  <main>
    <RouterView />
  </main>
  </div>
  </div>
</div>

</template>

