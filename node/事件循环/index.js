var events = require('events');
var eventEmitter = new events.EventEmitter();

var getWork = function (){
	console.log('找到工作了');
	eventEmitter.emit('workHard');
}

eventEmitter.on('workHard',function(){
	console.log('努力工作');
})

eventEmitter.on('findWork',getWork);

eventEmitter.emit('findWork');

console.log('拿到工资');