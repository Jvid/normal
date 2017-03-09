var fs = require('fs');

fs.stat('input.txt',function(err,stats){
	if(err){
		return console.log(err);
	}
	console.log('成功读到文件')
	console.log(stats);

	console.log('是文件吗？ '+stats.isFile());
	console.log('是目录吗？ '+stats.isDirectory());
})