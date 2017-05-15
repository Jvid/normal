var buf = new Buffer(5);
buf.write('jingduo');

console.log(buf.toString())
var str = 'jingduonihao'
var buf2 = new Buffer(12);
buf2.write(str);
console.log(buf2.toString())

var buf3 = new Buffer(5);
buf3.write(str);
console.log(buf3.toString());

