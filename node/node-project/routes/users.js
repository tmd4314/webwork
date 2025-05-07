const express = require("express"); 
const router = express.Router(); 

//로그인
router.post("/login", (req, res) => {
  const {email, pw} = req.body
  // 로그인 처리
  req.session.email = email;
  req.session.save( err => {
    if(err) throw err;
    res.send({code: "success"});
  });
})

router.get("/info", (req, res) => {
  res.send({email: req.session.email})
})

//로그아웃
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("logout success");
})

module.exports = router; 