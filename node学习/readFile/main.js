//阻塞代码
var fs = require('fs');

var data = fs.readFileSync('index.txt');

console.log(data);

console.log(data.toString());

console.log("finsh")