var fs = require('fs');
var zlib = require('zlib');

//压缩index.txt文件为index.txt.gz
fs.createReadStream('index.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('index.txt.gz'));