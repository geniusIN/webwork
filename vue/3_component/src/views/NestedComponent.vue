<template>
  <page-title  title="마이페이지" subtitle="주문내역"/>
  <page-title v-bind:title="title"/>
  <blog-post v-bind:title="post.title" :likes="post.likes" :is-published="post.isShow"
              :comment-ids="[100, 103, 200]"/><!--정적할당 하더라도 콜론 안붙이면 String으로 넘어가므로 문자열이 아니면 붙여야 함.-->
  <blog-post v-bind="post"/> <!-- 이렇게 객체로 한번에 넘길 수 있음!! -->
  <blog-post v-for="post in posts" v-bind="post"/>
</template>
<script>
import PageTitle from "@/components/PageTitle.vue"
import BlogPost from "@/components/BlogPost.vue";


export default {
  components : {PageTitle, BlogPost}, // 컴포넌트 등록
  data(){
    return {title : "동적페이지이름",
            posts : [{isPublished : false, title:"블로그1"},
                    {isPublished : true, title:"블로그2"},
                    {isPublished : false, title:"블로그3"}
            ],
            post : {
              isShow : true,
              likes: 100,
              title: "vue 블로그"}
    }
  }
}
</script>