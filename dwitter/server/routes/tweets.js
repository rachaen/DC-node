import express from 'express';
import 'express-async-errors';
import * as tweetController from '../controller/tweet.js';

const router = express.Router();

router.get('/', tweetController.getTweets);
//router.get('/', tweetController.getTweets()); 호출하면 안 됨! 값이 연결되는 것이 아닌 함수를 연결해 주어야 하기 때문

router.get('/:id', tweetController.getTweet);

router.post('/', tweetController.createTweet);

router.put('/:id', tweetController.updateTweet);

router.delete('/:id', tweetController.deleteTweet);

export default router;
