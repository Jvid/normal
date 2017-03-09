var fs = require('fs');

console.log('查看C:/Users/jvid/Desktop/准备技术/node/文件系统/创建目录  目录');
fs.readdir("C:/Users/jvid/Desktop/准备技术/node/文件系统/创建目录/",function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
       console.log( file );
   });
});