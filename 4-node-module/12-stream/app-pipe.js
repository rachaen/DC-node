const fs = require('fs'); // 파일시스템
const zlib = require('zlib'); //압축

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./file4.zip');
// 읽어온 데이터를 연결하는 것 stream과 stream을 연결해서 물처럼 흘러가게!
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on('finish', () => {
  console.log('done!!');
});

const http = require('http');
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('./file.txt');
  stream.pipe(res);
});

server.listen(3000);
