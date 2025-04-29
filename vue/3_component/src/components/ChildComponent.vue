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
      console.log("부모 컴포넌트에서 직접 발생시킨 이벤트")
    }
  },
  mounted(){},
  watch: {}
}
</script>