<template>
    <div class="container">
        <div class="row">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>번호</th>
                        <td>{{ bookDetail.id }}</td>

                        <th>제목</th>
                        <td>{{ bookDetail.title }}</td>

                        <th>저자</th>
                        <td>{{ bookDetail.writer }}</td>

                        <th>출판사</th>
                        <td>{{ bookDetail.publisher }}</td>
                    </tr>

                    <tr>
                        <th>등록일자</th>
                        <td>{{ bookDetail.dateFormat }}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="6" class="text-left" valign="top" height="200">
                            <pre style="white-space: pre-wrap; border: none; background-color: white">{{
                                bookDetail.content
                            }}</pre>
                        </td>
                    </tr>
                    <div class="container">
                      <BookReview :bookId="route.query.id"/>
                    </div>
                    <tr>
                        <td colspan="6" class="text-center">
                            <button class="btn btn-xs btn-info" @click="goToUpdateForm(bookDetail.id)">수정</button>
                            <button class="btn btn-xs btn-info" @click="goToListForm()">목록</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, watch } from "vue";
import BookReview from "@/components/BookReview.vue";

const searchNo = ref("");
const bookDetail = ref({});
const router = useRouter();
const route = useRoute();

const getBookDetail = async () => {
  const result = await axios.get(`/api/book/${route.query.id}`);
  const book = result.data[0];
  bookDetail.value = {
    ...book,
    dateFormat: book?.update_date
      ? new Date(book.update_date.replace(" ", "T")).toLocaleDateString("ko-KR")
      : "날짜 없음"
  };
};


function goToUpdateForm(id) {
    router.push({ path: "/reviewForm", query: { id: id } });
}
function goToListForm() {
    router.push("/book");
}

onMounted(() => {
    if (route.query.id) {
        getBookDetail();  
    }
});

watch(
    () => route.query.id,
    (id) => {
        if (id) getBookDetail();
    },
    { immediate: true }
);
</script>
