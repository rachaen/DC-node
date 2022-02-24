import express from 'express';
const app = express();

// 해당 경로에 한해서만 수행
app.all('/api', (req, res, next) => {
  console.log('all');
  next();
});

// 해당 경로 하위의 어떤 곳으로 들어가도 수행 app.all('/api/*',    )이라고 볼 수 있다
app.use('/sky', (req, res, next) => {
  console.log('use');
  next();
});

app.get(
  '/',
  (req, res, next) => {
    console.log('first');
    //next('route'); //다음 것을 스킵!
    //next(new Error('error')); //에러발생시킴
    if (true) {
      return res.send('Hello');
    }
    res.send('chaeeun');
  },
  (res, req, next) => {
    console.log('first2');
    next();
  }
);

app.use((req, res, next) => {
  res.status(404).send('Not avaliable!!!!!');
});
app.get('/', (req, res, next) => {
  console.log('second');
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('Sorry, try later!');
});
app.listen(8080);
