const fs = require('fs'); // 얘는 노드 모듈이구나!
console.log(global);
global.hello = () => {
  console.log('hello'); // global.console.log와 같음
};

global.hello();
hello(); // global은 생략이 가능
