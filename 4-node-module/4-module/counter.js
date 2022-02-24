let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

module.exports.getCount = getCount;
//module.exports.increase = increase;
//console.log(module.exports === exports); //true
//exports = {}; // exports는 참조값임. 특정한 값을 바로 할당하면 위험!!!!!
//console.log(module.exports === exports);  //false
exports.increase = increase;
console.log(module);
