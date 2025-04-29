const fs = require('fs')
fs.readFile("c:/Temp/data.txt","utf-8", function(err, data){
  console.log(data);
})
console.log("the end")