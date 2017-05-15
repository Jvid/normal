//解压文件
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('index.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('jvid.txt'))



