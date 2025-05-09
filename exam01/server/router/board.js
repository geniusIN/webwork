const express = require("express");
const router = express.Router();
const query = require("../database/index");


//req.body   req.params   req.query   req.file
// 전체 조회
router.get("", async(req, res)=>{
  const result = await query("board", "selectList", null);
  res.send(result);
  }
);

// 단건 조회
router.get("/:no", async(req, res)=>{
  const result = await query("board", "selectByNo", req.params.no);
  res.send(result);
  }
);

// 등록
router.post("", async(req, res)=>{
  const result = await query("board", "insertToList", req.body);
  res.send(result);
  }
);


// 수정
router.put("/:no", async(req, res)=>{
  const result = await query("board", "updateBoard", [req.body, req.params.no]);
  res.send(result);
  }
);

// 삭제
router.delete("/:no", async(req, res)=>{
  const result = await query("board", "deleteBoard", req.params.no);
  res.send(result);
  }
);

module.exports = router;