<template>
    <div>
        <h2>댓글</h2>
        <div v-for="c in comments" :key="c.comment_id">{{ c.writer }}: {{ c.content }}</div>

        <input v-model="newComment" placeholder="댓글 쓰기" />
        <button @click="addComment">등록</button>
    </div>
</template>
<script>
import axios from "axios";
export default {
    props: ["boardId"],
    data() {
        return {
            comments: [],
            newComment:""
        };
    },
    async mounted() {
        const res = await axios.get(`/api/comment/${this.boardId}`);
        this.comments = res.data;
    },
    methods: {
        async addComment() {
            await axios.post("/api/comment", {
                board_id: this.boardId,
                writer: "익명",
                content: this.newComment
            });
            this. newComment = "";
            const res = await axios.get(`/api/comment/${this.boardId}`);
            this.comments = res.data;
        }
    }
};
</script>
<style>

</style>