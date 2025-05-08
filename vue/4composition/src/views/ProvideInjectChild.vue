<template>
<div>provide inject 연습</div>
{{ itemLength }}
</template>
<script setup>
import {inject, onMounted} from "vue";
const itemLength = inject(['itemLength']);
onMounted(()=>{
    console.log(itemLength);
  })
</script>