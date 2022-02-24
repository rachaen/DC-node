import express from 'express';
import 'express-async-errors';

let tweets = [
  {
    id: '1',
    text: '이채은 화이팅!',
    createAt: Date.now.toString(),
    name: 'Bob',
    username: 'bob',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
  {
    id: '2',
    text: '이채은 화이팅! 화이팅!',
    createAt: Date.now.toString(),
    name: 'Rachel',
    username: 'rachel',
  },
];
const router = express.Router();

router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((tweet) => tweet.username === username)
    : tweets;
  res.status(200).json(data);
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

router.post('/', (req, res) => {
  // 바디를 받아와야 한다.
  const { text, name, username } = req.body;
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets]; // 만든 트윗을 제일 앞에 넣어주고 기존에 있는 트윗의 아이템들을 추가적으로 넣어줌
  res.status(201).json(tweet); // 사용자에게 추가한 데이터를 보내주기
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((tweet) => tweet.id !== id); //삭제하는 거 빼고 배열을 다시 만든다
  res.sendStatus(204); // 정상적으로 삭제했고 리소스에 대한 컨텐츠는 없다!
});

export default router;
