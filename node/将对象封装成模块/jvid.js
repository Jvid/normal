module.exports = Work;

function Work(){
	this.findWork = function (){
		console.log('findWork is the first step');
	}
	this.getWork = function (){
		console.log('Get work is a happy thing');
	}
	this.payMoney = function (){
		console.log('After work I get the money');
	}
}