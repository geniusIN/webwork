<template>
  <!-- <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ book.id }}</td>
            <th scope="col" class="text-center table-primary">제목</th>
            <td scope="col" class="text-center">
              {{ book.title }}
            </td>
            <th scope="col" class="text-center table-primary">저자</th>
            <td scope="col" class="text-center">{{ book.writer }}</td>
          </tr>

          <tr>
            <th colspan="2" class="text-center table-primary">등록일자</th>
            <td colspan="4">{{ book.dateFormat }}</td>
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
                class="btn btn-xs btn-info" @click="goToUpdateForm(boardInfo.id)">
                수정
              </button>
              <button
                class="btn btn-xs btn-info" @click="goToListForm()">
                목록
              </button>
             
            </td>
          </tr>
        </tbody>
      </table>
    </div>


    <div class="row">

    </div>
    <div>
      <CommentComp v-if="boardInfo.id" :boardId="boardInfo.id"/>
    </div>
  </div> -->

</template>
<script>
// import axios from 'axios';
// import {useRoute, useRouter} from "vue";

// const serchNo = "";
// const boardInfo = {};
// const router = userRouter();
// const route = useRoute();

// const getBoardInfo = async() => {
//   let result = await axios.get(`api/board/${searchNo}`);
//   boardInfo = result.data[0];
// }
// function goToUpdateForm(id){
//   router.push({path: '/boardForm', query: {id : id}})
// }
// function goToListForm(){
//   router.push('/board')
// }

  
// function onCreated(){
//   this.searchNo = route.query.id;
//   getBoardInfo();
// }
  
  
  
  

</script>
