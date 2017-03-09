var hello = require('./hello');
var jvid = require('./jvid');
var events = require('events');
var eventEmitter = new events.EventEmitter();

var a = new hello();

a.setName('jvid');

a.sayHello();

var w = new jvid();

eventEmitter.on('find',function(){
	w.findWork();
	eventEmitter.emit('getWork');
})

eventEmitter.on('getWork',function(){
	w.getWork();
	eventEmitter.emit('workhard');
})

eventEmitter.on('workhard',function(){
	w.payMoney();
})

eventEmitter.emit('find');