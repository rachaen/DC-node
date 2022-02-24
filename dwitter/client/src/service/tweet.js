export default class TweetService {
  //외부로부터 baseURL을 가져온다
  constructor(baseURL) {
    this.baseURL = 'http://localhost:8080';
  }
  async getTweets(username) {
    const query = username ? `?username=${username}` : '';
    const response = await fetch(`${this.baseURL}/tweets${query}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }, //content-type 보내는 사람이 어떤 타입의 데이터를 보내는지 명시
    });
    const data = await response.json(); // 받아온 데이터를 json으로 변환해준다
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    return data;
  }

  async postTweet(text) {
    const response = await fetch(`${this.baseURL}/tweets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, username: 'ellie', name: 'Ellie' }),
    });
    const data = await response.json();
    // 새로 만들어진 것을 의미하는 201이 아니면 에러가 발생한 것
    if (response.status !== 201) {
      throw new Error(data.message);
    }

    return data;
  }

  async deleteTweet(tweetId) {
    const response = await fetch(`${this.baseURL}/tweets/${tweetId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    //const data = await response.json() delete는 따로 데이터를 받지 않기 때문에 필요가 없다.
    if (response.status !== 204) {
      throw new Error();
    }
  }

  async updateTweet(tweetId, text) {
    const response = await fetch(`${this.baseURL}/tweets/${tweetId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'appication/json' },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }

    return data;
  }
}
