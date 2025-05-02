const express = require("express");
const router = express.Router(); 
const query = require("../mysql"); 

// 전체조회
router.get("/:bid", async (req, res) => {
  const bid = req.params.bid;
  const result = await query('comment', "selectList", [bid]);
  res.send(result);
}); 

// 입력문
router.post("", async (req, res) => {
  const data = req.body;
  const result = await query('comment', "insertInfo", [data.writer, data.content, data.bid]);
  res.send(result);
}); 

// 단건조회
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await query('comment', "selectInfo", [id]);
  res.send(result)
}); 

//update 문
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  // create_date 필드 제거
  delete data.create_date;
  const result = await query('comment', "updateInfo", [data ,id]);
  res.send(result);
}); 

// delete 문
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await query('comment', "deleteInfo", [id]);
  res.send(result);
}); 
module.exports = router; 