<template>
<div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ boardInfo.no }}</td>
            <th scope="col" class="text-center table-primary">작성일</th>
            <td scope="col" class="text-center">
              {{ boardInfo.created_dt }}
            </td>
            <th scope="col" class="text-center table-primary">이름</th>
            <td scope="col" class="text-center">{{ boardInfo.writer }}</td>
          </tr>

          <tr>
            <th colspan="2" class="text-center table-primary">제목</th>
            <td colspan="4">{{ boardInfo.title }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-left" valign="top" height="200">
              <pre
                style="white-space: pre-wrap;
                  border: none;
                  background-color: white; ">{{ boardInfo.content }}</pre>
            </td>
          </tr>
          <tr>
            <td colspan="6" class="text-center">
              <button
                class="btn btn-xs btn-info" @click="goToUpdateForm(boardInfo.no)">
                수정
              </button>
             
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 댓글 -->
    <div class="row">

    </div>
    <div>
      <CommentComp v-if="boardInfo.no" :boardNo="boardInfo.no"/>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import {ref, onMounted} from 'vue';
import { useRouter, useRoute } from 'vue-router';
import CommentComp from '@/components/CommentComp.vue';

const router = useRouter();
const route = useRoute();

const boardInfo = ref({});
const searchNo = ref(route.query.no);

const getBoardInfo = async () => {
  const result = await axios.get(`/board/${searchNo.value}`);
  boardInfo.value = result.data[0];
};

const goToUpdateForm = (no) => {
  router.push({ path: '/boardForm', query: {no} });
};

onMounted(()=>{
  getBoardInfo();
});
</script>