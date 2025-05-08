<template>
  useComponentrefs이용
  <input >
  <hr>
  <div>
    현재페이지는 {{ $route.fullPath }} <br>
    <a href="#" @click="router.push('/')">home</a>
    <a href="#" @click="goPage">about</a>
  </div>
  <hr>
  {{ count.cnt }}
  <button @click="clickHandler">클릭</button>
  <ButtonCounter :counter="count.value" @incrementevent="clickHandler">자식컴포넌트</ButtonCounter>
  <ButtonCounter @incrementevent="clickHandler">자식컴포넌트</ButtonCounter>
</template>

<script setup>
import ButtonCounter from '../components/ButtonCounter.vue'
import {reactive, onMounted} from "vue";
import {useRouter, useRoute} from "vue-router";

const count = reactive({cnt:0});
const router = useRouter();
const route = useRoute();

const clickHandler = (initValue) => {
  if(initValue){
    count.cnt = initValue;
  } else{
    count.cnt++;        
  }
}

function goPage() {
  router.push('/about')
}

onMounted( ()=>{
  console.log('count=', count.cnt);
  console.log('input=', input.value.value);
  input.value.select()
})

</script>