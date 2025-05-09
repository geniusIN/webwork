const express = require("express");
const router = express.Router();
const query = require("../database/index"); // query(table, sqlKey, data)

router.get("/", async (req, res) => {
  const { bno } = req.query;
  console.log("요청 받은 bno:", bno);

  if (!bno) {
    return res.status(400).send("bno 파라미터가 없습니다.");
  }

  try {
    const rows = await query("comment", "selectByBno", [bno]);
    res.json(rows);
  } catch (err) {
    console.error("댓글 목록 조회 실패:", err);
    res.status(500).send("서버 오류");
  }
});

module.exports = router;
