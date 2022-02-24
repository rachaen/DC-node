const { clearInterval } = require('timers');

let num = 1;
const interval = setInterval(() => {
  console.log(num++);
}, 1000);

setTimeout(() => {
  console.log('Timeout!');
  clearInterval(interval); //interval 멈추기
}, 6000);
