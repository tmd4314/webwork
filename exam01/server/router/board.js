const express = require("express");
const router = express.Router();
const query = require("../database/mapper");

// 전체 조회
router.get("", async (req, res) => {
  const result = await query('board', "selectList", null);
  res.send(result);
});

// 입력문
router.post("", async (req, res) => {
  const data = req.body;

  const result = await query('board', "insertInfo", [
    data.title,
    data.writer,
    data.content
  ]);

  res.send(result);
});

// 단건 조회
router.get("/:no", async (req, res) => {
  const no = req.params.no;
  const result = await query('board', "selectInfo", [no]);
  res.send(result);
});

// update 문
router.put("/:no", async (req, res) => {
  const no = req.params.no;
  const data = req.body;
  // created_dt 컬럼 제거
  const { title, writer, content } = data;  // updateData에서 필요한 것만 뽑음
  const result = await query('board', "updateInfo", [title, writer, content, no]);
  res.send(result);
});

module.exports = router;