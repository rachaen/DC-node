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

export function getAll() {
  return tweets;
}

export function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export function getById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets]; // 만든 트윗을 제일 앞에 넣어주고 기존에 있는 트윗의 아이템들을 추가적으로 넣어줌
  return tweet;
}

export function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id); //삭제하는 거 빼고 배열을 다시 만든다
}
