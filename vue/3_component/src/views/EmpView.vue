<template>
  <div class="now">
    <div class="col"><emp-list @select="selectHandler" ref="listRef"></emp-list></div>
    <div class="col"><emp-form :selEmp = "selectedEmp" @saved="savedHandler"></emp-form></div>
  </div>
</template>
<script>
import EmpList from '@/components/EmpList.vue';
import EmpForm from '@/components/EmpForm.vue';

export default {
  components:{EmpList, EmpForm},
  data(){
    return{
      selectedEmp: { first_name: 'test'}
    }
  },
  methods:{
    selectHandler(emp){
      this.selectedEmp = emp;
    },
    savedHandler(){
      this.$refs.listRef.fetchList();
    }
  }
}
</script>