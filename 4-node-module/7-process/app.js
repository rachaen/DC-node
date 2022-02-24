const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

// 현재 수행되고 있는 코드가 완료된 후 내가 등록한 콜백 함수를 수행해줘
setTimeout(() => {
  console.log('setTimeout');
}, 0);

// 현재 수행되고 있는 코드가 완료된 후 내가 등록한 콜백 함수를 task 큐 제일 앞 부분에 넣어줘
process.nextTick(() => {
  console.log('nextTick');
});

for (let i = 0; i < 100; i++) {
  console.log('for loop');
}
