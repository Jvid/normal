var fs = require('fs');
console.log('准备打开文件')
fs.open('input.txt','r+',function(err,data){
	if(err){
		return console.log(err);
	}
	console.log('文件打开成功')
})