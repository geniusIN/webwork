<template>
  <h3>부모컴포넌트</h3>
  <childdd ref="child_component"></childdd> <!-- ref: 자식태그에 직접 접근하려고 -->
</template>

<script>
import ChildComponent from '@/components/ChildComponent.vue';

export default{
  components:{"Childdd": ChildComponent},// 이렇게 태그 이름 지정할 수도 있음!
  mounted(){
    this.$refs.child_component.childFunc(); // 마운트 되면 바로 실행됨.
    this.$refs.child_component.$refs.btn.click(); // 이렇게 자식 ref로 찾아갈 수도 있음
    this.$refs.child_component.msg='부모가 보내는 메시지'
  }
}
</script>