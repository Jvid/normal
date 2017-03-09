var fs = require('fs');

console.log('创建目录/test/');

fs.mkdir('C:/Users/jvid/Desktop/准备技术/node/文件系统/创建目录/test/',function(err){
	if(err){
		return console.log(err);
	}
	console.log('创建目录成功')
});