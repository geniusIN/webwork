<template>
<table class="table">
    <thead>
      <tr>
        <th>사번</th>
        <th>이름</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(emp, idx) in emps" :key="emp.id" @click="selectHandler(idx)">
        <td>{{ emp.id }}</td>
        <td>{{ emp.first_name }} {{ emp.last_name }}</td>
        <td>
          <button @click="deleteEmp(emp.id)" class="ml-4 text-red-600">
            삭제
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL = "/api/emp";// axios 기본 주소
export default {
  data(){
    return{
      emps : []
    }
  },
  methods:{
    deleteEmp(id){
        axios.delete(`/${id}`)
             .then(()=>this.fetchList());
      },
      fetchList(){
        axios.get("")// 위에 기본주소 설정해서.
             .then(response => this.emps = response.data)
      },
      selectHandler(idx){
        this.$emit('select', this.emps[idx])
      }
  },
  mounted(){
    this.fetchList();

  }
}
</script>