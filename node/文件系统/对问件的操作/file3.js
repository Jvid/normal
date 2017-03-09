var fs = require('fs');

console.log('准备删除文件');

fs.unlink('input.txt',function(err){
	if(err){
		return console.log(err)
	}
	console.log('删除成功')
})