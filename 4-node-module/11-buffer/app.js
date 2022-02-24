// Fixed-size chuck of memory
// array of integers, byte of data
const fs = require('fs');

const buf = Buffer.from('Hi');
console.log(buf);
console.log(buf.length);
console.log(buf[0]); //아스키 코드
console.log(buf[1]);
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(2); // 사이즈가 2인 버퍼를 만듬
const buf3 = Buffer.allocUnsafe(2); // 초기화를 하지 않기 때문에 fast, 하지만 다른 값이 들어가 있을 수 있다
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

// concat: 버퍼 모으기
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
