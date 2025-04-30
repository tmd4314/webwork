// mysql 모듈 로드 
const mysql = require("mysql2");  
 
// mysql 접속 정보 
const conn = { host: "127.0.0.1",  
               port: "3306",  
               user: "root",  
               password: "admin",  
               database: "shop"  }; 
 
// DB 커넥션 생성 
let connection = mysql.createConnection(conn); 

// 1. DB 접속 체크 (생략가능) 
connection.connect((err) => { 
  if (err) { 
  console.log("error connection" + err.stack); 
  return;  
  } 
  }); 
  // 2. SQL 실행 
  sql = "SELECT * FROM customers"; 
  connection.query(sql, function (err, results, fields) { 
  if (err) {     
  console.log(err);    
  } 
  // 3. 결과 처리 
  console.log(results); 
  }); 
  // DB 접속 종료(비동기이지만 SQL이 모두 실행되면 종료) 
  connection.end(); 