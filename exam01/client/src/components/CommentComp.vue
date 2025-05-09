<template>
  <div class="mt-4">
    <h5>댓글</h5>
    <ul class="list-group">
      <li class="list-group-item" v-for="comment in commentList" :key="comment.id">
        <strong>{{ comment.writer }}</strong>
        <p>{{ comment.content }}</p>
        <small class="text-muted">{{ comment.created_dt }}</small>
      </li>
    </ul>
    <p v-if="commentList.length === 0" class="text-muted">댓글 없음</p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, defineProps } from 'vue';
import axios from 'axios';

const props = defineProps({
  boardNo: Number
});

const commentList = ref([]);

const fetchComments = async () => {
  try {
    const res = await axios.get(`/comments?bno=${props.boardNo}`);
    commentList.value = res.data;
  } catch (err) {
    console.error('댓글 불러오기 실패:', err);
  }
};

// 게시글이 바뀌면 다시 불러오기
watch(() => props.boardNo, () => {
  fetchComments();
});

onMounted(() => {
  fetchComments();
});
</script>
