const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const query = require("../mysql");

// multer storage 설정 (frontend/public/img로 경로 맞추기)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../frontend/public/img')); // 상대경로
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const upload = multer({ storage: storage });

// 전체 조회
router.get("", async (req, res) => {
  const result = await query('book', "selectList", null);
  res.send(result);
});

// 입력문 (이미지 포함)
router.post("", upload.single('file'), async (req, res) => {
  const data = req.body;
  const file = req.file;

  const imgFilename = file ? file.filename : '';

  const result = await query('book', "insertInfo", [
    data.book_title,
    data.isbn,
    data.writer,
    data.price,
    imgFilename,
    data.publisher,
    data.page
  ]);

  res.send(result);
});

// 단건 조회
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await query('book', "selectInfo", [id]);
  res.send(result);
});

// update 문 (이미지 포함)
router.put("/:id", upload.single('file'), async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const file = req.file;

  delete data.create_date;

  const imgFilename = file ? file.filename : data.img; // 새 파일 있으면 새 파일, 아니면 기존 값

  const updateData = {
    ...data,
    img: imgFilename
  };

  const result = await query('book', "updateInfo", [updateData, id]);
  res.send(result);
});

module.exports = router;
