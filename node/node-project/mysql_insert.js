// mysql 모듈 로드 
const pool = require("./mysql");  
 

// 2. SQL 실행 
const data = { name: "이민식", email:"2@23.3", phone:"011-1234-1234"}
sql = "INSERT customers (name, email, phone) values (?, ?, ?)";

pool.query(sql, [ data.name, data.email, data.phone ], function (err, results, fields) { 
if (err) {     
console.log(err);    
} 
// 3. 결과 처리 
console.log(results); 
}); 
