// mysql 모듈 로드 
const mysql = require("mysql2");  
 
// mysql 접속 정보 
const conn = { 
  connectionLimit : 10,
  host: "127.0.0.1",  
  port: "3306",  
  user: "hr",  
  password: "Dltmdals1@",  
  database: "shop"  
}; 
 
// DB 커넥션 생성 
let pool = mysql.createPool(conn); 

// 2. SQL 실행 
const data = { name: "이민지", email:"r@re.e", phone:"011-123-123"}
sql = "INSERT customers (name, email, phone) values (?, ?, ?)";

pool.query(sql, [ data.name, data.email, data.phone ], function (err, results, fields) { 
if (err) {     
console.log(err);    
} 
// 3. 결과 처리 
console.log(results); 
}); 
