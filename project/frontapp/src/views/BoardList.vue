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
          <td>{{ board.comment }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3000/board"
export default {
  data() {
    return {
      boardList:[]
    }
  },
  methods:{
    async fetchList(){
      let result = await axios.get("http://localhost:3000/board");
      this.boardList = result.data;
    },
    goToDetail(id){
      // query: ?id=1                param: boardInfo/1
      this.$router.push({ path: "/boardInfo", query: {id : id}})
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
