
const express = require("express");
const router = express.Router();

// 로그인
router.post("/login", (req, res) => {
  const {email, pw} = req.query;
  req.session.email = email;
  req.session.save(err=> {
    if(err) throw err;
    res.send({code: "success"});
  })

})

// 로그인 정보
router.post("/info", (req, res) => {
  res.send( {email: req.session.email})
})

// 로그아웃
router.post("./logout", (req, res) => {
  req.session.destory();
  res.send("logout success");
})

module.exports = router;