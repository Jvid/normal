var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('test.rar')
.pipe(zlib.createGunzip())