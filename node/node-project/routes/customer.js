const express = require("express");
const router = express.Router(); 
const query = require("../mysql"); 

// 전체조회
router.get("", async (req, res) => {
  const result = await query('customer', "selectList", null);
  res.send(result);
}); 

// 입력문
router.post("", async (req, res) => {
  const data = req.body;
  const result = await query('customer', "insertInfo", [data.name, data.email, data.phone, data.address]);
  res.send(result);
}); 

// 단건조회
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await query('customer', "selectInfo", [id]);
  res.send(result)
}); 

//update 문
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const sql = "update customers set ? where id = ?";
  const result = await query('customer', "updateInfo", [data ,id]);
  res.send(result);
}); 

// delete 문
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const sql = "delete from customers where id = ?";
  const result = await query('customer', "deleteInfo", [id]);
  res.send(result);
}); 
module.exports = router; 