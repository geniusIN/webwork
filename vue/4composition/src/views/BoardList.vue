<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>댓글 수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(board, i) in boardList" :key="board.id" @click="goToDetail(board.id)">
          <td>{{ board.id }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.writer }}</td>
          <td>{{ board.createDate }}</td>
          <td>{{ board.comment_count }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  {{ route.fullPath }}
</template>
 
<script setup>
import axios from 'axios';
import {ref, defineProps} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();
const route = useRoute();
const boardList = ref([]);  

const getBoardList = async() => {
  let result = await axios.get('/api/board');
  boardList.value = result.data;
};

// const goToDetail = () => {}; 똑같다.
function goToDetail(){
  router.push('/')
}

// 라우터와 라우트의 차이점?

getBoardList();

</script>
<style scoped>
table * {
  text-align: center;
}
</style>
