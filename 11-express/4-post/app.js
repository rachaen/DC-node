import express from 'express';
const app = express();

app.use(express.json()); // 요청이 들어오는 body부분을 자동으로 parsing해서 우리에게 보여줌
app.post('/', (req, res, next) => {
  console.log(req.body);
});

app.listen(8080);
