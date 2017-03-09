var os = require('os');

console.log('系统主机名'+os.hostname());
console.log('系统名'+os.type());
console.log('系统名'+os.platform());
console.log('CPU架构'+os.arch());
console.log('发行版本'+os.release());
console.log('系统运行时间'+os.uptime()/3600);
console.log('包含1，5，15，分钟平均负载的数组'+os.loadavg());
console.log('内存总量'+os.totalmem()/2048);
console.log('空闲内存量'+os.freemem()/2048);
console.log('CPU信息'+os.cpus());
console.log('网络接口列表'+os.networkInterfaces());
