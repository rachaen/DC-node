//this란 (브라우저와의 차이점)
function hello() {
  console.log(this);
  console.log(this === global);
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }

  memberFunction() {
    console.log('--- class ---');
    console.log(this);
    console.log(this === global);
  }
}

const ab = new A(1);
ab.memberFunction();

console.log('--- global scope ---');
console.log(this);
console.log(this === module.exports);

// 브라우저에서 밖에서 쓰는 this는 global을 가리켰으나
// node 에서는 module.exports를 가리킨다
// this는 문맥에 따라 달라질 수 있다
