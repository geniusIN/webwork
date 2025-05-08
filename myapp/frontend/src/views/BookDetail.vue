<template>
    <div class="container">
        <div class="row">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>번호</th>
                        <td>{{ book.value.id }}</td>

                        <th>제목</th>
                        <td>{{ book.value.title }}</td>

                        <th>저자</th>
                        <td>{{ book.value.writer }}</td>

                        <th>출판사</th>
                        <td>{{ book.value.publisher }}</td>
                    </tr>

                    <tr>
                        <th>등록일자</th>
                        <td>{{ book.value.dateFormat }}</td>
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
                    <tr>
                        <td colspan="6" class="text-center">
                            <button class="btn btn-xs btn-info" @click="goToUpdateForm(boardInfo.id)">수정</button>
                            <button class="btn btn-xs btn-info" @click="goToListForm()">목록</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, watch } from "vue";

const serchNo = "";
const bookDetail = {};
const router = useRouter();
const route = useRoute();
const book = ref({});

const getBookDetail = async () => {
    const getBookDetail = async () => {
        const searchNo = route.query.id;
        const result = await axios.get(`/api/book/${searchNo}`);
        book.value = result.data[0];
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
