<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <label for="no">No.</label>
      <input type="text" id="no" v-model="boardInfo.no" readonly />

      <label for="title">제목</label>
      <input type="text" id="title" v-model="boardInfo.title" required />

      <label for="writer">작성자</label>
      <input type="text" id="writer" v-model="boardInfo.writer" required />

      <label for="content">내용</label>
      <textarea
        id="content"
        style="height: 200px"
        v-model="boardInfo.content"
        required
      ></textarea>

      <label for="createdDate">작성일자</label>
      <input type="text" id="createdDate" v-model="createdDate" readonly />

      <button type="submit" class="btn btn-xs btn-info">
        등록
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      boardInfo: {    
        title: '',
        writer: '',
        content: ''
      },
      createdDate: this.formatDate(new Date())
    };
  },
  methods: {
    formatDate(date) {
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const dd = String(date.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    },
    async submitForm() {
      try {
        await axios.post('/board', this.boardInfo);
        alert('등록되었습니다.');
        this.$router.push('/board');
      } catch (error) {
        console.error('등록 실패:', error);
        alert('등록에 실패했습니다.');
      }
    }
  }
};
</script>

<style scoped>
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

button[type="submit"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
