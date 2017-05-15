var events = require('events')
var emitter = new events.EventEmitter();

emitter.on('aa',function(){
	console.log('我收到了aa的信息')
})

setTimeout(function(){
	emitter.emit('aa');
},1000)