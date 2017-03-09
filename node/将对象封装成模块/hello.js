module.exports = Hello;
function Hello(){
	var name;
	this.setName = function (theName){
		name = theName;
	};
	this.sayHello = function (){
		console.log('Hello ' + name);
	}
}