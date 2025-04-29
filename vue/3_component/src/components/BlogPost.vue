<template>
  <div class="card">
    <div class="card-header">{{ title }}</div>
    <div class="card-body">좋아요 {{ likes }}</div>
    <div v-if="isPublished">출판</div>
    <div v-else>편집중</div>
    <div v-for="id in commentIds">{{ id }}</div>
  </div>
</template>

<!-- props: 자식이 부모한테 넘거줄 수는 없음. 단방향이라서 받기만. -->
<script>
export default {
  // props : ['title', 'likes', 'is-published', 'comment-ids'], >> 배열로 받기
  props: {// >> 객체로 받기
    title: {type: String, default: "기본타이틀!"},
    likes: {type: Number, validator:function(value){return value>0;}
    },
    isPublished: {type: Boolean, required:true},
    commentIds: Array
  },
  data(){
    return{

    }
  },
  methods: {},
  mounted(){},
  watch: {}
}
</script>