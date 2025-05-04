const express = require("express");
const router = express.Router();
const query = require("../mysql");

// 댓글 조회
router.get("/:boardId", async (req, res) => {
    const result = await query("comment", "selectByBoardId", req.params.boardId);
    res.send(result);
});

// 댓글 등록
router.post("/", async (req, res) => {
    const { board_id, writer, content } = req.body;
    const result = await query("comment", "insert", [board_id, writer, content]);
    res.send(result);
});

// 댓글 수정
router.put("/:commentId", async (req, res) => {
    const result = await query("comment", "update", [req.body.content, req.params.commentId]);
    res.send(result);
});

// 댓글 삭제
router.delete("/:commentId", async (req, res) => {
    const result = await query("comment", "delete", req.params.commentId);
    res.send(result);
});

module.exports = router;
