import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.use(express.json());

app.get('/file1', (req, res) => {
  /*   try {
    const data = fs.readFileSync('/file.txt'); //readFileSync 동기!!
  } catch (error) {
    res.status(404).send('File not found');
  } */

  fs.readFile('/file1.txt', (err, data) => {
    if (err) {
      res.status(404).send('File not found');
    }
  }); // 비동기!파일이 다 읽어지면 콜백함수를 호출해줘. error가 던져지는 것이 아닌 callback함수로 error가 전달되었기 때문에 외부에서는 에러가 발생했는지 알 수 없다
});

app.get('/file2', (req, res, next) => {
  fsAsync
    .readFile('/file.txt')
    .catch((error) => res.status(404).send('File not found'));
  //.catch(next);  //모든 promise는 직접 error를 catch해서 던져주거나(next이용) 직접 error를 처리해주어야 함
});

app.get('/file3', async (req, res) => {
  //const data = await fsAsync.readFile('/file.txt'); // await를 했기 때문에 동기. 하지만 use에는 포착되지 않음. async때문에 미들웨어 자체는 promise를 리턴하기 때문에
  try {
    const data = await fsAsync.readFile('/file.txt');
  } catch (error) {
    res.status(404).send('File not found');
  }
});
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080);

// 각각의 미들웨어에서 에러가 발생했을 때 적절한 메세지를 사용자에게 보내주어야 한다
// 동기적 비동기적으로 처리하는 방법이 다르다
// 동기적 코드는 실수로 error처리를 하지 않으면 안전망 에러처리 미들웨어에의해 에러가 처리가 되지만
// 비동기적인 경우에는 외부에서 error를 감지하는 방법이 없으므로 안전망이 소용이 없다.
