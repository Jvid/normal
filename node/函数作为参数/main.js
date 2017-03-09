function execute (someFn,value){
	someFn(value);
}

function sayHello(name){
	console.log('Hello '+name);
}

execute(sayHello,'jvid');