//非阻塞代码  readFile会异步执行  导致先打印“程序结束”
var fs = require('fs');

fs.readFile('index.txt',function(err,data){
	if(err) return console.error(err);
	console.log(data.toString());
});

console.log('程序结束')