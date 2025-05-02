const express = require("express");
const router = express.Router(); 
const query = require("../mysql"); 

// 전체조회
router.get("", async (req, res) => {
  const result = await query('board', "selectList", null);
  res.send(result);
}); 

// 입력문
router.post("", async (req, res) => {
  const data = req.body;
  const result = await query('board', "insertInfo", [data.title, data.writer, data.content]);
  res.send(result);
}); 

// 단건조회
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await query('board', "selectInfo", [id]);
  res.send(result)
}); 

//update 문
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  // create_date 필드 제거
  delete data.create_date;
  const result = await query('board', "updateInfo", [data ,id]);
  res.send(result);
}); 

// delete 문
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await query('board', "deleteInfo", [id]);
  res.send(result);
}); 
module.exports = router; 