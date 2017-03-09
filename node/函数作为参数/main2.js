function execute(someFn,value){
	someFn(value);
}

execute(function(name){console.log('Hello ' + name)},'Jvid');