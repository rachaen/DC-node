const fs = require('fs');

// 모든 api는 3가지 형태로 제공이 된다
// rename(...., callback(error, data)): 비동기
// try {renameSync(....)} catch(e){}: 동기적 실행. 사용을 안 하는 것이 좋음. error가 된 사항을 전달해 주지 않으므로 try ~ catch로 감싸줌
// promises.rename().then().catch(0)

try {
  fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
  console.error(error);
}

fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log(error);
});
console.log('hello');

fs.promises
  .rename('./text2.txt', './text2-new.txt')
  .then(() => console.log('Done'))
  .catch(console.error);
