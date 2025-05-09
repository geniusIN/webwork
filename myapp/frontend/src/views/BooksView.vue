<template>
    <div class="container">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>제목</th>
                    <th>저자</th>
                    <th>출판사</th>
                    <th>등록일자</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(book, i) in formattedBookList" :key="book.id" @click="goToDetail(book.id)">
                    <td>{{ book.id }}</td>
                    <td>{{ book.title }}</td>
                    <td>{{ book.writer }}</td>
                    <td>{{ book.publisher }}</td>
                    <td>{{ book.dateFormat }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    {{ route.fullPath }}
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { onMounted, computed } from "vue";

const router = useRouter();
const route = useRoute();
const bookList = ref([]);

// 도서 목록 가져오기
const getBookList = async () => {
    let result = await axios.get("/api/book");
    bookList.value = result.data;
};

// 도서 목록 출력
onMounted(() => {
    getBookList();
});

// 날짜 포맷 위해 새로운 map 생성
const formattedBookList = computed(() =>
    bookList.value.map((book) => ({
        ...book,
        dateFormat: book.update_date ? new Date(book.update_date).toLocaleDateString("ko-KR") : "날짜 없음",
    }))
);

function goToDetail(id) {
    router.push({path: "/bookDetail", query: {id:id}});
}
</script>
