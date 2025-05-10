const express = require("express");
const router = express.Router();
const query = require("../mysql");

// 특정 책의 리뷰 전체 조회
router.get("/", async (req, res) => {
  const bookId = req.query.bookId;
  if (!bookId) return res.status(400).send("bookId is required");

  const result = await query("review", "selectByBookId", bookId);
  res.send(result);
});

// 리뷰 등록
router.post("/", async (req, res) => {
  const result = await query("review", "insertReview", req.body);
  res.send(result);
});

// 단건 리뷰 조회
router.get("/:id", async (req, res) => {
  const result = await query("review", "selectById", req.params.id);
  res.send(result);
});

// 리뷰 수정
router.put("/:id", async (req, res) => {
  const result = await query("review", "updateReview", [req.body, req.params.id]);
  res.send(result);
});

// 리뷰 삭제
router.delete("/:id", async (req, res) => {
  const result = await query("review", "deleteReview", req.params.id);
  res.send(result);
});

module.exports = router;
