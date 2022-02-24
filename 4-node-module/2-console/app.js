console.log('logging....');
console.clear();

//log level
console.log('log'); // 개발할 때 사용
console.info('info'); // 정보를 남기고싶을 때 사용
console.warn('warn'); // 경보
console.error('error'); // 에러, 사용자 에러, 시스템 에러

// assert: 참이 아닌 경우에만 출력, 특정한 조건에서 로그를 출력하고 싶을 때 사용
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

// print object
const student = { name: 'ellie', age: 20, company: { name: 'AC' } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 0 });

// measuring time
console.time('for loop'); // 성능확인에 좋음
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd('for loop');

// counting
function a() {
  console.count('a function');
}

a();
console.countReset('a function'); // count 초기화
a();

// trace: 디버깅에 유용
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log('f3');
  console.trace(); //누가 함수를 호출했는지
}
f1();
