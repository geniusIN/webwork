<script>
  import axios from 'axios';
  

  export default {
    data: function(){
      return{
        empList: []
      }
    },
    methods:{

    },
    mounted(){
      axios.get("/empdata.json")
      .then(res=>this.empList = res.data);
    }
  }
</script>

<template>
<table>
  <tr v-for="emp in empList" v-bind:key="emp">
    <td>{{ emp.employee_id }}</td>
    <td>{{ emp.first_name }}</td>
    <td>{{ emp.last_name }}</td>
    <td>{{ emp.email }}</td>
    <td>{{ emp.salary }}</td>
  </tr>
</table>
</template>

<style>
</style>