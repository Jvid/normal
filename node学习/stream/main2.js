var fs = require('fs');

var data = "我是准备写入output.txt中的数据"

var writeStream = fs.createWriteStream('output.txt');

writeStream.write(data,'UTF8');

writeStream.end();
writeStream.on('finish',function(){
	console.log('finish')
});
writeStream.on('error',function(err){
	console.log(err.stack);
})

var readStream = fs.createReadStream('output.txt');
var getDatas = ''
readStream.setEncoding('UTF8')
readStream.on('data',function(chunk){
	console.log('get data');
	data += chunk
})
readStream.on('end',function(){
	console.log(data)
})