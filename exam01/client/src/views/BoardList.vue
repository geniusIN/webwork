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
        <tr v-for="(board) in boardList" :key="board.no" @click="goToDetail(board.no)">
          <td>{{ board.no }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.writer }}</td>
          <td>{{ board.created_dt }}</td>
          <td>{{ board.comment_count }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios';
axios.defaults.baseURL = "/api"
export default {
  data() {
    return {
      boardList:[]
    }
  },
  methods:{
    async fetchList(){
      let result = await axios.get(`/board`);
      this.boardList = result.data;
    },
    goToDetail(no){
      this.$router.push({ path: "/boardInfo", query: {no : no}})
    }
    
  },
  created(){
    this.fetchList();
  }
}
</script>
<style scoped>
table * {
  text-align: center;
}
</style>
