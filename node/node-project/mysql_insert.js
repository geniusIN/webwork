//require: import
const pool = require("./mysql") //mysql폴더 안의 index.js import

// 2. SQL 실행
const data = {name:"햇님", email:"sun@d.d", phone:"010222220101"}
sql = "insert customers (name, email, phone) values (?, ?, ?)"
;
pool.query(sql,[ data.name, data.email, data.phone ], function(err, results, fields) {
if(err) {
 console.log(err);
}
 // 3. 결과 처리
console.log(results);
});