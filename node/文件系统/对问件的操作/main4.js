var fs = require('fs');
console.log('准备写入文件');
fs.writeFile('input.txt','我是通过node的写入文件方法写入的',function(err){
	if(err){
		return console.log(err);
	}
	console.log('数据写入成功');
	console.log('---------分割线-----------');

	fs.readFile('input.txt',function(err,data){
		if(err){
			return console.log(err);
		}
		console.log(data.toString());
	})

})