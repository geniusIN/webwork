const express = require("express");
const router = express.Router();
const query = require("../mysql");

// 댓글 조회
router.get("/:boardId", async (req, res) => {
    const result = await query("comment", "selectByBoardId", req.params.boardId);
    res.send(result);
});
