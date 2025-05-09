const express = require("express");
const router = express.Router(); 
const query = require("../database/mapper"); 

//리스트 댓글수 조회
router.get("", async (req, res) => {
  const result = await query('comment', "countList", null);
  res.send(result);
}); 


// 전체조회
router.get("/:bno", async (req, res) => {
  const bno = req.params.bno;
  const result = await query('comment', "selectList", [bno]);
  res.send(result);
}); 

module.exports = router; 