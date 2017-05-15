var events = require('events');
var eventEmitter = new events.EventEmitter();

console.log('准备链接');

var linkFn = function(){
	console.log('链接成功');
	eventEmitter.emit('dataReceived');
}

eventEmitter.on('connection',linkFn);

eventEmitter.on('dataReceived',function(){
	console.log('数据接收成功');
})

eventEmitter.emit('connection');

console.log("程序执行完毕")