export default class TweetService {
  //외부로부터 baseURL을 가져온다
  constructor(http) {
    this.http = http;
    //this.http = 'http://localhost:8080';
  }
  async getTweets(username) {
    const query = username ? `?username=${username}` : '';
    return this.http.fetch(`/tweets${query}`, {
      method: 'GET',
    });
  }

  // 프로미스 형태로 데이터를 리턴하고 fetch안에서 성공한코드가 아닌 경우엔 에러를 던지기 때문에 에러를 reject하는 프로미스
  async postTweet(text) {
    return this.http.fetch(`/tweets`, {
      method: 'POST',
      body: JSON.stringify({ text, username: 'ellie', name: 'Ellie' }),
    });
  }

  async deleteTweet(tweetId) {
    return this.http.fetch(`/tweets/${tweetId}`, {
      method: 'DELETE',
    });
  }

  async updateTweet(tweetId, text) {
    return this.http.fetch(`/tweets/${tweetId}`, {
      method: 'PUT',
      body: JSON.stringify({ text }),
    });
  }
}
