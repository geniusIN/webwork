<template>
    <div>
        <h2>댓글</h2>
        <div v-for="c in comments" :key="c.comment_id">{{ c.writer }}: {{ c.content }}</div>

        <input v-model="newComment" placeholder="댓글 쓰기" />
        <button @click="addComment">등록</button>
    </div>
</template>
<script>
export default {
    props: [],
    data() {
        return {};
    },
};
</script>
<style></style>
