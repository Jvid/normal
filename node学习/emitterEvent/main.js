var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function(){
	console.log('监听器listener1执行')
}

var listener2 = function(){
	console.log('监听器listener2执行')
}

var listener3 = function(){
	console.log('监听器listener3执行')
}

// eventEmitter.addlistener('connection',listener1);

eventEmitter.on('connection',listener1);

eventEmitter.on('connection',listener2);

eventEmitter.once('connection',listener3);

var eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + '个监听器链接事件');

eventEmitter.emit('connection');

console.log('事件3是once绑定一次就没有了')
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。")
