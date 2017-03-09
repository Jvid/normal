var fs = require('fs');
var buf = new Buffer(1024);

fs.open('input.txt','r+',function(err,fd){
	if(err){
		fs.open('input.txt','w',function(err,fd){
			console.log('文件不存在，已经创建一个');
			fs.writeFile('input.txt','我是通过node命令写入的内容',function(err){
				if(err){
					return console.log(err);
				}
				console.log('创建的文件已经写入内容');
				console.log('读取这个文件');
				fs.readFile('input.txt',function(err,data){
					if(err){
						return console.log(err);
					}
					console.log('读到的数据是： '+data.toString());
					console.log('准备截取8个字节');
					fs.ftruncate(fd,8,function(err){
						if(err){
							return console.log(err);
						}
						console.log('截取成功');
						console.log('读取相同的文件');

					})
				})


			})
		})
	}else{
		console.log('文件打开成功')
	}
})

