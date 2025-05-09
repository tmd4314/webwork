const express = require('express');
require("dotenv").config({path : "./database/mysql.env"});

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res)=> {
  res.send("hello");
})

app.use("/board", require("./router/board"));
app.use("/comment", require("./router/comment"));

app.listen(port, ()=>{
  console.log(`http://localhost:${port} 서버 실행됨` )
});