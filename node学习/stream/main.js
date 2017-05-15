var fs = require('fs');
var data = '';
var readerStream = fs.createReadStream('index.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data',function(chunk){
	console.log('get data')
	data += chunk;
})

readerStream.on('end',function(){
	console.log('success get data');
	console.log(data)
})

readerStream.on('error',function(err){
	console.log(err.stack);
})

console.log('every program is over')