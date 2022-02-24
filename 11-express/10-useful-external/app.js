import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan'; // 사용자에게 요청을 받을 때마다 어떤 요청을 받았는지 얼마나 걸렸는지 로그로 남기는 것
import helmet from 'helmet'; // 보안에 필요한 헤더들을 추가해준다

const app = express();

const corsOption = {
  origin: ['http://127.0.0.1:5500'],
  optionsSuccessStatus: 200,
  credientials: true,
};

app.use(express.json());
app.use(cookieParser());
//app.use(morgan('combined'));
app.use(morgan('tiny'));
app.use(cors(corsOption));
app.use(helmet());

app.get('/', (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  res.send('Welcome!');
});

app.listen(8080);
