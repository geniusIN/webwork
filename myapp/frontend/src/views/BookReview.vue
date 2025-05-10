<template>
  <div>
    <textarea v-model="reviewText" rows="3" class="form-control" style="width: 600px"></textarea>
    <button class="btn btn-primary mt-2" @click="submitReview">등록</button>

    <ul class="list-group mt-3" v-if="reviewList.length">
      <li v-for="review in reviewList" :key="review.review_id" class="list-group-item">
        <strong>{{ review.writer || "익명" }}</strong>: {{ review.content }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import axios from "axios";
const {bookId} = defineProps({bookId: String});

const reviewText = ref("");
const reviewList = ref([]);

const getReviews = async () => {
  const result = await axios.get(`/api/review?bookId=${bookId}`);
  reviewList.value = result.data;
};

const submitReview = async () => {
  if (!reviewText.value.trim()) return alert("감상평을 입력해 주세요!");

  await axios.post("/api/review", {
    book_id: bookId,
    content: reviewText.value,
    writer: "guest"
});

reviewText.value = "";
await getReviews();
};

onMounted( () => {
  if (bookId) getReviews();
});
</script>