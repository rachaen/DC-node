import express from 'express';
import cors from 'cors';

const app = express();

// cors설치 전
/* 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, DELETE'
  );
  next();
}); */

//cors 설치 후
app.use(
  cors({
    origin: ['http://127.0.0.1:5500'],
    optionsSuccessStatus: 200, // 200으로 응답하도록
    credientials: true, //헤더에 토큰이나 사용자의 정보를 추가 허용 = Access-Control-Allow-Credentials: true
  })
);

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(8080);
