<template>
  <h3>부모컴포넌트</h3>
  <childdd @send-message="sendMessage"></childdd>
</template>

<script>
import ChildComponent from '@/components/ChildComponent4.vue';

export default{
  components:{"Childdd": ChildComponent},// 이렇게 태그 이름 지정할 수도 있음!
  methods: {
    sendMessage(message){
      console.log("자식 컴포넌트가 커스텀 이벤트 호출했음~~")
      console.log(message)
    }
  }
  
}
</script>