import express from 'express';

const app = express();

// express.json -> REST API에서 body를 parse할 때 사용
// express.urlencoded({extended: false}) -> body를 parsing할 때 사용 HTML form이라는 ui요소에서 summit을 하게 되면 request가 자동발생. 그 때 전달된 html에서 만든 데이터를 body안으로 자동으로 파싱해 줌
// express.static
//app.use(express.static('public')); =>public안에 있는 모든 리소스에 접근 가능!

app.use(express.json());
app.post('/posts', (req, res) => {
  console.log(req.body);
  res.status(201).send('Thanks, Created');
});

const options = {
  dotfiles: 'ignore', //숨겨진 파일은 무시
  etag: false,
  index: false,
  maxAge: '1d', // 얼마나 오랫동안 캐시가 가능한 지
  redirect: false,
  setHeaders: function (res, path, start) {
    res.set('x-timestamp', Date.now()); //필요한 데이터 해더에 추가해서 보냄
  },
};

app.use(express.static('public', options));
app.listen(8080);
