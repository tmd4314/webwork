const express = require('express')

//express instance 생성
const app = express()
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'c:/temp/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage: storage })
const port = 80

app.use(express.urlencoded({ extended: false })); 
app.use(express.json()) 

let boards = [
  {id: 1, title: "야당", content: "야당...."},
  {id: 2, title: "터미네이터", content: "터미네이터...."}
] // id, title, content

// 로그 미들웨어 morgan
const morgan = require('morgan')
app.use(morgan('[:date[iso]] :method :url :remote-addr'))

// 라우트 설정
app.get('/download', (req, res, next) => {
  const filepath = 'C:/temp/uploads/vue.txt';  
  const downname = 'vue.txt';
  res.setHeader('Content-Disposition', `attachment; filename=${downname}`); // 이게 핵심 
  res.sendFile(filepath);
});  
app.post('/profile', upload.single('avatar'), function (req, res, next) {
  console.log(req.file.size);
  console.log(req.file.filename);
  console.log(req.file.originalname);
  res.send("ok")
})

app.get('/', (req, res) =>{
  res.send("hello");
})

app.get('/board', (req, res) => {
  res.send(boards);
})

// 단건조회
app.get('/board/:id', (req, res) => {
  const id = req.params.id
  const idx = boards.findIndex(boards => boards.id == id)
  res.send(boards[idx]);
})

// 등록
app.post('/board', (req, res) => {
  const board = req.body;
  boards.push(board);
  console.log("받은 파라미터", board);
  res.send(board);
})

// 수정
app.put('/board/:id', (req, res) => {
  const id = req.params.id
  const board = req.body; //json, form-data
  const idx = boards.findIndex(boards => boards.id == id)
  if(idx >= 0){
    boards[idx] = board;
    res.send(boards);
  } else{
    res.send("없음");
  }
  
})

//삭제
app.delete('/board/:id', (req, res) => {
  const id = req.params.id
  const idx = boards.findIndex(boards => boards.id == id)
  if(idx >= 0){
    // boards.splice(idx, 1); // 해당 index 요소를 제거
    boards = boards.filter( boards => boards.id != id)
    res.send(boards);
  } else{
    res.send("없음");
  }
})

let emps = [ {id: 0, name: "길동"}, {id: 1, name: "순신"}]
// route() 같은 리소스(url) method 라우트 지정
app.route("/emp")
   .get((req, res) => {res.send(emps)} )
  //  .get((req, res) => {res.send(emps[req.body.id])} )
   .post((req, res) => {res.send(req.body)} )
   .put((req, res) => {res.send(req.body)})
   .delete((req, res) => {res.send(req.body.id)})

//Ruter를 이용하여 모듈(파일) 분리하여 리소스별로 라우트 지정
app.use('/product', require('./routes/product'))
app.use('/dept', require('./routes/dept'))

app.listen(port, ()=>{
  console.log(`http://localhost:${port} 서버 실행됨` )
});