<template>
  자식컴포넌트<br>
  {{ msg }}
  <button type="button" @click="childFunc()" ref="btn" class="btn btn-success">click</button>
</template>

<script>
export default{
  props: [],
  data(){
    return{
      msg: '자식컴포넌트 메시지'
    }
  },
  methods: {
    childFunc(){
      this.$emit("send-message", this.msg)// 2번째 인수가 부모의 이벤트핸들러의 매개변수로 들어감.
    }// 부모->자식: props / 자식->부모: $emit.
  },
  mounted(){},
  watch: {}
}
</script>