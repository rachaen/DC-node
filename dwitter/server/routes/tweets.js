import express from 'express';
import 'express-async-errors';
import * as tweetRepository from '../data/tweet.js';

const router = express.Router();

router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweetRepository.getAllByUsername(username)
    : tweetRepository.getAll();
  res.status(200).json(data);
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const tweet = tweetRepository.getById(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

router.post('/', (req, res) => {
  // 바디를 받아와야 한다.
  const { text, name, username } = req.body;
  const tweet = tweetRepository.create(text, name, username);
  res.status(201).json(tweet); // 사용자에게 추가한 데이터를 보내주기
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweetRepository.update(id, text);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  tweetRepository.remove(id);
  res.sendStatus(204); // 정상적으로 삭제했고 리소스에 대한 컨텐츠는 없다!
});

export default router;
