const fs = require('fs');

const data = [];
const readStream = fs
  .createReadStream('./file.txt', {
    //highWaterMark: 8, // 64 kbytes: 기본 옵션. 버퍼 사이즈를 결정. 한번에 얼마나 읽을지
    //encoding: 'utf-8',
  })
  .once('data', (chunk) => {
    //on을 once로 바꾸면 한 번만 실행이 됨
    //console.log(chunk);
    data.push(chunk);
    console.count('data');
  })
  .on('end', () => {
    console.log(data.join(''));
  })
  .on('error', (error) => {
    console.log(error);
  });
